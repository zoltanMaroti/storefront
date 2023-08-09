import React, { lazy } from 'react';
import { useLocale } from 'next-intl';
import { PolicyContainer } from '@/components/policies/style';

const TermsPage = () => {
    const locale = useLocale();

    const Terms = lazy(
        () => import(`@/components/policies/terms/${locale}/Terms`)
    );

    return (
        <PolicyContainer>
            <Terms />
        </PolicyContainer>
    );
};

export default TermsPage;
