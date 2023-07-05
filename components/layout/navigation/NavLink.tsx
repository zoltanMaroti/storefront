'use client';

import { NavLinkProps } from '@/lib/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from '@/components/layout/navigation/style';
import React from 'react';

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

    return (
        <Link href={href}>
            <Wrapper
                isActive={isActive || pathname === href}
                onClick={onClick}
                size={size}
            >
                {children}
            </Wrapper>
        </Link>
    );
};

export default NavLink;
