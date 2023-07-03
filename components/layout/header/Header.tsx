'use client';

import React, { useState } from 'react';
import {
    DesktopLogo,
    DesktopNavigation,
    HeaderContainer,
    NavItem,
    ShopMenuItem,
} from '@/components/layout/header/style';
import { useTranslations } from 'next-intl';
import Dropdown from '@/components/layout/dropdown/Dropdown';
import { DropdownItem } from '@/components/layout/dropdown/style';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

const Header = () => {
    const t = useTranslations('common');

    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const onMouseOver = () => setDropdownOpen(true);
    const onMouseOut = () => setDropdownOpen(false);

    return (
        <HeaderContainer>
            <DesktopNavigation>
                <li>
                    <NavItem>{t('Home')}</NavItem>
                </li>
                <ShopMenuItem onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                    <NavItem isActive={isDropdownOpen}>{t('Shop')}</NavItem>
                    <Dropdown isActive={isDropdownOpen}>
                        <DropdownItem>
                            <Link href={'/products'}>{t('All products')}</Link>
                        </DropdownItem>
                        {CATEGORIES.map((category) => (
                            <DropdownItem key={category.slug}>
                                <Link href={`/products/${category.slug}`}>
                                    {t(`${category.name}`)}
                                </Link>
                            </DropdownItem>
                        ))}
                    </Dropdown>
                </ShopMenuItem>
                <DesktopLogo
                    alt="Logo"
                    src={'/assets/logos/logo.png'}
                    width={150}
                    height={150}
                    priority
                />
                <li>
                    <NavItem>{t('About us')}</NavItem>
                </li>
                <li>
                    <NavItem>{t('FAQ')}</NavItem>
                </li>
            </DesktopNavigation>
        </HeaderContainer>
    );
};

export default Header;
