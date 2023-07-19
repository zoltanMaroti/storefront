'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const BreadCrumbsContainer = styled.ul`
    display: flex;
    gap: var(--spacing-xs);
    list-style: none;
    flex-wrap: nowrap;
`;

export const BreadCrumbItemContainer = styled.div`
    color: var(--color-font-secondary);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 200px;
    }
`;
