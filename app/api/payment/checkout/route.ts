import { NextResponse, NextRequest } from 'next/server';
import { createCheckoutSession } from '@/lib/services/checkout';
import { CheckoutRequestBody } from '@/lib/types';

export async function POST(request: NextRequest) {
    const body: CheckoutRequestBody = await request.json();
    const { products } = body;

    try {
        const { url } = await createCheckoutSession(products);

        if (url) {
            return NextResponse.json({
                url,
            });
        }
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
