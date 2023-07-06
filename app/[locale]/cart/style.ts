'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';
import { StyledDivider } from '@/components/common/divider/style';
import { Price } from '@/components/cart/style';

export const Headers = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.25fr 0.25fr;
    overflow: hidden;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: none;
    }
`;

export const CartItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.25fr 0.25fr;
    gap: var(--spacing-sm);
    align-items: center;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: 1fr;
    }
`;

export const Header = styled.p`
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

export const ProductDivider = styled(StyledDivider)`
    display: none;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: block;
        grid-column-start: 1;
        grid-column-end: 4;
    }

    &:last-of-type {
        display: none;
    }
`;

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: flex-end;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        button {
            width: 100%;
        }
    }
`;

export const TotalContainer = styled.div`
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
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

export const TotalPrice = styled(Price)`
    font-size: var(--font-size-lg);
`;
