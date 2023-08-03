import React, { ChangeEvent, useState } from 'react';
import Input from '@/components/common/input/Input';
import Button from '@/components/common/button/Button';
import { Backdrop } from '@/components/layout/drawer/style';
import { TrackingNumberDialogProps } from '@/lib/types';
import useTrackingNumber from '@/lib/hooks/useTrackingNumber';
import {
    ButtonsContainer,
    TrackingNumberDialogWrapper,
} from '@/components/admin/tracking/dialog/style';

const TrackingNumberDialog = ({
    isOpen,
    onCancel,
    paymentIntentId,
    defaultTrackingNumber,
}: TrackingNumberDialogProps) => {
    const [trackingNumber, setTrackingNumber] = useState<string>();
    const createTrackingNumber = useTrackingNumber();

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setTrackingNumber(event.target.value);

    const onClickSave = () => {
        if (trackingNumber) {
            createTrackingNumber
                .mutateAsync({
                    paymentIntentId,
                    trackingNumber,
                })
                .then(onCancel);
        }
    };

    return (
        <>
            <TrackingNumberDialogWrapper open={isOpen}>
                <Input
                    type={'text'}
                    placeholder={'Enter tracking number'}
                    onChange={onChange}
                    defaultValue={defaultTrackingNumber}
                />
                <ButtonsContainer>
                    <Button
                        variant={'secondary'}
                        onClick={onCancel}
                        disabled={createTrackingNumber.isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onClickSave}
                        disabled={createTrackingNumber.isLoading}
                        loading={createTrackingNumber.isLoading}
                    >
                        Save
                    </Button>
                </ButtonsContainer>
            </TrackingNumberDialogWrapper>
            <Backdrop isVisible={isOpen} />
        </>
    );
};

export default TrackingNumberDialog;
