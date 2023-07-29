import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getEnv } from '@/lib/utils';
import { validateUser } from '@/lib/services/auth';

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials) {
                    throw new Error('Credentials not found');
                }

                const { email, password } = credentials;

                const isValidUser = await validateUser(email, password);

                if (isValidUser) {
                    return {
                        id: '1',
                        name: getEnv('NEXTAUTH_USER'),
                        email: getEnv('NEXTAUTH_EMAIL'),
                    };
                } else {
                    return null;
                }
            },
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
