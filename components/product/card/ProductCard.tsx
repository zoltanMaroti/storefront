import React from 'react';
import { ProductCardProps } from '@/lib/types';

const ProductCard = ({ item }: ProductCardProps) => {
    return <div>{item.uuid}</div>;
};

export default ProductCard;
