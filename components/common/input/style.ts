'use client';

import styled from '@emotion/styled';

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const IconContainer = styled.div`
    position: absolute;
    padding: var(--spacing-sm);
    line-height: 1;
    color: var(--color-font-secondary);
`;

export const StyledInput = styled.input`
    padding: var(--spacing-sm) calc(var(--spacing-md) * 1.3);
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--color-font-primary);
    font-family: inherit;
    width: 100%;
    font-size: var(--font-size-lg);
`;
