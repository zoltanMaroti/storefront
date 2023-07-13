'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import PageContainer from '@/components/layout/container/PageContainer';
import {
    CartItems,
    CheckoutContainer,
    Header,
    Headers,
    ProductDivider,
    TotalContainer,
} from '@/app/[locale]/cart/style';
import { useSelector } from 'react-redux';
import { selectCart, selectTotalPrice } from '@/lib/selectors/cart';
import CartItem from '@/components/cart/CartItem';
import Divider from '@/components/common/divider/Divider';
import Checkout from '@/components/cart/checkout/Checkout';
import Price from '@/components/common/price/Price';
import ContinueShopping from '@/components/common/button/shopping/ContinueShopping';

const CartPage = () => {
    const t = useTranslations('common');
    const cart = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalPrice);

    if (!cart.length) {
        return (
            <PageContainer center={true}>
                <h2>{t('Your shopping cart is empty')}</h2>
                <ContinueShopping />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <h1>{t('Your cart')}</h1>
            <Headers>
                <Header>{t('Product')}</Header>
                <Header>{t('Quantity')}</Header>
                <Header>{t('Total')}</Header>
            </Headers>
            <CartItems>
                {cart.map((product) => (
                    <React.Fragment key={product.uuid}>
                        <CartItem product={product} />
                        <ProductDivider />
                    </React.Fragment>
                ))}
            </CartItems>
            <Divider />
            <CheckoutContainer>
                <TotalContainer>
                    <div>{t('Total')}: </div>
                    <Price amount={totalPrice} />
                </TotalContainer>
                <Checkout cart={cart} />
            </CheckoutContainer>
        </PageContainer>
    );
};

export default CartPage;
