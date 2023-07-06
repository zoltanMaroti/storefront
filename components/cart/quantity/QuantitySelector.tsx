'use client';

import React, { ChangeEvent, useState } from 'react';
import { CartItemProps } from '@/lib/types';
import {
    QuantityButton,
    QuantityInput,
    QuantitySelectorContainer,
} from '@/components/cart/quantity/style';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '@/lib/store/slices/cart';
import { cart } from '@/lib/constants';

const QuantitySelector = ({ product }: CartItemProps) => {
    const [value, setValue] = useState<number>(product.quantity!);
    const dispatch = useDispatch();

    const incrementQuantity = () => {
        if (value < cart.MAX_QUANTITY) {
            setValue((prevState) => prevState + 1);
            dispatch(increment(product));
        }
    };

    const decrementQuantity = () => {
        if (value > cart.MIN_QUANTITY) {
            setValue((prevState) => prevState - 1);
            dispatch(decrement(product));
        }
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setValue(+event.target.value);

    return (
        <QuantitySelectorContainer>
            <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
            <QuantityInput
                type="number"
                min={cart.MIN_QUANTITY}
                max={cart.MAX_QUANTITY}
                value={value}
                onChange={onChange}
                disabled
            />
            <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
        </QuantitySelectorContainer>
    );
};

export default QuantitySelector;
