import { IPaymentApiClient } from '@/lib/interfaces';
import { CheckoutSessionUrl, CheckoutSession, Product } from '@/lib/types';

export const PaymentApiClient: IPaymentApiClient = {
    getCheckoutSessionUrl: async (
        products: Product[],
        locale: string
    ): Promise<string> => {
        const response = await fetch('/api/payment/checkout', {
            method: 'POST',
            body: JSON.stringify({ products, locale }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch checkout session url');
        }

        const data: CheckoutSessionUrl = await response.json();

        return data.url;
    },
    getCheckoutSession: async (sessionId: string): Promise<CheckoutSession> => {
        const response = await fetch(
            `${process.env.BASE_URL}/api/payment/checkout/success?session_id=${sessionId}`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch checkout session');
        }

        return await response.json();
    },
};
