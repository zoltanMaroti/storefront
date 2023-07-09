import React, { useCallback, useEffect, useState, MouseEvent } from 'react';
import { useTranslations } from 'next-intl';
import Accordion from '@/components/layout/accordion/Accordion';
import { AccordionLabel } from '@/components/layout/accordion/style';
import {
    PriceRangeContainer,
    Thumb,
    Track,
    Values,
} from '@/components/search/filters/price/style';
import { getTrackBackground, Range } from 'react-range';
import useDebounce from '@/lib/hooks/useDebounce';
import { MAX_PRICE } from '@/lib/constants';
import Price from '@/components/common/price/Price';
import { useDispatch } from 'react-redux';
import { setSearchConfig } from '@/lib/store/slices/search';

const priceConfig = {
    minimumFractionDigits: 0,
};

const PriceFilter = () => {
    const t = useTranslations('common');
    const dispatch = useDispatch();
    const [values, setValues] = useState<number[]>([0, MAX_PRICE]);
    const debouncedPriceRange = useDebounce(values);

    const onChange = useCallback((values: number[]) => {
        setValues(values);
    }, []);

    useEffect(() => {
        dispatch(
            setSearchConfig({
                minPrice: debouncedPriceRange[0],
                maxPrice: debouncedPriceRange[1],
            })
        );
    }, [dispatch, debouncedPriceRange]);

    const onContextMenu = (event: MouseEvent<HTMLDivElement>) =>
        event.preventDefault();

    return (
        <Accordion
            padding={false}
            borderTop={false}
            borderBottom={false}
            label={<AccordionLabel>{t('Price')}</AccordionLabel>}
        >
            <PriceRangeContainer>
                <Range
                    step={1}
                    min={0}
                    max={MAX_PRICE}
                    values={values}
                    onChange={onChange}
                    renderTrack={({ props, children }) => (
                        <div
                            style={{
                                ...props.style,
                            }}
                        >
                            <Track
                                ref={props.ref}
                                style={{
                                    background: getTrackBackground({
                                        values: values,
                                        colors: [
                                            '#cccccc',
                                            '#6a6a6a',
                                            '#cccccc',
                                        ],
                                        min: 0,
                                        max: MAX_PRICE,
                                    }),
                                }}
                            >
                                {children}
                            </Track>
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <Thumb {...props} onContextMenu={onContextMenu} />
                    )}
                />
                <Values>
                    <Price amount={values[0]} config={priceConfig} />
                    <Price amount={values[1]} config={priceConfig} />
                </Values>
            </PriceRangeContainer>
        </Accordion>
    );
};

export default PriceFilter;
