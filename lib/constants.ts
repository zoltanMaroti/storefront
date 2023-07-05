import { Category, LanguageSelectorItem } from '@/lib/types';

export const screenSizes = {
    SMALL: '768px',
    MEDIUM: '1024px',
    LARGE: '1200px',
};

export const CATEGORIES: Category[] = [
    {
        name: 'Clocks',
        slug: 'clocks',
    },
    {
        name: 'Images',
        slug: 'images',
    },
    {
        name: 'Trays',
        slug: 'trays',
    },
];

export const languages: LanguageSelectorItem[] = [
    {
        code: 'fr',
        name: 'Français',
    },
    {
        code: 'de',
        name: 'Deutsch',
    },
    {
        code: 'en',
        name: 'English',
    },
];
