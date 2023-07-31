import { NextRequest, NextResponse } from 'next/server';
import { getAllSessions } from '@/lib/services/checkout';
import { PaymentIntentRequestParams } from '@/lib/types';

export async function GET(
    request: NextRequest,
    { params }: { params: PaymentIntentRequestParams }
) {
    const { paymentIntentId } = params;

    if (!paymentIntentId) {
        return NextResponse.json(
            { error: 'Missing payment intent id' },
            { status: 400 }
        );
    }

    try {
        const checkoutSession = await getAllSessions({
            payment_intent: paymentIntentId,
        });

        return NextResponse.json(checkoutSession);
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
