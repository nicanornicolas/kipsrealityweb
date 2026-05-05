'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export interface DssFieldData {
  id: string;
  type: string;
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
  participantId: string;
  value?: string;
}

interface PdfViewerProps {
  url: string;
  fields?: DssFieldData[];
  onFieldClick?: (field: DssFieldData) => void;
}

export default function PdfViewer({
  url,
  fields = [],
  onFieldClick,
}: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(600);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [pageHeight, setPageHeight] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  useEffect(() => {
    const updateWidth = () => {
      const viewportWidth = window.innerWidth;
      const containerWidth = wrapperRef.current?.clientWidth || viewportWidth;
      setPageWidth(
        Math.max(280, Math.min(900, Math.floor(containerWidth - 16))),
      );
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const currentPageFields = fields.filter(
    (f) => f.pageNumber === pageNumber && f.type === 'SIGNATURE',
  );

  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 border border-gray-300 min-h-[500px]">
      <div
        ref={wrapperRef}
        className="relative shadow-lg mb-4 max-w-full overflow-auto"
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10 h-[600px] w-full">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-500">Loading Contract...</span>
          </div>
        )}

        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={null}
          className="border"
        >
          <div className="relative bg-white">
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={pageWidth}
              className="bg-white"
              onLoadSuccess={(page) => {
                const viewport = page.getViewport({ scale: 1 });
                setPageHeight(viewport.height);
              }}
            />
            {currentPageFields.map((field) => {
              const style: React.CSSProperties = {
                position: 'absolute',
                left: `${(field.x / 100) * pageWidth}px`,
                top: `${(field.y / 100) * (pageHeight || 600)}px`,
                width: `${(field.width / 100) * pageWidth}px`,
                height: `${(field.height / 100) * (pageHeight || 600)}px`,
              };
              return (
                <div
                  key={field.id}
                  style={style}
                  onClick={() => onFieldClick?.(field)}
                  className="bg-yellow-200 bg-opacity-60 border-2 border-yellow-400 rounded cursor-pointer hover:bg-opacity-80 transition-all animate-pulse hover:animate-none flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-yellow-800 text-center px-1 select-none">
                    Sign Here
                  </span>
                </div>
              );
            })}
          </div>
        </Document>
      </div>

      {/* 3. Navigation Controls */}
      {numPages > 0 && (
        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm border">
          <button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
            title="Previous page"
            className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          <span className="text-sm font-medium">
            Page {pageNumber} of {numPages}
          </span>

          <button
            onClick={() =>
              setPageNumber((prev) => Math.min(prev + 1, numPages))
            }
            disabled={pageNumber >= numPages}
            aria-label="Next page"
            title="Next page"
            className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
