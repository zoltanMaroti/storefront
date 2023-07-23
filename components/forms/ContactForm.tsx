'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Input from '@/components/common/input/Input';
import TextArea from '@/components/common/input/TextArea';
import { Column, StyledForm } from '@/components/forms/style';
import Button from '@/components/common/button/Button';
import { ButtonText } from '@/components/common/button/style';

const ContactForm = () => {
    const t = useTranslations('contact');

    return (
        <StyledForm>
            <Column>
                <Input
                    type={'text'}
                    placeholder={t('Name')}
                    onChange={() => {}}
                />
                <Input
                    type={'text'}
                    placeholder={'Email'}
                    onChange={() => {}}
                />
            </Column>
            <TextArea
                type={'text'}
                placeholder={t('Message')}
                onChange={() => {}}
                rows={5}
            />
            <Button width={'250px'}>
                <ButtonText>{t('Send message')}</ButtonText>
            </Button>
        </StyledForm>
    );
};

export default ContactForm;
