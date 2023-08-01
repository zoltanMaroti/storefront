import React, { ChangeEvent, useState } from 'react';
import Button from '@/components/common/button/Button';
import {
    ButtonsContainer,
    CreateTrackingNumberContainer,
    CreateTrackingNumberDialog,
} from '@/components/admin/tracking/style';
import { Backdrop } from '@/components/layout/drawer/style';
import Input from '@/components/common/input/Input';
import useTrackingNumber from '@/lib/hooks/useTrackingNumber';
import { CreateTrackingNumberProps } from '@/lib/types';

const CreateTrackingNumber = ({
    paymentIntentId,
}: CreateTrackingNumberProps) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [trackingNumber, setTrackingNumber] = useState<string>();
    const createTrackingNumber = useTrackingNumber();

    const toggleModal = () => setModalOpen((prevState) => !prevState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTrackingNumber(event.target.value);
    };

    const onClick = () => {
        if (trackingNumber) {
            createTrackingNumber
                .mutateAsync({
                    paymentIntentId,
                    trackingNumber,
                })
                .then(() => toggleModal());
        }
    };

    return (
        <CreateTrackingNumberContainer>
            <CreateTrackingNumberDialog open={isModalOpen}>
                <Input
                    type={'text'}
                    placeholder={'Enter tracking number'}
                    onChange={onChange}
                />
                <ButtonsContainer>
                    <Button
                        variant={'secondary'}
                        onClick={toggleModal}
                        disabled={createTrackingNumber.isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onClick}
                        disabled={createTrackingNumber.isLoading}
                        loading={createTrackingNumber.isLoading}
                    >
                        Save
                    </Button>
                </ButtonsContainer>
            </CreateTrackingNumberDialog>
            <Backdrop isVisible={isModalOpen} />
            <Button variant={'secondary'} onClick={toggleModal}>
                Add tracking number
            </Button>
        </CreateTrackingNumberContainer>
    );
};

export default CreateTrackingNumber;
