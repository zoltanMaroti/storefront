'use client';

import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import usePaymentIntents from '@/lib/hooks/usePaymentIntents';
import { AuthStatuses } from '@/lib/constants';

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
        return <div>Loading</div>;
    }

    if (!payments?.pages.length && !isLoading) {
        return <p>There are no payments</p>;
    }

    return (
        <div>
            <div>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
            <div>{session?.user?.email}</div>

            {payments?.pages?.map((orders) =>
                orders.map((order) => <p>{order.id}</p>)
            )}

            {isLoading || isFetchingNextPage ? (
                <p>Loading</p>
            ) : (
                <button onClick={onClick} disabled={isButtonDisabled}>
                    Load more
                </button>
            )}
        </div>
    );
};

export default AdminPage;
