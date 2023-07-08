'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import ProductGrid from '@/components/product/grid/ProductGrid';
import { useSearch } from '@/lib/hooks/useSearch';
import { useSelector } from 'react-redux';
import { selectSearchTerm } from '@/lib/selectors/search';
import Loading from '@/components/common/loading/Loading';
import { Text } from '@/components/search/result/style';

const SearchResult = () => {
    const t = useTranslations('common');
    const locale = useLocale();
    const searchTerm = useSelector(selectSearchTerm);

    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useSearch({
        searchTerm,
        language: locale,
    });

    if (isError) {
        throw new Error(error.message);
    }

    if (isLoading) {
        return (
            <Loading>
                <Text>{t('Searching')}</Text>
            </Loading>
        );
    }

    if (!products?.length) {
        return <Text>{t("Looks like we don't have any matches")}</Text>;
    }

    return (
        <div>
            <ProductGrid products={products} />
        </div>
    );
};

export default SearchResult;
