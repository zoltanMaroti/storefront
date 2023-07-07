import React from 'react';
import { CommerceApiClient } from '@/lib/api/commerce';
import { useLocale } from 'next-intl';
import PageContainer from '@/components/layout/container/PageContainer';
import ProductGrid from '@/components/product/grid/ProductGrid';

const ProductsPage = async () => {
    const locale = useLocale();
    const products = await CommerceApiClient.getProducts(locale);

    return (
        <PageContainer>
            <ProductGrid products={products} />
        </PageContainer>
    );
};

export default ProductsPage;
