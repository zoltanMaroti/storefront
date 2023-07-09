'use client';

import React, { useState } from 'react';
import {
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

const Filters = () => {
    const t = useTranslations('common');
    const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
    const [drawerContent, setDrawerContent] = useState<
        DrawerContent | undefined
    >(undefined);

    const toggleDrawer = () => setFilterOpen((prevState) => !prevState);

    const onClick = (content: DrawerContent) => {
        toggleDrawer();
        setDrawerContent(content);
    };

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
                                </DrawerHeader>
                                <CategoryFilter />
                            </>
                        ) : (
                            <>
                                <DrawerHeader>
                                    <h3>{t('Sort')}</h3>
                                </DrawerHeader>
                            </>
                        )}
                    </DrawerInnerContainer>
                    <Button onClick={toggleDrawer}>{t('Search')}</Button>
                </DrawerBody>
            </Drawer>
        </div>
    );
};

export default Filters;
