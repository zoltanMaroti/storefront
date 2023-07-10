import React from 'react';
import { TagProps } from '@/lib/types';
import { CloseButton, TagContainer } from '@/components/common/tag/style';

const Tag = ({ onClick, children }: TagProps) => {
    return (
        <TagContainer>
            <span>{children}</span>
            <CloseButton onClick={onClick} />
        </TagContainer>
    );
};

export default Tag;
