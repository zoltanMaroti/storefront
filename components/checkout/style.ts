'use client';

import styled from '@emotion/styled';
import { IoBagCheck } from 'react-icons/io5';
import { BiErrorCircle } from 'react-icons/bi';

export const CheckoutMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    text-align: center;
    max-width: 400px;
`;

export const SuccessIcon = styled(IoBagCheck)`
    color: var(--color-success);
`;

export const ErrorIcon = styled(BiErrorCircle)`
    color: var(--color-danger);
`;

export const OrderNumber = styled.p`
    color: var(--color-font-secondary);
`;
