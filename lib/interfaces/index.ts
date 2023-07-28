import { CheckoutSession, ContactFormValues, Product } from '@/lib/types';
import { SortDirection } from '@/lib/constants';

export interface ICommerceApiClient {
    getProduct: (slug: string, language: string) => Promise<Product>;
    getProductRecommendations: (
        tags: string[],
        language: string
    ) => Promise<Product[]>;
    getProducts: (language: string) => Promise<Product[]>;
    getProductsByCategory: (
        language: string,
        category: string
    ) => Promise<Product[]>;
    search: (
        searchTerm: string,
        language: string,
        category?: string,
        minPrice?: number,
        maxPrice?: number,
        sort?: SortDirection
    ) => Promise<Product[]>;
    getHighlightedProducts: (language: string) => Promise<Product[]>;
}

export interface IPaymentApiClient {
    getCheckoutSessionUrl: (
        products: Product[],
        locale: string
    ) => Promise<string>;
    getCheckoutSession: (sessionId: string) => Promise<CheckoutSession>;
}

export interface IEmailApiClient {
    sendContactForm: (contactForm: ContactFormValues) => Promise<string>;
}
