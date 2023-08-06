import React from 'react';
import { Grid, List } from '@/components/policies/style';
import { useLocale } from 'next-intl';

const PrivacyPolicy = () => {
    const locale = useLocale();

    return (
        <div>
            <h1>Datenschutz-Bestimmungen</h1>
            <p>Letztes Update: 05/08/2023</p>
            <ol>
                <li>
                    <span>Einführung</span>
                    <p>
                        Willkommen bei [Ihrem E-Commerce-Shop] (&quot;wir&quot;,
                        &quot;uns&quot; oder &quot;unser&quot;). Wir sind
                        bestrebt, Ihre Privatsphäre zu schützen und Ihnen ein
                        sicheres Online-Einkaufserlebnis zu bieten. Ziel dieser
                        Datenschutzrichtlinie ist es, Sie über unsere Praktiken
                        hinsichtlich der Erhebung, Nutzung und Offenlegung
                        personenbezogener Daten zu informieren, wenn Sie unsere
                        Website und Dienste über die Domain [Domain] besuchen
                        und nutzen.
                    </p>
                </li>
                <li>
                    <span>
                        Einhaltung der Gesetze zum Schutz personenbezogener
                        Daten
                    </span>
                    <p>
                        Wir erkennen an und verpflichten uns, die Gesetze und
                        Vorschriften zum Schutz personenbezogener Daten
                        einzuhalten, einschließlich, aber nicht beschränkt auf
                        die Verordnung (EU) 2016/679 des Parlaments und des
                        Rates vom 27. April 2016 zum Schutz natürlicher Personen
                        im Hinblick auf die Verarbeitung personenbezogener Daten
                        und zum freien Datenverkehr (die &quot;DSGVO&quot;)
                        sowie alle anderen geltenden nationalen Gesetze oder
                        Vorschriften, die die Verarbeitung dieser
                        personenbezogenen Daten regeln.
                    </p>
                </li>
                <li>
                    <span>Datenverantwortlicher und Kontaktdaten</span>
                    <p>
                        Verantwortlicher für die Verarbeitung Ihrer
                        personenbezogenen Daten ist:
                    </p>
                    <List>
                        <Grid>
                            <p>Name:</p>
                            <p>[Your Name or Company Name]</p>
                            <p>Adresse:</p>
                            <p>[Your Address]</p>
                            <p>Stadt:</p>
                            <p>[City]</p>
                            <p>Zustand:</p>
                            <p>[State]</p>
                            <p>PLZ:</p>
                            <p>[Zip]</p>
                            <p>Land:</p>
                            <p>[Country]</p>
                            <p>Email:</p>
                            <p>[Contact Email]</p>
                            <p>Telefon:</p>
                            <p>[Contact Phone Number]</p>
                            <p>RCS-Nummer:</p>
                            <p>[RCS ID]</p>
                            <p>Gewerbeerlaubnis:</p>
                            <p>[Business Permit]</p>
                        </Grid>
                    </List>
                    <p>
                        Wenn Sie Fragen oder Bedenken hinsichtlich der
                        Verarbeitung Ihrer personenbezogenen Daten haben,
                        kontaktieren Sie uns bitte über die angegebenen
                        Kontaktinformationen.
                    </p>
                </li>
                <li>
                    <span>Informationen, die wir sammeln</span>
                    <p>
                        Wir können die folgenden Arten personenbezogener Daten
                        erheben und verarbeiten:
                    </p>
                    <ol>
                        <li>
                            <span>Persönliche Angaben</span>
                            <p>
                                Wenn Sie auf unserer Website eine Bestellung
                                aufgeben, erfassen wir die zur Bearbeitung Ihrer
                                Bestellung erforderlichen Informationen,
                                einschließlich Ihres Namens, Ihrer
                                E-Mail-Adresse, Telefonnummer, Lieferadresse und
                                Zahlungsdetails.
                            </p>
                        </li>
                        <li>
                            <span>Geräte- und Nutzungsinformationen</span>
                            <p>
                                Wir erfassen möglicherweise automatisch
                                technische Daten über Ihr Gerät,
                                Browsing-Aktionen und Nutzungsmuster, wenn Sie
                                mit unserer Website interagieren. Diese Daten
                                werden mithilfe von Cookies und ähnlichen
                                Technologien erfasst. Weitere Informationen
                                darüber, wie wir Cookies verwenden, finden Sie
                                in unserer{' '}
                                <a href={`/${locale}/cookie-policy`}>
                                    Cookie-Richtlinie
                                </a>
                                .
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Wie verwenden wir Ihre personenbezogenen Daten?</span>
                    <p>
                        Wir verwenden die erhobenen personenbezogenen Daten für
                        folgende Zwecke:
                    </p>
                    <ol>
                        <li>
                            <span>Auftragsabwicklung</span>
                            <p>
                                Wir verwenden Ihre personenbezogenen Daten zur
                                Bearbeitung und Erfüllung Ihrer Bestellungen,
                                einschließlich der Zahlungsabwicklung, des
                                Versands und der Bereitstellung von
                                Bestellstatusaktualisierungen.
                            </p>
                        </li>
                        <li>
                            <span>Kundendienst</span>
                            <p>
                                Wir können Ihre Daten verwenden, um auf Ihre
                                Anfragen und Wünsche zu antworten und
                                Kundensupport zu leisten.
                            </p>
                        </li>
                        <li>
                            <span>Serviceverbesserung</span>
                            <p>
                                Wir können aggregierte und anonymisierte Daten
                                verwenden, um unsere Website und Dienste zu
                                analysieren und zu verbessern.
                            </p>
                        </li>
                        <li>
                            <span>Gesetzliche Verpflichtungen</span>
                            <p>
                                Wir können Ihre personenbezogenen Daten
                                verarbeiten, um gesetzlichen Verpflichtungen
                                nachzukommen oder unsere berechtigten Interessen
                                gemäß den geltenden Gesetzen zu schützen.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Rechtsgrundlage für die Verarbeitung</span>
                    <p>
                        Die Datenschutz-Grundverordnung (DSGVO) verlangt von
                        uns, Ihnen die gültigen Rechtsgrundlagen zu erläutern,
                        auf die wir uns bei der Verarbeitung Ihrer
                        personenbezogenen Daten stützen. Daher können wir uns
                        bei der Verarbeitung Ihrer personenbezogenen Daten auf
                        die folgenden Rechtsgrundlagen stützen:
                    </p>
                    <ol>
                        <li>
                            <span>Vertragserfüllung</span>
                            <p>
                                Wenn Sie eine Bestellung aufgeben, ist die
                                Verarbeitung Ihrer personenbezogenen Daten zur
                                Vertragserfüllung mit Ihnen erforderlich.
                            </p>
                        </li>
                        <li>
                            <span>Berechtigte Interessen</span>
                            <p>
                                Wir können Ihre Daten verarbeiten, wenn wir
                                davon ausgehen, dass dies zur Wahrung unserer
                                legitimen Geschäftsinteressen angemessen ist und
                                diese Interessen Ihre Interessen sowie
                                Grundrechte und -freiheiten nicht überwiegen.
                                Beispielsweise können wir Ihre personenbezogenen
                                Daten für einige der beschriebenen Zwecke
                                verarbeiten, um:
                            </p>
                        </li>
                        <li>
                            <span>Gesetzliche Verpflichtungen</span>
                            <p>
                                Wir können Ihre Daten verarbeiten, wenn wir der
                                Ansicht sind, dass dies zur Erfüllung unserer
                                gesetzlichen Verpflichtungen erforderlich ist,
                                beispielsweise zur Zusammenarbeit mit einer
                                Strafverfolgungs- oder Regulierungsbehörde, zur
                                Ausübung oder Verteidigung unserer gesetzlichen
                                Rechte oder zur Offenlegung Ihrer Daten als
                                Beweismittel in einem Rechtsstreit, in dem wir
                                uns befinden beteiligt.
                            </p>
                        </li>
                        <li>
                            <span>Lebenswichtige Interessen</span>
                            <p>
                                Wir können Ihre Daten verarbeiten, wenn wir
                                davon ausgehen, dass dies zum Schutz Ihrer
                                lebenswichtigen Interessen oder der
                                lebenswichtigen Interessen Dritter erforderlich
                                ist, beispielsweise in Situationen, in denen
                                eine potenzielle Bedrohung für die Sicherheit
                                einer Person besteht.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Datenübertragung</span>
                    <p>
                        Wir können Ihre personenbezogenen Daten an die folgenden
                        Drittanbieter weitergeben:
                    </p>
                    <List>
                        <Grid>
                            <p>Stripe:</p>
                            <p>
                                Zur sicheren Abwicklung von
                                Zahlungstransaktionen nutzen wir Stripe als
                                unseren Zahlungsabwickler. Ihre
                                Zahlungsinformationen werden direkt an Stripe
                                übermittelt und von Stripe verarbeitet. Wir
                                speichern Ihre vollständigen Zahlungsdaten nicht
                                und haben auch keinen Zugriff darauf. Sie können
                                die{' '}
                                <a
                                    href="https://stripe.com/en-lu/privacy"
                                    target={'_blank'}
                                >
                                    Datenschutzrichtlinie von Stripe
                                </a>{' '}
                                einsehen.
                            </p>
                            <p>Vercel:</p>
                            <p>
                                Unsere Website wird auf Vercel gehostet und sie
                                können in unserem Namen Daten sammeln und
                                verarbeiten. Sie können die{' '}
                                <a
                                    href="https://vercel.com/legal/privacy-policy"
                                    target={'_blank'}
                                >
                                    Datenschutzrichtlinie von Vercel
                                </a>{' '}
                                einsehen.
                            </p>
                            <p>SendGrid:</p>
                            <p>
                                Wir verwenden SendGrid zum Versenden von
                                Transaktions-E-Mails. Zu diesem Zweck können
                                Ihre E-Mail-Adresse und andere relevante Daten
                                an SendGrid weitergegeben werden. Sie können die{' '}
                                <a
                                    href="https://www.twilio.com/en-us/legal/privacy"
                                    target={'_blank'}
                                >
                                    Datenschutzrichtlinie von SendGrid
                                </a>{' '}
                                einsehen.
                            </p>
                            <p>DHL:</p>
                            <p>
                                Wir geben Ihre Lieferadresse und
                                Kontaktinformationen zum Zwecke der Lieferung
                                der Bestellung an DHL weiter.
                            </p>
                            <p>Sentry:</p>
                            <p>Überwachung der Website-Leistung</p>
                            <p>Google Fonts:</p>
                            <p>
                                Google Fonts ist ein von Google Ireland Limited
                                bereitgestellter Dienst zur Visualisierung von
                                Schriftarten, der es dieser Website ermöglicht,
                                entsprechende Inhalte auf ihren Seiten
                                einzubinden.
                            </p>
                        </Grid>
                    </List>
                    <p>
                        Wir stellen sicher, dass alle Drittanbieter die
                        Datenschutzgesetze einhalten und angemessene Garantien
                        zum Schutz Ihrer personenbezogenen Daten bieten.
                    </p>
                </li>
                <li>
                    <span>Datentransfer</span>
                    <p>
                        Im Falle der Subunternehmer Stripe und SendGrid kann es
                        zu einer Übertragung und Speicherung Ihrer
                        personenbezogenen Daten auf Server außerhalb der EU
                        kommen. Wenn solche Übermittlungen stattfinden, stellen
                        wir sicher, dass angemessene Sicherheitsvorkehrungen zum
                        Schutz Ihrer Daten getroffen werden, einschließlich von
                        der Europäischen Kommission genehmigter
                        Standardvertragsklauseln oder anderer geeigneter
                        Maßnahmen.
                    </p>
                </li>
                <li>
                    <span>Deine Rechte</span>
                    <p>
                        Als betroffene Person haben Sie nach der DSGVO bestimmte
                        Rechte hinsichtlich Ihrer personenbezogenen Daten. Zu
                        diesen Rechten gehören:
                    </p>
                    <ol>
                        <li>
                            <span>Recht auf Zugang</span>
                            <p>
                                Sie haben das Recht, Auskunft über die von uns
                                über Sie gespeicherten personenbezogenen Daten
                                zu verlangen und eine Kopie davon zu erhalten.
                            </p>
                        </li>
                        <li>
                            <span>Recht auf Berichtigung</span>
                            <p>
                                Wenn die von uns über Sie gespeicherten
                                personenbezogenen Daten unrichtig oder
                                unvollständig sind, haben Sie das Recht, diese
                                berichtigen oder aktualisieren zu lassen.
                            </p>
                        </li>
                        <li>
                            <span>Recht auf Löschung</span>
                            <p>
                                Unter bestimmten Umständen haben Sie das Recht,
                                die Löschung Ihrer personenbezogenen Daten zu
                                verlangen.
                            </p>
                        </li>
                        <li>
                            <span>
                                Recht auf Einschränkung der Verarbeitung
                            </span>
                            <p>
                                Sie haben das Recht, unter bestimmten Umständen
                                die Einschränkung der Verarbeitung Ihrer
                                personenbezogenen Daten zu verlangen.
                            </p>
                        </li>
                        <li>
                            <span>Recht auf Datenübertragbarkeit</span>
                            <p>
                                Sie haben das Recht, eine Kopie Ihrer
                                personenbezogenen Daten in einem strukturierten,
                                gängigen und maschinenlesbaren Format zu
                                erhalten.
                            </p>
                        </li>
                        <li>
                            <span>Widerspruchsrecht</span>
                            <p>
                                Unter bestimmten Umständen haben Sie das Recht,
                                der Verarbeitung Ihrer personenbezogenen Daten
                                zu widersprechen.
                            </p>
                        </li>
                    </ol>
                    <p>
                        Um eines dieser Rechte auszuüben, kontaktieren Sie uns
                        bitte unter [Ihre E-Mail-Adresse]. Wir werden Ihre
                        Anfrage innerhalb eines Monats beantworten, wie
                        gesetzlich vorgeschrieben.
                    </p>
                </li>
                <li>
                    <span>Datensicherheit</span>
                    <p>
                        Wir ergreifen geeignete technische und organisatorische
                        Maßnahmen, um die Sicherheit Ihrer personenbezogenen
                        Daten zu gewährleisten und diese vor unbefugtem Zugriff,
                        versehentlichem Verlust, Zerstörung oder Veränderung zu
                        schützen. Bitte haben Sie jedoch Verständnis dafür, dass
                        keine Methode der Übertragung im Internet oder der
                        elektronischen Speicherung zu 100 % sicher ist und wir
                        keine absolute Datensicherheit garantieren können.
                    </p>
                </li>
                <li>
                    <span>Vorratsdatenspeicherung</span>
                    <p>
                        Wir bewahren Ihre personenbezogenen Daten nur so lange
                        auf, wie es zur Erfüllung der Zwecke, für die sie
                        erhoben wurden, und zur Einhaltung gesetzlicher
                        Verpflichtungen (z. B. Steuer-, Buchhaltungs- oder
                        sonstiger rechtlicher Anforderungen) oder zur Beilegung
                        von Streitigkeiten erforderlich ist.
                    </p>
                    <p>
                        Wenn kein berechtigter geschäftlicher Bedarf besteht,
                        Ihre personenbezogenen Daten zu verarbeiten, werden wir
                        diese Daten entweder löschen oder anonymisieren oder,
                        wenn dies nicht möglich ist (z. B. weil Ihre
                        personenbezogenen Daten in Backup-Archiven gespeichert
                        wurden), auf sichere Weise Speichern Sie Ihre
                        persönlichen Daten und isolieren Sie sie von jeder
                        weiteren Verarbeitung, bis eine Löschung möglich ist.
                    </p>
                    <p>
                        Wenn Sie Fragen zu unseren Praktiken zur
                        Datenaufbewahrung haben, kontaktieren Sie uns bitte über
                        die angegebenen Kontaktinformationen.
                    </p>
                </li>
                <li>
                    <span>Änderungen dieser Datenschutzrichtlinie</span>
                    <p>
                        Wir behalten uns das Recht vor, diese
                        Datenschutzrichtlinie von Zeit zu Zeit zu aktualisieren,
                        um Änderungen unserer Praktiken Rechnung zu tragen oder
                        aus anderen betrieblichen, rechtlichen oder
                        regulatorischen Gründen. Alle Aktualisierungen werden
                        mit der Veröffentlichung der überarbeiteten
                        Datenschutzrichtlinie auf unserer Website wirksam. Wir
                        empfehlen Ihnen, diese Datenschutzrichtlinie regelmäßig
                        zu überprüfen.
                    </p>
                </li>
                <li>
                    <span>Zustimmung zu dieser Datenschutzerklärung</span>
                    <p>
                        Durch die Nutzung unserer Dienste stimmen Sie den in
                        dieser Datenschutzrichtlinie dargelegten Bedingungen zu.
                        Wenn Sie mit dieser Richtlinie nicht einverstanden sind,
                        sehen Sie bitte von der Nutzung unserer Website und
                        Dienste ab.
                    </p>
                </li>
                <li>
                    <span>Beschwerden</span>
                    <p>
                        Wenn Sie glauben, dass Ihre Datenschutzrechte gemäß der
                        DSGVO verletzt wurden, haben Sie das Recht, eine
                        Beschwerde bei der luxemburgischen Aufsichtsbehörde, der{' '}
                        <a
                            href="https://cnpd.public.lu/fr.html"
                            target={'_blank'}
                        >
                            Commission nationale pour la protection des données
                        </a>
                        , einzureichen.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default PrivacyPolicy;
