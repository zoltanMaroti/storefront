import { createSelector } from 'reselect';
import { Product } from '@/lib/types';
import { RootState } from '@/lib/store';
import { calculateCartSize } from '@/lib/utils';

const getCart = (state: RootState): Product[] => state.cart.products;
export const selectCartSize = createSelector(getCart, calculateCartSize);
