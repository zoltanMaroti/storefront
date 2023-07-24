import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { ContactFormValues } from '@/lib/types';
import { EmailApiClient } from '@/lib/api/email';

const useContactForm = () => {
    return useMutation((contactForm: ContactFormValues) =>
        EmailApiClient.sendContactForm(contactForm)
    );
};

export default useContactForm;
