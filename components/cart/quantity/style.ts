'use client';

import styled from '@emotion/styled';

export const QuantitySelectorContainer = styled.div`
    display: grid;
    grid-template-columns: 36px 48px 36px;
`;

export const QuantityButton = styled.button`
    font-size: 24px;
    line-height: 1;
    text-align: center;
    user-select: none;
    background: none;
    border: none;
    cursor: pointer;
`;

export const QuantityInput = styled.input`
    padding-left: var(--spacing-sm);
    font-family: inherit;
    border-radius: var(--border-radius-sm);

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &:disabled {
        background: var(--color-background-primary);
        border: 1px solid var(--color-font-primary);
        color: var(--color-font-primary);
    }
`;
