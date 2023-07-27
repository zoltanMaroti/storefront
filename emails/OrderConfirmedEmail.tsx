import React from 'react';
import { OrderConfirmedEmailProps } from '@/lib/types';
import {
    Heading,
    Section,
    Text,
    Html,
    Container,
    Body,
    Head,
    Preview,
    Column,
    Hr,
} from '@react-email/components';

export const timestampToDateTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleString();

export const formatAmount = (locale: string, amount: number, currency: string | null) => {
    const amountInCents = amount / 100;
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency || 'EUR',
    }).format(amountInCents);
};

const OrderConfirmedEmail = ({
    id,
    currency,
    createdAt,
    amountTotal,
    amountSubtotal,
    locale = 'en',
    customerDetails,
    shippingDetails,
    shippingCost,
    paymentMethod,
    lineItems,
}: OrderConfirmedEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Order confirmed</Preview>
            <Body style={styles.body}>
                <Container>
                    <Section>
                        <Heading style={styles.heading}>Order confirmation</Heading>
                        <Text>Hello {customerDetails?.name},</Text>
                        <Text>
                            We&apos;ve received your order and will contact you as soon as your
                            package is shipped. You can find your purchase information below.
                        </Text>
                    </Section>
                    <Section>
                        <Heading as={'h2'} style={styles.heading}>
                            Summary
                        </Heading>
                        <Section>
                            <Text style={styles.label}>Order number</Text>
                            <Text style={styles.last}>{id}</Text>
                            <Text style={styles.label}>Date of order</Text>
                            <Text style={styles.last}>{timestampToDateTime(createdAt)}</Text>
                            <Text style={styles.label}>Payment method</Text>
                            {paymentMethod?.card && (
                                <Text style={styles.last}>
                                    {paymentMethod?.card.brand} - {paymentMethod?.card.last4}
                                </Text>
                            )}
                            {shippingDetails && (
                                <Section>
                                    <Text style={styles.label}>Shipping</Text>
                                    {shippingDetails.name && (
                                        <Text style={styles.text}>{shippingDetails.name}</Text>
                                    )}
                                    {shippingDetails?.address?.line1 && (
                                        <Text style={styles.text}>
                                            {shippingDetails.address.line1}
                                        </Text>
                                    )}
                                    {shippingDetails?.address?.line2 && (
                                        <Text style={styles.text}>
                                            {shippingDetails.address.line2}
                                        </Text>
                                    )}
                                    {shippingDetails?.address?.city && (
                                        <Text style={styles.text}>
                                            {shippingDetails.address.city}
                                        </Text>
                                    )}
                                    {shippingDetails?.address?.postal_code && (
                                        <Text style={styles.text}>
                                            {shippingDetails.address.postal_code}
                                        </Text>
                                    )}
                                    {shippingDetails?.address?.country && (
                                        <Text style={styles.last}>
                                            {shippingDetails.address.country}
                                        </Text>
                                    )}
                                </Section>
                            )}
                            {paymentMethod?.billing_details && (
                                <Section>
                                    <Text style={styles.label}>Billing</Text>
                                    {paymentMethod?.billing_details.name && (
                                        <Text style={styles.text}>
                                            {paymentMethod.billing_details.name}
                                        </Text>
                                    )}
                                    {paymentMethod?.billing_details.address?.line1 && (
                                        <Text style={styles.text}>
                                            {paymentMethod.billing_details?.address.line1}
                                        </Text>
                                    )}
                                    {paymentMethod?.billing_details.address?.line2 && (
                                        <Text style={styles.text}>
                                            {paymentMethod.billing_details.address?.line2}
                                        </Text>
                                    )}
                                    {paymentMethod?.billing_details.address?.city && (
                                        <Text style={styles.text}>
                                            {paymentMethod.billing_details.address?.city}
                                        </Text>
                                    )}
                                    {paymentMethod?.billing_details.address?.postal_code && (
                                        <Text style={styles.text}>
                                            {paymentMethod.billing_details.address?.postal_code}
                                        </Text>
                                    )}
                                    {paymentMethod.billing_details.address?.country && (
                                        <Text style={styles.text}>
                                            {paymentMethod.billing_details.address?.country}
                                        </Text>
                                    )}
                                    {paymentMethod.billing_details.email && (
                                        <Text style={styles.text}>
                                            {paymentMethod.billing_details.email}
                                        </Text>
                                    )}
                                    {paymentMethod.billing_details.phone && (
                                        <Text style={styles.last}>
                                            {paymentMethod.billing_details.phone}
                                        </Text>
                                    )}
                                </Section>
                            )}
                        </Section>
                        <Hr />
                        {lineItems && (
                            <Section>
                                <Column>
                                    {lineItems.map((item) => (
                                        <Text key={item.id}>
                                            {item.description} x {item.quantity}
                                        </Text>
                                    ))}
                                </Column>
                                <Column>
                                    {lineItems.map((item) => (
                                        <Text key={item.id} style={styles.amount}>
                                            {item.price?.unit_amount &&
                                                item.quantity &&
                                                formatAmount(
                                                    locale,
                                                    item.price?.unit_amount * item.quantity,
                                                    currency
                                                )}
                                        </Text>
                                    ))}
                                </Column>
                            </Section>
                        )}
                        <Hr />
                        <Section>
                            <Column>
                                <Text>Subtotal</Text>
                                <Text>Shipping</Text>
                                <Text style={styles.total}>Total</Text>
                            </Column>
                            <Column>
                                <Text style={styles.amount}>
                                    {amountSubtotal &&
                                        formatAmount(locale, amountSubtotal, currency)}
                                </Text>
                                <Text style={styles.amount}>
                                    {shippingCost?.amount_total &&
                                        formatAmount(locale, shippingCost?.amount_total, currency)}
                                </Text>
                                <Text style={styles.totalAmount}>
                                    {amountTotal && formatAmount(locale, amountTotal, currency)}
                                </Text>
                            </Column>
                        </Section>
                        <Text style={styles.heading}>
                            {/* TODO replace email */}
                            If you have any questions, contact us at email@email.com
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

const styles = {
    body: {
        background: 'white',
    } as React.CSSProperties,
    heading: {
        textAlign: 'center',
    } as React.CSSProperties,
    amount: {
        textAlign: 'right',
    } as React.CSSProperties,
    totalAmount: {
        textTransform: 'uppercase',
        fontWeight: 700,
        textAlign: 'right',
    } as React.CSSProperties,
    total: {
        textTransform: 'uppercase',
        fontWeight: 700,
    } as React.CSSProperties,
    label: {
        textTransform: 'uppercase',
        margin: 0,
    } as React.CSSProperties,
    text: {
        margin: 0,
    } as React.CSSProperties,
    last: {
        marginTop: 0,
    } as React.CSSProperties,
};

export default OrderConfirmedEmail;
