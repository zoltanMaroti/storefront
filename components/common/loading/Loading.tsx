import React from 'react';
import Spinner from '@/components/common/spinner/Spinner';
import { GenericContainerProps } from '@/lib/types';
import { LoadingContainer } from '@/components/common/loading/style';

const Loading = ({ children }: GenericContainerProps) => {
    return (
        <LoadingContainer>
            <Spinner color={'var(--color-font-primary)'} />
            {children}
        </LoadingContainer>
    );
};

export default Loading;
