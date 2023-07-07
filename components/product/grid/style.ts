'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--spacing-sm);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
