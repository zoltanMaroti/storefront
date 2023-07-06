'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItemProps, Product } from '@/lib/types';
import { removeFromCart } from '@/lib/store/slices/cart';
import { FiTrash2 } from 'react-icons/fi';

const RemoveFromCart = ({ product }: CartItemProps) => {
    const dispatch = useDispatch();

    const onClickRemove = (product: Product) =>
        dispatch(removeFromCart(product));

    return <FiTrash2 size={20} onClick={() => onClickRemove(product)} />;
};

export default RemoveFromCart;
