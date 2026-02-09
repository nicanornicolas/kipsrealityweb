// app/api/lease/[id]/sign/[role]/route.ts
// ⚠️ IMPORTANT: This file MUST be at app/api/lease/[id]/sign/[role]/route.ts
// The folder name MUST be [role] not "tenant" or "landlord"

import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { leaseListingIntegration } from "@/lib/lease-listing-integration";
import { sendTenantInviteEmail } from "@/lib/mail-service";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string; role: string }> }
) {
  try {
    // Await and destructure params
    const params = await context.params;
    const leaseId = params.id;
    const role = params.role;
    
    console.log("📝 Route params extracted:", { leaseId, role });
    
    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log("📦 Request body:", body);
    } catch (e) {
      console.error("Failed to parse body:", e);
      body = {};
    }

    // Fetch lease upfront
    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: { 
        tenant: true, 
        property: { 
          include: { 
            manager: {
              include: {
                user: true
              }
            }
          } 
        }, 
        unit: { 
          include: { 
            property: true 
          } 
        } 
      },
    });

    if (!lease) {
      console.error("❌ Lease not found:", leaseId);
      return NextResponse.json({ error: "Lease not found" }, { status: 404 });
    }

    console.log("✅ Lease found:", {
      id: lease.id,
      tenantSigned: !!lease.tenantSignedAt,
      landlordSigned: !!lease.landlordSignedAt,
      leaseStatus: lease.leaseStatus
    });

    const previousStatus = lease.leaseStatus;

    // === TENANT SIGNING (may be unauthenticated) ===
    if (role === "tenant") {
      const { token } = body;
      
      if (!token) {
        console.error("❌ Missing token in request body");
        return NextResponse.json(
          { error: "Missing invite token for tenant signing" }, 
          { status: 400 }
        );
      }

      console.log("🔍 Validating invite token...");

      // Validate invite token
      const invite = await prisma.invite.findUnique({ 
        where: { token },
        include: { lease: true }
      });

      if (!invite) {
        console.error("❌ Invite token not found:", token);
        return NextResponse.json(
          { error: "Invalid invite token" }, 
          { status: 403 }
        );
      }

      console.log("📋 Invite found:", {
        inviteId: invite.id,
        inviteLeaseId: invite.leaseId,
        requestedLeaseId: leaseId,
        matches: invite.leaseId === leaseId
      });

      if (invite.leaseId !== leaseId) {
        console.error("❌ Invite lease mismatch:", {
          inviteLeaseId: invite.leaseId,
          requestedLeaseId: leaseId
        });
        return NextResponse.json(
          { error: "Invite token does not match this lease" }, 
          { status: 403 }
        );
      }

      // Check if already signed
      if (lease.tenantSignedAt) {
        console.log("ℹ️ Tenant has already signed");
        return NextResponse.json({ 
          message: "Tenant has already signed", 
          lease 
        });
      }

      // Sign the lease
      console.log("✍️ Signing lease as tenant...");
      const newStatus = lease.landlordSignedAt ? "SIGNED" : "DRAFT";
      const updated = await prisma.lease.update({
        where: { id: leaseId },
        data: {
          tenantSignedAt: new Date(),
          leaseStatus: newStatus,
        },
        include: { 
          tenant: true, 
          property: { 
            include: { 
              manager: {
                include: {
                  user: true
                }
              }
            } 
          }, 
          unit: { 
            include: { 
              property: true 
            } 
          } 
        },
      });

      console.log("✅ Tenant signed lease successfully. New status:", updated.leaseStatus);

      // Handle listing integration if status changed to SIGNED
      if (newStatus === "SIGNED" && previousStatus !== "SIGNED") {
        try {
          await leaseListingIntegration.handleLeaseStatusChange(
            leaseId,
            newStatus,
            previousStatus,
            'tenant' // Use tenant as userId for tenant signing
          );
        } catch (integrationError) {
          console.error('Lease-listing integration error:', integrationError);
          // Don't fail the request if integration fails
        }
      }

      return NextResponse.json({ 
        message: "Lease signed by tenant", 
        lease: updated 
      });
    }

    // === LANDLORD SIGNING (requires authentication) ===
    if (role === "landlord") {
      console.log("🏠 Landlord signing - checking authentication...");
      
      let user;
      
      try {
        user = await getCurrentUser(req);
      } catch (error) {
        console.error("❌ Authentication failed:", error);
        return NextResponse.json(
          { error: "Authentication required for landlord signing" }, 
          { status: 401 }
        );
      }

      if (!user) {
        console.error("❌ No user found after authentication");
        return NextResponse.json(
          { error: "Unauthorized - no user found" }, 
          { status: 401 }
        );
      }

      console.log("👤 User authenticated:", {
        userId: user.id,
        orgUserId: user.organizationUserId,
        propertyManagerId: lease.property?.managerId
      });

      // Verify landlord owns this property
      if (lease.property?.managerId !== user.organizationUserId) {
        console.error("❌ User not authorized for this property");
        return NextResponse.json(
          { error: "You are not authorized to sign this lease" }, 
          { status: 403 }
        );
      }

      // Check if already signed
      if (lease.landlordSignedAt) {
        console.log("ℹ️ Landlord has already signed");
        return NextResponse.json({ 
          message: "Landlord has already signed", 
          lease 
        });
      }

      // Sign the lease
      console.log("✍️ Signing lease as landlord...");
      const newStatus = lease.tenantSignedAt ? "SIGNED" : "DRAFT";
      const updated = await prisma.lease.update({
        where: { id: leaseId },
        data: {
          landlordSignedAt: new Date(),
          leaseStatus: newStatus,
        },
        include: { 
          tenant: true, 
          property: { 
            include: { 
              manager: {
                include: {
                  user: true
                }
              }
            } 
          }, 
          unit: { 
            include: { 
              property: true 
            } 
          } 
        },
      });

      console.log("✅ Landlord signed lease successfully. New status:", updated.leaseStatus);

      // Handle listing integration if status changed to SIGNED
      if (newStatus === "SIGNED" && previousStatus !== "SIGNED") {
        try {
          await leaseListingIntegration.handleLeaseStatusChange(
            leaseId,
            newStatus,
            previousStatus,
            user.id
          );
        } catch (integrationError) {
          console.error('Lease-listing integration error:', integrationError);
          // Don't fail the request if integration fails
        }
      }

      // === SEND TENANT INVITE EMAIL IF TENANT HASN'T SIGNED YET ===
      if (!lease.tenantSignedAt && updated.tenant?.email) {
        try {
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
          const invite = await prisma.invite.findFirst({
            where: {
              leaseId: leaseId,
              email: updated.tenant.email.toLowerCase(),
              accepted: false,
            },
            orderBy: { createdAt: 'desc' },
          });

          if (invite) {
            const propertyName = updated.unit?.property?.name || "Unknown Property";
            const unitNumber = updated.unit?.unitNumber || "N/A";
            
            // Get landlord user details from manager relationship
            let landlordName = "Property Manager";
            if (lease.property?.manager?.user) {
              const user = lease.property.manager.user;
              landlordName = `${user.firstName || ""} ${user.lastName || ""}`.trim() || "Property Manager";
            }
            
            const inviteLink = `${baseUrl}/invite/tenant/accept?token=${invite.token}&email=${encodeURIComponent(updated.tenant.email)}&leaseId=${leaseId}`;

            console.log("📧 Sending tenant invite email after landlord signature...");
            await sendTenantInviteEmail(
              updated.tenant.email,
              updated.tenant.firstName || "Tenant",
              propertyName,
              unitNumber,
              landlordName,
              inviteLink,
              true // hasLandlordSigned = true
            );
            console.log("✅ Tenant invite email sent after landlord signature");
          } else {
            console.log("ℹ️ No active invite found for tenant, skipping email");
          }
        } catch (emailError) {
          console.error("❌ Failed to send tenant invite email after landlord signing:", emailError);
          // Don't fail the request if email fails
        }
      }

      return NextResponse.json({ 
        message: "Lease signed by landlord", 
        lease: updated 
      });
    }

    console.error("❌ Invalid role provided:", role);
    return NextResponse.json(
      { error: `Invalid role: '${role}'. Must be 'tenant' or 'landlord'` }, 
      { status: 400 }
    );

  } catch (error) {
    console.error("💥 Sign lease error:", error);
    return NextResponse.json(
      { 
        error: "Failed to sign lease", 
        details: error instanceof Error ? error.message : "Unknown error" 
      }, 
      { status: 500 }
    );
  }
}