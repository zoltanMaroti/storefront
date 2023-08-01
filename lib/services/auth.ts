import bcrypt from 'bcrypt';
import { getEnv } from '@/lib/utils';

const validatePassword = async (password: string): Promise<boolean> => {
    return await bcrypt.compare(password, getEnv('PASSWORD_HASH'));
};

const validateEmail = (email: string) => {
    return email === getEnv('EMAIL_ADDRESS');
};

export const validateUser = async (email: string, password: string) => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = await validatePassword(password);

    return isEmailValid && isPasswordValid;
};
