import React from 'react';
import { useLocale } from 'next-intl';

const Terms = () => {
    const locale = useLocale();

    return (
        <div>
            <h1>Terms and Conditions</h1>
            <p>Last Updated: 09/08/2023</p>
            <ol>
                <li>
                    <span>Introduction</span>
                    <p>
                        Please read these terms and conditions carefully before
                        using our website and making any purchases. By accessing
                        or using our website, you agree to be bound by these
                        terms and conditions. If you do not agree with any part
                        of these terms, please do not use our website.
                    </p>
                    <p>
                        Please contact us at [Contact Email] if you have any
                        questions or concerns regarding these terms and
                        conditions.
                    </p>
                </li>
                <li>
                    <span>Definitions</span>
                    <p>
                        &quot;We,&quot; &quot;our,&quot; &quot;us&quot; refer to
                        [Your E-Commerce Website Name].
                    </p>
                    <p>
                        &quot;You,&quot; &quot;user,&quot; &quot;customer&quot;
                        refer to the person using this website.
                    </p>
                    <p>
                        &quot;Product(s)&quot; refer to the items available for
                        purchase on our website.
                    </p>
                </li>
                <li>
                    <span>Use of the Website</span>
                    <p>
                        By using our website, you agree to comply with all
                        applicable laws and regulations, including those related
                        to e-commerce, data protection, and intellectual
                        property.
                    </p>
                </li>
                <li>
                    <span>Orders and Purchases</span>
                    <ol>
                        <li>
                            <span>Order Process</span>
                            <p>
                                When placing an order, you are making an offer
                                to purchase the selected product(s) subject to
                                these terms. We reserve the right to accept or
                                decline any order at our discretion.
                            </p>
                        </li>
                        <li>
                            <span>Product Information</span>
                            <p>
                                We strive to provide accurate product
                                descriptions, prices, and images. However, we do
                                not guarantee the accuracy, completeness, or
                                reliability of such information.
                            </p>
                        </li>
                        <li>
                            <span>Variation in handmade products</span>
                            <p>
                                At [Your Company Name], we take immense pride in
                                crafting exquisite handmade home decoration
                                products that embody artistry and uniqueness.
                                Due to the nature of handmade craftsmanship,
                                every product we offer is one-of-a-kind. Please
                                understand that the product you receive may not
                                be an exact replica of the item shown in product
                                images, as these variations are an integral part
                                of the handmade process. By placing an order
                                with [Your Company Name], you acknowledge and
                                accept the delightful differences that come with
                                handmade craftsmanship.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Prices and Payment</span>
                    <ol>
                        <li>
                            <span>Pricing</span>
                            <p>
                                All prices are in [Currency] and include VAT
                                where applicable.
                            </p>
                        </li>
                        <li>
                            <span>Payment</span>
                            <p>
                                We accept [Payment Methods] for purchases.
                                Payment is due at the time of order placement.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Shipping</span>
                    <p>
                        We offer various shipping options. In some cases a
                        third-party supplier may be managing our inventory and
                        will be responsible for shipping your products. Once
                        your order is packaged, we will send an email with your
                        tracking information, you will thus be able to track
                        your purchases via our transporter’s website. We will
                        aim to dispatch your parcel within 3 business days.
                    </p>
                    <ol>
                        <li>
                            <span>Shipping costs</span>
                            <p>
                                Shipping costs are calculated during the
                                checkout process and are the responsibility of
                                the customer unless otherwise stated.
                            </p>
                        </li>
                        <li>
                            <span>Delivery</span>
                            <p>
                                We aim to deliver products within [Delivery
                                Timeframe] to the address provided during
                                checkout. However, delays may occur, and we are
                                not liable for any such delays. All times and
                                dates given for delivery of the products are
                                given in good faith but are estimates only.
                            </p>
                        </li>
                        <li>
                            <span>International shipping</span>
                            <p>
                                We offer international shipping to the following
                                countries: Germany, Luxembourg, Netherlands,
                                France, Belgium.
                            </p>
                            <p>
                                Please note, we may be subject to various rules
                                and restrictions in relation to some
                                international deliveries and you may be subject
                                to additional taxes and duties over which we
                                have no control. If such cases apply, you are
                                responsible for complying with the laws
                                applicable to the country where you live and
                                will be responsible for any such additional
                                costs or taxes.
                            </p>
                        </li>
                        <li>
                            <span>Delays</span>
                            <p>
                                If delivery is delayed for any reason we will
                                let you know as soon as possible and will advise
                                you of a revised estimated date for delivery.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Returns and Refunds</span>
                    <p>
                        If you are not completely satisfied with your purchase
                        for any reason, you may return it to us for a full
                        refund only.
                    </p>
                    <ol>
                        <li>
                            <span>Right of withdrawal</span>
                            <p>
                                You have the right to return products within 14
                                days of receipt. To initiate a return, contact
                                our customer service at [Contact Email/Phone].
                                The products must be in their original new and
                                unused condition and packaging, with all
                                original tags and labels attached.
                            </p>
                        </li>
                        <li>
                            <span>Refunds</span>
                            <p>
                                After receiving your return and inspecting the
                                condition of your item, we will process your
                                refund within 14 days. Refunds will be issued
                                using the original payment method. We will
                                notify you by email when your return has been
                                processed.
                            </p>
                        </li>
                        <li>
                            <span>Return process</span>
                            <p>
                                To return an item, place the item securely in
                                its original packaging with your proof of
                                purchase and mail your return to the following
                                address:
                            </p>
                            <p>[Address]</p>
                            <p>
                                Please note, you will be responsible for all
                                return shipping charges. We strongly recommend
                                that you use a trackable method to mail your
                                return.
                            </p>
                            <p>
                                Any returns that do not meet our policy will be
                                refused and re-shipped to sender at your charge.
                                In this case, if the client does not pick up or
                                refuses his parcel, no refund will be made.
                            </p>
                        </li>
                        <li>
                            <span>Defective or damaged products</span>
                            <p>
                                Please contact us at the contact details below
                                to arrange a refund or exchange.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Intellectual Property</span>
                    <ol>
                        <li>
                            <span>Content</span>
                            <p>
                                All content on this website, including text,
                                images, logos, and graphics, is protected by
                                intellectual property laws and is the property
                                of [Your E-Commerce Website Name] or its
                                licensors.
                            </p>
                        </li>
                        <li>
                            <span>Use Restrictions</span>
                            <p>
                                You may not reproduce, distribute, modify, or
                                create derivative works based on the content
                                without our explicit consent.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Applicable Law and Jurisdiction</span>
                    <p>
                        These terms and conditions are governed by the laws of
                        Luxembourg. Any disputes arising from the use of this
                        website or the purchase of products shall be subject to
                        the exclusive jurisdiction of the courts of Luxembourg.
                    </p>
                </li>
                <li>
                    <span>Responsibility</span>
                    <p>
                        We will not be liable or responsible for any failure to
                        perform, or delay in performance of, any of our
                        obligations to you if such failure or delay is caused by
                        an event outside of our control.
                    </p>
                </li>
                <li>
                    <span>Modifications to Terms</span>
                    <p>
                        We reserve the right to modify these terms and
                        conditions at any time. Any changes will be effective
                        upon posting on the website. Your continued use of the
                        website after such changes constitutes your acceptance
                        of the modified terms.
                    </p>
                </li>
                <li>
                    <span>Personal details and Privacy Policy</span>
                    <p>
                        We keep your personal data private and confidential. By
                        using [Your E-Commerce Website Name], you consent to the
                        use of your data as described in our Privacy Policy and
                        you warrant that all data provided by you is accurate.
                    </p>
                    <p>
                        For further details, please see the [Your E-Commerce
                        Website Name]{' '}
                        <a href={`/${locale}/privacy-policy`}>Privacy Policy</a>
                        .
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Terms;
