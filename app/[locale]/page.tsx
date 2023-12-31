import { PageProps } from '@/lib/types';
import Hero from '@/components/home/Hero';
import React from 'react';
import PageContainer from '@/components/layout/container/PageContainer';
import WelcomeMessage from '@/components/home/welcome/WelcomeMessage';
import CategoriesGrid from '@/components/common/categories/CategoriesGrid';
import TopPicks from '@/components/home/topPicks/TopPicks';

export default async function HomePage({ params: { locale } }: PageProps) {
    return (
        <>
            <Hero />
            <PageContainer>
                <WelcomeMessage />
                <CategoriesGrid />
                <TopPicks />
            </PageContainer>
        </>
    );
}
