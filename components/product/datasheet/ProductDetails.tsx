'use client';

import { Product } from '@/lib/types';
import React from 'react';
import {
    AccordionLabel,
    ProductDetailsContainer,
    Description,
    Name,
    ButtonsContainer,
    Text,
    PriceContainer,
} from '@/components/product/datasheet/style';
import { useTranslations } from 'next-intl';
import Accordion from '@/components/common/accordion/Accordion';
import { RxDimensions } from 'react-icons/rx';
import { TbTexture, TbWashGentle } from 'react-icons/tb';
import AddToCart from '@/components/product/cart/AddToCart';
import Price from '@/components/common/price/Price';
import BuyNow from '@/components/product/datasheet/BuyNow';

const ProductDetails = ({ product }: { product: Product }) => {
    const t = useTranslations('common');

    return (
        <ProductDetailsContainer>
            <div>
                <Name>{product.content.name}</Name>
                <PriceContainer>
                    <Price amount={parseFloat(product.content.price)} />
                </PriceContainer>
            </div>
            <Description>{product.content.description}</Description>
            <ButtonsContainer>
                <AddToCart product={product} />
                <BuyNow product={product} />
            </ButtonsContainer>
            <div>
                <Accordion
                    borderBottom={false}
                    borderTop={false}
                    label={
                        <AccordionLabel>
                            <TbTexture />
                            <Text>{t('Materials')}</Text>
                        </AccordionLabel>
                    }
                >
                    <Text>{product.content.materials}</Text>
                </Accordion>
                <Accordion
                    label={
                        <AccordionLabel>
                            <RxDimensions />
                            <Text>{t('Dimensions')}</Text>
                        </AccordionLabel>
                    }
                >
                    <div>
                        <Text>
                            {t('Height')}: {product.content.height} cm
                        </Text>
                        <Text>
                            {t('Width')}: {product.content.width} cm
                        </Text>
                        <Text>
                            {t('Length')}: {product.content.length} cm
                        </Text>
                        <Text>
                            {t('Weight')}: {product.content.weight} gr
                        </Text>
                    </div>
                </Accordion>
                <Accordion
                    borderTop={false}
                    label={
                        <AccordionLabel>
                            <TbWashGentle />
                            <Text>{t('Care instructions')}</Text>
                        </AccordionLabel>
                    }
                >
                    <Text>{product.content.care_instructions}</Text>
                </Accordion>
            </div>
        </ProductDetailsContainer>
    );
};

export default ProductDetails;
