import { IPaymentApiClient } from '@/lib/interfaces';
import { CheckoutSessionResponse, Product } from '@/lib/types';

export const PaymentApiClient: IPaymentApiClient = {
    getCheckoutSessionUrl: async (products: Product[]): Promise<string> => {
        const response = await fetch('/api/payment/checkout', {
            method: 'POST',
            body: JSON.stringify(products),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch checkout session url');
        }

        const data: CheckoutSessionResponse = await response.json();

        return data.url;
    },
};
