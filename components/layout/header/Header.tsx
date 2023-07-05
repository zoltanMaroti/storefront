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
} from '@/components/layout/header/style';
import { useTranslations } from 'next-intl';
import Dropdown from '@/components/layout/dropdown/Dropdown';
import { CATEGORIES } from '@/lib/constants';
import { FiMenu } from 'react-icons/fi';
import MobileNavigation from '@/components/layout/navigation/MobileNavigation';
import NavLink from '@/components/layout/navigation/NavLink';

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
                <DesktopLogo
                    alt="Logo"
                    src={'/assets/logos/logo.png'}
                    width={150}
                    height={150}
                    priority
                />
                <NavLink href={'/about'} renderer={HeaderNavItem}>
                    {t('About us')}
                </NavLink>
                <NavLink href={'/faq'} renderer={HeaderNavItem}>
                    {t('FAQ')}
                </NavLink>
            </DesktopNavigation>
            <MobileHeader>
                <MobileLogo
                    alt="Logo"
                    src={'/assets/logos/logo.png'}
                    width={100}
                    height={100}
                    priority
                />
            </MobileHeader>
        </HeaderContainer>
    );
};

export default Header;
