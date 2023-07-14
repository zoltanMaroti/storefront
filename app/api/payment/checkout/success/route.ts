import { NextRequest, NextResponse } from 'next/server';
import { retrieveSession } from '@/lib/services/checkout';

export async function GET(request: NextRequest) {
    const {
        nextUrl: { searchParams },
    } = request;

    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
        return NextResponse.json(
            { message: 'Session id not found' },
            { status: 400 }
        );
    }

    try {
        const session = await retrieveSession(sessionId);

        return NextResponse.json({
            order_number: session.payment_intent,
            customer: {
                name: session.customer_details?.name,
                email: session.customer_details?.email,
            },
        });
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
