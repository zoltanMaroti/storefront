import React from 'react';
import SearchHeader from '@/components/search/SearchHeader';
import PageContainer from '@/components/layout/container/PageContainer';
import SearchResult from '@/components/search/result/SearchResult';
import Filters from '@/components/search/filters/Filters';

const SearchPage = () => {
    return (
        <>
            <SearchHeader />
            <PageContainer>
                <Filters />
                <SearchResult />
            </PageContainer>
        </>
    );
};

export default SearchPage;
