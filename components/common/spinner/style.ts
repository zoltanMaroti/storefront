'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledSpinner = styled.span<{ color?: string; size?: string }>`
    ${({ size }) =>
        size &&
        css`
            width: ${size};
            height: ${size};
        `}
    border: 2px solid #ffffff;

    ${({ color }) =>
        color &&
        css`
            border: 2px solid ${color};
        `}

    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
