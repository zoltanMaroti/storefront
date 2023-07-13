import { NextResponse, NextRequest } from 'next/server';
import { createCheckoutSession } from '@/lib/services/checkout';
import { CheckoutRequestBody } from '@/lib/types';

export async function POST(request: NextRequest) {
    const products: CheckoutRequestBody = await request.json();

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
