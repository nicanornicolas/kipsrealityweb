'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  Loader2,
  ChevronLeft,
  ChevronRight,
  MousePointer,
  Calendar,
  Type,
  PenLine,
} from 'lucide-react';
import { useParams } from 'next/navigation';

if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

interface ExistingField {
  id: string;
  participantId: string;
  type: string;
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
  value?: string;
  participant?: {
    fullName: string;
    email: string;
  };
}

interface Participant {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

interface ViewDocumentData {
  id: string;
  title: string;
  viewUrl: string;
  participants: Participant[];
}

type FieldType = 'SIGNATURE' | 'DATE' | 'INITIALS' | 'TEXT';

const FIELD_TOOLS: { type: FieldType; label: string; icon: React.ReactNode }[] =
  [
    {
      type: 'SIGNATURE',
      label: 'Signature',
      icon: <PenLine className="w-4 h-4" />,
    },
    { type: 'DATE', label: 'Date', icon: <Calendar className="w-4 h-4" /> },
    { type: 'INITIALS', label: 'Initials', icon: <Type className="w-4 h-4" /> },
    { type: 'TEXT', label: 'Text', icon: <MousePointer className="w-4 h-4" /> },
  ];

function DraggableFieldTool({
  type,
  label,
  icon,
}: {
  type: FieldType;
  label: string;
  icon: React.ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: `tool-${type}`,
      data: { type, isTool: true },
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg cursor-grab hover:bg-gray-50 hover:border-blue-300 transition-colors"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function DroppablePage({
  pageNumber,
  pdfWidth,
  pdfHeight,
  fields,
  onFieldClick,
  activeField,
}: {
  pageNumber: number;
  pdfWidth: number;
  pdfHeight: number;
  fields: ExistingField[];
  onFieldClick: (field: ExistingField) => void;
  activeField: { type: FieldType; x: number; y: number } | null;
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: `page-${pageNumber}`,
    data: { pageNumber, pdfWidth, pdfHeight },
  });

  const pageFields = fields.filter((f) => f.pageNumber === pageNumber);

  return (
    <div
      ref={setNodeRef}
      className={`relative bg-white shadow-2xl ${isOver ? 'ring-2 ring-blue-400' : ''}`}
      style={{ width: pdfWidth, height: pdfHeight }}
    >
      <Page
        pageNumber={pageNumber}
        width={pdfWidth}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />

      {pageFields.map((field) => {
        const x = (field.x / 100) * pdfWidth;
        const y = (field.y / 100) * pdfHeight;
        const width = (field.width / 100) * pdfWidth;
        const height = (field.height / 100) * pdfHeight;
        const isSelected =
          activeField && activeField.x === field.x && activeField.y === field.y;

        return (
          <div
            key={field.id}
            onClick={() => onFieldClick(field)}
            className={`absolute border-2 cursor-pointer ${
              isSelected
                ? 'border-blue-500 bg-blue-50'
                : 'border-red-400 bg-red-50'
            }`}
            style={{
              left: x,
              top: y,
              width: width,
              height: height,
            }}
          >
            <span className="absolute -top-5 left-0 text-xs bg-red-500 text-white px-1 rounded-t">
              {field.type}
            </span>
          </div>
        );
      })}

      {activeField && (
        <div
          className="absolute border-2 border-dashed border-blue-500 bg-blue-100/50"
          style={{
            left: (activeField.x / 100) * pdfWidth,
            top: (activeField.y / 100) * pdfHeight,
            width: 150,
            height: 40,
          }}
        />
      )}
    </div>
  );
}

