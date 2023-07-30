import Stripe from 'stripe';
import { getStripeInstance } from '@/lib/services/checkout';

export const getPaymentIntents = async (
    config?: Stripe.PaymentIntentListParams
) => {
    const stripe = getStripeInstance();

    try {
        return await stripe.paymentIntents.list(config);
    } catch (error: any) {
        throw new Error('Failed to retrieve payment intents', error);
    }
};
