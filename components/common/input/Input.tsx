import React, { ChangeEvent, useState } from 'react';
import { InputBaseProps } from '@/lib/types';
import {
    ClearIconContainer,
    IconContainer,
    InputContainer,
    StyledClearIcon,
    StyledInput,
} from '@/components/common/input/style';

const Input = ({
    type,
    placeholder,
    disabled,
    icon,
    onChange,
    onClear,
    defaultValue,
    value,
}: InputBaseProps) => {
    const [inputValue, setInputValue] = useState<string>();

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event);
    };

    const onClickClear = () => {
        onClear && onClear();
        setInputValue('');
    };

    return (
        <InputContainer>
            {icon && <IconContainer>{icon}</IconContainer>}
            <StyledInput
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={onChangeInput}
                value={value || inputValue}
                hasIcon={!!icon}
            />
            {(value || inputValue) && (
                <ClearIconContainer>
                    <StyledClearIcon onClick={onClickClear} />
                </ClearIconContainer>
            )}
        </InputContainer>
    );
};

export default Input;
