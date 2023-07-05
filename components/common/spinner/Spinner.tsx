import React from 'react';
import { StyledSpinner } from '@/components/common/spinner/style';
import { SpinnerProps } from '@/lib/types';

const Spinner = ({ color, size = '15px' }: SpinnerProps) => {
    return <StyledSpinner color={color} size={size} />;
};

export default Spinner;
