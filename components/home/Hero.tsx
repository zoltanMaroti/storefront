'use client';

import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { Global } from '@emotion/react';
import {
    GlobalStyles,
    HeroImage,
    HeroItemContainer,
} from '@/components/home/style';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import { useTranslations } from 'next-intl';
import { HERO_METADATA } from '@/lib/constants';
import Heading from '@/components/common/heading/Heading';

const Hero = () => {
    const t = useTranslations('common');

    const HeroItem = (item: ReactImageGalleryItem) => {
        return (
            <HeroItemContainer>
                <Heading
                    title={t(item.originalTitle)}
                    subTitle={t(item.originalAlt)}
                />
                <HeroImage
                    src={item.original}
                    sizes={item.sizes}
                    priority={true}
                    fill={true}
                    alt={t(item.originalAlt) || t('Product')}
                />
                <Link href={item.thumbnailAlt || '/products'}>
                    <Button width={'200px'}>{t(item.thumbnailTitle)}</Button>
                </Link>
            </HeroItemContainer>
        );
    };

    return (
        <div>
            <Global styles={GlobalStyles} />
            <ImageGallery
                items={HERO_METADATA}
                renderItem={HeroItem}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                showBullets={true}
                autoPlay={true}
                slideDuration={500}
                slideInterval={10000}
            />
        </div>
    );
};

export default Hero;
