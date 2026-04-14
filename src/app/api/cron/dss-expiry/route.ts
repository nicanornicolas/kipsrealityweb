import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@rentflow/iam';
import { DssDocumentStatus } from '@prisma/client';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const result = await prisma.dssDocument.updateMany({
    where: {
      status: DssDocumentStatus.SENT,
      sentAt: {
        lt: thirtyDaysAgo,
      },
    },
    data: {
      status: DssDocumentStatus.VOIDED,
      voidedAt: new Date(),
    },
  });

  return NextResponse.json({
    success: true,
    message: `Voided ${result.count} expired documents`,
    voidedCount: result.count,
  });
}
