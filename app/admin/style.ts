'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';
import { css } from '@emotion/react';

export const PageContainer = styled.div<{
    center?: boolean;
}>`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    min-height: 100vh;
    background: var(--color-background-ternary);
    align-items: center;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        padding: var(--spacing-sm);
        gap: var(--spacing-sm);
    }

  ${({ center }) =>
      center &&
      css`
          justify-content: center;
          text-align: center;
      `}}
`;

export const InnerContainer = styled.div`
    background: var(--color-background-primary);
    border-radius: var(--border-radius-sm);
    max-width: var(--max-width);
    width: 100%;
`;
