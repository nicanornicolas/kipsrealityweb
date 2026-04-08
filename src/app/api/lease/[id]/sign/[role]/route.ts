// app/api/lease/[id]/sign/[role]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@rentflow/iam";
import { LeaseSigningError, leaseSigningService } from "@rentflow/lease";
import { sendTenantInviteEmail } from "@/lib/mail-service";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string; role: string }> }
) {
  try {
    const { id: leaseId, role } = await context.params;

    let body: Record<string, unknown> = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    if (role === "tenant") {
      const token = body.token as string | undefined;
      const result = await leaseSigningService.signAsTenant({
        leaseId,
        token: token || "",
      });
      return NextResponse.json(result);
    }

    if (role === "landlord") {
      const user = await getCurrentUser(req);
      if (!user) {
        return NextResponse.json(
          { error: "Authentication required for landlord signing" },
          { status: 401 }
        );
      }

      const result = await leaseSigningService.signAsLandlord({
        leaseId,
        userId: user.id,
        organizationUserId: user.organizationUserId,
      });

      if (result.tenantInviteEmailContext) {
        try {
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
          const inviteLink = `${baseUrl}/invite/tenant/accept?token=${result.tenantInviteEmailContext.token}&email=${encodeURIComponent(result.tenantInviteEmailContext.email)}&leaseId=${result.tenantInviteEmailContext.leaseId}`;

          await sendTenantInviteEmail(
            result.tenantInviteEmailContext.email,
            result.tenantInviteEmailContext.firstName,
            result.tenantInviteEmailContext.propertyName,
            result.tenantInviteEmailContext.unitNumber,
            result.tenantInviteEmailContext.landlordName,
            inviteLink,
            true
          );
        } catch (emailError) {
          console.error("Failed to send tenant invite email after landlord signing:", emailError);
        }
      }

      return NextResponse.json({ message: result.message, lease: result.lease });
    }

    return NextResponse.json(
      { error: `Invalid role: '${role}'. Must be 'tenant' or 'landlord'` },
      { status: 400 }
    );
  } catch (error) {
    if (error instanceof LeaseSigningError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status }
      );
    }

    console.error("Sign lease error:", error);
    return NextResponse.json(
      {
        error: "Failed to sign lease",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
