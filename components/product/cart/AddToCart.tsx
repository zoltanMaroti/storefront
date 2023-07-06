'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { AddToCartProps, Product } from '@/lib/types';
import { addToCart } from '@/lib/store/slices/cart';
import Button from '@/components/common/button/Button';
import { useTranslations } from 'next-intl';
import { ButtonText } from '@/components/common/button/style';

const AddToCart = ({ product }: AddToCartProps) => {
    const t = useTranslations('common');
    const dispatch = useDispatch();

    const onClick = (product: Product) => dispatch(addToCart(product));

    return (
        <Button variant={'secondary'} onClick={() => onClick(product)}>
            <ButtonText>{t('Add to cart')}</ButtonText>
        </Button>
    );
};

export default AddToCart;
