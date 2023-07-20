'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';
import { css } from '@emotion/react';

export const StyledPageContainer = styled.div<{
    center?: boolean;
}>`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    min-height: 50vh;
    background: var(--color-background-ternary);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        padding: var(--spacing-sm);
        gap: var(--spacing-sm);
    }
  
    ${({ center }) =>
        center &&
        css`
            align-items: center;
            justify-content: center;
        `}}
`;
