import React from 'react';
import { CommerceApiClient } from '@/lib/api/commerce';
import { useLocale } from 'next-intl';
import PageContainer from '@/components/layout/container/PageContainer';
import ProductGrid from '@/components/product/grid/ProductGrid';
import { notFound } from 'next/navigation';
import ProductPageTitle from '@/components/product/title/ProductPageTitle';

const ProductsPage = async () => {
    const locale = useLocale();
    const products = await CommerceApiClient.getProducts(locale);

    if (!products.length) {
        return notFound();
    }

    return (
        <PageContainer>
            <ProductPageTitle />
            <ProductGrid products={products} />
        </PageContainer>
    );
};

export default ProductsPage;
