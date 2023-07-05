import React from 'react';
import {
    PrimaryButton,
    SecondaryButton,
} from '@/components/common/button/style';
import Spinner from '@/components/common/spinner/Spinner';
import { ButtonProps } from '@/lib/types';

const Button = ({
    disabled,
    children,
    width,
    onClick,
    loading,
    variant = 'primary',
}: ButtonProps) => {
    const Wrapper = variant === 'primary' ? PrimaryButton : SecondaryButton;

    return (
        <Wrapper disabled={disabled} width={width} onClick={onClick}>
            {loading && <Spinner />}
            {children}
        </Wrapper>
    );
};

export default Button;
