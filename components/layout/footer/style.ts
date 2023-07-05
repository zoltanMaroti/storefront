'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { screenSizes } from '@/lib/constants';

export const FooterContainer = styled.footer`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: var(--color-background-secondary);
    padding: var(--spacing-md);
    gap: var(--spacing-md);
    font-size: var(--font-size-md);
    line-height: var(--line-height-sm);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: 1fr;
        padding: var(--spacing-sm);
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    width: 100%;
`;

export const Row = styled.div`
    display: flex;
    gap: var(--spacing-sm);
`;

export const FooterNavLink = styled(Link)`
    cursor: pointer;

    &:hover {
        font-weight: 500;
    }
`;

export const PaymentMethods = styled.div`
    display: grid;
    justify-content: center;
    gap: var(--spacing-sm);
    grid-column-start: 1;
    grid-column-end: 3;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-column-end: 2;
    }
`;

export const PaymentMethod = styled.img`
    width: 36px;
    height: 36px;
`;
