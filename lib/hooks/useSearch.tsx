import { Product } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { CommerceApiClient } from '@/lib/api/commerce';
import { useSelector } from 'react-redux';
import {
    selectCategory,
    selectPriceRange,
    selectSearchTerm,
    selectSort,
} from '@/lib/selectors/search';
import useDebounce from '@/lib/hooks/useDebounce';
import { useLocale } from 'next-intl';

export const useSearch = () => {
    const language = useLocale();
    const category = useSelector(selectCategory);
    const priceRange = useSelector(selectPriceRange);
    const searchTerm = useSelector(selectSearchTerm);
    const debouncedSearchTerm = useDebounce(searchTerm);
    const sort = useSelector(selectSort);

    return useQuery<Product[], Error>({
        queryKey: [
            'search',
            JSON.stringify({
                debouncedSearchTerm,
                language,
                category,
                minPrice: priceRange[0],
                maxPrice: priceRange[1],
                sort,
            }),
        ],
        queryFn: () =>
            CommerceApiClient.search(
                debouncedSearchTerm,
                language,
                category,
                priceRange[0],
                priceRange[1],
                sort
            ),
        keepPreviousData: true,
    });
};
