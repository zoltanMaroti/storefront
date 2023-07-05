import React, { ReactNode } from 'react';

export type Locale = 'en' | 'fr' | 'de';

export type LayoutProps = {
    children: ReactNode;
    params: { locale: Locale };
};

export type PageProps = {
    params: { locale: Locale };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export type Category = {
    slug: string;
    name: string;
};

export type DrawerProps = {
    isOpen: boolean;
    children: ReactNode;
    onClick: () => void;
};

export type AccordionProps = {
    label: ReactNode;
    borderTop?: boolean;
    borderBottom?: boolean;
    padding?: boolean;
    children: ReactNode;
    defaultOpen?: boolean;
};

export type DropdownProps = {
    isActive: boolean;
    children: ReactNode;
};

export type MobileNavigationProps = {
    isOpen: boolean;
    onClick: () => void;
};

export type NavLinkProps = {
    href: string;
    children: ReactNode;
    onClick?: () => void;
    size?: string;
    renderer?: React.ElementType;
    isActive?: boolean;
};

export type LanguageSelectorProps = {
    inline?: boolean;
};

export type LanguageSelectorItem = {
    code: Locale;
    name: string;
};

export type ProductPageProps = PageProps & {
    params: { slug: string };
};

export type ProductImage = {
    filename: string;
    alt: string;
};

export type ProductContent = {
    name: string;
    description: string;
    images: ProductImage[];
    price: string;
    inventory_level: string;
    care_instructions: string;
    materials: string;
    width: string;
    height: string;
    length: string;
    weight: string;
    category: string;
    is_active: boolean;
};

export type Product = {
    uuid: string;
    content: ProductContent;
    tag_list: string[];
    slug: string;
    quantity?: number;
};
