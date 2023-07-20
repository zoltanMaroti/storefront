'use client';

import React from 'react';
import PageContainer from '@/components/layout/container/PageContainer';
import Accordion from '@/components/common/accordion/Accordion';
import { useTranslations } from 'next-intl';
import {
    FaqContainer,
    InnerContainer,
    NavigationContainer,
} from '@/app/[locale]/faq/style';
import Link from 'next/link';
import BreadCrumb from '@/components/layout/breadcrumbs/BreadCrumb';
import BreadCrumbs from '@/components/layout/breadcrumbs/BreadCrumbs';

const FaqPage = () => {
    const t = useTranslations();

    return (
        <PageContainer>
            <BreadCrumbs>
                <BreadCrumb href={'/'}>{t('common.Home')}</BreadCrumb>
                <BreadCrumb href={'/faq'}>{t('common.FAQ')}</BreadCrumb>
            </BreadCrumbs>
            <InnerContainer>
                <NavigationContainer>
                    <h2>FAQ</h2>
                    <Link href={'#order'}>{t('faq.order.label')}</Link>
                    <Link href={'#payment'}>{t('faq.payment.label')}</Link>
                    <Link href={'#shipping'}>{t('faq.shipping.label')}</Link>
                    <Link href={'#returns'}>{t('faq.returns.label')}</Link>
                    <Link href={'#care'}>{t('faq.care.label')}</Link>
                    <Link href={'#support'}>{t('faq.support.label')}</Link>
                </NavigationContainer>
                <FaqContainer>
                    <div id={'order'}>
                        <h2>{t('faq.order.label')}</h2>
                        <Accordion
                            label={t('faq.order.question_1.question')}
                            borderBottom={false}
                        >
                            {t('faq.order.question_1.answer')}
                        </Accordion>
                        <Accordion
                            label={t('faq.order.question_2.question')}
                            borderBottom={false}
                        >
                            {t('faq.order.question_2.answer')}
                        </Accordion>
                        <Accordion label={t('faq.order.question_3.question')}>
                            {t('faq.order.question_3.answer')}
                        </Accordion>
                    </div>

                    <div id={'payment'}>
                        <h2>{t('faq.payment.label')}</h2>
                        <Accordion
                            label={t('faq.payment.question_1.question')}
                            borderBottom={false}
                        >
                            {t('faq.payment.question_1.answer')}
                        </Accordion>
                        <Accordion label={t('faq.payment.question_2.question')}>
                            {t('faq.payment.question_2.answer')}
                        </Accordion>
                    </div>

                    <div id={'shipping'}>
                        <h2>{t('faq.shipping.label')}</h2>
                        <Accordion
                            label={t('faq.shipping.question_1.question')}
                            borderBottom={false}
                        >
                            {t('faq.shipping.question_1.answer')}
                        </Accordion>
                        <Accordion
                            label={t('faq.shipping.question_2.question')}
                            borderBottom={false}
                        >
                            {t('faq.shipping.question_2.answer')}
                        </Accordion>
                        <Accordion
                            label={t('faq.shipping.question_3.question')}
                            borderBottom={false}
                        >
                            {t('faq.shipping.question_3.answer')}
                        </Accordion>
                        <Accordion
                            label={t('faq.shipping.question_4.question')}
                        >
                            {t('faq.shipping.question_4.answer')}
                        </Accordion>
                    </div>

                    <div id={'returns'}>
                        <h2>{t('faq.returns.label')}</h2>
                        <Accordion label={t('faq.returns.question_1.question')}>
                            {t('faq.returns.question_1.answer')}
                        </Accordion>
                    </div>

                    <div id={'care'}>
                        <h2>{t('faq.care.label')}</h2>
                        <Accordion
                            label={t('faq.care.question_1.question')}
                            borderBottom={false}
                        >
                            {t('faq.care.question_1.answer')}
                        </Accordion>
                        <Accordion
                            label={t('faq.care.question_2.question')}
                            borderBottom={false}
                        >
                            {t('faq.care.question_2.answer')}
                        </Accordion>
                        <Accordion
                            label={t('faq.care.question_3.question')}
                            borderBottom={false}
                        >
                            {t('faq.care.question_3.answer')}
                        </Accordion>
                        <Accordion
                            label={t('faq.care.question_4.question')}
                            borderBottom={false}
                        >
                            {t('faq.care.question_4.answer')}
                        </Accordion>
                        <Accordion
                            label={t('faq.care.question_5.question')}
                            borderBottom={false}
                        >
                            {t('faq.care.question_5.answer')}
                        </Accordion>
                        <Accordion label={t('faq.care.question_6.question')}>
                            {t('faq.care.question_6.answer')}
                        </Accordion>
                    </div>

                    <div id={'support'}>
                        <h2>{t('faq.support.label')}</h2>
                        <Accordion
                            label={t('faq.support.question_1.question')}
                            borderBottom={false}
                        >
                            {t('faq.support.question_1.answer')}
                        </Accordion>
                    </div>
                </FaqContainer>
            </InnerContainer>
        </PageContainer>
    );
};

export default FaqPage;
