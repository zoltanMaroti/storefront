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
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
    border-radius: var(--border-radius);
    outline: none;
    border: none;
    width: 100%;

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
`;

export const PrimaryButton = styled(BaseButton)`
    background: var(--color-font-primary);
    border: 1px solid var(--color-font-primary);
    color: var(--color-background-primary);
`;

export const SecondaryButton = styled(BaseButton)`
    background: transparent;
    color: var(--color-font-primary);
    border: 1px solid var(--color-font-primary);
`;
