'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import PageContainer from '@/components/layout/container/PageContainer';
import {
    CartItemsContainer,
    ColumnHeading,
    EmptyCartContainer,
    Headers,
} from '@/app/[locale]/cart/style';
import { useSelector } from 'react-redux';
import { selectCart } from '@/lib/selectors/cart';
import Link from 'next/link';
import Button from '@/components/common/button/Button';

const Page = () => {
    const t = useTranslations('common');
    const cart = useSelector(selectCart);

    if (!cart.length) {
        return (
            <EmptyCartContainer>
                <h2>{t('Your shopping cart is empty')}</h2>
                <Link href={'/products'}>
                    <Button>{t('Continue shopping')}</Button>
                </Link>
            </EmptyCartContainer>
        );
    }

    return (
        <PageContainer>
            <h1>{t('Your cart')}</h1>
            <Headers>
                <ColumnHeading>{t('Product')}</ColumnHeading>
                <ColumnHeading>{t('Quantity')}</ColumnHeading>
                <ColumnHeading>{t('Total')}</ColumnHeading>
            </Headers>
            <CartItemsContainer></CartItemsContainer>
        </PageContainer>
    );
};

export default Page;
