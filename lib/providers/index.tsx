'use client';

import { Provider } from 'react-redux';
import React, { ReactNode } from 'react';
import { store } from '@/lib/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function Providers({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
    );
}
