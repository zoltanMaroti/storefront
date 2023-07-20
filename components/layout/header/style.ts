'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import { css } from '@emotion/react';
import { screenSizes } from '@/lib/constants';

export const HeaderContainer = styled.header`
    background: var(--color-background-primary);
    display: grid;
    grid-template-columns: 1fr 140px;
    padding: var(--spacing-xs) var(--spacing-md);
    gap: var(--spacing-md);
    font-size: 13px;
    position: sticky;
    top: 0;
    z-index: 5;
    border-bottom: 1px solid var(--color-background-secondary);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: 80px 1fr 80px;
        padding: var(--spacing-xs) var(--spacing-sm);
    }
`;

export const DesktopNavigation = styled.nav`
    display: flex;
    list-style-type: none;
    align-items: flex-end;
    width: 100%;
    max-width: var(--max-width);
    gap: var(--spacing-md);
    justify-content: space-between;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: none;
    }
`;

export const DesktopLogo = styled(Image)`
    max-width: 100%;
    height: auto;
`;

export const HeaderNavItem = styled.span<{ isActive?: boolean }>`
    display: block;
    position: relative;
    padding: 0.2rem 0;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-sm);
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
        transform: translate3d(0, 0.7em, 0);
    }

    ${({ isActive }) =>
        isActive &&
        css`
            &::after {
                opacity: 1;
                transform: translate3d(0, 0.7em, 0);
            }
        `}
`;

export const ShopMenuItem = styled.li`
    position: relative;
`;

export const ShopMenuInnerContainer = styled.span`
    display: flex;
    align-items: center;
`;

export const IconContainer = styled.span<{ isOpen: boolean }>`
    display: flex;
    align-items: center;

    transform: rotate(0deg);
    transition: all 300ms ease-in-out;
    will-change: auto;

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: rotate(-180deg);
            transition: all 300ms ease-in-out;
        `}
`;

export const MobileNavigationContainer = styled.div`
    display: none;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
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
    bottom: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-end;
    justify-items: flex-end;
    height: 100%;
    width: 100%;
    gap: var(--spacing-sm);
    line-height: 1;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        bottom: unset;
        grid-template-columns: 1fr 1fr;
        align-items: center;
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

export const DesktopMenuContainer = styled.div`
    display: flex;
    gap: var(--spacing-md);
`;
