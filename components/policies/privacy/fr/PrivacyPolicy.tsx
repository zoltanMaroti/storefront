import React from 'react';
import { Grid, List } from '@/components/policies/style';
import { useLocale } from 'next-intl';

const PrivacyPolicy = () => {
    const locale = useLocale();

    return (
        <div>
            <h1>Politique de confidentialité</h1>
            <p>Dernière mise à jour: 05/08/2023</p>
            <ol>
                <li>
                    <span>Introduction</span>
                    <p>
                        Bienvenue dans [votre boutique de commerce électronique]
                        (&quot;nous&quot;, &quot;notre&quot; ou
                        &quot;notre&quot;). Nous nous engageons à protéger votre
                        vie privée et à vous offrir une expérience d&apos;achat
                        en ligne sûre et sécurisée. Cette politique de
                        confidentialité vise à vous informer de nos pratiques
                        concernant la collecte, l&apos;utilisation et la
                        divulgation de données personnelles lorsque vous visitez
                        et utilisez notre site Web et nos services via le
                        domaine [Domaine].
                    </p>
                </li>
                <li>
                    <span>
                        Respect des lois régissant la protection des données
                        personnelles
                    </span>
                    <p>
                        Nous reconnaissons et nous engageons à respecter les
                        lois et règlements régissant la protection des données
                        personnelles, y compris, mais sans s&apos;y limiter, le
                        règlement (UE) 2016/679 du Parlement et du Conseil du 27
                        avril 2016 relatif à la protection des personnes à
                        l&apos;égard de la traitement des données personnelles
                        et sur la libre circulation de ces données (le
                        &quot;GDPR&quot;) et toute autre loi ou réglementation
                        nationale applicable régissant le traitement de ces
                        données personnelles.
                    </p>
                </li>
                <li>
                    <span>
                        Contrôleur de données et informations de contact
                    </span>
                    <p>
                        Le responsable du traitement de vos données personnelles
                        est:
                    </p>
                    <List>
                        <Grid>
                            <p>Nom:</p>
                            <p>[Your Name or Company Name]</p>
                            <p>Adresse:</p>
                            <p>[Your Address]</p>
                            <p>Ville:</p>
                            <p>[City]</p>
                            <p>État:</p>
                            <p>[State]</p>
                            <p>Code postal:</p>
                            <p>[Zip]</p>
                            <p>Pays:</p>
                            <p>[Country]</p>
                            <p>Email:</p>
                            <p>[Contact Email]</p>
                            <p>Téléphone:</p>
                            <p>[Contact Phone Number]</p>
                            <p>Numéro RCS:</p>
                            <p>[RCS ID]</p>
                            <p>Permis d&apos;affaires:</p>
                            <p>[Business Permit]</p>
                        </Grid>
                    </List>
                    <p>
                        Si vous avez des questions ou des préoccupations
                        concernant le traitement de vos données personnelles,
                        veuillez nous contacter en utilisant les coordonnées
                        fournies.
                    </p>
                </li>
                <li>
                    <span>Informations que nous recueillons</span>
                    <p>
                        Nous pouvons collecter et traiter les types de données
                        personnelles suivants:
                    </p>
                    <ol>
                        <li>
                            <span>Informations personnelles</span>
                            <p>
                                Lorsque vous passez une commande sur notre site
                                Web, nous recueillons les informations
                                nécessaires pour traiter votre commande,
                                notamment votre nom, votre adresse e-mail, votre
                                numéro de téléphone, votre adresse de livraison
                                et vos informations de paiement.
                            </p>
                        </li>
                        <li>
                            <span>
                                Informations sur l&apos;appareil et
                                l&apos;utilisation
                            </span>
                            <p>
                                Nous pouvons collecter automatiquement des
                                données techniques sur votre appareil, vos
                                actions de navigation et vos habitudes
                                d&apos;utilisation lorsque vous interagissez
                                avec notre site Web. Ces données sont collectées
                                à l&apos;aide de cookies et de technologies
                                similaires. Pour plus d&apos;informations sur la
                                façon dont nous utilisons les cookies, veuillez
                                consulter{' '}
                                <a href={`/${locale}/cookie-policy`}>
                                    notre politique en matière de cookies
                                </a>
                                .
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>
                        Comment utilisons-nous vos données personnelles?
                    </span>
                    <p>
                        Nous utilisons les données personnelles collectées aux
                        fins suivantes:
                    </p>
                    <ol>
                        <li>
                            <span>Commande en cours de traitement</span>
                            <p>
                                Nous utilisons vos informations personnelles
                                pour traiter et exécuter vos commandes, y
                                compris le traitement des paiements,
                                l&apos;expédition et la mise à jour de
                                l&apos;état des commandes.
                            </p>
                        </li>
                        <li>
                            <span>Service client</span>
                            <p>
                                Nous pouvons utiliser vos informations pour
                                répondre à vos questions, demandes et fournir un
                                support client.
                            </p>
                        </li>
                        <li>
                            <span>Amélioration des services</span>
                            <p>
                                Nous pouvons utiliser des données agrégées et
                                anonymisées pour analyser et améliorer notre
                                site Web et nos services.
                            </p>
                        </li>
                        <li>
                            <span>Obligations légales</span>
                            <p>
                                Nous pouvons traiter vos données personnelles
                                pour nous conformer aux obligations légales ou
                                pour protéger nos intérêts légitimes
                                conformément aux lois applicables.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Base juridique du traitement</span>
                    <p>
                        Le règlement général sur la protection des données
                        (RGPD) nous oblige à expliquer les bases juridiques
                        valables sur lesquelles nous nous appuyons pour traiter
                        vos informations personnelles. A ce titre, nous pouvons
                        nous appuyer sur les bases légales suivantes pour
                        traiter vos informations personnelles:
                    </p>
                    <ol>
                        <li>
                            <span>Exécution du contrat</span>
                            <p>
                                Lorsque vous passez une commande, nous devons
                                traiter vos données personnelles pour remplir
                                notre contrat avec vous.
                            </p>
                        </li>
                        <li>
                            <span>Intérêts légitimes</span>
                            <p>
                                Nous pouvons traiter vos informations lorsque
                                nous pensons que cela est raisonnablement
                                nécessaire pour réaliser nos intérêts
                                commerciaux légitimes et que ces intérêts ne
                                l&apos;emportent pas sur vos intérêts et vos
                                libertés et droits fondamentaux. Par exemple,
                                nous pouvons traiter vos informations
                                personnelles à certaines des fins décrites afin
                                de:
                            </p>
                        </li>
                        <li>
                            <span>Obligations légales</span>
                            <p>
                                Nous pouvons traiter vos informations lorsque
                                nous pensons que cela est nécessaire pour
                                respecter nos obligations légales, telles que
                                coopérer avec un organisme chargé de
                                l&apos;application de la loi ou un organisme de
                                réglementation, exercer ou défendre nos droits
                                légaux, ou divulguer vos informations comme
                                preuve dans un litige dans lequel nous sommes
                                impliqué.
                            </p>
                        </li>
                        <li>
                            <span>Intérêts vitaux</span>
                            <p>
                                Nous pouvons traiter vos informations lorsque
                                nous pensons que cela est nécessaire pour
                                protéger vos intérêts vitaux ou les intérêts
                                vitaux d&apos;un tiers, tels que des situations
                                impliquant des menaces potentielles pour la
                                sécurité de toute personne.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Partage de données</span>
                    <p>
                        Nous pouvons partager vos données personnelles avec les
                        prestataires de services tiers suivants:
                    </p>
                    <List>
                        <Grid>
                            <p>Stripe:</p>
                            <p>
                                Nous utilisons Stripe comme processeur de
                                paiement pour gérer en toute sécurité les
                                transactions de paiement. Vos informations de
                                paiement sont directement soumises et traitées
                                par Stripe, et nous ne stockons ni n&apos;avons
                                accès à vos informations de paiement complètes.
                                Vous pouvez consulter{' '}
                                <a
                                    href="https://stripe.com/en-lu/privacy"
                                    target={'_blank'}
                                >
                                    la politique de confidentialité de Stripe
                                </a>
                                .
                            </p>
                            <p>Vercel:</p>
                            <p>
                                Notre site Web est hébergé sur Vercel, qui peut
                                collecter et traiter des données en notre nom.
                                Vous pouvez consulter{' '}
                                <a
                                    href="https://vercel.com/legal/privacy-policy"
                                    target={'_blank'}
                                >
                                    la politique de confidentialité de Vercel
                                </a>
                                .
                            </p>
                            <p>SendGrid:</p>
                            <p>
                                Nous utilisons SendGrid pour envoyer des e-mails
                                transactionnels. Votre adresse e-mail et
                                d&apos;autres détails pertinents peuvent être
                                partagés avec SendGrid à cette fin. Vous pouvez
                                consulter{' '}
                                <a
                                    href="https://www.twilio.com/en-us/legal/privacy"
                                    target={'_blank'}
                                >
                                    la politique de confidentialité de SendGrid
                                </a>
                                .
                            </p>
                            <p>DHL:</p>
                            <p>
                                Nous partageons votre adresse de livraison et
                                vos coordonnées avec DHL à des fins de livraison
                                de commande.
                            </p>
                            <p>Sentry:</p>
                            <p>Surveillance des performances du site Web</p>
                            <p>Google Fonts:</p>
                            <p>
                                Google Fonts est un service de visualisation de
                                polices de caractères fourni par Google Ireland
                                Limited qui permet à ce site Web
                                d&apos;incorporer un contenu de ce type sur ses
                                pages.
                            </p>
                        </Grid>
                    </List>
                    <p>
                        Nous veillons à ce que tous les fournisseurs de services
                        tiers respectent les lois sur la protection des données
                        et fournissent des garanties adéquates pour la
                        protection de vos données personnelles.
                    </p>
                </li>
                <li>
                    <span>Transfert de données</span>
                    <p>
                        Dans le cas du sous-traitant Stripe et SendGrid, vos
                        données personnelles peuvent être transférées et
                        stockées sur des serveurs situés en dehors de l&apos;UE.
                        Si de tels transferts se produisent, nous veillerons à
                        ce que des garanties appropriées soient en place pour
                        protéger vos données, y compris des clauses
                        contractuelles types approuvées par la Commission
                        européenne ou d&apos;autres mesures appropriées.
                    </p>
                </li>
                <li>
                    <span>Tes droits</span>
                    <p>
                        En tant que personne concernée, vous disposez de
                        certains droits concernant vos données personnelles en
                        vertu du RGPD. Ces droits incluent:
                    </p>
                    <ol>
                        <li>
                            <span>Droit d&apos;accès</span>
                            <p>
                                Vous avez le droit de demander des informations
                                sur les données personnelles que nous détenons à
                                votre sujet et d&apos;en obtenir une copie.
                            </p>
                        </li>
                        <li>
                            <span>Droit de rectification</span>
                            <p>
                                Si les données personnelles que nous détenons à
                                votre sujet sont inexactes ou incomplètes, vous
                                avez le droit de les faire corriger ou mettre à
                                jour.
                            </p>
                        </li>
                        <li>
                            <span>Droit à l&apos;effacement</span>
                            <p>
                                Vous avez le droit de demander la suppression de
                                vos données personnelles dans certaines
                                circonstances.
                            </p>
                        </li>
                        <li>
                            <span>Droit à la limitation du traitement</span>
                            <p>
                                Vous avez le droit de demander la limitation du
                                traitement de vos données personnelles dans
                                certaines circonstances.
                            </p>
                        </li>
                        <li>
                            <span>Droit à la portabilité des données</span>
                            <p>
                                Vous avez le droit de recevoir une copie de vos
                                données personnelles dans un format structuré,
                                couramment utilisé et lisible par machine.
                            </p>
                        </li>
                        <li>
                            <span>Droit d&apos;opposition</span>
                            <p>
                                Vous avez le droit de vous opposer au traitement
                                de vos données personnelles dans certaines
                                circonstances.
                            </p>
                        </li>
                    </ol>
                    <p>
                        Pour exercer l&apos;un de ces droits, veuillez nous
                        contacter à l&apos;adresse [Votre adresse e-mail]. Nous
                        répondrons à votre demande dans un délai d&apos;un mois,
                        comme l&apos;exige la loi.
                    </p>
                </li>
                <li>
                    <span>Sécurité des données</span>
                    <p>
                        Nous mettons en œuvre des mesures techniques et
                        organisationnelles appropriées pour assurer la sécurité
                        de vos données personnelles et les protéger contre tout
                        accès non autorisé, perte accidentelle, destruction ou
                        altération. Cependant, veuillez comprendre
                        qu&apos;aucune méthode de transmission sur Internet ou
                        de stockage électronique n&apos;est sécurisée à 100 %,
                        et nous ne pouvons pas garantir une sécurité absolue des
                        données.
                    </p>
                </li>
                <li>
                    <span>La conservation des données</span>
                    <p>
                        Nous ne conservons vos données personnelles que le temps
                        nécessaire pour remplir les finalités pour lesquelles
                        elles ont été collectées et pour nous conformer aux
                        obligations légales (telles que fiscales, comptables ou
                        autres exigences légales) ou résoudre les litiges.
                    </p>
                    <p>
                        Lorsque nous n&apos;avons aucun besoin commercial
                        légitime de traiter vos informations personnelles, nous
                        supprimerons ou anonymiserons ces informations, ou, si
                        cela n&apos;est pas possible (par exemple, parce que vos
                        informations personnelles ont été stockées dans des
                        archives de sauvegarde), nous les supprimerons en toute
                        sécurité. stocker vos informations personnelles et les
                        isoler de tout traitement ultérieur jusqu&apos;à ce que
                        la suppression soit possible.
                    </p>
                    <p>
                        Si vous avez des questions sur nos pratiques de
                        conservation des données, veuillez nous contacter en
                        utilisant les coordonnées fournies.
                    </p>
                </li>
                <li>
                    <span>
                        Modifications de cette politique de confidentialité
                    </span>
                    <p>
                        Nous nous réservons le droit de mettre à jour cette
                        politique de confidentialité de temps à autre pour
                        refléter les changements apportés à nos pratiques ou
                        pour d&apos;autres raisons opérationnelles, légales ou
                        réglementaires. Toute mise à jour entrera en vigueur dès
                        la publication de la politique de confidentialité
                        révisée sur notre site Web. Nous vous encourageons à
                        consulter périodiquement cette politique de
                        confidentialité.
                    </p>
                </li>
                <li>
                    <span>
                        Consentement à cette politique de confidentialité
                    </span>
                    <p>
                        En utilisant nos services, vous acceptez les conditions
                        décrites dans la présente politique de confidentialité.
                        Si vous n&apos;êtes pas d&apos;accord avec cette
                        politique, veuillez vous abstenir d&apos;utiliser notre
                        site Web et nos services.
                    </p>
                </li>
                <li>
                    <span>Plaintes</span>
                    <p>
                        Si vous estimez que vos droits en matière de protection
                        des données en vertu du RGPD ont été violés, vous avez
                        le droit de déposer une plainte auprès de
                        l&apos;autorité de contrôle luxembourgeoise, la{' '}
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
