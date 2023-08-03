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
import FormErrorMessage from '@/components/forms/FormErrorMessage';

const TrackingNumberDialog = ({
    isOpen,
    onCancel,
    paymentIntentId,
    defaultTrackingNumber,
}: TrackingNumberDialogProps) => {
    const [trackingNumber, setTrackingNumber] = useState<string | undefined>(
        defaultTrackingNumber
    );
    const createTrackingNumber = useTrackingNumber();
    const [error, setError] = useState<boolean>(false);

    const isButtonDisabled =
        error ||
        trackingNumber === defaultTrackingNumber ||
        createTrackingNumber.isLoading;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setError(true);
            setTrackingNumber(undefined);
            return;
        }
        setTrackingNumber(event.target.value);
        setError(false);
    };

    const onClear = () => {
        setError(true);
        setTrackingNumber(undefined);
    };

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

    const handleCancel = () => {
        setTrackingNumber(defaultTrackingNumber);
        setError(false);
        onCancel();
    };

    return (
        <>
            <TrackingNumberDialogWrapper open={isOpen}>
                <Input
                    type={'text'}
                    placeholder={'Enter tracking number'}
                    onChange={onChange}
                    defaultValue={defaultTrackingNumber}
                    onClear={onClear}
                    value={trackingNumber}
                />
                {error && (
                    <FormErrorMessage
                        error={'Please enter a tracking number'}
                    />
                )}
                <ButtonsContainer>
                    <Button
                        variant={'secondary'}
                        onClick={handleCancel}
                        disabled={createTrackingNumber.isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onClickSave}
                        disabled={isButtonDisabled}
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
