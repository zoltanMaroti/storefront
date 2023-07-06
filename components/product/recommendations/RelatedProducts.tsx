import React from 'react';
import { CommerceApiClient } from '@/lib/api/commerce';
import { Product, RelatedProductsProps } from '@/lib/types';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import Swiper from '@/components/common/swiper/Swiper';
import ProductCard from '@/components/product/card/ProductCard';
import SectionTitle from '@/components/product/recommendations/SectionTitle';
import { PRODUCT_CARD_MAX_WIDTH } from '@/lib/constants';

const RelatedProducts = async ({ product }: RelatedProductsProps) => {
    const locale = useLocale();
    const { tag_list, uuid } = product;
    const products = await CommerceApiClient.getProductRecommendations(
        tag_list,
        locale,
        uuid
    );

    if (!product) {
        return notFound();
    }
    return (
        <>
            <SectionTitle />
            <Swiper<Product>
                items={products}
                maxItemWidth={PRODUCT_CARD_MAX_WIDTH}
                Renderer={ProductCard}
            />
        </>
    );
};

export default RelatedProducts;
