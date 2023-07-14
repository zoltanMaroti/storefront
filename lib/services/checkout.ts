import Stripe from 'stripe';
import { Product } from '@/lib/types';
import { convertToCents, getEnv } from '@/lib/utils';
import { DEFAULT_CURRENCY } from '@/lib/constants';

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
