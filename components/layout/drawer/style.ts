'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { screenSizes } from '@/lib/constants';

export const DrawerContainer = styled.div<{ isOpen?: boolean }>`
    background: var(--background-color-primary);
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-120%);
    padding: var(--spacing-md);
    z-index: 6;
    box-shadow: 1px 0 7px 0 rgba(0, 0, 0, 0.1);
    transition: transform 300ms ease-in-out;
    min-width: 30vw;
    will-change: auto;

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: translateX(0);
        `};

    @media screen and (max-width: ${screenSizes.SMALL}) {
        min-width: 70vw;
    }
`;

export const Backdrop = styled.div<{ isVisible?: boolean }>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0);
    pointer-events: none;
    transition: all 300ms ease-in-out;
    will-change: auto;

    ${({ isVisible }) =>
        isVisible &&
        css`
            pointer-events: unset;
            background-color: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(2px);
        `}
`;
