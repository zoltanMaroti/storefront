import { IPaymentApiClient } from '@/lib/interfaces';
import { CheckoutSessionUrl, CheckoutSession, Product } from '@/lib/types';
import { BASE_URL } from '@/lib/constants';
import Stripe from 'stripe';

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
    getCheckoutSessionByPaymentIntent: async (
        paymentIntentId: string | undefined
    ): Promise<Stripe.Checkout.Session | undefined> => {
        if (!paymentIntentId) {
            return;
        }
        const response = await fetch(
            `${BASE_URL}/api/payment/${paymentIntentId}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch checkout session');
        }

        const data = await response.json();

        return data.data[0];
    },
    createTrackingNumber: async (
        paymentIntentId: string,
        trackingNumber: string
    ): Promise<Stripe.PaymentIntent> => {
        const response = await fetch(
            `${BASE_URL}/api/payment/${paymentIntentId}/tracking`,
            {
                method: 'POST',
                body: JSON.stringify({ trackingNumber }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch checkout session');
        }

        const data = await response.json();

        return data.paymentIntent;
    },
};
