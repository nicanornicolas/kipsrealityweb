import { NextResponse } from "next/server";
import { notarizeDocument } from "@rentflow/dss";
import { requireRole } from "@rentflow/iam";

export async function POST(req: Request) {
    try {
        // 1. Auth Check (Admins/Managers Only)
        const authError = await requireRole(["PROPERTY_MANAGER", "SYSTEM_ADMIN"], req);
        if (authError) return authError;

        // 2. Parse ID
        const body = await req.json();
        const { documentId } = body;

        if (!documentId) {
            return NextResponse.json({ error: "documentId is required" }, { status: 400 });
        }

        // 3. Execute Notarization
        const record = await notarizeDocument(documentId);

        return NextResponse.json({
            success: true,
            data: record
        });

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal Server Error";
        console.error("[API] Notarize Error:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
