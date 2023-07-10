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

const Hero = () => {
    const t = useTranslations('common');

    const HeroItem = (item: ReactImageGalleryItem) => {
        return (
            <HeroItemContainer>
                <TitleContainer>
                    <SubTitle>{item.originalAlt}</SubTitle>
                    <Title>{item.originalTitle}</Title>
                </TitleContainer>
                <HeroImage
                    src={item.original}
                    srcSet={item.srcSet}
                    sizes={item.sizes}
                    fetchPriority={'high'}
                />
                <Link href={item.thumbnailAlt || '/products'}>
                    <Button width={'200px'}>{item.thumbnailTitle}</Button>
                </Link>
            </HeroItemContainer>
        );
    };

    return (
        <div>
            <Global styles={GlobalStyles} />
            <ImageGallery
                items={[
                    {
                        original: '/assets/images/hero-1.jpeg',
                        originalAlt: t('New Collection'),
                        originalTitle: t('Elegant & timeless'),
                        thumbnailAlt: '/products',
                        thumbnailTitle: t('Show now'),
                    },
                    {
                        original: '/assets/images/hero-2.jpeg',
                        originalAlt: t('Back in stock'),
                        originalTitle: t('Quality materials'),
                        thumbnailAlt: '/products',
                        thumbnailTitle: t('View collection'),
                    },
                    {
                        original: '/assets/images/hero-3.jpeg',
                        originalAlt: t('New Collection'),
                        originalTitle: t('Craftsmanship'),
                        thumbnailAlt: '/products',
                        thumbnailTitle: t('View collection'),
                    },
                ]}
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
