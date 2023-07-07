import { ICommerceApiClient } from '@/lib/interfaces';
import { Product } from '@/lib/types';
import { graphQLRequest } from '@/lib/client';
import {
    getProductQuery,
    GetProductRecommendationsQuery,
    getProductsByCategoryQuery,
    getProductsQuery,
} from '@/lib/queries/product';

export const CommerceApiClient: ICommerceApiClient = {
    getProduct: async (slug, language): Promise<Product> => {
        const response = await graphQLRequest(getProductQuery, {
            slug: `${language}/products/${slug}`,
            language,
        });

        return response.ProductItem;
    },
    getProductRecommendations: async (
        tags,
        language,
        uuid
    ): Promise<Product[]> => {
        const response = await graphQLRequest(GetProductRecommendationsQuery, {
            starts_with: `${language}/*`,
            with_tag: tags.toString(),
            language,
        });

        return response.ProductItems.items;
    },
    getProducts: async (language: string): Promise<Product[]> => {
        const response = await graphQLRequest(getProductsQuery, {
            starts_with: `${language}/*`,
            language,
        });

        return response.ProductItems.items;
    },
    getProductsByCategory: async (
        language: string,
        category: string
    ): Promise<Product[]> => {
        const response = await graphQLRequest(getProductsByCategoryQuery, {
            starts_with: `${language}/*`,
            language,
            category,
        });

        return response.ProductItems.items;
    },
};
