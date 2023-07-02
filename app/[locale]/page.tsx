import { getTranslation } from '@/lib/utils/translation';
import { PageProps } from '@/lib/types/types';

export default async function HomePage({ params: { locale } }: PageProps) {
    const { HomePage } = await getTranslation(locale);
    return <main>{HomePage.hello}</main>;
}
