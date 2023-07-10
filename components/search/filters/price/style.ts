import styled from '@emotion/styled';

export const Thumb = styled.div`
    height: 20px;
    width: 20px;
    background-color: var(--color-font-secondary);
    border-radius: 50%;
`;

export const Track = styled.div`
    height: 5px;
    width: 100%;
    border-radius: 5px;
`;

export const Values = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: var(--spacing-sm);
`;

export const PriceRangeContainer = styled.div`
    margin-top: var(--spacing-md);
    margin-left: var(--spacing-sm);
    margin-right: var(--spacing-sm);
`;
