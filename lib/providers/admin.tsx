'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { GenericContainerProps } from '@/lib/types';

export function AdminProviders({ children }: GenericContainerProps) {
    const queryClient = new QueryClient();

    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                {children}
            </QueryClientProvider>
        </SessionProvider>
    );
}
