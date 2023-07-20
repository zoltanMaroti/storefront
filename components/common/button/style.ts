'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const BaseButton = styled.button<{ width?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-sm);
    font-family: inherit;
    font-weight: bold;
    letter-spacing: var(--letter-spacing-sm);
    cursor: pointer;
    border-radius: var(--border-radius-sm);
    outline: none;
    border: none;
    width: 100%;
    white-space: nowrap;

    ${({ width }) =>
        width &&
        css`
            width: ${width};
        `}

    &:disabled {
        background: var(--color-disabled);
        border: 1px solid var(--color-disabled);
        cursor: not-allowed;
    }

    &:hover {
        background-image: linear-gradient(rgb(0 0 0 / 10%) 0 0);
    }
`;

export const PrimaryButton = styled(BaseButton)<{ color?: string }>`
    background: var(--color-font-primary);
    border: none;
    color: var(--color-background-primary);

    ${({ color }) =>
        color &&
        css`
            background: ${color};
        `}
`;

export const SecondaryButton = styled(BaseButton)<{ color?: string }>`
    background: transparent;
    color: var(--color-font-primary);
    border: 1px solid var(--color-font-primary);

    ${({ color }) =>
        color &&
        css`
            color: ${color};
            border: 1px solid ${color};
        `}
`;

export const ButtonText = styled.p`
    text-transform: uppercase;
`;
