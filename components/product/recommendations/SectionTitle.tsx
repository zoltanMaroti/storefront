'use client';

import React from 'react';
import { StyledSectionTitle } from '@/components/product/recommendations/style';
import { useTranslations } from 'next-intl';

const SectionTitle = () => {
    const t = useTranslations('common');

    return <StyledSectionTitle>{t('You may also like')}</StyledSectionTitle>;
};

export default SectionTitle;
