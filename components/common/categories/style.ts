'use client';

import Image from 'next/image';
import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';
import Link from 'next/link';

export const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    max-width: var(--max-width);
    width: 100%;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-sm);
    }
`;

export const CategoryCard = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 30vh;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        &:last-of-type {
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }
`;

export const CategoryImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: var(--border-radius-sm);
`;

export const NameContainer = styled.div`
    background: var(--color-background-primary);
    padding: var(--spacing-xs) var(--spacing-md);
    letter-spacing: var(--letter-spacing-sm);
`;

export const Name = styled.p`
    text-transform: uppercase;
`;
