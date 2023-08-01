import { AdminProviders } from '@/lib/providers/admin';
import { LayoutProps } from '@/lib/types';
import '@/app/[locale]/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
});
export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <AdminProviders>{children}</AdminProviders>
            </body>
        </html>
    );
}
