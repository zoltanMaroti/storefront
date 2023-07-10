import styled from '@emotion/styled';
import { FiX } from 'react-icons/fi';

export const TagContainer = styled.div`
    padding: var(--spacing-xs);
    background: var(--color-background-secondary);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-md);
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
    user-select: none;
`;

export const CloseButton = styled(FiX)`
    cursor: pointer;
`;
