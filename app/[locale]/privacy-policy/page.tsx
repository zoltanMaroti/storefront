import React, { lazy } from 'react';
import { useLocale } from 'next-intl';
import { PolicyContainer } from '@/components/policies/style';

const PrivacyPolicyPage = () => {
    const locale = useLocale();

    const PrivacyPolicy = lazy(
        () => import(`@/components/policies/privacy/${locale}/PrivacyPolicy`)
    );

    return (
        <PolicyContainer>
            <PrivacyPolicy />
        </PolicyContainer>
    );
};

export default PrivacyPolicyPage;
