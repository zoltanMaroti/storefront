'use client';

import styled from '@emotion/styled';

export const SwiperContainer = styled.div`
    display: flex;
    gap: var(--spacing-sm);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;
