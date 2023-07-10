import { PageProps } from '@/lib/types';
import Hero from '@/components/home/Hero';

export default async function HomePage({ params: { locale } }: PageProps) {
    return (
        <>
            <Hero />
        </>
    );
}
