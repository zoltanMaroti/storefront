'use client';

import React from 'react';
import {
    CheckoutMessageContainer,
    ErrorIcon,
} from '@/components/checkout/style';
import { useTranslations } from 'next-intl';

const CheckoutCancelled = () => {
    const t = useTranslations('checkout');

    return (
        <CheckoutMessageContainer>
            <ErrorIcon size={48} />
            <h1>{t('Checkout cancelled')}</h1>
            <p>{t('This checkout has failed to complete')}.</p>
            <p>{t('If you having issues please contact our support')}.</p>
        </CheckoutMessageContainer>
    );
};

export default CheckoutCancelled;
