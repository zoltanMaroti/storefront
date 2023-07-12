'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    gap: var(--spacing-md);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: 1fr;
    }
`;

export const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: column;
    background: var(--color-background-secondary);
    border-radius: var(--border-radius-sm);
    padding: var(--spacing-md);
    position: sticky;
    top: 20vh;
    max-height: 38vh;
    min-width: 250px;
    gap: var(--spacing-xs);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: none;
    }
`;

export const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
`;
