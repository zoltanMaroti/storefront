import { NextRequest, NextResponse } from 'next/server';
import {
    onCheckoutCompleted,
    verifyStripeSignature,
} from '@/lib/services/checkout';
import { StripeWebhookEvents } from '@/lib/constants';
import Stripe from 'stripe';

const STRIPE_SIGNATURE_HEADER = 'stripe-signature';

export async function POST(request: NextRequest) {
    const signature = request.headers.get(STRIPE_SIGNATURE_HEADER);
    const payload = await request.text();

    const event = verifyStripeSignature(signature as string, payload);

    try {
        switch (event.type) {
            case StripeWebhookEvents.Completed: {
                const session = event.data.object as Stripe.Checkout.Session;
                await onCheckoutCompleted(session.id);
                break;
            }
        }
        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
