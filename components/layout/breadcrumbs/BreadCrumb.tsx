import React from 'react';
import Link from 'next/link';
import { BreadCrumbProps } from '@/lib/types';
import { BreadCrumbItemContainer } from '@/components/layout/breadcrumbs/style';
import { useLocale } from 'next-intl';

const BreadCrumb = ({ href, children }: BreadCrumbProps) => {
    const locale = useLocale();

    return (
        <BreadCrumbItemContainer>
            <Link href={`/${locale}${href}`} passHref>
                {children}
            </Link>
        </BreadCrumbItemContainer>
    );
};

export default BreadCrumb;
