'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Column, Link, Row, StyledForm } from '@/components/forms/style';
import Button from '@/components/common/button/Button';
import { ButtonText } from '@/components/common/button/style';
import { useForm } from 'react-hook-form';
import { ContactFormValues } from '@/lib/types';
import {
    StyledInput,
    StyledTextArea,
    CheckboxContainer,
} from '@/components/common/input/style';
import FormErrorMessage from '@/components/forms/FormErrorMessage';
import { validationRules } from '@/lib/constants';
import useContactForm from '@/lib/hooks/useContactForm';
import ContactFormSuccess from '@/components/forms/ContactFormSuccess';

const ContactForm = () => {
    const locale = useLocale();
    const t = useTranslations('contact');
    const {
        reset: resetForm,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormValues>();

    const contactFormMutation = useContactForm();

    const onSubmit = (contactForm: ContactFormValues) => {
        contactFormMutation.mutateAsync(contactForm).then(() => resetForm());
    };

    const handleReset = () => {
        contactFormMutation.reset();
        resetForm();
    };

    if (contactFormMutation.isSuccess) {
        return <ContactFormSuccess onClick={handleReset} />;
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Column>
                <div>
                    <StyledInput
                        {...register('firstName', validationRules.firstName)}
                        id={'firstName'}
                        type={'text'}
                        placeholder={t('First name')}
                        hasError={!!errors.firstName}
                    />
                    {errors.firstName && (
                        <FormErrorMessage error={t(errors.firstName.message)} />
                    )}
                </div>
                <div>
                    <StyledInput
                        {...register('lastName', validationRules.lastName)}
                        id={'lastName'}
                        type={'text'}
                        placeholder={t('Last name')}
                        hasError={!!errors.lastName}
                    />
                    {errors.lastName && (
                        <FormErrorMessage error={t(errors.lastName.message)} />
                    )}
                </div>
            </Column>
            <Row>
                <StyledInput
                    {...register('email', validationRules.email)}
                    id={'email'}
                    type={'text'}
                    placeholder={'Email'}
                    hasError={!!errors.email}
                />
                {errors.email && (
                    <FormErrorMessage error={t(errors.email.message)} />
                )}
            </Row>
            <Row>
                <StyledTextArea
                    {...register('message', validationRules.message)}
                    id={'message'}
                    name={'message'}
                    placeholder={t('Message')}
                    rows={5}
                    hasError={!!errors.message}
                />
                {errors.message && (
                    <FormErrorMessage error={t(errors.message.message)} />
                )}
            </Row>
            <Row>
                <CheckboxContainer
                    hasError={!!errors.consentGiven}
                    {...register('consentGiven', validationRules.consentGiven)}
                >
                    <input
                        type="checkbox"
                        id={'consentGiven'}
                        name={'consentGiven'}
                    />
                    <label htmlFor={'consentGiven'}>
                        {t.rich(
                            'I have read and accept the Terms and Conditions & Privacy Policy',
                            {
                                terms: (chunks) => (
                                    <Link
                                        href={`/${locale}/terms`}
                                        target={'_blank'}
                                    >
                                        {chunks}
                                    </Link>
                                ),
                                privacy: (chunks) => (
                                    <Link
                                        href={`/${locale}/privacy-policy`}
                                        target={'_blank'}
                                    >
                                        {chunks}
                                    </Link>
                                ),
                            }
                        )}
                    </label>
                </CheckboxContainer>
                {errors.consentGiven && (
                    <FormErrorMessage error={t(errors.consentGiven.message)} />
                )}
            </Row>
            <Button
                width={'250px'}
                disabled={contactFormMutation.isLoading}
                loading={contactFormMutation.isLoading}
            >
                <ButtonText>{t('Send message')}</ButtonText>
            </Button>
        </StyledForm>
    );
};

export default ContactForm;
