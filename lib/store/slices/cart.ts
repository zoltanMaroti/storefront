import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/lib/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '@/lib/types';

const initialState: CartState = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }: PayloadAction<Product>) => {
            const itemInCart = state.products.find(
                (product) => product.uuid === payload.uuid
            );

            if (itemInCart) {
                itemInCart.quantity!++;
            } else {
                state.products.push({
                    ...payload,
                    quantity: 1,
                });
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
