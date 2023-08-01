'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import usePaymentIntents from '@/lib/hooks/usePaymentIntents';
import { AuthStatuses } from '@/lib/constants';
import PaymentCard from '@/components/admin/payment/PaymentCard';
import Divider from '@/components/common/divider/Divider';
import { InnerContainer, PageContainer } from '@/app/admin/style';
import Button from '@/components/common/button/Button';
import AdminHeader from '@/components/admin/header/AdminHeader';
import Spinner from '@/components/common/spinner/Spinner';

const AdminPage = () => {
    const { data: session, status } = useSession({ required: true });
    const isAuthenticating = status === AuthStatuses.LOADING;
    const isAuthenticated = status === AuthStatuses.AUTHENTICATED;
    const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [cursor, setCursor] = useState<string | null>(null);

    const {
        data: payments,
        fetchNextPage,
        isLoading,
        isFetchingNextPage,
    } = usePaymentIntents(isAuthenticated, cursor);

    const onClick = async () => await fetchNextPage();

    useEffect(() => {
        if (payments?.pages.length) {
            const lastPage = payments.pages[payments.pages.length - 1];
            const lastOrder = lastPage[lastPage.length - 1];

            if (!lastOrder) {
                setButtonDisabled(true);
            } else {
                setCursor(lastOrder.id);
            }
        }
    }, [payments]);

    if (isAuthenticating) {
        return (
            <PageContainer center={true}>
                <Spinner color={'var(--color-font-primary)'} />
            </PageContainer>
        );
    }

    if (!payments?.pages.length && !isLoading) {
        return (
            <PageContainer center={true}>There are no payments</PageContainer>
        );
    }

    let index = 0;

    return (
        <div>
            <AdminHeader
                email={session?.user?.email}
                name={session?.user?.name}
            />
            <PageContainer>
                <h1>Orders</h1>
                <InnerContainer>
                    {payments?.pages.map((payments) => {
                        return payments.map((payment) => {
                            ++index;
                            return (
                                <React.Fragment key={payment.id}>
                                    <PaymentCard
                                        index={index}
                                        payment={payment}
                                    />
                                    <Divider />
                                </React.Fragment>
                            );
                        });
                    })}
                </InnerContainer>
                {isLoading ? (
                    <Spinner color={'var(--color-font-primary)'} />
                ) : (
                    <Button
                        onClick={onClick}
                        disabled={isButtonDisabled || isFetchingNextPage}
                        loading={isFetchingNextPage}
                        width={'200px'}
                    >
                        Load more
                    </Button>
                )}
            </PageContainer>
        </div>
    );
};

export default AdminPage;