export default function DocumentPreparePage() {
  const params = useParams();
  const documentId = params.id as string;

  const [document, setDocument] = useState<ViewDocumentData | null>(null);
  const [fields, setFields] = useState<ExistingField[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfDimensions, setPdfDimensions] = useState({
    width: 600,
    height: 800,
  });
  const [selectedParticipantId, setSelectedParticipantId] = useState<
    string | null
  >(null);
  const [activeField, setActiveField] = useState<{
    type: FieldType;
    x: number;
    y: number;
  } | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const [viewRes, fieldsRes] = await Promise.all([
          fetch(`/api/dss/documents/${documentId}/view`),
          fetch(`/api/dss/documents/${documentId}/fields`),
        ]);

        if (viewRes.ok) {
          const viewData = await viewRes.json();
          setDocument(viewData.document);
          if (viewData.document.participants?.length > 0) {
            setSelectedParticipantId(viewData.document.participants[0].id);
          }
        }

        if (fieldsRes.ok) {
          const fieldsData = await fieldsRes.json();
          setFields(fieldsData.fields || []);
        }
      } catch (error) {
        console.error('Failed to fetch document:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [documentId]);

  const onDocumentLoadSuccess = useCallback(
    ({
      numPages,
      getPage,
    }: {
      numPages: number;
      getPage: (pageNumber: number) => any;
    }) => {
      setNumPages(numPages);
      getPage(1).then((page: any) => {
        const { width, height } = page.getViewport({ scale: 1 });
        setPdfDimensions({
          width: Math.min(width, 800),
          height: Math.min(height, 1000),
        });
      });
    },
    [],
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || !selectedParticipantId) {
      setActiveField(null);
      return;
    }

    const activeData = active.data.current;
    if (!activeData?.isTool) {
      setActiveField(null);
      return;
    }

    const overData = over.data.current;
    if (!overData?.pageNumber) {
      setActiveField(null);
      return;
    }

    const { pageNumber, pdfWidth, pdfHeight } = overData;
    const dropPoint = event.activatorEvent as PointerEvent;
    const x = ((dropPoint.clientX - 50) / pdfWidth) * 100;
    const y = ((dropPoint.clientY - 50) / pdfHeight) * 100;

    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    const newField: Omit<ExistingField, 'id'> = {
      participantId: selectedParticipantId,
      type: activeData.type,
      pageNumber,
      x: clampedX,
      y: clampedY,
      width: 15,
      height: 5,
    };

    setSaving(true);
    try {
      const res = await fetch(`/api/dss/documents/${documentId}/fields`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newField),
      });

      if (res.ok) {
        const data = await res.json();
        setFields([...fields, ...data.fields]);
      }
    } catch (error) {
      console.error('Failed to save field:', error);
    } finally {
      setSaving(false);
      setActiveField(null);
    }
  };

  const handleFieldClick = async (field: ExistingField) => {
    if (window.confirm(`Delete ${field.type} field?`)) {
      try {
        const res = await fetch(
          `/api/dss/documents/${documentId}/fields?fieldId=${field.id}`,
          {
            method: 'DELETE',
          },
        );

        if (res.ok) {
          setFields(fields.filter((f) => f.id !== field.id));
        }
      } catch (error) {
        console.error('Failed to delete field:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!document) {
    return <div className="text-center py-10">Document not found</div>;
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-gray-200">
        <div className="bg-white border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Prepare Document</h1>
          <p className="text-gray-600">{document.title}</p>
        </div>

        <div className="flex">
          <div className="w-72 bg-white border-r min-h-[calc(100vh-73px)] p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Signer</h3>
            <select
              value={selectedParticipantId || ''}
              onChange={(e) => setSelectedParticipantId(e.target.value)}
              className="w-full p-2 border rounded-md mb-6"
            >
              {document.participants.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.fullName || p.email}
                </option>
              ))}
            </select>

            <h3 className="font-semibold text-gray-900 mb-4">Field Tools</h3>
            <div className="space-y-2">
              {FIELD_TOOLS.map((tool) => (
                <DraggableFieldTool key={tool.type} {...tool} />
              ))}
            </div>

            {saving && (
              <div className="mt-4 flex items-center gap-2 text-sm text-blue-600">
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col items-center justify-start pt-8 px-4 overflow-auto max-h-[calc(100vh-73px)]">
            <div className="bg-gray-200 rounded-lg p-4">
              <Document
                file={document.viewUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                  </div>
                }
              >
                <div className="flex flex-col items-center gap-4">
                  {Array.from({ length: numPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <DroppablePage
                        key={pageNum}
                        pageNumber={pageNum}
                        pdfWidth={pdfDimensions.width}
                        pdfHeight={pdfDimensions.height}
                        fields={fields}
                        onFieldClick={handleFieldClick}
                        activeField={activeField}
                      />
                    ),
                  )}
                </div>
              </Document>

              {numPages > 1 && (
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage <= 1}
                    className="p-2 bg-white rounded-full border hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="flex items-center px-4 bg-white rounded-full border">
                    Page {currentPage} of {numPages}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(numPages, p + 1))
                    }
                    disabled={currentPage >= numPages}
                    className="p-2 bg-white rounded-full border hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <DragOverlay>
        {activeField && (
          <div className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg text-sm">
            {activeField.type}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}
