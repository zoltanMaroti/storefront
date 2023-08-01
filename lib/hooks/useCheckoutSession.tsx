import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PaymentApiClient } from '@/lib/api/payment';

const useCheckoutSession = (paymentIntentId: string | undefined) => {
    return useQuery(
        ['checkoutSession', paymentIntentId],
        () =>
            PaymentApiClient.getCheckoutSessionByPaymentIntent(paymentIntentId),
        {
            enabled: !!paymentIntentId,
        }
    );
};

export default useCheckoutSession;
