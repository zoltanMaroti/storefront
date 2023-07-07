'use client';

import React from 'react';
import { getCategoryNameBySlug } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { ProductPageTitleProps } from '@/lib/types';

const ProductPageTitle = ({ category }: ProductPageTitleProps) => {
    const t = useTranslations('common');

    if (!category) {
        return <h2>{t('All products')}</h2>;
    }

    return <h2>{t(getCategoryNameBySlug(category))}</h2>;
};

export default ProductPageTitle;
