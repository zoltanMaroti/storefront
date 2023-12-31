import {
    ReactNode,
    ElementType,
    ChangeEvent,
    InputHTMLAttributes,
} from 'react';
import { SortDirection } from '@/lib/constants';
import Stripe from 'stripe';

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
    image: string;
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
    onClick?: () => void;
};

export type DropdownProps = {
    isActive: boolean;
    children: ReactNode;
};

export type PaymentIntentRequestParams = {
    paymentIntentId: string;
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
    color?: string;
    Icon?: ElementType;
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
    config?: {};
};

export type ErrorPageProps = {
    error: Error;
    reset: () => void;
};

export type ProductPageTitleProps = {
    category?: string;
};

export type InputBaseProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: ReactNode;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
};

export type TextAreaBaseProps = InputBaseProps & {
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
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

export type TagProps = {
    children: ReactNode;
    onClick: () => void;
};

export type HeadingProps = {
    title: string;
    subTitle?: string;
};

export type CheckoutRequestBody = {
    products: Product[];
    locale: Stripe.Checkout.Session.Locale;
};

export type CheckoutSessionUrl = { url: string };

export type BuyNowProps = {
    product: Product;
};

export type CheckoutProps = {
    cart: Product[];
};

export type CheckoutSession = {
    customer: {
        name: string;
        email: string;
    };
    order_number: string;
};

export type BreadCrumbProps = GenericContainerProps & {
    href: string;
};

export type ProductBreadCrumbsProps = {
    name?: string;
    slug?: string;
    category?: string;
    renderHome?: boolean;
};

export type ContactFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    consentGiven: boolean;
};

export type FormErrorMessageProps = {
    error: string;
};

export type ContactFormSuccessProps = {
    onClick: () => void;
};

export type OrderConfirmedEmailProps = {
    id: string;
    createdAt: number;
    currency: string | null;
    amountTotal: number | null;
    amountSubtotal: number | null;
    customerDetails: Stripe.Checkout.Session.CustomerDetails | null;
    shippingDetails: Stripe.Checkout.Session.ShippingDetails | null;
    shippingCost: Stripe.Checkout.Session.ShippingCost | null;
    lineItems: Stripe.LineItem[] | undefined;
    paymentMethod: Stripe.PaymentMethod;
    locale: Locale;
};

export type PaymentCardProps = {
    payment: Stripe.PaymentIntent;
    index: number;
};

export type AdminHeaderProps = {
    email: string | null | undefined;
    name: string | null | undefined;
};

export type TrackingNumberRequestBody = {
    trackingNumber: string;
};

export type CreateTrackingNumberParams = {
    paymentIntentId: string;
    trackingNumber: string;
};

export type TrackingNumberProps = {
    defaultTrackingNumber?: string;
    paymentIntentId: string;
};

export type TrackingNumberDialogProps = TrackingNumberProps & {
    isOpen: boolean;
    onCancel: () => void;
};
