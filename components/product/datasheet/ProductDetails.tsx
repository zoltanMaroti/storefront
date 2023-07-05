'use client';

import { Product } from '@/lib/types';
import Button from '@/components/common/button/Button';
import React from 'react';
import {
    AccordionLabel,
    ButtonText,
    ProductDetailsContainer,
    Description,
    Name,
    Price,
} from '@/components/product/datasheet/style';
import { useTranslations } from 'next-intl';
import Accordion from '@/components/layout/accordion/Accordion';
import { RxDimensions } from 'react-icons/rx';
import { TbTexture, TbWashGentle } from 'react-icons/tb';

const ProductDetails = ({ product }: { product: Product }) => {
    const t = useTranslations('common');

    const onAddToCartClick = (product: Product) => {};

    const onBuyNowClick = () => {};

    return (
        <ProductDetailsContainer>
            <Name>{product.content.name}</Name>
            <Price>€ {product.content.price}</Price>
            <Button
                variant={'secondary'}
                onClick={() => onAddToCartClick(product)}
            >
                <ButtonText>{t('add to cart')}</ButtonText>
            </Button>
            <Button onClick={onBuyNowClick} loading={false} disabled={false}>
                <ButtonText>{t('buy now')}</ButtonText>
            </Button>
            <Description>{product.content.description}</Description>
            <div>
                <Accordion
                    borderBottom={false}
                    label={
                        <AccordionLabel>
                            <TbTexture />
                            <Description>{t('materials')}</Description>
                        </AccordionLabel>
                    }
                >
                    <Description>{product.content.materials}</Description>
                </Accordion>
                <Accordion
                    label={
                        <AccordionLabel>
                            <RxDimensions />
                            <Description>{t('dimensions')}</Description>
                        </AccordionLabel>
                    }
                >
                    <div>
                        <Description>
                            {t('height')}: {product.content.height} cm
                        </Description>
                        <Description>
                            {t('width')}: {product.content.width} cm
                        </Description>
                        <Description>
                            {t('length')}: {product.content.length} cm
                        </Description>
                        <Description>
                            {t('weight')}: {product.content.weight} gr
                        </Description>
                    </div>
                </Accordion>
                <Accordion
                    borderTop={false}
                    label={
                        <AccordionLabel>
                            <TbWashGentle />
                            <Description>{t('care instructions')}</Description>
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
