// app/api/auth/invites/accept/route.ts 
// (Note: This logic looks like a generic 'accept' route, not just for tenants)

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, token, password, firstName, lastName, phone, companyName, serviceType } = body;

    if (!email || !token || !password || !firstName) {
      return NextResponse.json(
        { error: "Email, token, password, and first name are required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase();

    // 1️⃣ Find invite by token (Read operation can be outside transaction)
    const invite = await prisma.invite.findUnique({
      where: { token }
    });

    if (!invite) {
      return NextResponse.json({ error: "Invalid or expired invite" }, { status: 400 });
    }

    // 2️⃣ Validate invite
    if (invite.email !== normalizedEmail) {
      return NextResponse.json({ error: "Invite email does not match" }, { status: 400 });
    }

    if (invite.accepted) {
      return NextResponse.json({ error: "Invite already used" }, { status: 400 });
    }

    if (invite.expiresAt < new Date()) {
      return NextResponse.json({ error: "Invite has expired" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // 3️⃣ ATOMIC TRANSACTION with retry logic
    // We use a transaction to ensure User, OrgLink, and Lease updates happen together.
    // If one fails, they all fail. Added timeout and retry for reliability.
    const maxRetries = 3;
    let lastError: Error | null = null;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const user = await prisma.$transaction(async (tx) => {
          let userRecord;

          const existingUser = await tx.user.findUnique({
            where: { email: normalizedEmail }
          });

          // A. Create or Update User
          if (existingUser) {
            // Reactivate/update inactive user
            userRecord = await tx.user.update({
              where: { id: existingUser.id },
              data: {
                passwordHash: hashedPassword,
                firstName,
                lastName,
                phone,
                status: "ACTIVE",
                emailVerified: new Date()
              }
            });
          } else {
            // Create new user
            userRecord = await tx.user.create({
              data: {
                email: normalizedEmail,
                passwordHash: hashedPassword,
                firstName,
                lastName,
                phone,
                status: "ACTIVE",
                emailVerified: new Date()
              }
            });
          }

          // B. Link user to organization
          const orgUser = await tx.organizationUser.findFirst({
            where: {
              userId: userRecord.id,
              organizationId: invite.organizationId
            }
          });

          if (!orgUser) {
            await tx.organizationUser.create({
              data: {
                userId: userRecord.id,
                organizationId: invite.organizationId,
                role: invite.role
              }
            });
          }

          // C. Mark invite as accepted
          await tx.invite.update({
            where: { id: invite.id },
            data: { accepted: true }
          });

          // D. Update lease to link tenant (if tenant invite)
          if (invite.leaseId) {
            await tx.lease.update({
              where: { id: invite.leaseId },
              data: { tenantId: userRecord.id }
            });
          }

          // E. Create Vendor record (if vendor invite)
          if (invite.role === "VENDOR" && companyName && serviceType) {
            await tx.vendor.create({
              data: {
                userId: userRecord.id,
                organizationId: invite.organizationId,
                companyName,
                serviceType,
                phone: phone || null,
                email: normalizedEmail,
                isActive: true
              }
            });
          }

          return userRecord;
        }, {
          maxWait: 5000, // 5 seconds max wait
          timeout: 10000, // 10 seconds timeout
        });

        // Transaction succeeded, return success response
        return NextResponse.json({
          success: true,
          message: invite.role === "VENDOR"
            ? "Vendor account created successfully. You may now log in."
            : "Invite accepted. Tenant account created and linked to lease.",
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone
          }
        });
        
      } catch (error) {
        lastError = error as Error;
        console.error(`Transaction attempt ${attempt} failed:`, error);
        
        // Check if this is a retryable error
        const isRetryable = error instanceof Error && 
          (error.message.includes('Transaction not found') || 
           error.message.includes('P2028') ||
           error.message.includes('timeout') ||
           error.message.includes('connection'));
        
        if (attempt < maxRetries && isRetryable) {
          // Exponential backoff: wait longer after each failure
          const delayMs = 200 * Math.pow(2, attempt - 1);
          console.log(`Retrying in ${delayMs}ms...`);
          await new Promise(resolve => setTimeout(resolve, delayMs));
          continue;
        }
        
        // If not retryable or max retries reached, break and handle error
        break;
      }
    }
    
    // If we reached here, all retries failed
    console.error("All transaction attempts failed:", lastError);
    return NextResponse.json(
      { error: "Failed to process invite. Please try again or contact support." },
      { status: 500 }
    );

  } catch (error) {
    console.error("Accept invite error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}