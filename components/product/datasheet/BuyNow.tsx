'use client';

import React from 'react';
import useCheckoutSessionUrl from '@/lib/hooks/useCheckoutSessionUrl';
import { ButtonText } from '@/components/common/button/style';
import Button from '@/components/common/button/Button';
import { BuyNowProps } from '@/lib/types';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const BuyNow = ({ product }: BuyNowProps) => {
    const router = useRouter();
    const t = useTranslations('common');
    const checkoutSessionMutation = useCheckoutSessionUrl();
    const isButtonDisabled =
        checkoutSessionMutation.isLoading || checkoutSessionMutation.isSuccess;

    const onBuyNowClick = () => {
        checkoutSessionMutation
            .mutateAsync([product])
            .then((url) => router.push(url));
    };

    return (
        <Button
            onClick={onBuyNowClick}
            loading={isButtonDisabled}
            disabled={isButtonDisabled}
        >
            <ButtonText>{t('Buy now')}</ButtonText>
        </Button>
    );
};

export default BuyNow;
