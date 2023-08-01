import { Category, LanguageSelectorItem } from '@/lib/types';
import { ReactImageGalleryItem } from 'react-image-gallery';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
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
        image: '/assets/images/clocks.jpeg',
    },
    {
        name: 'Images',
        slug: 'images',
        image: '/assets/images/images.jpeg',
    },
    {
        name: 'Trays',
        slug: 'trays',
        image: '/assets/images/trays.jpeg',
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

export const DEFAULT_LOCALE = 'en';

export const DEFAULT_SHIPPING_RATE = 15;

export const DEFAULT_SHIPPING_PROVIDER = 'DHL';

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

export const CENTS_MULTIPLIER = 100;

export const validationRules = {
    firstName: {
        required: {
            value: true,
            message: 'Please enter your first name',
        },
    },
    lastName: {
        required: {
            value: true,
            message: 'Please enter your last name',
        },
    },
    email: {
        required: {
            value: true,
            message: 'Please enter your email address',
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
        },
    },
    message: {
        required: {
            value: true,
            message: 'Please enter your message',
        },
    },
};

export enum StripeWebhookEvents {
    ASYNC_PAYMENT_SUCCESS = 'checkout.session.async_payment_succeeded',
    COMPLETED = 'checkout.session.completed',
    PAYMENT_FAILED = 'checkout.session.async_payment_failed',
}

export enum AuthStatuses {
    AUTHENTICATED = 'authenticated',
    UNAUTHENTICATED = 'unauthenticated',
    LOADING = 'loading',
}
