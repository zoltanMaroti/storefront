import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { Product } from '@/lib/types';
import { PaymentApiClient } from '@/lib/api/payment';

const useCheckoutSessionUrl = () => {
    return useMutation((products: Product[]) =>
        PaymentApiClient.getCheckoutSessionUrl(products)
    );
};

export default useCheckoutSessionUrl;
