"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import DocumentPreviewModal from "@/components/dss/DocumentPreviewModal";
import { toast } from "sonner";
import { api } from '@/lib/api-client';
import { 
  FolderOpen, 
  FileText, 
  File, 
  Search, 
  Upload,
  Loader2,
  Download,
  Eye,
  Trash2,
  Filter,
  Grid,
  List,
  Home,
  Building2
} from "lucide-react";

interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  size: string;
  uploadedAt: string;
  property?: string;
  unit?: string;
  status: "active" | "archived";
}

interface Folder {
  id: string;
  name: string;
  count: number;
  icon: string;
}

interface ApiDocument {
  id: string;
  title?: string;
  fileName?: string;
  name?: string;
  type?: string;
  category?: string;
  size?: string;
  status?: "active" | "archived";
  createdAt?: string;
  property?: { name?: string };
  unit?: { unitNumber?: string };
}

interface ApiDocumentListResponse {
  success?: boolean;
  documents?: ApiDocument[];
}

interface UploadedDocumentPayload {
  id?: string;
  title?: string;
  mimeType?: string;
  property?: { name?: string };
  unit?: { unitNumber?: string };
}

export default function DocumentsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [folders, setFolders] = useState<Folder[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewDocumentId, setPreviewDocumentId] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null);
        
        // Fetch documents from API
        const res = await api.get<ApiDocument[] | ApiDocumentListResponse>('/api/dss/documents');
        if (res.error) throw new Error(res.error || 'Failed to fetch documents');
        const data = (res.data || []) as ApiDocument[] | ApiDocumentListResponse;
        const rawDocuments = Array.isArray(data) ? data : (data.documents || []);

        const docs: Document[] = rawDocuments.map((d) => ({
          id: d.id,
          name: d.title || d.name || d.fileName || 'Untitled',
          type: d.type || 'PDF',
          category: d.category || 'Other',
          size: d.size || '0 KB',
          uploadedAt: d.createdAt?.split('T')[0] || new Date().toISOString().split('T')[0],
          property: d.property?.name || '',
          unit: d.unit?.unitNumber || '',
          status: d.status || 'active'
        }));
        
        setDocuments(docs);
        
        // Generate folders from document categories
        const categories = [...new Set(docs.map(d => d.category))];
        const folderData: Folder[] = categories.map(cat => ({
          id: cat.toLowerCase(),
          name: cat,
          count: docs.filter(d => d.category === cat).length,
          icon: 'FileText'
        }));
        setFolders(folderData);
        
      } catch (err) {
        setErrorMessage(err instanceof Error ? err.message : 'Failed to load documents');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF document.");
      event.target.value = "";
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", file.name.replace(/\.pdf$/i, ""));
      formData.append("participants", "[]");

      const response = await api.request<{ data?: UploadedDocumentPayload; error?: string }>("/api/dss/documents", {
        method: "POST",
        body: formData,
      });

      const data = response.data;

      if (response.error) {
        throw new Error(data?.error || response.error || "Failed to upload document");
      }

      const uploadedDoc = data?.data;
      const uploadedDocument: Document = {
        id: uploadedDoc?.id || crypto.randomUUID(),
        name: uploadedDoc?.title || file.name.replace(/\.pdf$/i, ""),
        type: uploadedDoc?.mimeType || "PDF",
        category: "Other",
        size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
        uploadedAt: new Date().toISOString().split("T")[0],
        property: uploadedDoc?.property?.name || "",
        unit: uploadedDoc?.unit?.unitNumber || "",
        status: "active",
      };

      setDocuments((prev) => [uploadedDocument, ...prev]);
      toast.success("Document uploaded successfully.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Upload failed";
      console.error("Upload error:", error);
      toast.error(message);
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || doc.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Leases": return "bg-blue-100 text-blue-700";
      case "Invoices": return "bg-green-100 text-green-700";
      case "Maintenance": return "bg-orange-100 text-orange-700";
      case "Applications": return "bg-purple-100 text-purple-700";
      case "ID Documents": return "bg-teal-100 text-teal-700";
      case "Insurance": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const openPreview = (documentId: string) => {
    setPreviewDocumentId(documentId);
    setIsPreviewOpen(true);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 max-w-6xl">
        <LoadingSpinner text="Loading documents..." />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 max-w-6xl">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="application/pdf"
        className="hidden"
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-gray-500 mt-1">
            Manage all your property documents in one place.
          </p>
          {errorMessage && <p className="text-sm text-red-600 mt-2">{errorMessage}</p>}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button onClick={handleUploadClick} disabled={isUploading}>
            {isUploading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Upload className="h-4 w-4 mr-2" />}
            Upload Document
          </Button>
        </div>
      </div>

      {/* Folders Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {folders.map(folder => (
          <Card 
            key={folder.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedCategory(folder.name.toLowerCase())}
          >
            <CardContent className="p-4">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 rounded-lg mb-3">
                  <FolderOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-sm">{folder.name}</h3>
                <p className="text-xs text-gray-500">{folder.count} files</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and View Toggle */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDocuments.map(doc => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <Badge className={getCategoryColor(doc.category)}>
                    {doc.category}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm mb-1 truncate">{doc.name}</h4>
                <p className="text-xs text-gray-500 mb-3">{doc.size} • {doc.uploadedAt}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Home className="h-3 w-3" />
                  {doc.property}
                  {doc.unit && ` / ${doc.unit}`}
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="secondary" size="sm" onClick={() => openPreview(doc.id)}>
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Property</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Size</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredDocuments.map(doc => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <span className="font-medium">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge className={getCategoryColor(doc.category)}>
                        {doc.category}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-gray-400" />
                        {doc.property}
                        {doc.unit && <span className="text-gray-400">/ {doc.unit}</span>}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">{doc.size}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{doc.uploadedAt}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openPreview(doc.id)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {filteredDocuments.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <File className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No documents found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Upload your first document to get started"}
            </p>
            <Button onClick={handleUploadClick} disabled={isUploading}>
              {isUploading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Upload className="h-4 w-4 mr-2" />}
              Upload Document
            </Button>
          </CardContent>
        </Card>
      )}

      <DocumentPreviewModal
        documentId={previewDocumentId}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
}
