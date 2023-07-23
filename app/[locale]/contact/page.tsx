import React from 'react';
import PageContainer from '@/components/layout/container/PageContainer';
import BreadCrumbs from '@/components/layout/breadcrumbs/BreadCrumbs';
import BreadCrumb from '@/components/layout/breadcrumbs/BreadCrumb';
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/forms/ContactForm';
import { FormContainer, InnerContainer } from '@/app/[locale]/contact/style';
import Heading from '@/components/common/heading/Heading';

const ContactPage = () => {
    const t = useTranslations();

    return (
        <PageContainer>
            <BreadCrumbs>
                <BreadCrumb href={'/'}>{t('common.Home')}</BreadCrumb>
                <BreadCrumb href={'/contact'}>{t('common.Contact')}</BreadCrumb>
            </BreadCrumbs>
            <InnerContainer>
                <Heading
                    title={t('contact.Contact us')}
                    subTitle={t('contact.Need assistance')}
                />
                <FormContainer>
                    <ContactForm />
                </FormContainer>
            </InnerContainer>
        </PageContainer>
    );
};

export default ContactPage;
