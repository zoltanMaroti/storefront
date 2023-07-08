'use client';

import React from 'react';
import Input from '@/components/common/input/Input';
import { FiSearch } from 'react-icons/fi';
import {
    SearchContainer,
    InnerContainer,
    InputContainer,
    Title,
} from '@/components/search/style';
import { useTranslations } from 'next-intl';

const SearchHeader = () => {
    const t = useTranslations('common');

    const onChange = () => {};

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
