import React from 'react';
import { useLocale } from 'next-intl';

const Terms = () => {
    const locale = useLocale();

    return (
        <div>
            <h1>Termes et conditions</h1>
            <p>Dernière mise à jour: 09/08/2023</p>
            <ol>
                <li>
                    <span>Introduction</span>
                    <p>
                        Veuillez lire attentivement ces termes et conditions
                        avant d&apos;utiliser notre site Web et d&apos;effectuer
                        des achats. En accédant ou en utilisant notre site Web,
                        vous acceptez d&apos;être lié par ces termes et
                        conditions. Si vous n&apos;êtes pas d&apos;accord avec
                        une partie de ces conditions, veuillez ne pas utiliser
                        notre site Web.
                    </p>
                    <p>
                        Veuillez nous contacter à [Contact Email] si vous avez
                        des questions ou des préoccupations concernant ces
                        termes et conditions.
                    </p>
                </li>
                <li>
                    <span>Définitions</span>
                    <p>
                        &quot;Nous&quot;, &quot;notre&quot;, &quot;notre&quot;
                        font référence à [votre nom de site Web de commerce
                        électronique].
                    </p>
                    <p>
                        &quot;Vous&quot;, &quot;utilisateur&quot;,
                        &quot;client&quot; désignent la personne qui utilise ce
                        site Web.
                    </p>
                    <p>
                        &quot;Produit(s)&quot; désigne les articles disponibles
                        à l&apos;achat sur notre site Web.
                    </p>
                </li>
                <li>
                    <span>Utilisation du site Web</span>
                    <p>
                        En utilisant notre site Web, vous acceptez de vous
                        conformer à toutes les lois et réglementations
                        applicables, y compris celles relatives au commerce
                        électronique, à la protection des données et à la
                        propriété intellectuelle.
                    </p>
                </li>
                <li>
                    <span>Commandes et achats</span>
                    <ol>
                        <li>
                            <span>Processus de commande</span>
                            <p>
                                Lorsque vous passez une commande, vous faites
                                une offre d&apos;achat du ou des produits
                                sélectionnés sous réserve des présentes
                                conditions. Nous nous réservons le droit
                                d&apos;accepter ou de refuser toute commande à
                                notre discrétion.
                            </p>
                        </li>
                        <li>
                            <span>Information produit</span>
                            <p>
                                Nous nous efforçons de fournir des descriptions
                                de produits, des prix et des images précis.
                                Cependant, nous ne garantissons pas
                                l&apos;exactitude, l&apos;exhaustivité ou la
                                fiabilité de ces informations.
                            </p>
                        </li>
                        <li>
                            <span>
                                Variation dans les produits faits à la main
                            </span>
                            <p>
                                Chez [nom de votre entreprise], nous sommes
                                extrêmement fiers de fabriquer des produits de
                                décoration faits à la main exquis qui incarnent
                                l&apos;art et l&apos;unicité. En raison de la
                                nature de l&apos;artisanat fait à la main,
                                chaque produit que nous proposons est unique en
                                son genre. Veuillez comprendre que le produit
                                que vous recevez peut ne pas être une réplique
                                exacte de l&apos;article présenté dans les
                                images du produit, car ces variations font
                                partie intégrante du processus fait à la main.
                                En passant une commande auprès de [Nom de votre
                                entreprise], vous reconnaissez et acceptez les
                                délicieuses différences qui accompagnent
                                l&apos;artisanat fait à la main.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Prix et paiement</span>
                    <ol>
                        <li>
                            <span>Tarification</span>
                            <p>
                                Tous les prix sont en [Devise] et incluent la
                                TVA, le cas échéant.
                            </p>
                        </li>
                        <li>
                            <span>Paiement</span>
                            <p>
                                Nous acceptons [Modes de paiement] pour les
                                achats. Le paiement est exigible au moment de la
                                passation de la commande.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Expédition</span>
                    <p>
                        Nous offrons diverses options d&apos;expédition. Dans
                        certains cas, un fournisseur tiers peut gérer notre
                        inventaire et sera responsable de l&apos;expédition de
                        vos produits. Une fois votre commande emballée, nous
                        vous enverrons un email avec vos informations de suivi,
                        vous pourrez ainsi suivre vos achats via le site de
                        notre transporteur. Nous nous efforcerons
                        d&apos;expédier votre colis dans les 3 jours ouvrables.
                    </p>
                    <ol>
                        <li>
                            <span>Les frais de livraison</span>
                            <p>
                                Les frais d&apos;expédition sont calculés lors
                                du processus de commande et sont à la charge du
                                client, sauf indication contraire.
                            </p>
                        </li>
                        <li>
                            <span>Livraison</span>
                            <p>
                                Notre objectif est de livrer les produits dans
                                [Délai de livraison] à l&apos;adresse fournie
                                lors du paiement. Cependant, des retards peuvent
                                survenir et nous ne sommes pas responsables de
                                ces retards. Tous les délais et dates indiqués
                                pour la livraison des produits sont donnés de
                                bonne foi mais ne sont que des estimations.
                            </p>
                        </li>
                        <li>
                            <span>Transport maritime international</span>
                            <p>
                                Nous offrons l'expédition internationale vers
                                les pays suivants : Allemagne, Luxembourg,
                                Pays-Bas, France, Belgique
                            </p>
                            <p>
                                Veuillez noter que nous pouvons être soumis à
                                diverses règles et restrictions concernant
                                certaines livraisons internationales et que vous
                                pouvez être soumis à des taxes et droits
                                supplémentaires sur lesquels nous n&apos;avons
                                aucun contrôle. Si de tels cas s'appliquent,
                                vous êtes responsable du respect des lois
                                applicables dans le pays où vous vivez et serez
                                responsable de ces coûts ou taxes
                                supplémentaires.
                            </p>
                        </li>
                        <li>
                            <span>Retards</span>
                            <p>
                                Si la livraison est retardée pour une raison
                                quelconque, nous vous en informerons dès que
                                possible et vous informerons d'une date estimée
                                révisée pour la livraison.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Retours et remboursements</span>
                    <p>
                        Si vous n&apos;êtes pas entièrement satisfait de votre
                        achat pour une raison quelconque, vous pouvez nous le
                        retourner pour un remboursement complet uniquement.
                    </p>
                    <ol>
                        <li>
                            <span>Droit de rétractation</span>
                            <p>
                                Vous avez le droit de retourner les produits
                                dans les 14 jours suivant la réception. Pour
                                initier un retour, contactez notre service
                                client à [Contact Email/Phone]. Les produits
                                doivent être dans leur état et emballage
                                d&apos;origine neufs et inutilisés, avec toutes
                                les étiquettes et étiquettes d&apos;origine
                                attachées.
                            </p>
                        </li>
                        <li>
                            <span>Remboursements</span>
                            <p>
                                Après réception de votre retour et inspection de
                                l&apos;état de votre article, nous traiterons
                                votre remboursement dans les 14 jours. Les
                                remboursements seront émis en utilisant le mode
                                de paiement original. Nous vous informerons par
                                e-mail lorsque votre retour aura été traité.
                            </p>
                        </li>
                        <li>
                            <span>Processus de retour</span>
                            <p>
                                Pour retourner un article, placez l&apos;article
                                en toute sécurité dans son emballage d'origine
                                avec votre preuve d&apos;achat et envoyez votre
                                retour à l&apos;adresse suivante:
                            </p>
                            <p>[Address]</p>
                            <p>
                                Veuillez noter que vous serez responsable de
                                tous les frais d&apos;expédition de retour. Nous
                                vous recommandons fortement d&apos;utiliser une
                                méthode traçable pour envoyer votre retour.
                            </p>
                            <p>
                                Tout retour qui ne respecte pas notre politique
                                sera refusé et réexpédié à l&apos;expéditeur à
                                vos frais. Dans ce cas, si le client ne récupère
                                pas ou refuse son colis, aucun remboursement ne
                                sera effectué.
                            </p>
                        </li>
                        <li>
                            <span>Produits défectueux ou endommagés</span>
                            <p>
                                Veuillez nous contacter aux coordonnées
                                ci-dessous pour organiser un remboursement ou un
                                échange.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Propriété intellectuelle</span>
                    <ol>
                        <li>
                            <span>Contenu</span>
                            <p>
                                Tout le contenu de ce site Web, y compris le
                                texte, les images, les logos et les graphiques,
                                est protégé par les lois sur la propriété
                                intellectuelle et est la propriété de [votre nom
                                de site Web de commerce électronique] ou de ses
                                concédants de licence.
                            </p>
                        </li>
                        <li>
                            <span>Restrictions d'utilisation</span>
                            <p>
                                Vous ne pouvez pas reproduire, distribuer,
                                modifier ou créer des œuvres dérivées basées sur
                                le contenu sans notre consentement explicite.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Droit applicable et juridiction</span>
                    <p>
                        Les présentes conditions générales sont régies par les
                        lois luxembourgeoises. Tout litige découlant de
                        l&apos;utilisation de ce site Web ou de l&apos;achat de
                        produits sera soumis à la compétence exclusive des
                        tribunaux de Luxembourg.
                    </p>
                </li>
                <li>
                    <span>Responsabilité</span>
                    <p>
                        Nous ne serons pas tenus responsables de tout manquement
                        ou retard dans l&apos;exécution de l&apos;une de nos
                        obligations envers vous si un tel manquement ou retard
                        est causé par un événement hors de notre contrôle.
                    </p>
                </li>
                <li>
                    <span>Modifications des conditions</span>
                    <p>
                        Nous nous réservons le droit de modifier ces termes et
                        conditions à tout moment. Toute modification entrera en
                        vigueur dès sa publication sur le site Web. Votre
                        utilisation continue du site Web après de tels
                        changements constitue votre acceptation des conditions
                        modifiées.
                    </p>
                </li>
                <li>
                    <span>
                        Données personnelles et politique de confidentialité
                    </span>
                    <p>
                        Nous gardons vos données personnelles privées et
                        confidentielles. En utilisant [votre nom de site Web de
                        commerce électronique], vous consentez à
                        l&apos;utilisation de vos données comme décrit dans
                        notre politique de confidentialité et vous garantissez
                        que toutes les données que vous avez fournies sont
                        exactes.
                    </p>
                    <p>
                        Pour plus de détails, veuillez consulter{' '}
                        <a href={`/${locale}/privacy-policy`}>
                            la politique de confidentialité
                        </a>{' '}
                        de [votre nom de site Web de commerce électronique].
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Terms;
