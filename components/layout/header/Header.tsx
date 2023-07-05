'use client';

import React, { useState } from 'react';
import {
    DesktopLogo,
    DesktopNavigation,
    HeaderContainer,
    MobileNavigationContainer,
    HeaderNavItem,
    ShopMenuItem,
    MobileHeader,
    MobileLogo,
    IconsContainer,
    InnerContainer,
} from '@/components/layout/header/style';
import { useTranslations } from 'next-intl';
import Dropdown from '@/components/layout/dropdown/Dropdown';
import { CATEGORIES } from '@/lib/constants';
import { FiSearch, FiShoppingBag, FiMenu } from 'react-icons/fi';
import MobileNavigation from '@/components/layout/navigation/MobileNavigation';
import NavLink from '@/components/layout/navigation/NavLink';
import Link from 'next/link';

const Header = () => {
    const t = useTranslations('common');

    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const onMouseOver = () => setDropdownOpen(true);
    const onMouseOut = () => setDropdownOpen(false);

    const toggleMenu = () => setMenuOpen((prevState) => !prevState);

    return (
        <HeaderContainer>
            <MobileNavigationContainer>
                <FiMenu size={24} onClick={toggleMenu} />
                <MobileNavigation isOpen={isMenuOpen} onClick={toggleMenu} />
            </MobileNavigationContainer>
            <DesktopNavigation>
                <NavLink href={'/'} renderer={HeaderNavItem}>
                    {t('Home')}
                </NavLink>
                <ShopMenuItem onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                    <NavLink
                        href={'#'}
                        renderer={HeaderNavItem}
                        isActive={isDropdownOpen}
                    >
                        {t('Shop')}
                    </NavLink>
                    <Dropdown isActive={isDropdownOpen}>
                        <NavLink
                            href={'/products'}
                            size={'var(--font-size-md)'}
                        >
                            {t('All products')}
                        </NavLink>
                        {CATEGORIES.map((category) => (
                            <NavLink
                                key={category.slug}
                                href={`/products/${category.slug}`}
                                size={'var(--font-size-md)'}
                            >
                                {t(`${category.name}`)}
                            </NavLink>
                        ))}
                    </Dropdown>
                </ShopMenuItem>
                <Link href={'/'}>
                    <DesktopLogo
                        alt="Logo"
                        src={'/assets/logos/logo.png'}
                        width={150}
                        height={150}
                        priority
                    />
                </Link>
                <NavLink href={'/about'} renderer={HeaderNavItem}>
                    {t('About us')}
                </NavLink>
                <NavLink href={'/faq'} renderer={HeaderNavItem}>
                    {t('FAQ')}
                </NavLink>
            </DesktopNavigation>
            <MobileHeader>
                <Link href={'/'}>
                    <MobileLogo
                        alt="Logo"
                        src={'/assets/logos/logo.png'}
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
            </MobileHeader>
            <IconsContainer>
                <InnerContainer>
                    <Link href={'/search'}>
                        <FiSearch size={24} />
                    </Link>
                    <Link href={'/cart'}>
                        <FiShoppingBag size={24} />
                    </Link>
                </InnerContainer>
            </IconsContainer>
        </HeaderContainer>
    );
};

export default Header;
