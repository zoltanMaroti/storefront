'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Heading from '@/components/common/heading/Heading';

const WelcomeMessage = () => {
    const t = useTranslations('common');

    return <Heading title={t('Where style meets functionality')} />;
};

export default WelcomeMessage;
