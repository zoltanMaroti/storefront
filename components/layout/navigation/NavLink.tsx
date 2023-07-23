'use client';

import { NavLinkProps } from '@/lib/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from '@/components/layout/navigation/style';
import React from 'react';
import { useLocale } from 'next-intl';
import { removeLocale } from '@/lib/utils';

const NavLink = ({
    href,
    children,
    onClick,
    size,
    isActive,
    renderer = NavItem,
}: NavLinkProps) => {
    const pathname = usePathname();
    const Wrapper = renderer;
    const locale = useLocale();

    return (
        <Link href={`/${locale}${href}`}>
            <Wrapper
                isActive={isActive || removeLocale(pathname, locale) === href}
                onClick={onClick}
                size={size}
            >
                {children}
            </Wrapper>
        </Link>
    );
};

export default NavLink;
