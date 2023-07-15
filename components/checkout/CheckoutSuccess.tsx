'use client';

import React from 'react';
import { CheckoutSession } from '@/lib/types';
import { useTranslations } from 'next-intl';
import {
    CheckoutSuccessContainer,
    OrderNumber,
    SuccessIcon,
} from '@/components/checkout/style';

const CheckoutSuccess = ({ order_number, customer }: CheckoutSession) => {
    const t = useTranslations('checkout');

    return (
        <CheckoutSuccessContainer>
            <SuccessIcon size={48} />
            <div>
                <h1>{t('Order confirmed')}</h1>
                <OrderNumber>
                    {t('Order number')}: {order_number}
                </OrderNumber>
            </div>
            <p>
                {t('Thank you for your purchase')}, {customer.name}!
            </p>
            <div>
                <p>
                    {t(
                        'You will receive an order confirmation email shortly with the expected delivery date to this email address'
                    )}
                    :
                </p>
                <p>{customer.email}</p>
            </div>
        </CheckoutSuccessContainer>
    );
};

export default CheckoutSuccess;
