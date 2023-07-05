import React from 'react';
import {
    DropdownContainer,
    InnerContainer,
} from '@/components/layout/dropdown/style';
import { DropdownProps } from '@/lib/types';

const Dropdown = ({ isActive, children }: DropdownProps) => {
    return (
        <DropdownContainer isActive={isActive}>
            <InnerContainer>{children}</InnerContainer>
        </DropdownContainer>
    );
};

export default Dropdown;
