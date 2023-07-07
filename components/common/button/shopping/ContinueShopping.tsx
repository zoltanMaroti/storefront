import React from 'react';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ContinueShopping = () => {
    const t = useTranslations('common');

    return (
        <Link href={'/products'}>
            <Button>{t('Continue shopping')}</Button>
        </Link>
    );
};

export default ContinueShopping;
