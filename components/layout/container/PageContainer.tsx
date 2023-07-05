import React from 'react';
import { StyledPageContainer } from '@/components/layout/container/style';
import { GenericContainerProps } from '@/lib/types';

const PageContainer = ({ children }: GenericContainerProps) => {
    return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default PageContainer;
