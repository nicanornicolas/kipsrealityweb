import { NextResponse } from "next/server";
import { createDocument, DocumentService } from "@rentflow/dss";
import { DssDocumentStatus, DssParticipantRole } from "@prisma/client";
import { enforceFeatureLimit } from "../../../../lib/guards/requireFeature";
import { UsageService } from '@rentflow/payments';
import { getCurrentUser, requireRole } from "@rentflow/iam";

const usageService = new UsageService();
const documentService = new DocumentService();

// GET handler - List all documents for the user's organization
export async function GET(req: Request) {
    const authError = await requireRole(["PROPERTY_MANAGER", "SYSTEM_ADMIN"], req);
    if (authError) return authError;

    try {
        const currentUser = await getCurrentUser(req);
        if (!currentUser?.organizationId) {
            return NextResponse.json(
                { error: "Forbidden - No organization context found. Please contact support." },
                { status: 403 }
            );
        }

        const url = new URL(req.url);
        const requestedStatus = url.searchParams.get("status")?.toUpperCase();

        if (
            requestedStatus &&
            !Object.values(DssDocumentStatus).includes(requestedStatus as DssDocumentStatus)
        ) {
            return NextResponse.json({ error: "Invalid document status filter" }, { status: 400 });
        }

        const documents = await documentService.listDocuments(currentUser.organizationId);
        const filteredDocuments = requestedStatus
            ? documents.filter(
                (doc: any) => String(doc?.status || "").toUpperCase() === requestedStatus
            )
            : documents;

        return NextResponse.json({ success: true, documents: filteredDocuments });
    } catch (error: any) {
        console.error("[DSS Documents GET Error]", error);
        return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const authError = await requireRole(["PROPERTY_MANAGER", "SYSTEM_ADMIN"], req);
    if (authError) return authError;

    try {
        const currentUser = await getCurrentUser(req);
        if (!currentUser?.organizationId) {
            return NextResponse.json(
                { error: "Forbidden - No organization context found. Please contact support." },
                { status: 403 }
            );
        }

        const orgId = currentUser.organizationId;

        // === THE MONETIZATION GATE ===
        // Stops the request immediately if they've hit their tier limit
        const limitError = await enforceFeatureLimit(orgId, 'dss.documents.monthly');
        if (limitError) return limitError;

        // 2. Parse FormData
        const formData = await req.formData();
        const file = formData.get("file");
        const title = formData.get("title");
        const participantsJson = formData.get("participants");

        if (!(file instanceof File) || typeof title !== "string" || typeof participantsJson !== "string") {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (file.type && file.type !== "application/pdf") {
            return NextResponse.json({ error: "Only PDF documents are supported" }, { status: 400 });
        }

        if (!title.trim()) {
            return NextResponse.json({ error: "Document title is required" }, { status: 400 });
        }

        // 3. Convert File to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const fileBuffer = Buffer.from(arrayBuffer);

        // 4. Parse Participants
        let parsedParticipants: unknown;
        try {
            parsedParticipants = JSON.parse(participantsJson);
        } catch {
            return NextResponse.json({ error: "Invalid participants payload" }, { status: 400 });
        }

        if (!Array.isArray(parsedParticipants)) {
            return NextResponse.json({ error: "Participants must be an array" }, { status: 400 });
        }

        const validRoles = new Set(Object.values(DssParticipantRole));
        const rawParticipants = parsedParticipants as Array<any>;
        const participants = parsedParticipants
            .map((p: any) => ({
                email: typeof p?.email === "string" ? p.email.trim() : "",
                name: typeof p?.fullName === "string"
                    ? p.fullName.trim()
                    : typeof p?.name === "string"
                        ? p.name.trim()
                        : "",
                role: typeof p?.role === "string" ? p.role.trim().toUpperCase() : "",
            }))
            .filter((p) => p.email && p.role && validRoles.has(p.role as DssParticipantRole))
            .map((p) => ({
                email: p.email,
                name: p.name || undefined,
                role: p.role as DssParticipantRole,
            }));

        if (rawParticipants.length > 0 && participants.length !== rawParticipants.length) {
            return NextResponse.json({ error: "One or more participants are invalid" }, { status: 400 });
        }

        // 5. Call Service
        const newDoc = await createDocument({
            title: title.trim(),
            organizationId: orgId,
            fileBuffer,
            participants
        });

        // === RECORD USAGE (Only charge them if the DB write succeeded!) ===
        await usageService.recordUsage(orgId, 'dss.documents.monthly', 1);

        return NextResponse.json({ success: true, data: newDoc });

    } catch (error: unknown) {
        console.error("[DSS Upload Error]", error);
        const message = error instanceof Error ? error.message : "Failed to upload document";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

