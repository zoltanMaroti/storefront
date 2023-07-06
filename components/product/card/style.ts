'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { screenSizes } from '@/lib/constants';

export const ProductCardContainer = styled(Link)<{ maxWidth?: string }>`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    min-width: 200px;
    width: 100%;
    cursor: pointer;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        min-width: 100px;
    }

    ${({ maxWidth }) =>
        maxWidth &&
        css`
            max-width: ${maxWidth};
        `}
`;

export const ProductImage = styled(Image)`
    object-fit: cover;
`;

export const ProductImageContainer = styled.div`
    position: relative;
    aspect-ratio: 1 / 1;
`;

export const ProductName = styled.h2`
    font-size: var(--font-size-md);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    margin-bottom: var(--spacing-xs);
    font-weight: 500;
`;

export const Price = styled(ProductName)`
    color: var(--color-font-secondary);
`;
