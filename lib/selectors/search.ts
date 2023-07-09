import { RootState } from '@/lib/store';
import { SearchConfig } from '@/lib/types';
import { createSelector } from 'reselect';
import { SortDirection } from '@/lib/constants';

const getSearch = (state: RootState): SearchConfig => state.search;
export const selectSearchTerm = createSelector(
    getSearch,
    (search) => search.searchTerm as string
);
export const selectCategory = createSelector(
    getSearch,
    (search) => search.category as string
);
export const selectPriceRange = createSelector(
    getSearch,
    (search) => [search.minPrice, search.maxPrice] as number[]
);
export const selectSort = createSelector(
    getSearch,
    (search) => search.sort as SortDirection
);
