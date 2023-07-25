import React from 'react';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { ContactFormValues } from '@/lib/types';

const ContactFormEmail = ({
    firstName,
    lastName,
    email,
    message,
}: ContactFormValues) => {
    return (
        <Html>
            <Text>First name: {firstName}</Text>
            <Text>Last name: {lastName}</Text>
            <Text>Email: {email}</Text>
            <Text>Message: {message}</Text>
        </Html>
    );
};

export default ContactFormEmail;
