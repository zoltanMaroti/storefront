import React from 'react';
import Drawer from '@/components/layout/drawer/Drawer';
import { useTranslations } from 'next-intl';
import {
    AccordionContent,
    AccordionLabel,
} from '@/components/layout/navigation/style';
import { MobileNavigationProps } from '@/lib/types';
import Divider from '@/components/common/divider/Divider';
import Accordion from '@/components/common/accordion/Accordion';
import { CATEGORIES } from '@/lib/constants';
import NavLink from '@/components/layout/navigation/NavLink';
import LanguageSelector from '@/components/layout/header/language/LanguageSelector';
import { usePathname } from 'next/navigation';

const MobileNavigation = ({ isOpen, onClick }: MobileNavigationProps) => {
    const t = useTranslations('common');
    const pathname = usePathname();

    return (
        <nav>
            <Drawer isOpen={isOpen} onClick={onClick}>
                <NavLink href={'/'}>{t('Home')}</NavLink>
                <Divider />
                <Accordion
                    padding={false}
                    borderTop={false}
                    borderBottom={false}
                    label={
                        <AccordionLabel>
                            <NavLink
                                href={'#'}
                                isActive={pathname.includes('products')}
                            >
                                {t('Shop')}
                            </NavLink>
                        </AccordionLabel>
                    }
                >
                    <AccordionContent>
                        <NavLink
                            href={'/products'}
                            size={'var(--font-size-md)'}
                        >
                            {t('All products')}
                        </NavLink>
                        {CATEGORIES.map((category) => (
                            <NavLink
                                href={`/products/${category.slug}`}
                                key={category.slug}
                                size={'var(--font-size-md)'}
                            >
                                {t(`${category.name}`)}
                            </NavLink>
                        ))}
                    </AccordionContent>
                </Accordion>
                <Divider />
                <NavLink href={'/cart'}>{t('Cart')}</NavLink>
                <Divider />
                <NavLink href={'/about'}>{t('About us')}</NavLink>
                <Divider />
                <NavLink href={'/faq'}>{t('FAQ')}</NavLink>
                <Divider />
                <NavLink href={'/contact'}>{t('Contact')}</NavLink>
                <Divider />
                <LanguageSelector inline={true} />
            </Drawer>
        </nav>
    );
};

export default MobileNavigation;
