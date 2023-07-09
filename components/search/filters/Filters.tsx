'use client';

import React, { useState } from 'react';
import {
    ClearAll,
    DrawerBody,
    DrawerHeader,
    DrawerInnerContainer,
    FilterButton,
    FilterButtonsContainer,
    InnerContainer,
} from '@/components/search/filters/style';
import { useTranslations } from 'next-intl';
import { DrawerContent } from '@/lib/types';
import Drawer from '@/components/layout/drawer/Drawer';
import Button from '@/components/common/button/Button';
import CategoryFilter from '@/components/search/filters/category/CategoryFilter';
import PriceFilter from '@/components/search/filters/price/PriceFilter';
import Divider from '@/components/common/divider/Divider';
import Sort from '@/components/search/filters/sort/Sort';
import { useSearch } from '@/lib/hooks/useSearch';
import { resetSearch } from '@/lib/store/slices/search';
import { useDispatch } from 'react-redux';

const Filters = () => {
    const t = useTranslations('common');
    const dispatch = useDispatch();
    const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
    const [drawerContent, setDrawerContent] = useState<
        DrawerContent | undefined
    >(undefined);

    const { data: products, isLoading } = useSearch();

    const toggleDrawer = () => setFilterOpen((prevState) => !prevState);

    const onClick = (content: DrawerContent) => {
        toggleDrawer();
        setDrawerContent(content);
    };

    const onClickClearAll = () => dispatch(resetSearch());

    if (isLoading) {
        return null;
    }

    return (
        <div>
            <FilterButtonsContainer>
                <InnerContainer>
                    <FilterButton onClick={() => onClick('filter')}>
                        {t('Filter')}
                    </FilterButton>
                    <FilterButton onClick={() => onClick('sort')}>
                        {t('Sort')}
                    </FilterButton>
                </InnerContainer>
            </FilterButtonsContainer>

            <Drawer isOpen={isFilterOpen} onClick={toggleDrawer}>
                <DrawerBody>
                    <DrawerInnerContainer>
                        {drawerContent === 'filter' ? (
                            <>
                                <DrawerHeader>
                                    <h3>{t('Filter')}</h3>
                                    <ClearAll onClick={onClickClearAll}>
                                        {t('Clear all')}
                                    </ClearAll>
                                </DrawerHeader>
                                <CategoryFilter />
                                <Divider />
                                <PriceFilter />
                            </>
                        ) : (
                            <>
                                <DrawerHeader>
                                    <h3>{t('Sort')}</h3>
                                    <ClearAll onClick={onClickClearAll}>
                                        {t('Clear all')}
                                    </ClearAll>
                                </DrawerHeader>
                                <Sort />
                            </>
                        )}
                    </DrawerInnerContainer>
                    <Button onClick={toggleDrawer}>
                        {t('Search')} ({(products && products.length) || 0})
                    </Button>
                </DrawerBody>
            </Drawer>
        </div>
    );
};

export default Filters;
