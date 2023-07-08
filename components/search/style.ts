'use client';

import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const SearchContainer = styled.div`
    background: url('/assets/images/search-header.jpeg') center;
    background-size: cover;
`;

export const InnerContainer = styled.div`
    background-color: rgb(255 255 255 / 0.6);
    width: 100%;
    height: 100%;
    min-height: 300px;
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
`;

export const Title = styled.h1`
    width: 50%;
    text-align: center;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        width: 100%;
    }
`;

export const InputContainer = styled.div`
    max-width: 600px;
    width: 100%;
`;
