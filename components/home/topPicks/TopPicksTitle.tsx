'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Heading from '@/components/common/heading/Heading';

const TopPicksTitle = () => {
    const t = useTranslations('common');

    return <Heading title={t('Popular picks')} />;
};

export default TopPicksTitle;
