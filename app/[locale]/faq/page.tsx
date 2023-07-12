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

const FaqPage = () => {
    const t = useTranslations('faq');

    return (
        <PageContainer>
            <InnerContainer>
                <NavigationContainer>
                    <h2>FAQ</h2>
                    <Link href={'#order'}>{t('order.label')}</Link>
                    <Link href={'#payment'}>{t('payment.label')}</Link>
                    <Link href={'#shipping'}>{t('shipping.label')}</Link>
                    <Link href={'#returns'}>{t('returns.label')}</Link>
                    <Link href={'#care'}>{t('care.label')}</Link>
                    <Link href={'#support'}>{t('support.label')}</Link>
                </NavigationContainer>
                <FaqContainer>
                    <div id={'order'}>
                        <h2>{t('order.label')}</h2>
                        <Accordion
                            label={t('order.question_1.question')}
                            borderBottom={false}
                        >
                            {t('order.question_1.answer')}
                        </Accordion>
                        <Accordion
                            label={t('order.question_2.question')}
                            borderBottom={false}
                        >
                            {t('order.question_2.answer')}
                        </Accordion>
                        <Accordion label={t('order.question_3.question')}>
                            {t('order.question_3.answer')}
                        </Accordion>
                    </div>

                    <div id={'payment'}>
                        <h2>{t('payment.label')}</h2>
                        <Accordion
                            label={t('payment.question_1.question')}
                            borderBottom={false}
                        >
                            {t('payment.question_1.answer')}
                        </Accordion>
                        <Accordion label={t('payment.question_2.question')}>
                            {t('payment.question_2.answer')}
                        </Accordion>
                    </div>

                    <div id={'shipping'}>
                        <h2>{t('shipping.label')}</h2>
                        <Accordion
                            label={t('shipping.question_1.question')}
                            borderBottom={false}
                        >
                            {t('shipping.question_1.answer')}
                        </Accordion>
                        <Accordion
                            label={t('shipping.question_2.question')}
                            borderBottom={false}
                        >
                            {t('shipping.question_2.answer')}
                        </Accordion>
                        <Accordion
                            label={t('shipping.question_3.question')}
                            borderBottom={false}
                        >
                            {t('shipping.question_3.answer')}
                        </Accordion>
                        <Accordion label={t('shipping.question_4.question')}>
                            {t('shipping.question_4.answer')}
                        </Accordion>
                    </div>

                    <div id={'returns'}>
                        <h2>{t('returns.label')}</h2>
                        <Accordion label={t('returns.question_1.question')}>
                            {t('returns.question_1.answer')}
                        </Accordion>
                    </div>

                    <div id={'care'}>
                        <h2>{t('care.label')}</h2>
                        <Accordion
                            label={t('care.question_1.question')}
                            borderBottom={false}
                        >
                            {t('care.question_1.answer')}
                        </Accordion>
                        <Accordion
                            label={t('care.question_2.question')}
                            borderBottom={false}
                        >
                            {t('care.question_2.answer')}
                        </Accordion>
                        <Accordion
                            label={t('care.question_3.question')}
                            borderBottom={false}
                        >
                            {t('care.question_3.answer')}
                        </Accordion>
                        <Accordion
                            label={t('care.question_4.question')}
                            borderBottom={false}
                        >
                            {t('care.question_4.answer')}
                        </Accordion>
                        <Accordion
                            label={t('care.question_5.question')}
                            borderBottom={false}
                        >
                            {t('care.question_5.answer')}
                        </Accordion>
                        <Accordion label={t('care.question_6.question')}>
                            {t('care.question_6.answer')}
                        </Accordion>
                    </div>

                    <div id={'support'}>
                        <h2>{t('support.label')}</h2>
                        <Accordion
                            label={t('support.question_1.question')}
                            borderBottom={false}
                        >
                            {t('support.question_1.answer')}
                        </Accordion>
                    </div>
                </FaqContainer>
            </InnerContainer>
        </PageContainer>
    );
};

export default FaqPage;
