import { GraphQLClient } from 'graphql-request';
import { API_URL, API_TOKEN } from '@/lib/constants';
import { RequestDocument } from 'graphql-request/src/types';

if (!API_URL) {
    throw new Error(
        `The environment variable NEXT_PUBLIC_COMMERCE_PROVIDER_API_URL is missing and it's required to access your store`
    );
}

if (!API_TOKEN) {
    throw new Error(
        `The environment variable NEXT_PUBLIC_COMMERCE_PROVIDER_ACCESS_TOKEN is missing and it's required to access your store`
    );
}

const client = new GraphQLClient(API_URL, {
    headers: {
        token: API_TOKEN,
        version: 'published',
    },
});

export const graphQLRequest = (
    query: RequestDocument,
    variables = {}
): Promise<any> => {
    return client.request(query, variables).catch((error) => {
        return Promise.reject(error);
    });
};
