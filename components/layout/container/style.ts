'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-md);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        padding: var(--spacing-sm);
    }
`;
