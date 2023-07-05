import React from 'react';
import { ProductPageProps } from '@/lib/types';
import { CommerceApiClient } from '@/lib/api/commerce';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/container/PageContainer';
import { ProductContainer } from '@/app/[locale]/product/[slug]/style';
import Gallery from '@/components/product/gallery/Gallery';
import ProductDetails from '@/components/product/datasheet/ProductDetails';

const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
    const locale = useLocale();
    const product = await CommerceApiClient.getProduct(slug, locale);

    if (!product) {
        return notFound();
    }

    return (
        <PageContainer>
            <ProductContainer>
                <Gallery images={product.content.images} />
                <ProductDetails product={product} />
            </ProductContainer>
            {product.content.name}
        </PageContainer>
    );
};

export default ProductPage;
