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

export const updatePaymentIntent = async (
    paymentIntentId: string,
    metadata?: Stripe.MetadataParam
): Promise<Stripe.PaymentIntent> => {
    const stripe = getStripeInstance();

    try {
        return await stripe.paymentIntents.update(paymentIntentId, {
            metadata,
        });
    } catch (error: any) {
        throw new Error('Failed to update payment intent', error);
    }
};
