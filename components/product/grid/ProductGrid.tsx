import React from 'react';
import { ProductsContainer } from '@/components/product/grid/style';
import { ProductGridProps } from '@/lib/types';
import ProductCard from '@/components/product/card/ProductCard';

const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <ProductsContainer>
            {products.map((product) => (
                <ProductCard key={product.uuid} item={product} />
            ))}
        </ProductsContainer>
    );
};

export default ProductGrid;
