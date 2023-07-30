import { IPaymentApiClient } from '@/lib/interfaces';
import { CheckoutSessionUrl, CheckoutSession, Product } from '@/lib/types';
import { BASE_URL } from '@/lib/constants';

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
            `${BASE_URL}/api/payment/checkout/success?session_id=${sessionId}`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch checkout session');
        }

        return await response.json();
    },
    getPaymentIntents: async (cursor: string | null) => {
        const url = new URL('/api/payments', BASE_URL);

        if (cursor) {
            url.search = new URLSearchParams({ cursor }).toString();
        }

        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch payment intents');
        }

        const data = await response.json();

        return data.paymentIntents.data;
    },
};
