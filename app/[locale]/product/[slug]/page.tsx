import React, { Suspense } from 'react';
import { ProductPageProps } from '@/lib/types';
import { CommerceApiClient } from '@/lib/api/commerce';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/layout/container/PageContainer';
import { Column, ProductContainer } from '@/app/[locale]/product/[slug]/style';
import Gallery from '@/components/product/gallery/Gallery';
import ProductDetails from '@/components/product/datasheet/ProductDetails';
import RelatedProducts from '@/components/product/recommendations/RelatedProducts';
import BreadCrumbsNavigation from '@/components/product/breadcrumbs/BreadCrumbsNavigation';

const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
    const locale = useLocale();
    const product = await CommerceApiClient.getProduct(slug, locale);

    if (!product) {
        return notFound();
    }

    return (
        <PageContainer>
            <ProductContainer>
                <Column>
                    <BreadCrumbsNavigation
                        slug={product.slug}
                        name={product.content.name}
                        category={product.content.category}
                        renderHome={false}
                    />
                    <Gallery images={product.content.images} />
                </Column>
                <ProductDetails product={product} />
            </ProductContainer>
            <Suspense>
                <RelatedProducts product={product} />
            </Suspense>
        </PageContainer>
    );
};

export default ProductPage;
