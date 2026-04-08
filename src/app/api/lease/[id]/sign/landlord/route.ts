import { NextResponse } from 'next/server';
import { verifyAccessToken } from "@rentflow/iam";
import { LeaseSigningError, leaseSigningService } from "@rentflow/lease";
import { cookies } from 'next/headers';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Authentication
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let payload;
    try {
      payload = verifyAccessToken(token);
    } catch (authError) {
      console.error('Auth Token Verification Error:', authError);
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!payload?.organizationId) {
      return NextResponse.json({ error: 'Organization required' }, { status: 403 });
    }

    const orgId = payload.organizationId;
    const { id: leaseId } = await params;

    const response = await leaseSigningService.activateByOrganization({
      leaseId,
      organizationId: orgId,
      actorUserId: payload.userId,
    });

    return NextResponse.json(response);

  } catch (error: unknown) {
    if (error instanceof LeaseSigningError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error('Lease activation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
