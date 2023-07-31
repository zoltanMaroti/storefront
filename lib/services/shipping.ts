import { updatePaymentIntent } from '@/lib/services/payment';
import Stripe from 'stripe';

export const updateTrackingNumber = async (
    paymentIntentId: string,
    trackingNumber: string
): Promise<Stripe.PaymentIntent> => {
    return await updatePaymentIntent(paymentIntentId, {
        trackingNumber,
    });
};
