import React from 'react';
import { HeaderContainer } from '@/components/admin/header/style';
import { AdminHeaderProps } from '@/lib/types';
import { signOut } from 'next-auth/react';
import Button from '@/components/common/button/Button';

const AdminHeader = ({ email, name }: AdminHeaderProps) => {
    return (
        <HeaderContainer>
            <div>
                <p>{name}</p>
                <p>{email}</p>
            </div>
            <Button
                onClick={() => signOut()}
                width={'120px'}
                variant={'secondary'}
            >
                Sign out
            </Button>
        </HeaderContainer>
    );
};

export default AdminHeader;
