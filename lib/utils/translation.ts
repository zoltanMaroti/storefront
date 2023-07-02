import { notFound } from 'next/navigation';
import { Locale, Translation } from '@/lib/types/types';

export async function getTranslation(locale: Locale): Promise<Translation> {
    try {
        return (await import(`../../locales/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}
