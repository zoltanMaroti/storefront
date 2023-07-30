import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PaymentApiClient } from '@/lib/api/payment';

const usePaymentIntents = (enabled: boolean, cursor: string | null) => {
    return useInfiniteQuery(
        ['paymentIntents'],
        () => PaymentApiClient.getPaymentIntents(cursor),
        {
            enabled,
            getNextPageParam: (lastPage, allPages) =>
                lastPage.length === 0 ? undefined : allPages.length + 1,
        }
    );
};

export default usePaymentIntents;
