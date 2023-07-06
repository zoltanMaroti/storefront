'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';
import Image from 'next/image';
import { StyledDivider } from '@/components/common/divider/style';

export const Headers = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.25fr 0.25fr;
    overflow: hidden;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: none;
    }
`;

export const CartItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.25fr 0.25fr;
    gap: var(--spacing-sm);
    align-items: center;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: 1fr;
    }
`;

export const ColumnHeading = styled.p`
    color: var(--color-font-secondary);
    text-transform: uppercase;
    font-size: var(--font-size-sm);
    letter-spacing: var(--letter-spacing);
    position: relative;
    text-align: center;
    margin-bottom: 1rem;

    &:nth-child(3n) {
        @media screen and (max-width: ${screenSizes.SMALL}) {
            display: none;
        }
    }

    &:nth-child(3n + 1) {
        &:after {
            content: '';
            position: absolute;
            top: 20px;
            left: 0;
            width: 100vw;
            height: 1px;
            background: var(--color-background-secondary);
        }
    }
`;

export const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: center;
    justify-content: center;
    height: 45vh;
    text-align: center;
`;
