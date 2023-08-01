import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { PaymentApiClient } from '@/lib/api/payment';
import { CreateTrackingNumberParams } from '@/lib/types';

const useTrackingNumber = () => {
    return useMutation({
        mutationFn: ({
            paymentIntentId,
            trackingNumber,
        }: CreateTrackingNumberParams) =>
            PaymentApiClient.createTrackingNumber(
                paymentIntentId,
                trackingNumber
            ),
    });
};

export default useTrackingNumber;
