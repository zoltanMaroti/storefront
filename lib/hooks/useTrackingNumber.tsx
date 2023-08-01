import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PaymentApiClient } from '@/lib/api/payment';
import { CreateTrackingNumberParams } from '@/lib/types';
import { InfiniteData } from 'react-query';
import Stripe from 'stripe';

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
        onSuccess: (newPaymentIntent) => {
            queryClient.setQueryData<InfiniteData<Array<Stripe.PaymentIntent>>>(
                ['paymentIntents'],
                // @ts-ignore
                (prevState) => {
                    const newState = prevState?.pages.map((page) =>
                        page.map((paymentIntent) => {
                            if (paymentIntent.id === newPaymentIntent.id) {
                                return {
                                    ...paymentIntent,
                                    metadata: {
                                        trackingNumber:
                                            newPaymentIntent.metadata
                                                .trackingNumber,
                                    },
                                };
                            } else {
                                return paymentIntent;
                            }
                        })
                    );

                    return {
                        ...prevState,
                        pages: newState,
                    };
                }
            );
        },
    });
};

export default useTrackingNumber;
