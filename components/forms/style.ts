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
