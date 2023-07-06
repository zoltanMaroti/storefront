import styled from '@emotion/styled';
import Image from 'next/image';
import { screenSizes } from '@/lib/constants';

export const ProductContainer = styled.div`
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
    cursor: pointer;
`;

export const ProductImage = styled(Image)`
    object-fit: cover;
`;

export const ProductDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
`;

export const Name = styled.p`
    font-size: var(--text-size-md);
    font-weight: 700;
`;

export const Price = styled.p`
    font-size: var(--font-size-md);
    color: var(--color-font-secondary);
`;

export const TotalPrice = styled(Price)`
    font-size: var(--font-size-lg);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-column-start: 1;
        grid-column-end: 4;
        justify-content: space-between;
    }
`;

export const QuantityPrice = styled.p`
    text-align: right;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: none;
    }
`;
