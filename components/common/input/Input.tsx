import React from 'react';
import { InputBaseProps } from '@/lib/types';
import {
    IconContainer,
    InputContainer,
    StyledInput,
} from '@/components/common/input/style';

const Input = ({
    type,
    placeholder,
    disabled,
    icon,
    onChange,
}: InputBaseProps) => {
    return (
        <InputContainer>
            <IconContainer>{icon}</IconContainer>
            <StyledInput
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
            />
        </InputContainer>
    );
};

export default Input;
