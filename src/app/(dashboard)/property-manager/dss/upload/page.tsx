import DocumentUploadForm from "@/components/dss/DocumentUploadForm";

export default function DssUploadPage() {
    return (
        <div className="container mx-auto py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Document Signing</h1>
                <p className="text-gray-600">Upload a new contract or select one from your vault, then define signers and prepare it for secure signing.</p>
            </div>

            <DocumentUploadForm />
        </div>
    );
}
