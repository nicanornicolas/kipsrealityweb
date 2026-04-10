import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { prisma } from '@rentflow/iam';
import { computeDocumentHash } from './hashing';
import { StorageService } from './storage-service';

export interface GeneratePdfResult {
  finalFileUrl: string;
  finalPdfSha256Hex: string;
}

export async function generateFinalSignedPdf(
  documentId: string,
  orgId: string,
): Promise<GeneratePdfResult> {
  const document = await prisma.dssDocument.findUnique({
    where: { id: documentId },
    include: {
      fields: {
        include: {
          participant: true,
        },
      },
      signatures: {
        include: {
          participant: true,
        },
      },
    },
  });

  if (!document) {
    throw new Error(`Document ${documentId} not found`);
  }

  if (!document.originalPdfUrl) {
    throw new Error(`Document ${documentId} has no original PDF`);
  }

  const pdfBuffer = await StorageService.downloadDocument(
    document.originalPdfUrl,
  );
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const pages = pdfDoc.getPages();
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const participantSignatureMap = new Map(
    document.signatures.map((s) => [s.participantId, s]),
  );

  for (const field of document.fields) {
    const pageIndex = field.pageNumber - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) {
      console.warn(
        `Field ${field.id} references invalid page ${field.pageNumber}`,
      );
      continue;
    }

    const page = pages[pageIndex];
    const { width: pageWidth, height: pageHeight } = page.getSize();

    const x = (field.x / 100) * pageWidth;
    const yPdf = pageHeight - (field.y / 100) * pageHeight;

    const signature = participantSignatureMap.get(field.participantId);
    const participantName =
      field.participant.fullName || field.participant.email;

    switch (field.type) {
      case 'SIGNATURE':
        if (signature) {
          const dateStr = signature.signedAt
            ? signature.signedAt.toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0];
          page.drawText(`Signed by: ${participantName}`, {
            x,
            y: yPdf - 10,
            size: 8,
            font: helveticaFont,
            color: rgb(0, 0, 0.5),
          });
          page.drawText(`Date: ${dateStr}`, {
            x,
            y: yPdf - 20,
            size: 8,
            font: helveticaFont,
            color: rgb(0, 0, 0.5),
          });
          page.drawText(
            `Hash: ${signature.signatureHash.substring(0, 16)}...`,
            {
              x,
              y: yPdf - 30,
              size: 6,
              font: helveticaFont,
              color: rgb(0.5, 0.5, 0.5),
            },
          );
        } else {
          page.drawText(`[Signature: ${participantName}]`, {
            x,
            y: yPdf,
            size: 10,
            font: helveticaFont,
            color: rgb(0.7, 0, 0),
          });
        }
        break;

      case 'DATE':
        const dateValue = signature?.signedAt
          ? signature.signedAt.toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0];
        page.drawText(dateValue, {
          x,
          y: yPdf,
          size: 10,
          font: helveticaFont,
          color: rgb(0, 0, 0),
        });
        break;

      case 'INITIALS':
        const initials = participantName
          .split(' ')
          .map((n) => n[0])
          .join('')
          .toUpperCase()
          .substring(0, 3);
        page.drawText(initials, {
          x,
          y: yPdf,
          size: 10,
          font: helveticaFont,
          color: rgb(0, 0, 0),
        });
        break;

      case 'TEXT':
        page.drawText(field.value || '', {
          x,
          y: yPdf,
          size: 10,
          font: helveticaFont,
          color: rgb(0, 0, 0),
        });
        break;
    }
  }

  const modifiedPdfBytes = await pdfDoc.save();
  const finalPdfBuffer = Buffer.from(modifiedPdfBytes);
  const finalPdfSha256Hex = computeDocumentHash(finalPdfBuffer);

  const { key } = await StorageService.uploadPdf(finalPdfBuffer, orgId);
  const finalFileUrl = key;

  await prisma.dssDocument.update({
    where: { id: documentId },
    data: {
      finalFileUrl,
      finalPdfSha256Hex,
    },
  });

  return { finalFileUrl, finalPdfSha256Hex };
}
