import { Product, ProductImage } from '@/lib/types';
import { ReactImageGalleryItem } from 'react-image-gallery';
import {
    CATEGORIES,
    CENTS_MULTIPLIER,
    DEFAULT_CURRENCY,
    GALLERY_THUMBNAIL_HEIGHT,
} from '@/lib/constants';

export const normalizeImages = (
    images: ProductImage[]
): ReactImageGalleryItem[] => {
    return images.map((image) => {
        return {
            original: image.filename,
            thumbnail: image.filename,
            thumbnailHeight: GALLERY_THUMBNAIL_HEIGHT,
        };
    });
};

export const calculateCartSize = (products: Product[]) => {
    let quantity = 0;
    for (const product of products) {
        if (product.quantity) {
            quantity += product.quantity;
        }
    }
    return quantity;
};

export const calculateTotalPrice = (products: Product[]) => {
    let totalPrice = 0;
    for (const product of products) {
        if (product.quantity) {
            totalPrice += +product.quantity * +product.content.price;
        }
    }

    return totalPrice;
};

export const formatCurrency = (locale: string, amount: number, config?: {}) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: DEFAULT_CURRENCY,
        ...config,
    }).format(amount);
};

export const getCategoryNameBySlug = (slug: string) => {
    const category = CATEGORIES.find((category) => category.slug === slug);

    if (!category) {
        throw new Error('Unsupported category');
    }

    return category.name;
};

export const getEnv = (env: string) => {
    const value = process.env[env];

    if (!value) {
        throw new Error(`The environment variable ${env} is missing`);
    }

    return value;
};

export const convertToCents = (amount: number) => amount * CENTS_MULTIPLIER;

export const setDefaultQuantity = (product: Product) => {
    product.quantity = 1;
    return product;
};

export const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const removeLocale = (url: string, locale: string) => {
    if (url.includes(locale)) {
        return url.slice(url.indexOf('/', 1));
    }

    return url;
};
