'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const FilterButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    border: 1px solid var(--color-background-secondary);
`;

export const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 25%;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        width: 100%;
    }
`;

export const FilterButton = styled.button`
    background: none;
    border: none;
    font-family: inherit;
    padding: var(--spacing-sm);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size-md);
    cursor: pointer;
    border-left: 1px solid var(--color-background-secondary);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        &:first-of-type {
            border-left: none;
        }
    }
`;

export const DrawerBody = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    justify-content: space-between;
    height: 100%;
`;

export const DrawerInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
`;

export const DrawerHeader = styled.div`
    display: flex;
    gap: var(--spacing-sm);
    justify-content: space-between;
    align-items: center;
`;

export const ClearAll = styled.button`
    font-size: var(--font-size-md);
    background: none;
    border: none;
    font-family: inherit;
    cursor: pointer;
`;
