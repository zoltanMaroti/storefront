import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PaymentApiClient } from '@/lib/api/payment';
import { CreateTrackingNumberParams } from '@/lib/types';

const useTrackingNumber = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            paymentIntentId,
            trackingNumber,
        }: CreateTrackingNumberParams) =>
            PaymentApiClient.createTrackingNumber(
                paymentIntentId,
                trackingNumber
            ),
        onSettled: (paymentIntent) => {
            if (paymentIntent) {
                queryClient.refetchQueries(['paymentIntents']);
            }
        },
    });
};

export default useTrackingNumber;
