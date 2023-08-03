import React, { useState } from 'react';
import Button from '@/components/common/button/Button';
import {
    TrackingNumberContainer,
    EditTrackingNumberContainer,
} from '@/components/admin/tracking/style';
import { TrackingNumberProps } from '@/lib/types';
import { FiEdit } from 'react-icons/fi';
import TrackingNumberDialog from '@/components/admin/tracking/dialog/TrackingNumberDialog';

const TrackingNumber = ({
    defaultTrackingNumber,
    paymentIntentId,
}: TrackingNumberProps) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    if (defaultTrackingNumber) {
        return (
            <EditTrackingNumberContainer>
                <TrackingNumberDialog
                    isOpen={isModalOpen}
                    onCancel={closeModal}
                    paymentIntentId={paymentIntentId}
                    defaultTrackingNumber={defaultTrackingNumber}
                />
                <p>{defaultTrackingNumber}</p>
                <FiEdit size={'18'} onClick={openModal} />
            </EditTrackingNumberContainer>
        );
    }

    return (
        <TrackingNumberContainer>
            <TrackingNumberDialog
                isOpen={isModalOpen}
                onCancel={closeModal}
                paymentIntentId={paymentIntentId}
                defaultTrackingNumber={defaultTrackingNumber}
            />
            <Button variant={'secondary'} onClick={openModal}>
                Add tracking number
            </Button>
        </TrackingNumberContainer>
    );
};

export default TrackingNumber;
