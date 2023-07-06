'use client';

import { Product } from '@/lib/types';
import Button from '@/components/common/button/Button';
import React from 'react';
import {
    AccordionLabel,
    ProductDetailsContainer,
    Description,
    Name,
    Price,
} from '@/components/product/datasheet/style';
import { useTranslations } from 'next-intl';
import Accordion from '@/components/layout/accordion/Accordion';
import { RxDimensions } from 'react-icons/rx';
import { TbTexture, TbWashGentle } from 'react-icons/tb';
import AddToCart from '@/components/product/cart/AddToCart';
import { ButtonText } from '@/components/common/button/style';

const ProductDetails = ({ product }: { product: Product }) => {
    const t = useTranslations('common');

    const onBuyNowClick = () => {};

    return (
        <ProductDetailsContainer>
            <Name>{product.content.name}</Name>
            <Price>€ {product.content.price}</Price>
            <AddToCart product={product} />
            <Button onClick={onBuyNowClick} loading={false} disabled={false}>
                <ButtonText>{t('Buy now')}</ButtonText>
            </Button>
            <Description>{product.content.description}</Description>
            <div>
                <Accordion
                    borderBottom={false}
                    label={
                        <AccordionLabel>
                            <TbTexture />
                            <Description>{t('Materials')}</Description>
                        </AccordionLabel>
                    }
                >
                    <Description>{product.content.materials}</Description>
                </Accordion>
                <Accordion
                    label={
                        <AccordionLabel>
                            <RxDimensions />
                            <Description>{t('Dimensions')}</Description>
                        </AccordionLabel>
                    }
                >
                    <div>
                        <Description>
                            {t('Height')}: {product.content.height} cm
                        </Description>
                        <Description>
                            {t('Width')}: {product.content.width} cm
                        </Description>
                        <Description>
                            {t('Length')}: {product.content.length} cm
                        </Description>
                        <Description>
                            {t('Weight')}: {product.content.weight} gr
                        </Description>
                    </div>
                </Accordion>
                <Accordion
                    borderTop={false}
                    label={
                        <AccordionLabel>
                            <TbWashGentle />
                            <Description>{t('Care instructions')}</Description>
                        </AccordionLabel>
                    }
                >
                    <Description>
                        {product.content.care_instructions}
                    </Description>
                </Accordion>
            </div>
        </ProductDetailsContainer>
    );
};

export default ProductDetails;
