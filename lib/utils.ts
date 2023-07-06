import { Product, ProductImage } from '@/lib/types';
import { ReactImageGalleryItem } from 'react-image-gallery';
import { GALLERY_THUMBNAIL_HEIGHT } from '@/lib/constants';

export const normalizeImages = (
    images: ProductImage[]
): ReactImageGalleryItem[] => {
    return images.map((image) => {
        return {
            original: image.filename,
            thumbnail: image.filename,
            thumbnailHeight: GALLERY_THUMBNAIL_HEIGHT,
        };
    });
};

export const calculateCartSize = (products: Product[]) => {
    let quantity = 0;
    for (const product of products) {
        if (product.quantity) {
            quantity += product.quantity;
        }
    }
    return quantity;
};
