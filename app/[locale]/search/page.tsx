import React from 'react';
import SearchHeader from '@/components/search/SearchHeader';
import PageContainer from '@/components/layout/container/PageContainer';
import SearchResult from '@/components/search/result/SearchResult';

const SearchPage = () => {
    return (
        <>
            <SearchHeader />
            <PageContainer>
                <SearchResult />
            </PageContainer>
        </>
    );
};

export default SearchPage;
