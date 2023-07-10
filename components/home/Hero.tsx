'use client';

import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import { Global } from '@emotion/react';
import {
    GlobalStyles,
    HeroImage,
    HeroItemContainer,
    SubTitle,
    Title,
    TitleContainer,
} from '@/components/home/style';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import { useTranslations } from 'next-intl';
import { HERO_METADATA } from '@/lib/constants';

const Hero = () => {
    const t = useTranslations('common');

    const HeroItem = (item: ReactImageGalleryItem) => {
        return (
            <HeroItemContainer>
                <TitleContainer>
                    <SubTitle>{t(item.originalAlt)}</SubTitle>
                    <Title>{t(item.originalTitle)}</Title>
                </TitleContainer>
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
