import React from 'react';
import { CommerceApiClient } from '@/lib/api/commerce';
import { Product, RelatedProductsProps } from '@/lib/types';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import Swiper from '@/components/common/swiper/Swiper';
import ProductCard from '@/components/product/card/ProductCard';

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
    return <Swiper<Product> items={products} Renderer={ProductCard} />;
};

export default RelatedProducts;
