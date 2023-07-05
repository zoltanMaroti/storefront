import { ICommerceApiClient } from '@/lib/interfaces';
import { Product } from '@/lib/types';
import { graphQLRequest } from '@/lib/client';
import { getProductQuery } from '@/lib/queries/product';

export const CommerceApiClient: ICommerceApiClient = {
    getProduct: async (slug, language): Promise<Product> => {
        const response = await graphQLRequest(getProductQuery, {
            slug: `${language}/products/${slug}`,
            language,
        });

        return response.ProductItem;
    },
};
