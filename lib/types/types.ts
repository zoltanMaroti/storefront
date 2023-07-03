import { ReactNode } from 'react';

export type Locale = 'en' | 'fr' | 'de';

export type LayoutProps = {
    children: ReactNode;
    params: { locale: Locale };
};

export type PageProps = {
    params: { locale: Locale };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export type Translation = {
    [namespace: string]: {
        [key: string]: string;
    };
};
