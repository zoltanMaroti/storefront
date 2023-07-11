'use client';

import React from 'react';
import { CATEGORIES } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import {
    InnerContainer,
    CategoryCard,
    CategoryImage,
    CategoriesContainer,
    NameContainer,
    Name,
} from '@/components/common/categories/style';
import Link from 'next/link';

const CategoriesGrid = () => {
    const t = useTranslations('common');

    return (
        <CategoriesContainer>
            <InnerContainer>
                {CATEGORIES.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/products/${category.slug}`}
                    >
                        <CategoryCard>
                            <NameContainer>
                                <Name>{t(category.name)}</Name>
                            </NameContainer>
                            <CategoryImage
                                src={category.image}
                                fill={true}
                                alt={t(category.name)}
                            />
                        </CategoryCard>
                    </Link>
                ))}
            </InnerContainer>
        </CategoriesContainer>
    );
};

export default CategoriesGrid;
