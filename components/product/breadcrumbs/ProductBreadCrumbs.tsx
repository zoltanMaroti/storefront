import React from 'react';
import BreadCrumb from '@/components/layout/breadcrumbs/BreadCrumb';
import BreadCrumbs from '@/components/layout/breadcrumbs/BreadCrumbs';
import { ProductBreadCrumbsProps } from '@/lib/types';
import { useTranslations } from 'next-intl';
import { capitalize } from '@/lib/utils';

const ProductBreadCrumbs = ({
    name,
    slug,
    category,
}: ProductBreadCrumbsProps) => {
    const t = useTranslations('common');

    return (
        <BreadCrumbs>
            <BreadCrumb href={'/products'}>{t('Products')}</BreadCrumb>
            <BreadCrumb href={`/products/${category}`}>
                {t(capitalize(category))}
            </BreadCrumb>
            <BreadCrumb href={`/products/${slug}`}>{name}</BreadCrumb>
        </BreadCrumbs>
    );
};

export default ProductBreadCrumbs;
