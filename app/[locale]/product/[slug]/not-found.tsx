import React from 'react';
import { useTranslations } from 'next-intl';
import PageContainer from '@/components/layout/container/PageContainer';

const NotFound = () => {
    const t = useTranslations('common');

    return <PageContainer>{t('Product not found')}</PageContainer>;
};

export default NotFound;
