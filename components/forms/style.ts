import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';
import { FiMail } from 'react-icons/fi';

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

export const MailIcon = styled(FiMail)`
    color: var(--color-success);
`;

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    text-align: center;
`;

export const Link = styled.a`
    font-weight: bold;
    color: var(--color-accent-secondary);
`;
