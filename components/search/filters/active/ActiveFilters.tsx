import React from 'react';
import {
    FiltersContainer,
    PriceRangeContainer,
} from '@/components/search/filters/active/style';
import Tag from '@/components/common/tag/Tag';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCategory,
    selectIsDefaultPriceRange,
    selectPriceRange,
} from '@/lib/selectors/search';
import { resetCategory, resetPriceRange } from '@/lib/store/slices/search';
import Price from '@/components/common/price/Price';
import { useTranslations } from 'next-intl';

const priceConfig = {
    minimumFractionDigits: 0,
};

const ActiveFilters = () => {
    const t = useTranslations('common');
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    const isDefaultPriceRange = useSelector(selectIsDefaultPriceRange);
    const priceRange = useSelector(selectPriceRange);

    if (!category && isDefaultPriceRange) {
        return null;
    }

    return (
        <FiltersContainer>
            {category && (
                <Tag onClick={() => dispatch(resetCategory())}>
                    {t(category)}
                </Tag>
            )}
            {!isDefaultPriceRange && (
                <Tag onClick={() => dispatch(resetPriceRange())}>
                    <PriceRangeContainer>
                        <Price amount={priceRange[0]} config={priceConfig} />
                        <span>-</span>
                        <Price amount={priceRange[1]} config={priceConfig} />
                    </PriceRangeContainer>
                </Tag>
            )}
        </FiltersContainer>
    );
};

export default ActiveFilters;
