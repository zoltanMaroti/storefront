'use client';

import styled from '@emotion/styled';
import Stripe from 'stripe';
import { css } from '@emotion/react';

export const AccordionLabel = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: var(--spacing-sm);
`;

export const IndexContainer = styled.div`
    display: flex;
    gap: var(--spacing-md);
`;

export const Index = styled.p`
    color: var(--color-font-secondary);
`;

export const StatusBadge = styled.span<{ status: Stripe.PaymentIntent.Status }>`
    border-radius: var(--border-radius-sm);
    padding: 0 var(--spacing-xs);
    color: #ffffff;
    line-height: 1.5;
    display: flex;
    align-items: center;
    background: var(--color-danger);

    ${({ status }) => {
        if (status === 'succeeded') {
            return css`
                background: var(--color-success);
            `;
        }
    }}
`;

export const PaymentCardBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-sm);
`;

export const Label = styled.p`
    font-weight: bold;
    color: var(--color-font-primary);
`;
