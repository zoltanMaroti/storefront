import React from 'react';
import { Grid, List } from '@/components/policies/style';
import { useLocale } from 'next-intl';

const PrivacyPolicy = () => {
    const locale = useLocale();

    return (
        <div>
            <h1>Privacy Policy</h1>
            <p>Last update: 05/08/2023</p>
            <ol>
                <li>
                    <span>Introduction</span>
                    <p>
                        Welcome to [Your E-Commerce Store] (&quot;we,&quot;
                        &quot;us,&quot; or &quot;our&quot;). We are committed to
                        protecting your privacy and providing you with a safe
                        and secure online shopping experience. This Privacy
                        Policy aims to inform you about our practices regarding
                        the collection, use, and disclosure of personal data
                        when you visit and use our website and services via the
                        domain [Domain].
                    </p>
                </li>
                <li>
                    <span>
                        Compliance with laws governing the protection of
                        personal data
                    </span>
                    <p>
                        We acknowledge and undertake to comply with the laws and
                        regulations governing the protection of personal data,
                        including but not limited to Regulation (EU) 2016/679 of
                        the Parliament and of the Council of 27 April 2016 on
                        the protection of individuals with regard to the
                        processing of personal data and on the free movement of
                        such data (the &quot;GDPR&quot;) and any other
                        applicable national laws or regulations governing the
                        processing of such personal data.
                    </p>
                </li>
                <li>
                    <span>Data Controller and Contact Information</span>
                    <p>
                        The data controller for the processing of your personal
                        data is:
                    </p>
                    <List>
                        <Grid>
                            <p>Name:</p>
                            <p>[Your Name or Company Name]</p>
                            <p>Address:</p>
                            <p>[Your Address]</p>
                            <p>City:</p>
                            <p>[City]</p>
                            <p>State:</p>
                            <p>[State]</p>
                            <p>Zip:</p>
                            <p>[Zip]</p>
                            <p>Country:</p>
                            <p>[Country]</p>
                            <p>Email:</p>
                            <p>[Contact Email]</p>
                            <p>Phone:</p>
                            <p>[Contact Phone Number]</p>
                            <p>RCS Number:</p>
                            <p>[RCS ID]</p>
                            <p>Business permit:</p>
                            <p>[Business Permit]</p>
                        </Grid>
                    </List>
                    <p>
                        If you have any questions or concerns regarding the
                        processing of your personal data, please contact us
                        using the provided contact information.
                    </p>
                </li>
                <li>
                    <span>Information We Collect</span>
                    <p>
                        We may collect and process the following types of
                        personal data:
                    </p>
                    <ol>
                        <li>
                            <span>Personal Information</span>
                            <p>
                                When you place an order on our website, we
                                collect the necessary information to process
                                your order, including your name, email address,
                                phone number, shipping address, and payment
                                details.
                            </p>
                        </li>
                        <li>
                            <span>Device and Usage Information</span>
                            <p>
                                We may automatically collect technical data
                                about your device, browsing actions, and usage
                                patterns when you interact with our website.
                                This data is collected using cookies and similar
                                technologies. For more information about how we
                                use cookies, please refer to our{' '}
                                <a href={`/${locale}/cookie-policy`}>
                                    Cookie Policy
                                </a>
                                .
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>How We Use Your Personal Data?</span>
                    <p>
                        We use the collected personal data for the following
                        purposes:
                    </p>
                    <ol>
                        <li>
                            <span>Order Processing</span>
                            <p>
                                We use your personal information to process and
                                fulfill your orders, including payment
                                processing, shipping, and providing order status
                                updates.
                            </p>
                        </li>
                        <li>
                            <span>Customer Support</span>
                            <p>
                                We may use your information to respond to your
                                inquiries, requests, and provide customer
                                support.
                            </p>
                        </li>
                        <li>
                            <span>Service Improvement</span>
                            <p>
                                We may use aggregated and anonymized data to
                                analyze and improve our website and services.
                            </p>
                        </li>
                        <li>
                            <span>Legal Obligations</span>
                            <p>
                                We may process your personal data to comply with
                                legal obligations or to protect our legitimate
                                interests in accordance with applicable laws.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Legal Basis for Processing</span>
                    <p>
                        The General Data Protection Regulation (GDPR) requires
                        us to explain the valid legal bases we rely on in order
                        to process your personal information. As such, we may
                        rely on the following legal bases to process your
                        personal information:
                    </p>
                    <ol>
                        <li>
                            <span>Contract Performance</span>
                            <p>
                                When you place an order, we need to process your
                                personal data to fulfill our contract with you.
                            </p>
                        </li>
                        <li>
                            <span>Legitimate Interests</span>
                            <p>
                                We may process your information when we believe
                                it is reasonably necessary to achieve our
                                legitimate business interests and those
                                interests do not outweigh your interests and
                                fundamental rights and freedoms. For example, we
                                may process your personal information for some
                                of the purposes described in order to:
                            </p>
                        </li>
                        <li>
                            <span>Legal Obligations</span>
                            <p>
                                We may process your information where we believe
                                it is necessary for compliance with our legal
                                obligations, such as to cooperate with a law
                                enforcement body or regulatory agency, exercise
                                or defend our legal rights, or disclose your
                                information as evidence in litigation in which
                                we are involved.
                            </p>
                        </li>
                        <li>
                            <span>Vital Interests</span>
                            <p>
                                We may process your information where we believe
                                it is necessary to protect your vital interests
                                or the vital interests of a third party, such as
                                situations involving potential threats to the
                                safety of any person.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Data Sharing</span>
                    <p>
                        We may share your personal data with the following
                        third-party service providers:
                    </p>
                    <List>
                        <Grid>
                            <p>Stripe:</p>
                            <p>
                                We use Stripe as our payment processor to
                                securely handle payment transactions. Your
                                payment information is directly submitted to and
                                processed by Stripe, and we do not store or have
                                access to your full payment details. You can
                                review{' '}
                                <a
                                    href="https://stripe.com/en-lu/privacy"
                                    target={'_blank'}
                                >
                                    Stripe&apos;s privacy policy
                                </a>
                                .
                            </p>
                            <p>Vercel:</p>
                            <p>
                                Our website is hosted on Vercel, and they may
                                collect and process data on our behalf. You can
                                review{' '}
                                <a
                                    href="https://vercel.com/legal/privacy-policy"
                                    target={'_blank'}
                                >
                                    Vercel&apos;s privacy policy
                                </a>
                                .
                            </p>
                            <p>SendGrid:</p>
                            <p>
                                We use SendGrid to send transactional emails.
                                Your email address and other relevant details
                                may be shared with SendGrid for this purpose.
                                You can review{' '}
                                <a
                                    href="https://www.twilio.com/en-us/legal/privacy"
                                    target={'_blank'}
                                >
                                    SendGrid&apos;s privacy policy
                                </a>
                                .
                            </p>
                            <p>DHL:</p>
                            <p>
                                We share your shipping address and contact
                                information with DHL for order delivery
                                purposes.
                            </p>
                            <p>Sentry:</p>
                            <p>Website Performance Monitoring</p>
                            <p>Google Fonts:</p>
                            <p>
                                Google Fonts is a typeface visualization service
                                provided by Google Ireland Limited that allows
                                this website to incorporate content of this kind
                                on its pages.
                            </p>
                        </Grid>
                    </List>
                    <p>
                        We ensure that all third-party service providers comply
                        with data protection laws and provide adequate
                        safeguards for the protection of your personal data.
                    </p>
                </li>
                <li>
                    <span>Data Transfer</span>
                    <p>
                        In the case of the subcontractor Stripe and SendGrid,
                        your personal data may be transferred and stored on
                        servers located outside of the EU. If such transfers
                        occur, we will ensure that appropriate safeguards are in
                        place to protect your data, including standard
                        contractual clauses approved by the European Commission
                        or other appropriate measures.
                    </p>
                </li>
                <li>
                    <span>Your Rights</span>
                    <p>
                        As a data subject, you have certain rights regarding
                        your personal data under the GDPR. These rights include:
                    </p>
                    <ol>
                        <li>
                            <span>Right to Access</span>
                            <p>
                                You have the right to request information about
                                the personal data we hold about you and obtain a
                                copy of it.
                            </p>
                        </li>
                        <li>
                            <span>Right to Rectification</span>
                            <p>
                                If the personal data we hold about you is
                                inaccurate or incomplete, you have the right to
                                have it corrected or updated.
                            </p>
                        </li>
                        <li>
                            <span>Right to Erasure</span>
                            <p>
                                You have the right to request the deletion of
                                your personal data in certain circumstances.
                            </p>
                        </li>
                        <li>
                            <span>Right to Restriction of Processing</span>
                            <p>
                                You have the right to request the restriction of
                                the processing of your personal data in certain
                                circumstances.
                            </p>
                        </li>
                        <li>
                            <span>Right to Data Portability</span>
                            <p>
                                You have the right to receive a copy of your
                                personal data in a structured, commonly used,
                                and machine-readable format.
                            </p>
                        </li>
                        <li>
                            <span>Right to Object</span>
                            <p>
                                You have the right to object to the processing
                                of your personal data in certain circumstances.
                            </p>
                        </li>
                    </ol>
                    <p>
                        To exercise any of these rights, please contact us at
                        [Your Email Address]. We will respond to your request
                        within one month, as required by law.
                    </p>
                </li>
                <li>
                    <span>Data Security</span>
                    <p>
                        We implement appropriate technical and organizational
                        measures to ensure the security of your personal data
                        and protect it from unauthorized access, accidental
                        loss, destruction, or alteration. However, please
                        understand that no method of transmission over the
                        internet or electronic storage is 100% secure, and we
                        cannot guarantee absolute data security.
                    </p>
                </li>
                <li>
                    <span>Data Retention</span>
                    <p>
                        We retain your personal data only for as long as
                        necessary to fulfill the purposes for which it was
                        collected and to comply with legal obligations (such as
                        tax, accounting, or other legal requirements) or resolve
                        disputes.
                    </p>
                    <p>
                        When we have no ongoing legitimate business need to
                        process your personal information, we will either delete
                        or anonymize such information, or, if this is not
                        possible (for example, because your personal information
                        has been stored in backup archives), then we will
                        securely store your personal information and isolate it
                        from any further processing until deletion is possible.
                    </p>
                    <p>
                        If you have any questions about our data retention
                        practices, please contact us using the provided contact
                        information.
                    </p>
                </li>
                <li>
                    <span>Changes to this Privacy Policy</span>
                    <p>
                        We reserve the right to update this Privacy Policy from
                        time to time to reflect changes to our practices or for
                        other operational, legal, or regulatory reasons. Any
                        updates will be effective upon posting the revised
                        Privacy Policy on our website. We encourage you to
                        review this Privacy Policy periodically.
                    </p>
                </li>
                <li>
                    <span>Consent to this privacy policy</span>
                    <p>
                        By using our services, you consent to the terms outlined
                        in this Privacy Policy. If you do not agree with this
                        policy, please refrain from using our website and
                        services.
                    </p>
                </li>
                <li>
                    <span>Complaints</span>
                    <p>
                        If you believe that your data protection rights under
                        the GDPR have been violated, you have the right to lodge
                        a complaint with the Luxembourg supervisory authority,
                        the{' '}
                        <a
                            href="https://cnpd.public.lu/fr.html"
                            target={'_blank'}
                        >
                            Commission nationale pour la protection des données
                        </a>
                        .
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default PrivacyPolicy;
