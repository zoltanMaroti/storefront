import React from 'react';
import { PaymentCardProps } from '@/lib/types';
import Accordion from '@/components/common/accordion/Accordion';
import {
    AccordionLabel,
    Index,
    IndexContainer,
    Label,
    PaymentCardBody,
    StatusBadge,
} from '@/components/admin/payment/style';
import { formatAmount, timestampToDateTime } from '@/emails/components/helpers';
import { DEFAULT_LOCALE } from '@/lib/constants';

const PaymentCard = ({ payment, index }: PaymentCardProps) => {
    return (
        <Accordion
            borderBottom={false}
            borderTop={false}
            label={
                <AccordionLabel>
                    <IndexContainer>
                        <Index>#{index}</Index>
                        <p>{timestampToDateTime(payment.created)}</p>
                    </IndexContainer>
                    <StatusBadge status={payment.status}>
                        {payment.status}
                    </StatusBadge>
                </AccordionLabel>
            }
        >
            <PaymentCardBody>
                <div>
                    <Label>Payment ID</Label>
                    {payment.id}
                </div>
                <div>
                    <Label>Amount</Label>
                    {formatAmount(
                        DEFAULT_LOCALE,
                        payment.amount,
                        payment.currency
                    )}
                </div>
                <div>
                    <Label>Email</Label>
                    {payment.receipt_email}
                </div>
            </PaymentCardBody>
        </Accordion>
    );
};

export default PaymentCard;
