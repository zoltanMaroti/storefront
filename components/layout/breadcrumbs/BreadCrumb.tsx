import React from 'react';
import Link from 'next/link';
import { BreadCrumbProps } from '@/lib/types';
import { BreadCrumbItemContainer } from '@/components/layout/breadcrumbs/style';

const BreadCrumb = ({ href, children }: BreadCrumbProps) => {
    return (
        <BreadCrumbItemContainer>
            <Link href={href} passHref>
                {children}
            </Link>
        </BreadCrumbItemContainer>
    );
};

export default BreadCrumb;
