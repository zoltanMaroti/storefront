import React from 'react';
import { ProductCardProps } from '@/lib/types';
import {
    ProductCardContainer,
    ProductImage,
    ProductImageContainer,
    Name,
    PriceContainer,
} from '@/components/product/card/style';
import Price from '@/components/common/price/Price';

const priceConfig = {
    minimumFractionDigits: 0,
};

const ProductCard = ({ item, maxItemWidth }: ProductCardProps) => {
    return (
        <ProductCardContainer
            href={`/product/${item.slug}`}
            maxItemWidth={maxItemWidth}
        >
            <ProductImageContainer>
                <ProductImage
                    src={item.content.images[0].filename}
                    alt={item.content.images[0].alt}
                    fill
                />
            </ProductImageContainer>
            <div>
                <Name>{item.content.name}</Name>
                <PriceContainer>
                    <Price
                        amount={parseFloat(item.content.price)}
                        config={priceConfig}
                    />
                </PriceContainer>
            </div>
        </ProductCardContainer>
    );
};

export default ProductCard;
