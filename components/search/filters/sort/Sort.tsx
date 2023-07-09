import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslations } from 'next-intl';
import { SortDirection } from '@/lib/constants';
import { setSearchConfig } from '@/lib/store/slices/search';
import Accordion from '@/components/layout/accordion/Accordion';
import {
    AccordionItem,
    AccordionLabel,
} from '@/components/layout/accordion/style';
import { AccordionContent } from '@/components/search/filters/category/style';

const Sort = () => {
    const dispatch = useDispatch();
    const t = useTranslations('common');
    const [direction, setDirection] = useState<SortDirection | undefined>();

    const onClickIncreasing = () => {
        setDirection(SortDirection.ASCENDING);
        dispatch(setSearchConfig({ sort: SortDirection.ASCENDING }));
    };

    const onClickDecreasing = () => {
        setDirection(SortDirection.DESCENDING);
        dispatch(setSearchConfig({ sort: SortDirection.DESCENDING }));
    };

    return (
        <Accordion
            padding={false}
            borderTop={false}
            borderBottom={false}
            label={<AccordionLabel>{t('Price')}</AccordionLabel>}
        >
            <AccordionContent>
                <AccordionItem
                    isActive={direction === SortDirection.ASCENDING}
                    onClick={onClickIncreasing}
                >
                    {t('Increasing')}
                </AccordionItem>
                <AccordionItem
                    isActive={direction === SortDirection.DESCENDING}
                    onClick={onClickDecreasing}
                >
                    {t('Decreasing')}
                </AccordionItem>
            </AccordionContent>
        </Accordion>
    );
};

export default Sort;
