'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const AccordionContainer = styled.div<{
    borderTop?: boolean;
    borderBottom?: boolean;
    padding?: boolean;
}>`
    cursor: pointer;
    display: flex;
    flex-direction: column;

    ${({ borderTop }) => {
        if (borderTop) {
            return css`
                border-top: 1px solid var(--color-background-secondary);
            `;
        }
    }}
    ${({ borderBottom }) => {
        if (borderBottom) {
            return css`
                border-bottom: 1px solid var(--color-background-secondary);
            `;
        }
    }}
    ${({ padding }) => {
        if (padding) {
            return css`
                padding: var(--spacing-sm);
            `;
        }
    }}
`;

export const LabelContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 20px;
    align-items: center;
`;

export const IconContainer = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    transform: rotate(0deg);
    transition: all 300ms ease-in-out;
    will-change: auto;

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: rotate(-180deg);
            transition: all 300ms ease-in-out;
        `}
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
    overflow: hidden;
    max-height: 0;
    transition: max-height 500ms cubic-bezier(0, 1, 0, 1);
    color: var(--color-font-secondary);
    will-change: auto;

    ${({ isOpen }) =>
        isOpen &&
        css`
            max-height: 100vh;
            transition: max-height 1s ease-in-out;
        `}
`;

export const AccordionLabel = styled.p`
    font-size: var(--font-size-lg);
`;

export const AccordionItem = styled.p<{ isActive: boolean }>`
    font-size: var(--font-size-md);

    ${({ isActive }) =>
        isActive &&
        css`
            font-weight: bold;
        `}
`;
