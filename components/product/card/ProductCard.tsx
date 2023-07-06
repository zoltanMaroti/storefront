import React from 'react';
import { ProductCardProps } from '@/lib/types';
import {
    Price,
    ProductCardContainer,
    ProductImage,
    ProductImageContainer,
    ProductName,
} from '@/components/product/card/style';

const ProductCard = ({ item, maxWidth }: ProductCardProps) => {
    return (
        <ProductCardContainer
            href={`/product/${item.slug}`}
            maxWidth={maxWidth}
        >
            <ProductImageContainer>
                <ProductImage
                    src={item.content.images[0].filename}
                    alt={item.content.images[0].alt}
                    fill
                />
            </ProductImageContainer>
            <div>
                <ProductName>{item.content.name}</ProductName>
                <Price>€{item.content.price}</Price>
            </div>
        </ProductCardContainer>
    );
};

export default ProductCard;
