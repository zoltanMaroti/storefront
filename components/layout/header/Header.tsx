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
    LanguageSelectorContainer,
    CartIconContainer,
    CartSizeIndicator,
    ShopMenuInnerContainer,
    IconContainer,
    DesktopMenuContainer,
} from '@/components/layout/header/style';
import { useTranslations } from 'next-intl';
import Dropdown from '@/components/layout/dropdown/Dropdown';
import { CATEGORIES } from '@/lib/constants';
import { FiSearch, FiShoppingBag, FiMenu, FiChevronDown } from 'react-icons/fi';
import MobileNavigation from '@/components/layout/navigation/MobileNavigation';
import NavLink from '@/components/layout/navigation/NavLink';
import Link from 'next/link';
import LanguageSelector from '@/components/layout/header/language/LanguageSelector';
import { useSelector } from 'react-redux';
import { selectCartSize } from '@/lib/selectors/cart';
import { usePathname } from 'next/navigation';

const Header = () => {
    const t = useTranslations('common');
    const pathname = usePathname();

    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const cartSize = useSelector(selectCartSize);

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
                <Link href={'/'}>
                    <DesktopLogo
                        alt="Logo"
                        src={'/assets/logos/logo.png'}
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
                <DesktopMenuContainer>
                    <ShopMenuItem
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                    >
                        <NavLink
                            href={'#'}
                            renderer={HeaderNavItem}
                            isActive={
                                isDropdownOpen || pathname.includes('products')
                            }
                        >
                            <ShopMenuInnerContainer>
                                {t('Shop')}
                                <IconContainer isOpen={isDropdownOpen}>
                                    <FiChevronDown size={16} />
                                </IconContainer>
                            </ShopMenuInnerContainer>
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
                    <NavLink href={'/about'} renderer={HeaderNavItem}>
                        {t('About us')}
                    </NavLink>
                    <NavLink href={'/faq'} renderer={HeaderNavItem}>
                        {t('FAQ')}
                    </NavLink>
                    <NavLink href={'/contact'} renderer={HeaderNavItem}>
                        {t('Contact')}
                    </NavLink>
                </DesktopMenuContainer>
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
                    <LanguageSelectorContainer>
                        <LanguageSelector />
                    </LanguageSelectorContainer>
                    <Link href={'/search'}>
                        <FiSearch size={24} />
                    </Link>
                    <Link href={'/cart'}>
                        <CartIconContainer>
                            <FiShoppingBag size={24} />
                            {cartSize ? (
                                <CartSizeIndicator>
                                    {cartSize}
                                </CartSizeIndicator>
                            ) : null}
                        </CartIconContainer>
                    </Link>
                </InnerContainer>
            </IconsContainer>
        </HeaderContainer>
    );
};

export default Header;
