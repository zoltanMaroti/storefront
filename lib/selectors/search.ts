import { RootState } from '@/lib/store';
import { SearchConfig } from '@/lib/types';
import { createSelector } from 'reselect';

const getSearch = (state: RootState): SearchConfig => state.search;
export const selectSearchTerm = createSelector(
    getSearch,
    (search) => search.searchTerm as string
);
