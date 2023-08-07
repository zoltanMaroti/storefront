'use client';

import React, { useEffect, useState } from 'react';
import {
    ButtonContainer,
    CookieBannerContainer,
} from '@/components/banners/cookie/style';
import { useLocale, useTranslations } from 'next-intl';
import { CloseButton } from '@/components/common/tag/style';

const CookieBanner = () => {
    const locale = useLocale();
    const t = useTranslations('common');
    const [isClosed, setClosed] = useState(true);

    const onClick = () => {
        localStorage.setItem('isCookieBannerClosed', JSON.stringify(true));
        setClosed(true);
    };

    useEffect(() => {
        setClosed(Boolean(localStorage.getItem('isCookieBannerClosed')));
    }, []);

    if (isClosed) {
        return null;
    }

    return (
        <CookieBannerContainer>
            <p>
                {t(
                    'This site uses cookies and other similar technologies strictly necessary for its operation requiring the processing of personal data'
                )}{' '}
                <a href={`/${locale}/cookie-policy`}>{t('Cookie Policy')}</a>
            </p>
            <ButtonContainer>
                <CloseButton size={20} onClick={onClick} />
            </ButtonContainer>
        </CookieBannerContainer>
    );
};

export default CookieBanner;
