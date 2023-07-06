import { ICommerceApiClient } from '@/lib/interfaces';
import { Product } from '@/lib/types';
import { graphQLRequest } from '@/lib/client';
import {
    getProductQuery,
    GetProductRecommendationsQuery,
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
};
