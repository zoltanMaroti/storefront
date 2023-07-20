import React from 'react';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiChevronLeft } from 'react-icons/fi';

const ContinueShopping = () => {
    const t = useTranslations('common');

    return (
        <Link href={'/products'}>
            <Button color={'var(--color-accent-primary)'} Icon={FiChevronLeft}>
                {t('Continue shopping')}
            </Button>
        </Link>
    );
};

export default ContinueShopping;
