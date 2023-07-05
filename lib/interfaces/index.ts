import { Product } from '@/lib/types';

export interface ICommerceApiClient {
    getProduct: (slug: string, language: string) => Promise<Product>;
}
