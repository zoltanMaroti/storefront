import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '@/lib/store/slices/cart';
import { searchSlice } from '@/lib/store/slices/search';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        search: searchSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
