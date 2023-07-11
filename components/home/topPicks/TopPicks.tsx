import React from 'react';
import { CommerceApiClient } from '@/lib/api/commerce';
import { useLocale } from 'next-intl';
import Swiper from '@/components/common/swiper/Swiper';
import ProductCard from '@/components/product/card/ProductCard';
import { Product } from '@/lib/types';
import { PRODUCT_CARD_MAX_WIDTH } from '@/lib/constants';
import TopPicksTitle from '@/components/home/topPicks/TopPicksTitle';

const TopPicks = async () => {
    const language = useLocale();
    const products = await CommerceApiClient.getHighlightedProducts(language);

    return (
        <>
            <TopPicksTitle />
            <Swiper<Product>
                items={products}
                Renderer={ProductCard}
                maxItemWidth={PRODUCT_CARD_MAX_WIDTH}
            />
        </>
    );
};

export default TopPicks;
