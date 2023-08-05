import React, { lazy } from 'react';
import { useLocale } from 'next-intl';
import { PolicyContainer } from '@/components/policies/style';

const CookiePolicyPage = () => {
    const locale = useLocale();

    const CookiePolicy = lazy(
        () => import(`@/components/policies/cookie/${locale}/CookiePolicy`)
    );

    return (
        <PolicyContainer>
            <CookiePolicy />
        </PolicyContainer>
    );
};

export default CookiePolicyPage;
