import styled from '@emotion/styled';
import { screenSizes } from '@/lib/constants';

export const TrackingNumberDialogWrapper = styled.dialog`
    z-index: 6;
    width: 90%;
    max-width: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: var(--border-radius-sm);
    padding: var(--spacing-md);

    @media screen and (max-width: ${screenSizes.SMALL}) {
        padding: var(--spacing-sm);
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-md);
`;
