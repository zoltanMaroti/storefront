import { ICommerceApiClient } from '@/lib/interfaces';
import { Product } from '@/lib/types';
import { graphQLRequest } from '@/lib/client';
import {
    getHighlightedProducts,
    getProductQuery,
    GetProductRecommendationsQuery,
    getProductsByCategoryQuery,
    getProductsQuery,
    searchProductQuery,
} from '@/lib/queries/product';
import { SortDirection } from '@/lib/constants';
import { setDefaultQuantity } from '@/lib/utils';

export const CommerceApiClient: ICommerceApiClient = {
    getProduct: async (slug, language): Promise<Product> => {
        const response = await graphQLRequest(getProductQuery, {
            slug: `${language}/products/${slug}`,
            language,
        });

        if (response.ProductItem) {
            return setDefaultQuantity(response.ProductItem);
        }

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
    search: async (
        searchTerm: string,
        language: string,
        category?: string,
        minPrice?: number,
        maxPrice?: number,
        sort?: SortDirection
    ): Promise<Product[]> => {
        const response = await graphQLRequest(searchProductQuery, {
            starts_with: `${language}/*`,
            search_term: searchTerm,
            ...(category && { category: category }),
            ...(minPrice && { minPrice: minPrice }),
            ...(maxPrice && { maxPrice: maxPrice }),
            ...(sort && { sort: `content.price:${sort}` }),
        });

        return response.ProductItems.items;
    },
    getHighlightedProducts: async (language: string): Promise<Product[]> => {
        const response = await graphQLRequest(getHighlightedProducts, {
            starts_with: `${language}/*`,
        });

        return response.ProductItems.items;
    },
};
