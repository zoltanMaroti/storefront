'use client';

import styled from '@emotion/styled';
import { FiX } from 'react-icons/fi';
import { css } from '@emotion/react';

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const IconContainer = styled.div`
    position: absolute;
    padding: var(--spacing-sm);
    color: var(--color-font-secondary);
    font-size: var(--font-size-lg);
`;

export const ClearIconContainer = styled(IconContainer)`
    right: 0;
    top: 0;
`;

export const StyledClearIcon = styled(FiX)`
    cursor: pointer;
`;

export const StyledInput = styled.input<{ hasIcon?: boolean }>`
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--color-font-primary);
    font-family: inherit;
    width: 100%;
    font-size: var(--font-size-lg);

    ${({ hasIcon }) =>
        hasIcon &&
        css`
            padding-left: calc(var(--spacing-md) * 1.3);
        `}
`;
