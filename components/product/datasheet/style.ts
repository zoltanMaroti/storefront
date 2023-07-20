import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: var(--spacing-sm);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        flex-direction: column;
    }
`;

export const Name = styled.h1`
    letter-spacing: var(--letter-spacing-sm);
    font-size: var(--font-size-xl);
`;

export const Text = styled.p`
    font-size: var(--font-size-md);
    line-height: var(--line-height-sm);
    letter-spacing: 0.1rem;
`;

export const PriceContainer = styled.div`
    font-size: var(--font-size-lg);
`;

export const Description = styled(Text)`
    color: var(--color-font-secondary);
`;

export const AccordionLabel = styled.div`
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
`;
