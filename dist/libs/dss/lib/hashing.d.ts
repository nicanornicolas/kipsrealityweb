/**
 * Computes the SHA-256 hash of a file buffer.
 * This is the standard used for EVM Blockchain notarization.
 *
 * @param fileBuffer - The raw bytes of the PDF file
 * @returns Hex string (e.g., "a3f5...")
 */
export declare function computeDocumentHash(fileBuffer: Buffer): string;
/**
 * Verifies if a file matches a specific hash.
 * Used to check integrity before signing.
 */
export declare function verifyDocumentIntegrity(fileBuffer: Buffer, expectedHash: string): boolean;
/**
 * Generates a "Post-Quantum" placeholder hash.
 * Currently derives from SHA-256 but allows the schema to be populated
 * without breaking when we upgrade crypto libraries later.
 */
export declare function computePqHash(fileBuffer: Buffer): string;
/**
 * Zero-Knowledge Proof Implementation Placeholder
 *
 * TODO: Implement proper zero-knowledge proof using SnarkJS or similar library
 * This function should generate a zk-SNARK proof that the document hash is valid
 * without revealing the document contents.
 *
 * Expected implementation steps:
 * 1. Set up zk-SNARK circuit for document validation
 * 2. Generate proving/verification keys
 * 3. Create proof that document hash matches commitment
 * 4. Return proof as string for blockchain verification
 */
export declare function generateZkProof(fileBuffer: Buffer): {
    proof: string;
    publicSignals: string[];
};
/**
 * Verifies a zero-knowledge proof
 *
 * TODO: Implement proper zero-knowledge proof verification
 */
export declare function verifyZkProof(proof: string, publicSignals: string[]): boolean;
export declare function computeZkProofPlaceholder(fileBuffer: Buffer): string;
