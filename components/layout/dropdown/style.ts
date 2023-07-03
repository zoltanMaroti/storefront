'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const DropdownContainer = styled.div<{ isActive?: boolean }>`
    position: absolute;
    padding-top: var(--spacing-xs);
    visibility: hidden;

    ${({ isActive }) =>
        isActive &&
        css`
            animation: 300ms fadeIn ease-in-out;
            visibility: visible;
        `};

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

export const InnerContainer = styled.ul`
    background: var(--color-background-primary);
    padding: var(--spacing-sm);
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    gap: var(--spacing-sm);
    list-style: none;
    will-change: auto;

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(to top, #0000005c -100%, #ffffff 90%);
        transform: translate3d(0px, 0, 0) scale(1);
        filter: blur(4px);
        opacity: var(0.2);
        transition: opacity 0.3s;
        border-radius: inherit;
    }

    &::after {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: inherit;
        border-radius: inherit;
    }
`;
