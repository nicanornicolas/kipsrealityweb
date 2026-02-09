import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAccessToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { sendTenantInviteEmail } from "@/lib/mail-service";

type TokenPayload = {
  userId: string;
  role: string;
  organizationId: string;
};

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // --- 1. Verify token ---
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    let payload: TokenPayload;
    try {
      payload = verifyAccessToken(token) as TokenPayload;
    } catch (err) {
      console.error("Token verification failed:", err);
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    if (!["PROPERTY_MANAGER", "SYSTEM_ADMIN"].includes(payload.role)) {
      return NextResponse.json(
        { error: "Only property managers or admins can resend invites" },
        { status: 403 }
      );
    }

    const params = await context.params;
    const inviteId = params.id;

    // --- 2. Find the invite ---
    const invite = await prisma.invite.findUnique({
      where: {
        id: inviteId,
        organizationId: payload.organizationId,
        role: "TENANT"
      },
      include: {
        lease: {
          include: {
            unit: { include: { property: true } },
            tenant: true
          }
        },
        invitedBy: true
      }
    });

    if (!invite) {
      return NextResponse.json({ error: "Invite not found" }, { status: 404 });
    }

    if (invite.accepted) {
      return NextResponse.json({ error: "Invite already accepted" }, { status: 400 });
    }

    // Check if invite has expired
    if (invite.expiresAt < new Date()) {
      return NextResponse.json({ error: "Invite has expired" }, { status: 400 });
    }

    // --- 3. Find the tenant user ---
    const tenantUser = await prisma.user.findFirst({
      where: {
        email: invite.email,
        organizationUsers: {
          some: {
            organizationId: payload.organizationId,
            role: "TENANT"
          }
        }
      }
    });

    if (!tenantUser) {
      return NextResponse.json({ error: "Tenant user not found" }, { status: 404 });
    }

    // --- 4. Send email ---
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const inviteLink = `${baseUrl}/invite/tenant/accept?token=${invite.token}&email=${encodeURIComponent(invite.email)}&leaseId=${invite.leaseId}`;

      const propertyName = invite.lease?.unit?.property?.name || "Unknown Property";
      const unitNumber = invite.lease?.unit?.unitNumber || "N/A";
      
      let landlordName = "Property Manager";
      if (invite.invitedBy) {
        landlordName = `${invite.invitedBy.firstName || ""} ${invite.invitedBy.lastName || ""}`.trim() || "Property Manager";
      }

      const hasLandlordSigned = !!invite.lease?.landlordSignedAt;

      await sendTenantInviteEmail(
        invite.email,
        tenantUser.firstName || invite.email.split('@')[0],
        propertyName,
        unitNumber,
        landlordName,
        inviteLink,
        hasLandlordSigned
      );
    } catch (emailError) {
      console.error("Failed to send tenant invite email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    // --- 5. Update last sent timestamp (optional, could add a field to invite model) ---
    // For now, we'll just return success

    return NextResponse.json({
      success: true,
      message: "Invite resent successfully",
      invite: {
        id: invite.id,
        email: invite.email,
        leaseId: invite.leaseId,
        resentAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error("Resend invite error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}