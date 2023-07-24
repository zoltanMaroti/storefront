import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: center;
`;

export const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-sm);
    width: 100%;

    @media screen and (max-width: ${screenSizes.SMALL}) {
        grid-template-columns: 1fr;
    }
`;

export const Row = styled.div`
    width: 100%;
    line-height: 1;
`;

export const ErrorMessage = styled.p`
    color: var(--color-danger);
    line-height: 2.5;
`;
