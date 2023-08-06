'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LanguageSwitcherContainer = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    gap: var(--spacing-xs);
    align-items: center;
`;

export const CurrentLanguage = styled.p`
    text-transform: uppercase;
`;

export const Language = styled.div<{ selected?: boolean }>`
    display: flex;
    gap: var(--spacing-xs);
    line-height: 1.5;

    &:hover {
        text-stroke: 0.5px black;
        -webkit-text-stroke: 0.5px black;
    }

    ${({ selected }) =>
        selected &&
        css`
            font-weight: bold;
        `}
`;

export const DropdownContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const AccordionLabel = styled.div`
    font-size: var(--font-size-lg);
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
`;

export const AccordionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    padding-left: var(--spacing-sm);
    padding-top: var(--spacing-sm);
`;
