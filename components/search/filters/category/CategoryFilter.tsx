import React from 'react';
import { CATEGORIES } from '@/lib/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '@/lib/types';
import { setSearchConfig } from '@/lib/store/slices/search';
import { useTranslations } from 'next-intl';
import Accordion from '@/components/common/accordion/Accordion';
import {
    AccordionItem,
    AccordionLabel,
} from '@/components/common/accordion/style';
import { AccordionContent } from '@/components/search/filters/category/style';
import { selectCategory } from '@/lib/selectors/search';

const CategoryFilter = () => {
    const t = useTranslations('common');
    const dispatch = useDispatch();
    const selectedCategory = useSelector(selectCategory);

    const onClick = (category: Category) =>
        dispatch(setSearchConfig({ category: category.name }));

    return (
        <Accordion
            padding={false}
            borderTop={false}
            borderBottom={false}
            defaultOpen={!!selectedCategory}
            label={<AccordionLabel>{t('Category')}</AccordionLabel>}
        >
            <AccordionContent>
                {CATEGORIES.map((category) => (
                    <AccordionItem
                        key={category.slug}
                        onClick={() => onClick(category)}
                        isActive={selectedCategory === category.name}
                    >
                        {t(`${category.name}`)}
                    </AccordionItem>
                ))}
            </AccordionContent>
        </Accordion>
    );
};

export default CategoryFilter;
