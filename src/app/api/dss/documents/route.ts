import { NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import { createDocument, DocumentService } from "@rentflow/dss";
import { verifyAccessToken } from "@rentflow/iam";
import { cookies } from "next/headers";
import { DssParticipantRole } from "@prisma/client";
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

        const documents = await documentService.listDocuments(currentUser.organizationId);

        return NextResponse.json({ success: true, documents });
    } catch (error: any) {
        console.error("[DSS Documents GET Error]", error);
        return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        // 1. Auth Check
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        // Authentication check
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        
        const user = verifyAccessToken(token);
        let orgId = user.organizationId;
        
        // If organizationId is not in token, try to get it from the user's organization
        if (!orgId) {
            const userRecord = await prisma.user.findUnique({
                where: { id: user.userId },
                include: { organizationUsers: true }
            });
            
            if (userRecord?.organizationUsers[0]?.organizationId) {
                orgId = userRecord.organizationUsers[0].organizationId;
            }
        }

        // SECURITY: Do not fall back to first organization - fail closed instead
        if (!orgId) {
            return NextResponse.json(
                { error: "Forbidden - No organization context found. Please contact support." },
                { status: 403 }
            );
        }

        // === THE MONETIZATION GATE ===
        // Stops the request immediately if they've hit their tier limit
        const limitError = await enforceFeatureLimit(orgId, 'dss.documents.monthly');
        if (limitError) return limitError;

        // 2. Parse FormData
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const title = formData.get("title") as string;
        const participantsJson = formData.get("participants") as string;

        if (!file || !title || !participantsJson) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 3. Convert File to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const fileBuffer = Buffer.from(arrayBuffer);

        // 4. Parse Participants
        const participants = JSON.parse(participantsJson);

        // 5. Call Service
        const newDoc = await createDocument({
            title,
            organizationId: orgId,
            fileBuffer,
            participants: participants.map((p: { email: string; fullName: string; role: string }) => ({
                email: p.email,
                name: p.fullName,
                role: p.role as DssParticipantRole,
            }))
        });

        // === RECORD USAGE (Only charge them if the DB write succeeded!) ===
        await usageService.recordUsage(orgId, 'dss.documents.monthly', 1);

        return NextResponse.json({ success: true, data: newDoc });

    } catch (error: any) {
        console.error("[DSS Upload Error]", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

