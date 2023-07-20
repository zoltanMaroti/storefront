'use client';

import React from 'react';
import Button from '@/components/common/button/Button';
import { useTranslations } from 'next-intl';
import { CheckoutProps } from '@/lib/types';
import useCheckoutSessionUrl from '@/lib/hooks/useCheckoutSessionUrl';
import { useRouter } from 'next/navigation';
import { ButtonText } from '@/components/common/button/style';

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
            color={'var(--color-success)'}
        >
            <ButtonText>{t('Check out')}</ButtonText>
        </Button>
    );
};

export default Checkout;
