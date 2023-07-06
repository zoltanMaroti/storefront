import { Product, ProductImage } from '@/lib/types';
import { ReactImageGalleryItem } from 'react-image-gallery';
import { DEFAULT_CURRENCY, GALLERY_THUMBNAIL_HEIGHT } from '@/lib/constants';

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

export const calculateTotalPrice = (products: Product[]) => {
    let totalPrice = 0;
    for (const product of products) {
        if (product.quantity) {
            totalPrice += +product.quantity * +product.content.price;
        }
    }

    return totalPrice;
};

export const formatCurrency = (
    locale: string,
    amount: number,
    currency = DEFAULT_CURRENCY
) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
};
