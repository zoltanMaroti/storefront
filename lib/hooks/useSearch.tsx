import { Product, SearchParams } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { CommerceApiClient } from '@/lib/api/commerce';

export const useSearch = (searchParams: SearchParams) => {
    const { searchTerm, language, category, minPrice, maxPrice, sort } =
        searchParams;

    return useQuery<Product[], Error>({
        queryKey: ['search', JSON.stringify(searchParams)],
        queryFn: () =>
            CommerceApiClient.search(
                searchTerm,
                language,
                category,
                minPrice,
                maxPrice,
                sort
            ),
        keepPreviousData: true,
    });
};
