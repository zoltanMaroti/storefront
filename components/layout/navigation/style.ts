'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const NavItem = styled.span<{ isActive: boolean; size?: string }>`
    font-size: var(--font-size-lg);

    ${({ isActive }) =>
        isActive &&
        css`
            font-weight: bold;
        `}

    ${({ size }) =>
        size &&
        css`
            font-size: ${size};
        `}
`;

export const AccordionLabel = styled.p`
    font-size: var(--font-size-lg);
`;

export const AccordionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    padding-left: var(--spacing-sm);
    padding-top: var(--spacing-sm);
`;
