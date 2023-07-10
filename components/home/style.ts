'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const GlobalStyles = css`
    .image-gallery-slide {
        line-height: 1;
        white-space: normal;
    }

    .image-gallery-bullets {
        .image-gallery-bullet {
            &:hover {
                background: var(--color-background-primary);
                border: 1px solid var(--color-background-primary);
            }

            &.active {
                background: var(--color-background-primary);

                &:hover {
                    background: var(--color-background-primary);
                    border: 1px solid var(--color-background-primary);
                }
            }
        }
    }
`;
export const HeroItemContainer = styled.div`
    background: var(--color-font-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    min-height: 60vh;
    gap: var(--spacing-lg);
    overflow: hidden;
    z-index: 1;
`;

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    color: var(--color-background-primary);
    text-transform: uppercase;
    z-index: 1;
`;

export const Title = styled.h1`
    font-size: var(--font-size-xl);
    letter-spacing: var(--letter-spacing);
`;

export const SubTitle = styled.h2`
    font-size: var(--font-size-md);
`;
