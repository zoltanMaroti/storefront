import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { Product } from '@/lib/types';
import { PaymentApiClient } from '@/lib/api/payment';
import { useLocale } from 'next-intl';

const useCheckoutSessionUrl = () => {
    const locale = useLocale();

    return useMutation((products: Product[]) =>
        PaymentApiClient.getCheckoutSessionUrl(products, locale)
    );
};

export default useCheckoutSessionUrl;
