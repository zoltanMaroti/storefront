'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { screenSizes } from '@/lib/constants';

export const ProductCardContainer = styled(Link)<{ maxItemWidth?: string }>`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    min-width: 200px;
    width: 100%;
    cursor: pointer;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        min-width: 150px;
    }

    ${({ maxItemWidth }) =>
        maxItemWidth &&
        css`
            max-width: ${maxItemWidth};
        `}
`;

export const ProductImage = styled(Image)`
    object-fit: cover;
    border-radius: var(--border-radius-sm);
`;

export const ProductImageContainer = styled.div`
    position: relative;
    aspect-ratio: 1 / 1;
`;

export const Name = styled.h2`
    font-size: var(--font-size-md);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-sm);
    text-align: center;
    font-weight: 500;
`;

export const PriceContainer = styled.div`
    color: var(--color-font-secondary);
    font-size: var(--font-size-md);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-sm);
    text-align: center;
    font-weight: 500;
`;
