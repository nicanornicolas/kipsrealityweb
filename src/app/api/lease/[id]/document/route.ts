import { getCurrentUser } from "@rentflow/iam";
import { LeaseDocumentError, leaseDocumentService } from "@rentflow/lease";
import { NextRequest, NextResponse } from "next/server";

// POST: Upload a lease document
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: leaseId } = await params;

    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const documentTypeStr = formData.get("documentType") as string;
    const description = formData.get("description") as string;
    const document = await leaseDocumentService.uploadDocument({
      leaseId,
      file,
      documentType: documentTypeStr,
      description,
      userId: user.id,
    });

    return NextResponse.json(document, { status: 201 });
  } catch (error: any) {
    if (error instanceof LeaseDocumentError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Document upload error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET: Fetch all documents for a lease
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: leaseId } = await params;

    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const documents = await leaseDocumentService.listDocuments(leaseId);

    return NextResponse.json(documents);
  } catch (error: any) {
    if (error instanceof LeaseDocumentError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Fetch lease documents error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
