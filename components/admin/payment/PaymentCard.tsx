import React, { useState } from 'react';
import { PaymentCardProps } from '@/lib/types';
import Accordion from '@/components/common/accordion/Accordion';
import {
    AccordionLabel,
    Index,
    IndexContainer,
    Label,
    PaymentCardBody,
    SpinnerContainer,
    StatusBadge,
} from '@/components/admin/payment/style';
import { formatAmount, timestampToDateTime } from '@/emails/components/helpers';
import { DEFAULT_LOCALE } from '@/lib/constants';
import useCheckoutSession from '@/lib/hooks/useCheckoutSession';
import Spinner from '@/components/common/spinner/Spinner';

const PaymentCard = ({ payment, index }: PaymentCardProps) => {
    const [paymentIntentId, setPaymentIntentId] = useState<string | undefined>(
        undefined
    );
    const { data: checkoutSession, isLoading } =
        useCheckoutSession(paymentIntentId);

    const onClick = (paymentIntentId: string) => {
        setPaymentIntentId(paymentIntentId);
    };

    return (
        <Accordion
            borderBottom={false}
            borderTop={false}
            onClick={() => onClick(payment.id)}
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
            {isLoading ? (
                <SpinnerContainer>
                    <Spinner color={'var(--color-font-primary)'} />
                </SpinnerContainer>
            ) : (
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
                    {checkoutSession?.line_items && (
                        <div>
                            <Label>Products</Label>
                            <div>
                                {checkoutSession.line_items.data.map(
                                    (product) => (
                                        <div key={product.id}>
                                            {product.description} - x
                                            {product.quantity}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                    {checkoutSession?.shipping_details?.address && (
                        <div>
                            <Label>Shipping</Label>
                            <p>{checkoutSession.shipping_details.name}</p>
                            <p>{checkoutSession.shipping_details.phone}</p>
                            <p>
                                {
                                    checkoutSession?.shipping_details?.address
                                        .line1
                                }
                            </p>
                            <p>
                                {
                                    checkoutSession?.shipping_details?.address
                                        .line2
                                }
                            </p>
                            <p>
                                {
                                    checkoutSession?.shipping_details?.address
                                        .city
                                }
                            </p>
                            <p>
                                {
                                    checkoutSession?.shipping_details?.address
                                        .postal_code
                                }
                            </p>
                            <p>
                                {
                                    checkoutSession?.shipping_details?.address
                                        .state
                                }
                            </p>
                            <p>
                                {
                                    checkoutSession?.shipping_details?.address
                                        .country
                                }
                            </p>
                        </div>
                    )}
                </PaymentCardBody>
            )}
        </Accordion>
    );
};

export default PaymentCard;
