"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/lib/api-client";
import { SignatureModal } from "@/components/dss/SignatureModal";

if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

type SignField = {
  id: string;
  participantId: string;
  type: "SIGNATURE" | "DATE" | "INITIALS" | "TEXT";
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

type SigningDoc = {
  id: string;
  title: string;
  status: string;
  currentStep?: number;
  originalFileUrl?: string | null;
};

export default function TenantSigningPage() {
  const params = useParams();
  const documentId = params?.id as string;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState<SignField | null>(null);

  const [documentData, setDocumentData] = useState<SigningDoc | null>(null);
  const [viewUrl, setViewUrl] = useState<string | null>(null);
  const [fields, setFields] = useState<SignField[]>([]);

  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageDimensions, setPageDimensions] = useState({ width: 720, height: 980 });

  const loadSigningData = useCallback(async () => {
    if (!documentId) return;

    setLoading(true);
    try {
      const [docRes, viewRes, fieldsRes] = await Promise.all([
        api.get<{ document: SigningDoc; canSign: boolean; error?: string }>(`/api/dss/documents/${documentId}`),
        api.get<{ document?: { viewUrl?: string; originalFileUrl?: string }; error?: string }>(`/api/dss/documents/${documentId}/view`),
        api.get<{ fields?: SignField[]; error?: string }>(`/api/dss/documents/${documentId}/fields`),
      ]);

      if (docRes.error || !docRes.data?.document) {
        throw new Error(docRes.data?.error || docRes.error || "Unable to load document");
      }

      if (fieldsRes.error) {
        throw new Error(fieldsRes.data?.error || fieldsRes.error || "Unable to load sign targets");
      }

      setDocumentData(docRes.data.document);
      setViewUrl(viewRes.data?.document?.viewUrl || viewRes.data?.document?.originalFileUrl || null);
      setFields((fieldsRes.data?.fields || []).filter((field) => field.type === "SIGNATURE" || field.type === "TEXT"));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to load signing room");
    } finally {
      setLoading(false);
    }
  }, [documentId]);

  useEffect(() => {
    void loadSigningData();
  }, [loadSigningData]);

  const currentPageFields = useMemo(
    () => fields.filter((field) => field.pageNumber === currentPage),
    [fields, currentPage],
  );

  const onDocumentLoadSuccess = useCallback(
    ({ numPages, getPage }: { numPages: number; getPage: (pageNumber: number) => Promise<{ getViewport: (options: { scale: number }) => { width: number; height: number } }> }) => {
      setNumPages(numPages);
      getPage(1).then((page) => {
        const { width, height } = page.getViewport({ scale: 1 });
        setPageDimensions({ width: Math.min(width, 720), height: Math.min(height, 980) });
      });
    },
    [],
  );

  const openSignatureModal = (field: SignField) => {
    setSelectedField(field);
    setIsModalOpen(true);
  };

  const handleApplySignature = async (typedName: string) => {
    if (!selectedField || !documentId) return;

    setSubmitting(true);
    try {
      const signatureHash = btoa(unescape(encodeURIComponent(typedName)));
      const response = await api.post<{ success: boolean; error?: string }>(
        `/api/dss/documents/${documentId}/sign`,
        { signatureHash, fieldId: selectedField.id },
      );

      if (response.error || !response.data?.success) {
        throw new Error(response.data?.error || response.error || "Failed to apply signature");
      }

      toast.success("Signature applied");
      setIsModalOpen(false);
      setSelectedField(null);
      await loadSigningData();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to apply signature");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[420px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!documentData) {
    return <div className="p-10 text-center">Document not found</div>;
  }

  if (!viewUrl) {
    return <div className="p-10 text-center">No document preview available</div>;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">{documentData.title}</h1>
        <p className="mt-1 text-sm text-slate-600">
          Tap the pulsing yellow targets to sign your assigned fields.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="mx-auto w-fit rounded-lg bg-white p-3 shadow-sm">
          <div className="relative" style={{ width: pageDimensions.width, height: pageDimensions.height }}>
            <Document
              file={viewUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex h-full items-center justify-center text-slate-500">
                  <Loader2 className="h-6 w-6 animate-spin" />
                </div>
              }
            >
              <Page
                pageNumber={currentPage}
                width={pageDimensions.width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>

            {currentPageFields.map((field) => (
              <button
                key={field.id}
                type="button"
                onClick={() => openSignatureModal(field)}
                className="absolute rounded-md border-2 border-yellow-500 bg-yellow-300/60 shadow-[0_0_0_0_rgba(234,179,8,0.6)] animate-[pulse_1.5s_ease-in-out_infinite]"
                style={{
                  left: `${field.x}%`,
                  top: `${field.y}%`,
                  width: `${Math.max(field.width, 8)}%`,
                  height: `${Math.max(field.height, 4)}%`,
                }}
                aria-label="Sign target"
              />
            ))}
          </div>
        </div>

        {numPages > 1 && (
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage <= 1}
              className="rounded-md border border-slate-300 bg-white p-2 disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-slate-600">
              Page {currentPage} of {numPages}
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(numPages, page + 1))}
              disabled={currentPage >= numPages}
              className="rounded-md border border-slate-300 bg-white p-2 disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <SignatureModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedField(null);
        }}
        onSubmit={handleApplySignature}
        submitting={submitting}
      />
    </div>
  );
}
