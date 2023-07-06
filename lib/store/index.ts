import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '@/lib/store/slices/cart';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
