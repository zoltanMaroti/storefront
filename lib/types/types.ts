import { ReactNode } from 'react';

export type PageProps = {
    children: ReactNode;
    params: { slug: string; locale: Locale };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export type Translation = {
    [namespace: string]: {
        [key: string]: string;
    };
};

export type Locale = 'en' | 'fr' | 'de';
