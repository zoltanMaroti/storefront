'use client';

import styled from '@emotion/styled';

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    line-height: 1;
    color: inherit;
    text-transform: uppercase;
    text-align: center;
    z-index: 1;
`;

export const Title = styled.h1`
    font-size: var(--font-size-xl);
    letter-spacing: var(--letter-spacing-sm);
`;

export const SubTitle = styled.h2`
    font-size: var(--font-size-md);
    letter-spacing: var(--letter-spacing-sm);
`;
