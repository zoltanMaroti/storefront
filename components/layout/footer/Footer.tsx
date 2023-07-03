import React from 'react';
import {
    Column,
    FooterContainer,
    FooterNavLink,
    Row,
    PaymentMethod,
    PaymentMethods,
} from '@/components/layout/footer/style';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { RiPinterestLine } from 'react-icons/ri';
import { useTranslations } from 'next-intl';
import { CATEGORIES } from '@/lib/constants';

const Footer = () => {
    const t = useTranslations('common');

    return (
        <FooterContainer>
            <Column>
                <h2>{t('About the shop')}</h2>
                <p>
                    {t(
                        'Welcome to our interior design store, where style meets functionality! Explore our curated collection of exquisite furniture, decor, and accessories, meticulously selected to transform your living spaces into havens of comfort and elegance'
                    )}
                </p>
                <Row>
                    <FiFacebook size={24} />
                    <FiInstagram size={24} />
                    <RiPinterestLine size={24} />
                </Row>
            </Column>
            <Row>
                <Column>
                    <h2>{t('Shop')}</h2>
                    <FooterNavLink href={'/products'}>
                        {t('All products')}
                    </FooterNavLink>
                    {CATEGORIES.map((category) => (
                        <FooterNavLink
                            key={category.slug}
                            href={`/products/${category.slug}`}
                        >
                            {t(`${category.name}`)}
                        </FooterNavLink>
                    ))}
                </Column>
                <Column>
                    <h2>{t('Information')}</h2>
                    <FooterNavLink href={'#'}>{t('About us')}</FooterNavLink>
                    <FooterNavLink href={'#'}>{t('FAQ')}</FooterNavLink>
                    <FooterNavLink href={'#'}>{t('Contact')}</FooterNavLink>
                </Column>
            </Row>
            <PaymentMethods>
                <Row>
                    <PaymentMethod src={'/assets/logos/visa.svg'} alt="Visa" />
                    <PaymentMethod
                        src={'/assets/logos/mastercard.svg'}
                        alt="Mastercard"
                    />
                    <PaymentMethod
                        src={'/assets/logos/apple-pay.svg'}
                        alt="Apple Pay"
                    />
                    <PaymentMethod
                        src={'/assets/logos/google-pay.svg'}
                        alt="Google Pay"
                    />
                </Row>
            </PaymentMethods>
        </FooterContainer>
    );
};

export default Footer;
