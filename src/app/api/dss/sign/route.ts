import { NextResponse } from "next/server";
import { signDocument } from "@rentflow/dss";
import { verifyAccessToken } from "@rentflow/iam"; // Adjust path if needed
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    // 1. Auth Check
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let user;
    try {
      user = verifyAccessToken(token);
    } catch (err) {
      return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
    }

    // 2. Parse Body
    const body = await req.json();
    const { documentId, signatureData, signatureMode, agreementMetadata } = body;

    if (!documentId) {
      return NextResponse.json({ error: "Missing document ID" }, { status: 400 });
    }

    const inferredIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const normalizedSignatureData =
      signatureMode === "tap_to_agree"
        ? JSON.stringify({
            mode: "tap_to_agree",
            agreedAt: agreementMetadata?.timestamp || new Date().toISOString(),
            ipAddress: inferredIp,
            deviceFingerprint: agreementMetadata?.deviceFingerprint || "unknown",
            source: "tenant_mobile_web",
          })
        : signatureData;

    if (!normalizedSignatureData) {
      return NextResponse.json({ error: "Missing document ID or signature data" }, { status: 400 });
    }

    // 3. Call Service (The "Manager" we built in Phase 2)
    // This handles validation, DB updates, and workflow progression
    const result = await signDocument(documentId, user.email, normalizedSignatureData);

    return NextResponse.json({
      success: true,
      status: result.result.status // "IN_PROGRESS" or "COMPLETED"
    });

  } catch (error: unknown) {
    console.error("[DSS Signing Error]", error);
    // Return explicit error messages (e.g. "Not your turn")
    return NextResponse.json({ error: error instanceof Error ? error.message : "Signing failed" }, { status: 400 });
  }
}
