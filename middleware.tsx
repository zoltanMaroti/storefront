import createMiddleware from 'next-intl/middleware';
import { DEFAULT_LOCALE } from '@/lib/constants';

export default createMiddleware({
    locales: ['en', 'fr', 'de'],
    defaultLocale: DEFAULT_LOCALE,
});

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
