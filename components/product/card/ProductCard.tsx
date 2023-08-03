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
import { useLocale } from 'next-intl';

const priceConfig = {
    minimumFractionDigits: 0,
};

const ProductCard = ({ item, maxItemWidth }: ProductCardProps) => {
    const locale = useLocale();

    return (
        <ProductCardContainer
            href={`/${locale}/product/${item.slug}`}
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
