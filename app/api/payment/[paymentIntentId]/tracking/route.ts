import { NextRequest, NextResponse } from 'next/server';
import {
    PaymentIntentRequestParams,
    TrackingNumberRequestBody,
} from '@/lib/types';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { updateTrackingNumber } from '@/lib/services/shipping';

export async function POST(
    request: NextRequest,
    { params }: { params: PaymentIntentRequestParams }
) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { paymentIntentId } = params;
    const { trackingNumber }: TrackingNumberRequestBody = await request.json();

    if (!trackingNumber) {
        return NextResponse.json(
            { error: 'Missing tracking number' },
            { status: 400 }
        );
    }

    try {
        const paymentIntent = await updateTrackingNumber(
            paymentIntentId,
            trackingNumber
        );
        return NextResponse.json({ paymentIntent });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
