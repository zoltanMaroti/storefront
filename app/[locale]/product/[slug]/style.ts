'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: var(--spacing-md);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: 1fr;
    }
`;
