import Stripe from 'stripe';
import { Locale, Product } from '@/lib/types';
import {
    convertToCents,
    getEnv,
    prepareAttachment,
    validateCheckoutSession,
} from '@/lib/utils';
import {
    DEFAULT_CURRENCY,
    DEFAULT_SHIPPING_PROVIDER,
    DEFAULT_SHIPPING_RATE,
} from '@/lib/constants';
import OrderConfirmationEmail from '@/emails/OrderConfirmationEmail';
import { render } from '@react-email/render';
import { sendEmail } from '@/lib/services/email';
import i18n from '@/emails/components/locales/i18n.json';

export const getStripeInstance = () => {
    const apiKey = getEnv('PAYMENT_GATEWAY_SECRET_KEY');

    return new Stripe(apiKey, {
        apiVersion: '2022-11-15',
    });
};

export const createCheckoutSession = async (
    products: Product[],
    locale: Stripe.Checkout.Session.Locale
): Promise<Stripe.Checkout.Session> => {
    const stripe = getStripeInstance();
    const baseUrl = getEnv('NEXT_PUBLIC_BASE_URL');

    const params: Stripe.Checkout.SessionCreateParams = {
        line_items: products.map((product) => {
            return {
                price_data: {
                    currency: DEFAULT_CURRENCY,
                    unit_amount: convertToCents(+product.content.price),
                    product_data: {
                        name: product.content.name,
                        description: product.content.description,
                        images: product.content.images.map(
                            (image) => image.filename
                        ),
                    },
                },
                quantity: product.quantity,
            };
        }),
        shipping_address_collection: {
            allowed_countries: ['LU', 'BE', 'DE', 'FR'],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: convertToCents(DEFAULT_SHIPPING_RATE),
                        currency: DEFAULT_CURRENCY,
                    },
                    display_name: DEFAULT_SHIPPING_PROVIDER,
                    delivery_estimate: {
                        minimum: {
                            unit: 'business_day',
                            value: 1,
                        },
                        maximum: {
                            unit: 'business_day',
                            value: 3,
                        },
                    },
                },
            },
        ],
        invoice_creation: {
            enabled: true,
        },
        billing_address_collection: 'required',
        phone_number_collection: {
            enabled: true,
        },
        consent_collection: { terms_of_service: 'required' },
        mode: 'payment',
        success_url: `${baseUrl}/${locale}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/${locale}/payment/cancel`,
        locale,
    };

    try {
        return await stripe.checkout.sessions.create(params);
    } catch (error: any) {
        throw new Error('Failed to prepare checkout session url', error);
    }
};

export const getCheckoutSession = async (
    sessionId: string,
    config?: Stripe.Checkout.SessionRetrieveParams
): Promise<Stripe.Checkout.Session> => {
    const stripe = getStripeInstance();

    try {
        return await stripe.checkout.sessions.retrieve(sessionId, config);
    } catch (error: any) {
        throw new Error('Failed to retrieve checkout session', error);
    }
};

export const getAllSessions = async (
    config?: Stripe.Checkout.SessionListParams
) => {
    const stripe = getStripeInstance();

    try {
        return await stripe.checkout.sessions.list(config);
    } catch (error: any) {
        throw new Error('Failed to retrieve checkout sessions', error);
    }
};

export const verifyStripeSignature = (
    signature: string,
    payload: any
): Stripe.Event => {
    const stripe = getStripeInstance();
    const secret = getEnv('PAYMENT_GATEWAY_WEBHOOK_ENDPOINT_SECRET');

    try {
        return stripe.webhooks.constructEvent(payload, signature, secret);
    } catch (error: any) {
        throw new Error('Stripe signature verification failed: ', error);
    }
};

export const onCheckoutCompleted = async (sessionId: string) => {
    const session = await getCheckoutSession(sessionId, {
        expand: [
            'line_items',
            'payment_intent',
            'payment_intent.payment_method',
            'invoice',
        ],
    });

    const {
        id,
        currency,
        created,
        amount_total,
        amount_subtotal,
        customer_details,
        shipping_details,
        shipping_cost,
        line_items,
        payment_intent,
        locale,
        invoice,
    } = session;

    validateCheckoutSession(session);

    const { payment_method } = payment_intent as {
        payment_method: Stripe.PaymentMethod;
    };

    const { email } = customer_details as { email: string };

    const attachment = await prepareAttachment(
        (invoice as Stripe.Invoice).invoice_pdf!
    );

    const html = render(
        OrderConfirmationEmail({
            id,
            currency,
            createdAt: created,
            amountTotal: amount_total,
            amountSubtotal: amount_subtotal,
            customerDetails: customer_details,
            shippingDetails: shipping_details,
            shippingCost: shipping_cost,
            lineItems: line_items?.data,
            paymentMethod: payment_method,
            locale: locale as Locale,
        })
    );

    await sendEmail(
        email,
        getEnv('EMAIL_ADDRESS'),
        getEnv('EMAIL_ADDRESS'),
        i18n[locale as Locale]['Order confirmed'],
        html,
        attachment
    );
};
