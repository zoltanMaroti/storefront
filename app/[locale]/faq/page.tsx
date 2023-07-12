'use client';

import React from 'react';
import PageContainer from '@/components/layout/container/PageContainer';
import Accordion from '@/components/common/accordion/Accordion';
import { useTranslations } from 'next-intl';

const FaqPage = () => {
    const t = useTranslations('faq');

    return (
        <PageContainer>
            <div>
                <h1>{t('order.label')}</h1>
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

            <div>
                <h1>{t('payment.label')}</h1>
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

            <div>
                <h1>{t('shipping.label')}</h1>
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

            <div>
                <h1>{t('returns.label')}</h1>
                <Accordion
                    label={t('returns.question_1.question')}
                    borderBottom={false}
                >
                    {t('returns.question_1.answer')}
                </Accordion>
            </div>

            <div>
                <h1>{t('care.label')}</h1>
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

            <div>
                <h1>{t('support.label')}</h1>
                <Accordion
                    label={t('support.question_1.question')}
                    borderBottom={false}
                >
                    {t('support.question_1.answer')}
                </Accordion>
            </div>
        </PageContainer>
    );
};

export default FaqPage;
