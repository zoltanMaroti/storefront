import React from 'react';
import { useTranslations } from 'next-intl';
import PageContainer from '@/components/layout/container/PageContainer';
import ContinueShopping from '@/components/common/button/shopping/ContinueShopping';

const NotFound = () => {
    const t = useTranslations('common');

    return (
        <PageContainer center={true}>
            <h2>{t('There are no products in this category')}</h2>
            <ContinueShopping />
        </PageContainer>
    );
};

export default NotFound;
