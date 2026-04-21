var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var pdf_generator_exports = {};
__export(pdf_generator_exports, {
  generateFinalSignedPdf: () => generateFinalSignedPdf
});
module.exports = __toCommonJS(pdf_generator_exports);
var import_pdf_lib = require("pdf-lib");
var import_iam = require("@rentflow/iam");
var import_hashing = require("./hashing");
var import_storage_service = require("./storage-service");
async function appendAuditCertificate(pdfDoc, document) {
  const helveticaFont = await pdfDoc.embedFont(import_pdf_lib.StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(import_pdf_lib.StandardFonts.HelveticaBold);
  const newPage = pdfDoc.addPage();
  const { width, height } = newPage.getSize();
  const margin = 50;
  let y = height - margin;
  newPage.drawRectangle({
    x: 0,
    y: height - 100,
    width,
    height: 100,
    color: (0, import_pdf_lib.rgb)(0.1, 0.2, 0.4)
  });
  newPage.drawText("CERTIFICATE OF COMPLETION", {
    x: margin,
    y: height - 60,
    size: 24,
    font: boldFont,
    color: (0, import_pdf_lib.rgb)(1, 1, 1)
  });
  newPage.drawText("Document Signing Audit Trail", {
    x: margin,
    y: height - 85,
    size: 12,
    font: helveticaFont,
    color: (0, import_pdf_lib.rgb)(0.8, 0.8, 0.8)
  });
  y = height - 130;
  newPage.drawText("DOCUMENT INFORMATION", {
    x: margin,
    y,
    size: 14,
    font: boldFont,
    color: (0, import_pdf_lib.rgb)(0.1, 0.2, 0.4)
  });
  y -= 25;
  const docInfo = [
    `Document ID: ${document.id}`,
    `Title: ${document.title}`,
    `Status: ${document.status}`,
    `Completed At: ${document.completedAt ? new Date(document.completedAt).toISOString() : "N/A"}`,
    `Organization ID: ${document.organizationId}`
  ];
  for (const line of docInfo) {
    newPage.drawText(line, {
      x: margin,
      y,
      size: 10,
      font: helveticaFont,
      color: (0, import_pdf_lib.rgb)(0, 0, 0)
    });
    y -= 18;
  }
  y -= 15;
  newPage.drawText("SIGNER INFORMATION", {
    x: margin,
    y,
    size: 14,
    font: boldFont,
    color: (0, import_pdf_lib.rgb)(0.1, 0.2, 0.4)
  });
  y -= 25;
  for (const signature of document.signatures) {
    const participant = signature.participant;
    const signerInfo = [
      `Name: ${participant.fullName || "N/A"}`,
      `Email: ${participant.email}`,
      `Role: ${participant.role}`,
      `Signed At: ${signature.signedAt ? new Date(signature.signedAt).toISOString() : "N/A"}`,
      `IP Address: ${signature.ipAddress || "N/A"}`,
      `User-Agent: ${signature.userAgent || "N/A"}`,
      `Signature Hash: ${signature.signatureHash}`
    ];
    newPage.drawText(
      `${participant.fullName || participant.email} (${participant.role})`,
      {
        x: margin,
        y,
        size: 11,
        font: boldFont,
        color: (0, import_pdf_lib.rgb)(0.2, 0.2, 0.2)
      }
    );
    y -= 18;
    for (const line of signerInfo) {
      if (y < margin + 50) break;
      newPage.drawText(line, {
        x: margin + 20,
        y,
        size: 9,
        font: helveticaFont,
        color: (0, import_pdf_lib.rgb)(0.4, 0.4, 0.4)
      });
      y -= 15;
    }
    y -= 10;
  }
  y -= 10;
  newPage.drawRectangle({
    x: margin,
    y: y - 10,
    width: width - margin * 2,
    height: 1,
    color: (0, import_pdf_lib.rgb)(0.8, 0.8, 0.8)
  });
  y -= 30;
  newPage.drawText(
    "This certificate serves as legal proof that the document above was executed by the identified parties.",
    {
      x: margin,
      y,
      size: 8,
      font: helveticaFont,
      color: (0, import_pdf_lib.rgb)(0.5, 0.5, 0.5)
    }
  );
  y -= 15;
  newPage.drawText(`Certificate Generated: ${(/* @__PURE__ */ new Date()).toISOString()}`, {
    x: margin,
    y,
    size: 8,
    font: helveticaFont,
    color: (0, import_pdf_lib.rgb)(0.5, 0.5, 0.5)
  });
  y -= 15;
  newPage.drawText(`Document Hash: ${document.finalPdfSha256Hex || "N/A"}`, {
    x: margin,
    y,
    size: 8,
    font: helveticaFont,
    color: (0, import_pdf_lib.rgb)(0.5, 0.5, 0.5)
  });
}
async function generateFinalSignedPdf(documentId, orgId) {
  const document = await import_iam.prisma.dssDocument.findUnique({
    where: { id: documentId },
    include: {
      fields: {
        include: {
          participant: true
        }
      },
      signatures: {
        include: {
          participant: true
        }
      }
    }
  });
  if (!document) {
    throw new Error(`Document ${documentId} not found`);
  }
  if (!document.originalFileUrl) {
    throw new Error(`Document ${documentId} has no original PDF`);
  }
  const pdfBuffer = await import_storage_service.StorageService.downloadDocument(
    document.originalFileUrl
  );
  const pdfDoc = await import_pdf_lib.PDFDocument.load(pdfBuffer);
  const pages = pdfDoc.getPages();
  const helveticaFont = await pdfDoc.embedFont(import_pdf_lib.StandardFonts.Helvetica);
  const participantSignatureMap = new Map(
    document.signatures.map((s) => [s.participantId, s])
  );
  for (const field of document.fields) {
    const pageIndex = field.pageNumber - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) {
      console.warn(
        `Field ${field.id} references invalid page ${field.pageNumber}`
      );
      continue;
    }
    const page = pages[pageIndex];
    const { width: pageWidth, height: pageHeight } = page.getSize();
    const x = field.x / 100 * pageWidth;
    const yPdf = pageHeight - field.y / 100 * pageHeight;
    const signature = participantSignatureMap.get(field.participantId);
    const participantName = field.participant.fullName || field.participant.email;
    switch (field.type) {
      case "SIGNATURE":
        if (signature) {
          const dateStr = signature.signedAt ? signature.signedAt.toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
          page.drawText(`Signed by: ${participantName}`, {
            x,
            y: yPdf - 10,
            size: 8,
            font: helveticaFont,
            color: (0, import_pdf_lib.rgb)(0, 0, 0.5)
          });
          page.drawText(`Date: ${dateStr}`, {
            x,
            y: yPdf - 20,
            size: 8,
            font: helveticaFont,
            color: (0, import_pdf_lib.rgb)(0, 0, 0.5)
          });
          page.drawText(
            `Hash: ${signature.signatureHash.substring(0, 16)}...`,
            {
              x,
              y: yPdf - 30,
              size: 6,
              font: helveticaFont,
              color: (0, import_pdf_lib.rgb)(0.5, 0.5, 0.5)
            }
          );
        } else {
          page.drawText(`[Signature: ${participantName}]`, {
            x,
            y: yPdf,
            size: 10,
            font: helveticaFont,
            color: (0, import_pdf_lib.rgb)(0.7, 0, 0)
          });
        }
        break;
      case "DATE":
        const dateValue = signature?.signedAt ? signature.signedAt.toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        page.drawText(dateValue, {
          x,
          y: yPdf,
          size: 10,
          font: helveticaFont,
          color: (0, import_pdf_lib.rgb)(0, 0, 0)
        });
        break;
      case "INITIALS":
        const initials = participantName.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 3);
        page.drawText(initials, {
          x,
          y: yPdf,
          size: 10,
          font: helveticaFont,
          color: (0, import_pdf_lib.rgb)(0, 0, 0)
        });
        break;
      case "TEXT":
        page.drawText(field.value || "", {
          x,
          y: yPdf,
          size: 10,
          font: helveticaFont,
          color: (0, import_pdf_lib.rgb)(0, 0, 0)
        });
        break;
    }
  }
  await appendAuditCertificate(pdfDoc, document);
  const modifiedPdfBytes = await pdfDoc.save();
  const finalPdfBuffer = Buffer.from(modifiedPdfBytes);
  const finalPdfSha256Hex = (0, import_hashing.computeDocumentHash)(finalPdfBuffer);
  const { key } = await import_storage_service.StorageService.uploadPdf(finalPdfBuffer, orgId);
  const finalFileUrl = key;
  await import_iam.prisma.dssDocument.update({
    where: { id: documentId },
    data: {
      finalFileUrl,
      finalPdfSha256Hex
    }
  });
  return { finalFileUrl, finalPdfSha256Hex };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateFinalSignedPdf
});
//# sourceMappingURL=pdf-generator.js.map
