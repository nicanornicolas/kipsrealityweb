"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, FolderOpen, Loader2, Plus, Trash, Upload, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import DocumentPreviewModal from "@/components/dss/DocumentPreviewModal";

interface Participant {
    email: string;
    fullName: string;
    role: string;
}

interface VaultDocument {
    id: string;
    title?: string;
    name?: string;
    fileName?: string;
    status?: string;
}

interface VaultListResponse {
    documents?: VaultDocument[];
}

export default function DocumentUploadForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [uploadMode, setUploadMode] = useState<"NEW" | "VAULT">("NEW");
    const [vaultDocuments, setVaultDocuments] = useState<VaultDocument[]>([]);
    const [isVaultLoading, setIsVaultLoading] = useState(false);
    const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    // Default Participants: 1 Tenant, 1 Landlord
    const [participants, setParticipants] = useState<Participant[]>([
        { email: "", fullName: "", role: "TENANT" },
        { email: "", fullName: "", role: "LANDLORD" }
    ]);

    useEffect(() => {
        const loadVaultDocuments = async () => {
            if (uploadMode !== "VAULT" || vaultDocuments.length > 0) return;

            setIsVaultLoading(true);
            try {
                const res = await fetch("/api/dss/documents?status=DRAFT");
                const data = (await res.json()) as VaultListResponse;
                if (!res.ok) throw new Error("Failed to fetch vault documents");
                setVaultDocuments(data.documents || []);
            } catch (error) {
                console.error(error);
                toast.error("Unable to load vault documents.");
            } finally {
                setIsVaultLoading(false);
            }
        };

        loadVaultDocuments();
    }, [uploadMode, vaultDocuments.length]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            if (!title) {
                setTitle(e.target.files[0].name.replace(/\.pdf$/i, ""));
            }
        }
    };

    const updateParticipant = (index: number, field: keyof Participant, value: string) => {
        const newParts = [...participants];
        newParts[index] = { ...newParts[index], [field]: value };
        setParticipants(newParts);
    };

    const removeParticipant = (index: number) => {
        setParticipants(participants.filter((_, i) => i !== index));
    };

    const addParticipant = () => {
        setParticipants([...participants, { email: "", fullName: "", role: "WITNESS" }]);
    };

    const handleUploadNewDocument = async () => {
        if (!file || !title) {
            throw new Error("Please provide a title and a file.");
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("participants", JSON.stringify(participants));

        const res = await fetch("/api/dss/documents", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data?.error || data?.message || "Failed to create document");
        }

        const createdDocumentId = data?.data?.id as string | undefined;
        if (!createdDocumentId) {
            throw new Error("Document created but ID was missing");
        }

        setSelectedDocumentId(createdDocumentId);
        toast.success("Document created & hashed successfully!");
    };

    const handlePrepareVaultDocument = async () => {
        if (!selectedDocumentId) {
            throw new Error("Please select a document from the vault.");
        }

        const nonEmptyParticipants = participants.filter(
            (participant) => participant.email.trim() && participant.fullName.trim()
        );

        if (nonEmptyParticipants.length === 0) {
            throw new Error("Add at least one signer before continuing.");
        }

        for (let index = 0; index < nonEmptyParticipants.length; index++) {
            const participant = nonEmptyParticipants[index];
            const participantRes = await fetch(`/api/dss/documents/${selectedDocumentId}/participants`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: participant.email,
                    fullName: participant.fullName,
                    role: participant.role,
                    stepOrder: index + 1,
                }),
            });

            if (!participantRes.ok) {
                const payload = await participantRes.json();
                throw new Error(payload?.error || "Failed to add participant to selected document");
            }
        }

        toast.success("Vault document is ready for field placement.");
        router.push(`/property-manager/dss/prepare/${selectedDocumentId}`);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (uploadMode === "NEW") {
                await handleUploadNewDocument();
            } else {
                await handlePrepareVaultDocument();
            }
        } catch (error: unknown) {
            console.error(error);
            const message = error instanceof Error ? error.message : "Action failed";
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Upload className="w-5 h-5 text-blue-600" />
                Prepare Contract
            </h2>

            <div className="flex gap-3 mb-6 border-b pb-4">
                <Button
                    type="button"
                    variant={uploadMode === "NEW" ? "default" : "outline"}
                    onClick={() => {
                        setUploadMode("NEW");
                        setSelectedDocumentId(null);
                    }}
                >
                    <UploadCloud className="w-4 h-4 mr-2" />
                    Upload from Computer
                </Button>
                <Button
                    type="button"
                    variant={uploadMode === "VAULT" ? "default" : "outline"}
                    onClick={() => {
                        setUploadMode("VAULT");
                        setFile(null);
                    }}
                >
                    <FolderOpen className="w-4 h-4 mr-2" />
                    Select from Vault
                </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="rounded-lg border bg-gray-50 p-4">
                    {uploadMode === "NEW" ? (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Document Title</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md bg-white"
                                    placeholder="e.g. Lease Agreement - Unit 101"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload PDF</label>
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleFileChange}
                                    className="w-full p-2 border border-dashed border-gray-300 rounded-md bg-white"
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Existing Document</label>
                            <select
                                className="w-full p-2 border rounded-md bg-white"
                                onChange={(e) => setSelectedDocumentId(e.target.value || null)}
                                value={selectedDocumentId || ""}
                                required
                            >
                                <option value="">-- Choose a DRAFT document --</option>
                                {vaultDocuments.map((doc) => (
                                    <option key={doc.id} value={doc.id}>
                                        {doc.title || doc.name || doc.fileName || "Untitled document"}
                                    </option>
                                ))}
                            </select>
                            {isVaultLoading && (
                                <p className="mt-2 text-sm text-gray-500 flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Loading vault documents...
                                </p>
                            )}
                        </div>
                    )}

                    {selectedDocumentId && (
                        <div className="mt-4 flex justify-end">
                            <Button type="button" variant="secondary" onClick={() => setIsPreviewOpen(true)}>
                                <Eye className="w-4 h-4 mr-2" />
                                Preview Document
                            </Button>
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-gray-700">Signers (Ordered)</label>
                        <button type="button" onClick={addParticipant} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                            <Plus size={14} /> Add Signer
                        </button>
                    </div>

                    <div className="space-y-3">
                        {participants.map((p, index) => (
                            <div key={index} className="flex gap-2 items-start p-3 bg-gray-50 rounded-md border">
                                <span className="mt-2 text-xs font-bold text-gray-400 w-4">{index + 1}.</span>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 flex-1">
                                    <input
                                        placeholder="Full Name"
                                        className="p-2 text-sm border rounded"
                                        value={p.fullName}
                                        onChange={(e) => updateParticipant(index, "fullName", e.target.value)}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="p-2 text-sm border rounded"
                                        value={p.email}
                                        onChange={(e) => updateParticipant(index, "email", e.target.value)}
                                        required
                                    />
                                    <select
                                        className="p-2 text-sm border rounded bg-white"
                                        value={p.role}
                                        onChange={(e) => updateParticipant(index, "role", e.target.value)}
                                    >
                                        <option value="TENANT">Tenant</option>
                                        <option value="LANDLORD">Landlord</option>
                                        <option value="WITNESS">Witness</option>
                                    </select>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => removeParticipant(index)}
                                    className="mt-2 text-red-400 hover:text-red-600"
                                >
                                    <Trash size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading || (uploadMode === "VAULT" && isVaultLoading)}
                    className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 flex justify-center items-center gap-2"
                >
                    {loading ? (
                        <Loader2 className="animate-spin" />
                    ) : uploadMode === "NEW" ? (
                        "Create & Hash Document"
                    ) : (
                        "Prepare Selected Vault Document"
                    )}
                </button>
            </form>

            <DocumentPreviewModal
                documentId={selectedDocumentId}
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
            />
        </div>
    );
}
