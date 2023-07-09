import {
    ReactNode,
    ElementType,
    HTMLInputTypeAttribute,
    ChangeEvent,
} from 'react';
import { SortDirection } from '@/lib/constants';

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
    renderer?: ElementType;
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

export type ProductsPageProps = PageProps & {
    params: { category: string };
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

export type ProductGridProps = {
    products: Product[];
};

export type GenericContainerProps = {
    children: ReactNode;
    center?: boolean;
};

export type GalleryProps = {
    images: ProductImage[];
};

export type SpinnerProps = {
    color?: string;
    size?: string;
};

export type ButtonProps = {
    disabled?: boolean;
    loading?: boolean;
    width?: string;
    variant?: 'primary' | 'secondary';
    children: ReactNode;
    onClick?: () => void;
};

export type GenericSwiperProps<T> = {
    items: T[];
    maxItemWidth?: string;
    Renderer: ElementType;
};

export type RelatedProductsProps = {
    product: Product;
};

export type ProductCardProps = {
    item: Product;
    maxItemWidth?: string;
};

export type CartState = {
    products: Product[];
};

export type AddToCartProps = {
    product: Product;
};

export type CartItemProps = {
    product: Product;
};

export type PriceProps = {
    amount: number;
    currency?: string;
};

export type ErrorPageProps = {
    error: Error;
    reset: () => void;
};

export type ProductPageTitleProps = {
    category?: string;
};

export type InputBaseProps = {
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    disabled?: boolean;
    icon?: ReactNode;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type SearchParams = {
    searchTerm: string;
    language: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: SortDirection;
};

export type SearchConfig = {
    [key: string]: string | number | undefined;
};

export type DrawerContent = 'filter' | 'sort';
