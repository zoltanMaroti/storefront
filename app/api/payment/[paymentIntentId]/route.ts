import { NextRequest, NextResponse } from 'next/server';
import { getAllSessions } from '@/lib/services/checkout';
import { PaymentIntentRequestParams } from '@/lib/types';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(
    request: NextRequest,
    { params }: { params: PaymentIntentRequestParams }
) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
            expand: ['data.line_items'],
        });

        return NextResponse.json(checkoutSession);
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
