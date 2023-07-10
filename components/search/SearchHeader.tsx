'use client';

import React, { ChangeEvent } from 'react';
import Input from '@/components/common/input/Input';
import { FiSearch } from 'react-icons/fi';
import {
    SearchContainer,
    InnerContainer,
    InputContainer,
    Title,
} from '@/components/search/style';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';
import { setSearchConfig } from '@/lib/store/slices/search';

const SearchHeader = () => {
    const t = useTranslations('common');
    const dispatch = useDispatch();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchConfig({ searchTerm: event.target.value }));
    };

    return (
        <SearchContainer>
            <InnerContainer>
                <Title>{t('Explore our design collection')}</Title>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder={t('Search for products')}
                        icon={<FiSearch />}
                        onChange={onChange}
                    />
                </InputContainer>
            </InnerContainer>
        </SearchContainer>
    );
};

export default SearchHeader;
