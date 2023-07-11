'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';

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
    color: var(--color-background-primary);
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

export const HeroImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;
