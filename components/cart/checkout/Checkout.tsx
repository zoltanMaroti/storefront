'use client';

import React from 'react';
import Button from '@/components/common/button/Button';
import { useTranslations } from 'next-intl';
import { CheckoutProps } from '@/lib/types';
import useCheckoutSessionUrl from '@/lib/hooks/useCheckoutSessionUrl';
import { useRouter } from 'next/navigation';

const Checkout = ({ cart }: CheckoutProps) => {
    const router = useRouter();
    const t = useTranslations('common');
    const checkOutSessionMutation = useCheckoutSessionUrl();
    const isButtonDisabled =
        checkOutSessionMutation.isLoading || checkOutSessionMutation.isSuccess;

    const onClick = async () => {
        checkOutSessionMutation
            .mutateAsync(cart)
            .then((url) => router.push(url));
    };

    return (
        <Button
            width={'250px'}
            onClick={onClick}
            loading={isButtonDisabled}
            disabled={isButtonDisabled}
        >
            <p>{t('Check out')}</p>
        </Button>
    );
};

export default Checkout;
