import Stripe from 'stripe';
import { Product } from '@/lib/types';
import { convertToCents, getEnv } from '@/lib/utils';
import {
    DEFAULT_CURRENCY,
    DEFAULT_SHIPPING_PROVIDER,
    DEFAULT_SHIPPING_RATE,
} from '@/lib/constants';

const getStripeInstance = () => {
    const apiKey = getEnv('PAYMENT_GATEWAY_SECRET_KEY');

    return new Stripe(apiKey, {
        apiVersion: '2022-11-15',
    });
};

export const createCheckoutSession = async (
    products: Product[]
): Promise<Stripe.Checkout.Session> => {
    const stripe = getStripeInstance();
    const successUrl = getEnv('PAYMENT_GATEWAY_SUCCESS_URL');
    const cancelUrl = getEnv('PAYMENT_GATEWAY_CANCEL_URL');

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
        mode: 'payment',
        success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl,
    };

    try {
        return await stripe.checkout.sessions.create(params);
    } catch (error) {
        throw new Error(error as string);
    }
};

export const retrieveSession = async (
    sessionId: string
): Promise<Stripe.Checkout.Session> => {
    const stripe = getStripeInstance();

    try {
        return await stripe.checkout.sessions.retrieve(sessionId);
    } catch (error: any) {
        throw new Error('Failed to retrieve checkout session: ', error);
    }
};

export const getLineItems = async (
    sessionId: string
): Promise<Stripe.LineItem[]> => {
    const stripe = getStripeInstance();

    return await new Promise((resolve, reject) => {
        stripe.checkout.sessions.listLineItems(
            sessionId,
            { limit: 100 },
            // @ts-ignore
            (error, lineItems) => {
                if (error) {
                    return reject(error);
                }
                resolve(lineItems);
            }
        );
    });
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

export const onCheckoutCompleted = async (session: Stripe.Checkout.Session) => {
    const lineItems = await getLineItems(session.id);
};
