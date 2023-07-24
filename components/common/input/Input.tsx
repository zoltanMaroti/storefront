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
}: InputBaseProps) => {
    const [value, setValue] = useState<string>();

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange(event);
    };

    const onClickClear = () => {
        onClear && onClear();
        setValue('');
    };

    return (
        <InputContainer>
            {icon && <IconContainer>{icon}</IconContainer>}
            <StyledInput
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChangeInput}
                value={value}
                hasIcon={!!icon}
            />
            {value && (
                <ClearIconContainer>
                    <StyledClearIcon onClick={onClickClear} />
                </ClearIconContainer>
            )}
        </InputContainer>
    );
};

export default Input;
