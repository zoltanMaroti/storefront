import React from 'react';
import { CartItemProps } from '@/lib/types';
import Link from 'next/link';
import {
    ProductContainer,
    ProductDataContainer,
    ProductImage,
    Name,
    ButtonsContainer,
    QuantityPrice,
} from '@/components/cart/style';
import QuantitySelector from '@/components/cart/quantity/QuantitySelector';
import RemoveFromCart from '@/components/cart/remove/RemoveFromCart';
import Price from '@/components/common/price/Price';

const CartItem = ({ product }: CartItemProps) => {
    return (
        <>
            <Link href={`/product/${product.slug}`}>
                <ProductContainer>
                    <div>
                        <ProductImage
                            src={product.content.images[0].filename}
                            alt={product.content.images[0].alt}
                            width={100}
                            height={100}
                        />
                    </div>
                    <ProductDataContainer>
                        <Name>{product.content.name}</Name>
                        <Price amount={parseFloat(product.content.price)} />
                    </ProductDataContainer>
                </ProductContainer>
            </Link>
            <ButtonsContainer>
                <QuantitySelector product={product} />
                <RemoveFromCart product={product} />
            </ButtonsContainer>
            <QuantityPrice>
                <Price amount={+product.quantity! * +product.content.price} />
            </QuantityPrice>
        </>
    );
};

export default CartItem;
