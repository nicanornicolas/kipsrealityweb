import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { createDocument } from "@/lib/dss/document-service";
import { verifyAccessToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { DssParticipantRole } from "@prisma/client";

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
            } else {
                // Fallback: Get first organization (for development only)
                console.warn('User has no organizationId, falling back to first organization');
                const firstOrg = await prisma.organization.findFirst();
                if (!firstOrg) {
                    return NextResponse.json({ error: "No organization found" }, { status: 400 });
                }
                orgId = firstOrg.id;
            }
        }

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
            participants: participants.map((p: any) => ({
                email: p.email,
                name: p.fullName,
                role: p.role as DssParticipantRole,
            }))
        });

        return NextResponse.json({ success: true, data: newDoc });

    } catch (error: any) {
        console.error("[DSS Upload Error]", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}