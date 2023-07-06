'use client';

import React from 'react';
import Button from '@/components/common/button/Button';
import { useTranslations } from 'next-intl';

const Checkout = () => {
    const t = useTranslations('common');

    const onClick = async () => {
        // TODO: implement checkout logic
    };

    return (
        <Button
            width={'250px'}
            onClick={onClick}
            loading={false}
            disabled={false}
        >
            <p>{t('Check out')}</p>
        </Button>
    );
};

export default Checkout;
