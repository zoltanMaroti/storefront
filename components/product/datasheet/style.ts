import styled from '@emotion/styled';

export const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
`;

export const Name = styled.h1`
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size-lg);
`;

export const Price = styled.p`
    color: var(--color-font-secondary);
`;

export const Description = styled.p`
    font-size: var(--font-size-md);
    line-height: var(--line-height-sm);
    letter-spacing: 0.1rem;
`;

export const AccordionLabel = styled.div`
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
`;
