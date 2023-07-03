import { ReactNode } from 'react';

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
