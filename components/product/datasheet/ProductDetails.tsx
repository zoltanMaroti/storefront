'use client';

import { Product } from '@/lib/types';
import React from 'react';
import {
    AccordionLabel,
    ProductDetailsContainer,
    Description,
    Name,
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
            <Name>{product.content.name}</Name>
            <Price amount={parseFloat(product.content.price)} />
            <AddToCart product={product} />
            <BuyNow product={product} />
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
