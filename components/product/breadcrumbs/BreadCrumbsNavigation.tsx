import React from 'react';
import BreadCrumb from '@/components/layout/breadcrumbs/BreadCrumb';
import BreadCrumbs from '@/components/layout/breadcrumbs/BreadCrumbs';
import { ProductBreadCrumbsProps } from '@/lib/types';
import { useTranslations } from 'next-intl';
import { capitalize } from '@/lib/utils';

const BreadCrumbsNavigation = ({
    name,
    slug,
    category,
    renderHome = true,
}: ProductBreadCrumbsProps) => {
    const t = useTranslations('common');

    return (
        <BreadCrumbs>
            {renderHome && <BreadCrumb href={'/'}>{t('Home')}</BreadCrumb>}
            <BreadCrumb href={'/products'}>{t('Products')}</BreadCrumb>
            {category && (
                <BreadCrumb href={`/products/${category}`}>
                    {t(capitalize(category))}
                </BreadCrumb>
            )}
            {name && slug && (
                <BreadCrumb href={`/product/${slug}`}>{name}</BreadCrumb>
            )}
        </BreadCrumbs>
    );
};

export default BreadCrumbsNavigation;
