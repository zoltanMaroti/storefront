'use client';

import { NavLinkProps } from '@/lib/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from '@/components/layout/navigation/style';
import React from 'react';

const NavLink = ({ href, children, onClick, size }: NavLinkProps) => {
    const pathname = usePathname();

    return (
        <Link href={href}>
            <NavItem isActive={pathname === href} onClick={onClick} size={size}>
                {children}
            </NavItem>
        </Link>
    );
};

export default NavLink;
