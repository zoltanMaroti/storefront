import React from 'react';
import { Backdrop, DrawerContainer } from '@/components/layout/drawer/style';
import { DrawerProps } from '@/lib/types';

const Drawer = ({ isOpen, children, onClick }: DrawerProps) => {
    return (
        <div>
            <DrawerContainer isOpen={isOpen}>{children}</DrawerContainer>
            <Backdrop isVisible={isOpen} onClick={onClick} />
        </div>
    );
};

export default Drawer;
