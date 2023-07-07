import React from 'react';
import { StyledPageContainer } from '@/components/layout/container/style';
import { GenericContainerProps } from '@/lib/types';

const PageContainer = ({ children, center }: GenericContainerProps) => {
    return (
        <StyledPageContainer center={center}>{children}</StyledPageContainer>
    );
};

export default PageContainer;
