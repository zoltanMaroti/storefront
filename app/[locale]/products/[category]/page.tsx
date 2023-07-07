import React from 'react';
import { CommerceApiClient } from '@/lib/api/commerce';
import { useLocale } from 'next-intl';
import { ProductsPageProps } from '@/lib/types';
import PageContainer from '@/components/layout/container/PageContainer';
import ProductGrid from '@/components/product/grid/ProductGrid';

const ProductsByCategoryPage = async ({
    params: { category },
}: ProductsPageProps) => {
    const locale = useLocale();
    const products = await CommerceApiClient.getProductsByCategory(
        locale,
        category
    );

    return (
        <PageContainer>
            <ProductGrid products={products} />
        </PageContainer>
    );
};

export default ProductsByCategoryPage;
