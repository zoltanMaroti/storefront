import React from 'react';
import { PriceProps } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { useLocale } from 'next-intl';

const Price = ({ amount, config }: PriceProps) => {
    const locale = useLocale();

    return <div>{formatCurrency(locale, amount, config)}</div>;
};

export default Price;
