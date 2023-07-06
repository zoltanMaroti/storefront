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

export const HeaderNavItem = styled.span<{ isActive?: boolean }>`
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

export const MobileNavigationContainer = styled.div`
    visibility: hidden;
    display: flex;
    align-items: center;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        visibility: visible;
        justify-content: flex-start;
        width: 100%;
    }
`;

export const MobileHeader = styled.div`
    display: none;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: flex;
        justify-content: center;

        img {
            max-width: 100%;
            height: auto;
        }
    }
`;

export const MobileLogo = styled(Image)`
    max-width: 100%;
    height: auto;
`;

export const IconsContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const InnerContainer = styled.div`
    position: absolute;
    bottom: -10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: flex-end;
    height: 100%;
    width: 100%;
    gap: var(--spacing-sm);
    line-height: 1;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        bottom: unset;
    }
`;

export const LanguageSelectorContainer = styled.div`
    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: none;
    }
`;

export const CartIconContainer = styled.div`
    position: relative;
`;

export const CartSizeIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid var(--color-background-primary);
    background: var(--color-danger);
    color: var(--color-background-secondary);
    font-weight: bold;
    font-size: var(--font-size-sm);
    position: absolute;
    top: 15px;
    left: 15px;
    width: 20px;
    height: 20px;
`;
