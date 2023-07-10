import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchConfig } from '@/lib/types';
import { MAX_PRICE } from '@/lib/constants';

const initialState: SearchConfig = {
    minPrice: 0,
    maxPrice: MAX_PRICE,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchConfig: (state, { payload }: PayloadAction<SearchConfig>) => {
            for (const [key, value] of Object.entries(payload)) {
                state[key] = value;
            }
        },
        resetSearch: () => {
            return initialState;
        },
        resetCategory: (state) => {
            state.category = undefined;
        },
        resetPriceRange: (state) => {
            state.minPrice = 0;
            state.maxPrice = MAX_PRICE;
        },
        resetSearchTerm: (state) => {
            state.searchTerm = undefined;
        },
    },
});

export const {
    setSearchConfig,
    resetSearch,
    resetCategory,
    resetSearchTerm,
    resetPriceRange,
} = searchSlice.actions;
