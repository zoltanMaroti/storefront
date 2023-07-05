'use client';

import React from 'react';
import ImageGallery from 'react-image-gallery';
import { GalleryProps } from '@/lib/types/';
import { GalleryContainer } from '@/components/product/gallery/style';
import { normalizeImages } from '@/lib/utils';

const Gallery = ({ images }: GalleryProps) => {
    return (
        <GalleryContainer>
            <ImageGallery
                items={normalizeImages(images)}
                showPlayButton={false}
                showNav={false}
            />
        </GalleryContainer>
    );
};

export default Gallery;
