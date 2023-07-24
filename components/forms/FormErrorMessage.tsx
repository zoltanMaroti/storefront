import React from 'react';
import { FormErrorMessageProps } from '@/lib/types';
import { ErrorMessage } from '@/components/forms/style';

const FormErrorMessage = ({ error }: FormErrorMessageProps) => {
    return <ErrorMessage>{error}</ErrorMessage>;
};

export default FormErrorMessage;
