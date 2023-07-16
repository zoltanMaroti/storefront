import React from 'react';
import CheckoutCancelled from '@/components/checkout/CheckoutCancelled';
import PageContainer from '@/components/layout/container/PageContainer';
import ContinueShopping from '@/components/common/button/shopping/ContinueShopping';

const CancelPage = () => {
    return (
        <PageContainer center={true}>
            <CheckoutCancelled />
            <ContinueShopping />
        </PageContainer>
    );
};

export default CancelPage;
