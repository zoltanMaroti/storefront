import React from 'react';
import { PriceProps } from '@/lib/types';
import { DEFAULT_CURRENCY } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';
import { useLocale } from 'next-intl';

const Price = ({ amount, currency = DEFAULT_CURRENCY }: PriceProps) => {
    const locale = useLocale();

    return <div>{formatCurrency(locale, amount, currency)}</div>;
};

export default Price;
