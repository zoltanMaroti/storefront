import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getPaymentIntents } from '@/lib/services/payment';

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
    const searchParams = request.nextUrl.searchParams;
    const cursor = searchParams.get('cursor');

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const paymentIntents = await getPaymentIntents({
            limit: 10,
            ...(cursor && { starting_after: cursor }),
        });

        return NextResponse.json({
            paymentIntents,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
