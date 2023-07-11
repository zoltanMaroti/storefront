import React from 'react';
import { HeadingProps } from '@/lib/types';
import {
    HeadingContainer,
    SubTitle,
    Title,
} from '@/components/common/heading/style';

const Heading = ({ title, subTitle }: HeadingProps) => {
    return (
        <HeadingContainer>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
            <Title>{title}</Title>
        </HeadingContainer>
    );
};

export default Heading;
