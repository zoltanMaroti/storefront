import React from 'react';
import { StyledTextArea } from '@/components/common/input/style';
import { TextAreaBaseProps } from '@/lib/types';

const TextArea = ({ placeholder, onChange, rows }: TextAreaBaseProps) => {
    return (
        <StyledTextArea
            placeholder={placeholder}
            onChange={onChange}
            rows={rows}
        />
    );
};

export default TextArea;
