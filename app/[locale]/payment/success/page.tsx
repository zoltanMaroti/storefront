import React from 'react';
import { PageProps } from '@/lib/types';
import { notFound } from 'next/navigation';
import { PaymentApiClient } from '@/lib/api/payment';
import PageContainer from '@/components/layout/container/PageContainer';
import CheckoutSuccess from '@/components/checkout/CheckoutSuccess';

const SuccessPage = async ({ searchParams }: PageProps) => {
    if (!searchParams || !searchParams.session_id) {
        return notFound();
    }

    const sessionId = searchParams.session_id as string;
    const checkoutSession = await PaymentApiClient.getCheckoutSession(
        sessionId
    );

    return (
        <PageContainer center={true}>
            <CheckoutSuccess
                order_number={checkoutSession.order_number}
                customer={checkoutSession.customer}
            />
        </PageContainer>
    );
};

export default SuccessPage;
