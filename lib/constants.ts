import { Category, LanguageSelectorItem } from '@/lib/types';
import { ReactImageGalleryItem } from 'react-image-gallery';

export const API_URL = process.env.NEXT_PUBLIC_COMMERCE_PROVIDER_API_URL;
export const API_TOKEN = process.env.NEXT_PUBLIC_COMMERCE_PROVIDER_ACCESS_TOKEN;

export const screenSizes = {
    SMALL: '768px',
    MEDIUM: '1024px',
    LARGE: '1200px',
};

export const CATEGORIES: Category[] = [
    {
        name: 'Clocks',
        slug: 'clocks',
    },
    {
        name: 'Images',
        slug: 'images',
    },
    {
        name: 'Trays',
        slug: 'trays',
    },
];

export const languages: LanguageSelectorItem[] = [
    {
        code: 'fr',
        name: 'Français',
    },
    {
        code: 'de',
        name: 'Deutsch',
    },
    {
        code: 'en',
        name: 'English',
    },
];

export const GALLERY_THUMBNAIL_HEIGHT = 80;

export const PRODUCT_CARD_MAX_WIDTH = '300px';

export const cart = {
    MIN_QUANTITY: 1,
    MAX_QUANTITY: 3,
};

export const DEFAULT_CURRENCY = 'EUR';

export enum SortDirection {
    ASCENDING = 'asd',
    DESCENDING = 'desc',
}

export const MAX_PRICE = 200;

export const HERO_METADATA: ReactImageGalleryItem[] = [
    {
        original: '/assets/images/hero-1.jpeg',
        originalAlt: 'New Collection',
        originalTitle: 'Elegant & timeless',
        thumbnailAlt: '/products',
        thumbnailTitle: 'Show now',
    },
    {
        original: '/assets/images/hero-2.jpeg',
        originalAlt: 'Back in stock',
        originalTitle: 'Quality materials',
        thumbnailAlt: '/products',
        thumbnailTitle: 'View collection',
    },
    {
        original: '/assets/images/hero-3.jpeg',
        originalAlt: 'New Collection',
        originalTitle: 'Craftsmanship',
        thumbnailAlt: '/products',
        thumbnailTitle: 'View collection',
    },
];
