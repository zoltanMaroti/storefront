'use client';

import styled from '@emotion/styled';
import { FiX } from 'react-icons/fi';
import { css } from '@emotion/react';
import { screenSizes } from '@/lib/constants';

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

export const StyledInput = styled.input<{
    hasIcon?: boolean;
    hasError?: boolean;
}>`
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--color-font-primary);
    font-family: inherit;
    width: 100%;
    height: max-content;
    font-size: var(--font-size-lg);

    ${({ hasIcon }) =>
        hasIcon &&
        css`
            padding-left: calc(var(--spacing-md) * 1.3);
        `}

    ${({ hasError }) =>
        hasError &&
        css`
            border-color: var(--color-danger);
        `}
`;

export const StyledTextArea = styled.textarea<{ hasError?: boolean }>`
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--color-font-primary);
    font-family: inherit;
    width: 100%;
    font-size: var(--font-size-lg);

    ${({ hasError }) =>
        hasError &&
        css`
            border-color: var(--color-danger);
        `}
`;

export const CheckboxContainer = styled.div<{ hasError?: boolean }>`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: var(--spacing-xs);
    line-height: 1.8;

    ${({ hasError }) =>
        hasError &&
        css`
            input {
                outline: 1px solid var(--color-danger);
            }
            color: var(--color-danger);
        `}

    input {
        width: 20px;
        height: 20px;
    }

    @media screen and (max-width: ${screenSizes.SMALL}) {
        gap: var(--spacing-sm);
    }
`;
