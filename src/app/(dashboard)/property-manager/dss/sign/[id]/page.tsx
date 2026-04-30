"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { api } from '@/lib/api-client';

// Dynamically import PDF Viewer to avoid "DOMMatrix is not defined" error during SSR
const PdfViewer = dynamic(() => import("@/components/dss/PdfViewer"), { ssr: false });
import { toast } from "sonner";
import { Loader2, PenTool } from "lucide-react";

type SignDocumentView = {
  title: string;
  status: string;
  originalFileUrl?: string | null;
};

export default function SigningRoomPage() {
  const params = useParams();
  const router = useRouter();
  const documentId = params.id as string;

  const [document, setDocument] = useState<SignDocumentView | null>(null);
  const [viewUrl, setViewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [signing, setSigning] = useState(false);
  const [canSign, setCanSign] = useState(false);

  // 1. Fetch Document Status
  useEffect(() => {
    async function fetchDoc() {
      try {
        const res = await api.get<{ document: SignDocumentView; canSign: boolean; error?: string }>(
          `/api/dss/documents/${documentId}`,
        );
        const data = res.data;

        if (res.error || !data?.document) throw new Error(data?.error || res.error || 'Failed to load');

        setDocument(data.document);
        setCanSign(data.canSign);

        const viewRes = await api.get<{ document?: { viewUrl?: string } }>(
          `/api/dss/documents/${documentId}/view`,
        );
        const viewData = viewRes.data;
        if (!viewRes.error) {
          setViewUrl(viewData.document?.viewUrl || null);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load document");
      } finally {
        setLoading(false);
      }
    }
    fetchDoc();
  }, [documentId]);

  // 2. Handle Signing
  const handleSign = async () => {
    setSigning(true);
    try {
      const res = await api.post<{ error?: string }>(
        '/api/dss/sign',
        {
          documentId,
          signatureData: "Signed by Property Manager via Web UI",
        },
      );

      if (res.error) throw new Error(res.data?.error || res.error);

      toast.success("Document Signed Successfully!");
      setCanSign(false);
      router.refresh();

    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : "Signing failed");
    } finally {
      setSigning(false);
    }
  };

  if (loading) return <div className="p-10 flex justify-center"><Loader2 className="animate-spin" /></div>;
  if (!document) return <div className="p-10 text-center">Document not found</div>;

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{document.title}</h1>
          <p className="text-gray-500">Status: <span className="font-semibold text-blue-600">{document.status}</span></p>
        </div>

        {canSign ? (
          <Button onClick={handleSign} disabled={signing} className="bg-green-600 hover:bg-green-700">
            {signing ? <Loader2 className="animate-spin mr-2" /> : <PenTool className="mr-2 w-4 h-4" />}
            Sign Document
          </Button>
        ) : (
          <Button disabled variant="secondary">
            {document.status === "COMPLETED" ? "Signing Completed" : "Waiting for others..."}
          </Button>
        )}
      </div>

      {viewUrl || document.originalFileUrl ? (
        <PdfViewer url={viewUrl || document.originalFileUrl} />
      ) : (
        <div className="bg-gray-100 h-96 flex items-center justify-center rounded text-gray-500">
          File URL not found.
        </div>
      )}
    </div>
  );
}
