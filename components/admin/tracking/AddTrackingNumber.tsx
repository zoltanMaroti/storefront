import React, { ChangeEvent, useState } from 'react';
import Button from '@/components/common/button/Button';
import {
    ButtonsContainer,
    AddTrackingNumberContainer,
    AddTrackingNumberDialog,
} from '@/components/admin/tracking/style';
import { Backdrop } from '@/components/layout/drawer/style';
import Input from '@/components/common/input/Input';

const AddTrackingNumber = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [trackingNumber, setTrackingNumber] = useState<string>();

    const toggleModal = () => setModalOpen((prevState) => !prevState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTrackingNumber(event.target.value);
    };

    return (
        <AddTrackingNumberContainer>
            <AddTrackingNumberDialog open={isModalOpen}>
                <Input
                    type={'text'}
                    placeholder={'Enter tracking number'}
                    onChange={onChange}
                />
                <ButtonsContainer>
                    <Button variant={'secondary'} onClick={toggleModal}>
                        Cancel
                    </Button>
                    <Button>Save</Button>
                </ButtonsContainer>
            </AddTrackingNumberDialog>
            <Backdrop isVisible={isModalOpen} />
            <Button variant={'secondary'} onClick={toggleModal}>
                Add tracking number
            </Button>
        </AddTrackingNumberContainer>
    );
};

export default AddTrackingNumber;
