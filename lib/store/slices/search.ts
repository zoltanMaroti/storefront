import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchConfig } from '@/lib/types';

const initialState: SearchConfig = {};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchConfig: (state, { payload }: PayloadAction<SearchConfig>) => {
            for (const [key, value] of Object.entries(payload)) {
                state[key] = value;
            }
        },
    },
});

export const { setSearchConfig } = searchSlice.actions;
