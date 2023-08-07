'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const CookieBannerContainer = styled.div`
    position: fixed;
    bottom: 0;
    padding: var(--spacing-sm);
    z-index: 5;
    background: var(--color-background-secondary);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: var(--spacing-lg);
    border-top: 1px solid var(--color-background-secondary);
    box-shadow: var(--box-shadow-sm);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        gap: var(--spacing-sm);
        justify-items: center;
    }

    a {
        color: var(--color-accent-secondary);
        font-weight: bold;
    }
`;

export const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
`;
