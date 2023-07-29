import { AdminProviders } from '@/lib/providers/admin';
import { GenericContainerProps } from '@/lib/types';

export default function RootLayout({ children }: GenericContainerProps) {
    return (
        <html lang="en">
            <body>
                <AdminProviders>{children}</AdminProviders>
            </body>
        </html>
    );
}
