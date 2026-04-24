'use client';

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Loader2,
  PenTool,
  CheckCircle,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import type { DssFieldData } from '@/components/dss/PdfViewer';

const PdfViewer = dynamic(() => import('@/components/dss/PdfViewer'), {
  ssr: false,
});

export default function SigningRoomPage() {
  const params = useParams();
  const documentId = params?.id as string;

  const [docData, setDocData] = useState<any>(null);
  const [viewUrl, setViewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [signing, setSigning] = useState(false);
  const [signatureMode, setSignatureMode] = useState<'draw' | 'tap'>('draw');
  const [signatureData, setSignatureData] = useState<string>('');
  const [activeField, setActiveField] = useState<DssFieldData | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const signatureSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!documentId) return;

    async function fetchData() {
      try {
        const res = await fetch(`/api/dss/documents/${documentId}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Failed to load');

        setDocData(data);

        const viewRes = await fetch(`/api/dss/documents/${documentId}/view`);
        const viewData = await viewRes.json();
        if (viewRes.ok) {
          setViewUrl(viewData.document?.viewUrl || null);
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [documentId]);

  const getDeviceFingerprint = () => {
    const rawFingerprint = [
      navigator.userAgent,
      navigator.language,
      navigator.platform,
      Intl.DateTimeFormat().resolvedOptions().timeZone,
      window.screen.width,
      window.screen.height,
      window.devicePixelRatio,
    ].join('|');

    return btoa(unescape(encodeURIComponent(rawFingerprint))).slice(0, 120);
  };

  const handleSign = async () => {
    setSigning(true);
    try {
      const payload =
        signatureMode === 'draw'
          ? {
              documentId,
              signatureData: signatureData || 'Signed via RentFlow360 Canvas',
            }
          : {
              documentId,
              signatureMode: 'tap_to_agree',
              agreementMetadata: {
                timestamp: new Date().toISOString(),
                deviceFingerprint: getDeviceFingerprint(),
              },
            };

      const res = await fetch('/api/dss/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error);

      toast.success('Signed successfully!');

      setDocData((prev: any) => ({
        ...prev,
        canSign: false,
        document: {
          ...prev.document,
        },
      }));

      window.location.reload();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setSigning(false);
    }
  };

  const handleFieldClick = (field: DssFieldData) => {
    if (!docData?.canSign) return;
    setActiveField(field);
    setSignatureMode('draw');
    signatureSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    toast.info('Click "Sign Now" to sign at the highlighted field');
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600 w-8 h-8" />
      </div>
    );
  if (!docData)
    return <div className="p-10 text-center">Document not found</div>;

  const { document: signingDocument, canSign } = docData;

  const myParticipant = signingDocument.participants?.find(
    (p: any) => p.email === docData?.user?.email,
  );

  const myFields = (signingDocument.fields || []).filter(
    (f: DssFieldData) =>
      f.participantId === myParticipant?.id && f.type === 'SIGNATURE',
  );

  const beginStroke = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const context = canvasRef.current.getContext('2d');
    if (!context) return;

    event.preventDefault();
    canvasRef.current.setPointerCapture(event.pointerId);
    drawingRef.current = true;
    window.document.body.style.overflow = 'hidden';

    const rect = canvasRef.current.getBoundingClientRect();
    context.beginPath();
    context.moveTo(event.clientX - rect.left, event.clientY - rect.top);
  };

  const drawStroke = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current || !canvasRef.current) return;
    const context = canvasRef.current.getContext('2d');
    if (!context) return;

    event.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    context.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    context.strokeStyle = '#0f172a';
    context.lineWidth = 2.2;
    context.lineCap = 'round';
    context.stroke();
    setSignatureData(canvasRef.current.toDataURL('image/png'));
  };

  const endStroke = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    event.preventDefault();
    drawingRef.current = false;
    window.document.body.style.overflow = '';
    setSignatureData(canvasRef.current.toDataURL('image/png'));
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const context = canvasRef.current.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setSignatureData('');
  };

  return (
    <div className="container mx-auto py-8 max-w-5xl px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white p-6 rounded-xl border shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {signingDocument.title}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`text-xs px-2 py-1 rounded-full font-medium ${
                signingDocument.status === 'COMPLETED'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-blue-100 text-blue-700'
              }`}
            >
              {signingDocument.status}
            </span>
            <span className="text-gray-500 text-sm">
              • Step {signingDocument.currentStep}
            </span>
          </div>
        </div>

        {canSign ? (
          <Button
            onClick={handleSign}
            disabled={signing || (signatureMode === 'draw' && !signatureData)}
            size="lg"
            className="bg-green-600 hover:bg-green-700 w-full md:w-auto"
          >
            {signing ? (
              <Loader2 className="animate-spin mr-2" />
            ) : (
              <PenTool className="mr-2 w-5 h-5" />
            )}
            {signatureMode === 'tap' ? 'Tap to Agree' : 'Sign Now'}
          </Button>
        ) : (
          <Button
            disabled
            variant="outline"
            size="lg"
            className="w-full md:w-auto"
          >
            {signingDocument.status === 'COMPLETED' ? (
              <>
                <CheckCircle className="mr-2 w-5 h-5 text-green-500" /> Document
                Completed
              </>
            ) : (
              <>
                <Clock className="mr-2 w-5 h-5" /> Waiting for others
              </>
            )}
          </Button>
        )}
      </div>

      {canSign && myFields.length > 0 && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
          <strong>Signature fields detected:</strong> Click on a yellow box in
          the document to highlight it, then sign below.
        </div>
      )}

      {canSign && (
        <div
          ref={signatureSectionRef}
          className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSignatureMode('draw')}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                signatureMode === 'draw'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Draw Signature
            </button>
            <button
              type="button"
              onClick={() => setSignatureMode('tap')}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                signatureMode === 'tap'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tap to Agree
            </button>
            {activeField && (
              <span className="ml-auto text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded">
                Signing at highlighted field
              </span>
            )}
          </div>

          {signatureMode === 'draw' ? (
            <div className="space-y-2">
              <p className="text-xs text-slate-600">
                Draw with your finger or stylus. Page scrolling is locked while
                drawing.
              </p>
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <canvas
                  ref={canvasRef}
                  width={900}
                  height={220}
                  className="h-[220px] w-full touch-none"
                  onPointerDown={beginStroke}
                  onPointerMove={drawStroke}
                  onPointerUp={endStroke}
                  onPointerCancel={endStroke}
                />
              </div>
              <button
                type="button"
                onClick={clearCanvas}
                className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Clear Signature
              </button>
            </div>
          ) : (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="h-4 w-4" />
                Legally Binding Tap-to-Agree Enabled
              </div>
              <p className="mt-1 text-xs">
                We capture your timestamp, IP address, and device fingerprint as
                audit metadata.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {viewUrl || signingDocument.originalFileUrl ? (
            <PdfViewer
              url={viewUrl || signingDocument.originalFileUrl}
              fields={myFields}
              onFieldClick={handleFieldClick}
            />
          ) : (
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
              No document file available
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm h-fit">
          <h3 className="font-semibold text-gray-900 mb-4">Signers</h3>
          <div className="space-y-4">
            {signingDocument.participants.map((p: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      p.status === 'SIGNED'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {p.name || p.email}
                    </p>
                    <p className="text-xs text-gray-500 uppercase">{p.role}</p>
                  </div>
                </div>
                {p.status === 'SIGNED' && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
