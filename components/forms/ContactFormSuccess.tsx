import React from 'react';
import { StatusContainer, MailIcon } from '@/components/forms/style';
import { useTranslations } from 'next-intl';
import { ButtonText } from '@/components/common/button/style';
import Button from '@/components/common/button/Button';
import { ContactFormSuccessProps } from '@/lib/types';

const ContactFormSuccess = ({ onClick }: ContactFormSuccessProps) => {
    const t = useTranslations('contact');

    return (
        <StatusContainer>
            <MailIcon size={48} />
            <h1>{t('Thank you')}</h1>
            <p>{t('Your message has been sent')}</p>
            <Button width={'250px'} onClick={onClick}>
                <ButtonText>{t('New message')}</ButtonText>
            </Button>
        </StatusContainer>
    );
};

export default ContactFormSuccess;
