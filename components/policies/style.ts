'use client';

import { StyledPageContainer } from '@/components/layout/container/style';
import styled from '@emotion/styled';

export const PolicyContainer = styled(StyledPageContainer)`
    ol {
        counter-reset: item;

        li {
            list-style-position: inside;
            margin: var(--spacing-sm) 0;
            font-size: var(--font-size-lg);
            font-weight: bold;
            display: block;

            &:before {
                content: counters(item, '.') '. ';
                counter-increment: item;
            }

            p {
                font-size: var(--font-size-md);
                font-weight: normal;
            }

            a {
                font-weight: bold;
                color: var(--color-accent-secondary);
            }
        }
    }
`;

export const List = styled.div`
    margin: var(--spacing-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: var(--spacing-sm);
`;
