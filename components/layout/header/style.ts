'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import { css } from '@emotion/react';
import { screenSizes } from '@/lib/constants';

export const HeaderContainer = styled.header`
    background: var(--color-background-primary);
    display: grid;
    grid-template-columns: 140px 1fr 140px;
    justify-items: center;
    padding: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    gap: var(--spacing-sm);
    font-size: 13px;
    position: sticky;
    top: 0;
    z-index: 5;
    border-bottom: 1px solid var(--color-background-secondary);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        padding: var(--spacing-sm);
        grid-template-columns: 80px 1fr 80px;
    }
`;

export const DesktopNavigation = styled.nav`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    list-style-type: none;
    justify-items: center;
    align-items: flex-end;
    width: 100%;
    max-width: 800px;
    gap: var(--spacing-sm);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: none;
    }
`;

export const DesktopLogo = styled(Image)`
    max-width: 100%;
    min-width: 120px;
    height: auto;
    padding: 0 var(--spacing-sm);
`;

export const NavItem = styled.a<{ isActive?: boolean }>`
    display: block;
    position: relative;
    padding: 0.2rem 0;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    cursor: pointer;
    white-space: nowrap;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1rem;
        background-color: var(--color-font-primary);
        opacity: 0;
        transition: opacity 400ms, transform 400ms;
    }

    &:hover::after,
    &:focus::after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
    }

    ${({ isActive }) =>
        isActive &&
        css`
            &::after {
                opacity: 1;
                transform: translate3d(0, 0.2em, 0);
            }
        `}
`;

export const ShopMenuItem = styled.li`
    position: relative;
`;