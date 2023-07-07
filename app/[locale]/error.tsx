'use client';

import React, { useEffect } from 'react';
import PageContainer from '@/components/layout/container/PageContainer';
import { useTranslations } from 'next-intl';
import { ErrorPageProps } from '@/lib/types';
import Button from '@/components/common/button/Button';

const Error = ({ error, reset }: ErrorPageProps) => {
    const t = useTranslations('common');

    useEffect(() => {
        // TODO log error to reporting service
        console.error(error);
    }, [error]);

    return (
        <PageContainer center={true}>
            <h2>{t('Something went wrong')}</h2>
            <Button onClick={reset} width={'120px'}>
                {t('Reset')}
            </Button>
        </PageContainer>
    );
};

export default Error;
