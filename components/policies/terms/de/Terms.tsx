import React from 'react';
import { useLocale } from 'next-intl';

const Terms = () => {
    const locale = useLocale();

    return (
        <div>
            <h1>Geschäftsbedingungen</h1>
            <p>Letztes Update: 09/08/2023</p>
            <ol>
                <li>
                    <span>Einführung</span>
                    <p>
                        Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen
                        sorgfältig durch, bevor Sie unsere Website nutzen und
                        Einkäufe tätigen. Durch den Zugriff auf oder die Nutzung
                        unserer Website erklären Sie sich mit diesen Allgemeinen
                        Geschäftsbedingungen einverstanden. Wenn Sie mit
                        irgendeinem Teil dieser Bedingungen nicht einverstanden
                        sind, nutzen Sie unsere Website bitte nicht.
                    </p>
                    <p>
                        Bitte kontaktieren Sie uns unter [Kontakt-E-Mail], wenn
                        Sie Fragen oder Bedenken zu diesen Allgemeinen
                        Geschäftsbedingungen haben.
                    </p>
                </li>
                <li>
                    <span>Definitionen</span>
                    <p>
                        &quot;Wir&quot;, &quot;unser&quot;, &quot;uns&quot;
                        beziehen sich auf [Name Ihrer E-Commerce-Website].
                    </p>
                    <p>
                        &quot;Sie&quot;, &quot;Benutzer&quot;, &quot;Kunde&quot;
                        beziehen sich auf die Person, die diese Website nutzt.
                    </p>
                    <p>
                        &quot;Produkt(e)&quot; bezieht sich auf die Artikel, die
                        auf unserer Website zum Kauf angeboten werden.
                    </p>
                </li>
                <li>
                    <span>Nutzung der Website</span>
                    <p>
                        Durch die Nutzung unserer Website erklären Sie sich mit
                        der Einhaltung aller geltenden Gesetze und Vorschriften
                        einverstanden, einschließlich derjenigen in Bezug auf
                        E-Commerce, Datenschutz und geistiges Eigentum.
                    </p>
                </li>
                <li>
                    <span>Bestellungen und Einkäufe</span>
                    <ol>
                        <li>
                            <span>Bestellprozess</span>
                            <p>
                                Wenn Sie eine Bestellung aufgeben, geben Sie ein
                                Angebot zum Kauf der ausgewählten Produkte gemäß
                                diesen Bedingungen ab. Wir behalten uns das
                                Recht vor, Bestellungen nach eigenem Ermessen
                                anzunehmen oder abzulehnen.
                            </p>
                        </li>
                        <li>
                            <span>Produktinformation</span>
                            <p>
                                Wir bemühen uns, genaue Produktbeschreibungen,
                                Preise und Bilder bereitzustellen. Wir
                                übernehmen jedoch keine Gewähr für die
                                Richtigkeit, Vollständigkeit oder
                                Zuverlässigkeit dieser Informationen.
                            </p>
                        </li>
                        <li>
                            <span>Variation in handgefertigten Produkten</span>
                            <p>
                                Bei [Name Ihres Unternehmens] sind wir sehr
                                stolz auf die Herstellung exquisiter
                                handgefertigter Heimdekorationsprodukte, die
                                Kunstfertigkeit und Einzigartigkeit verkörpern.
                                Aufgrund der Natur der handgefertigten
                                Handwerkskunst ist jedes von uns angebotene
                                Produkt ein Unikat. Bitte haben Sie Verständnis
                                dafür, dass das Produkt, das Sie erhalten,
                                möglicherweise keine exakte Nachbildung des auf
                                den Produktbildern gezeigten Artikels ist, da
                                diese Abweichungen ein wesentlicher Bestandteil
                                des handgefertigten Prozesses sind. Indem Sie
                                eine Bestellung bei [Name Ihres Unternehmens]
                                aufgeben, erkennen Sie die wunderbaren
                                Unterschiede an, die mit handgefertigter
                                Handwerkskunst einhergehen.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Preise und Zahlung</span>
                    <ol>
                        <li>
                            <span>Preisgestaltung</span>
                            <p>
                                Alle Preise verstehen sich in [Währung] und
                                enthalten gegebenenfalls die Mehrwertsteuer.
                            </p>
                        </li>
                        <li>
                            <span>Zahlung</span>
                            <p>
                                Wir akzeptieren [Zahlungsmethoden] für Einkäufe.
                                Die Zahlung ist zum Zeitpunkt der
                                Auftragserteilung fällig.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Versand</span>
                    <p>
                        Wir bieten verschiedene Versandoptionen an. In einigen
                        Fällen verwaltet möglicherweise ein Drittanbieter
                        unseren Lagerbestand und ist für den Versand Ihrer
                        Produkte verantwortlich. Sobald Ihre Bestellung verpackt
                        ist, senden wir Ihnen eine E-Mail mit Ihren
                        Tracking-Informationen. So können Sie Ihre Einkäufe über
                        die Website unseres Transportunternehmens verfolgen.
                        Unser Ziel ist es, Ihr Paket innerhalb von 3 Werktagen
                        zu versenden.
                    </p>
                    <ol>
                        <li>
                            <span>Versandkosten</span>
                            <p>
                                Die Versandkosten werden während des
                                Bestellvorgangs berechnet und liegen in der
                                Verantwortung des Kunden, sofern nicht anders
                                angegeben.
                            </p>
                        </li>
                        <li>
                            <span>Lieferung</span>
                            <p>
                                Unser Ziel ist es, Produkte innerhalb des
                                [Lieferzeitraums] an die beim Bezahlvorgang
                                angegebene Adresse zu liefern. Es kann jedoch zu
                                Verzögerungen kommen, für die wir keine Haftung
                                übernehmen. Alle für die Lieferung der Produkte
                                angegebenen Zeiten und Daten werden nach bestem
                                Wissen und Gewissen angegeben, sind jedoch
                                lediglich Schätzungen.
                            </p>
                        </li>
                        <li>
                            <span>Internationales Versenden</span>
                            <p>
                                Wir bieten internationalen Versand in folgende
                                Länder an: Deutschland, Luxemburg, Niederlande,
                                Frankreich, Belgien
                            </p>
                            <p>
                                Bitte beachten Sie, dass wir im Zusammenhang mit
                                einigen internationalen Lieferungen
                                verschiedenen Regeln und Einschränkungen
                                unterliegen können und dass für Sie
                                möglicherweise zusätzliche Steuern und Abgaben
                                anfallen, auf die wir keinen Einfluss haben. In
                                solchen Fällen sind Sie für die Einhaltung der
                                in dem Land, in dem Sie leben, geltenden Gesetze
                                verantwortlich und tragen die Verantwortung für
                                etwaige zusätzliche Kosten oder Steuern.
                            </p>
                        </li>
                        <li>
                            <span>Verzögerungen</span>
                            <p>
                                Sollte sich die Lieferung aus irgendeinem Grund
                                verzögern, werden wir Sie so schnell wie möglich
                                darüber informieren und Ihnen einen geänderten
                                voraussichtlichen Liefertermin mitteilen.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Rückgaben und Rückerstattungen</span>
                    <p>
                        Wenn Sie aus irgendeinem Grund mit Ihrem Kauf nicht
                        vollständig zufrieden sind, können Sie ihn gegen eine
                        vollständige Rückerstattung an uns zurücksenden.
                    </p>
                    <ol>
                        <li>
                            <span>Rücktrittsrecht</span>
                            <p>
                                Sie haben das Recht, Produkte innerhalb von 14
                                Tagen nach Erhalt zurückzugeben. Um eine
                                Rücksendung einzuleiten, kontaktieren Sie
                                unseren Kundenservice unter [Kontakt
                                E-Mail/Telefon]. Die Produkte müssen in ihrem
                                ursprünglichen, neuen und unbenutzten Zustand
                                und in ihrer Originalverpackung sein und alle
                                Originaletiketten und Etiketten müssen
                                angebracht sein.
                            </p>
                        </li>
                        <li>
                            <span>Rückerstattungen</span>
                            <p>
                                Nachdem wir Ihre Rücksendung erhalten und den
                                Zustand Ihres Artikels überprüft haben, werden
                                wir Ihre Rückerstattung innerhalb von 14 Tagen
                                bearbeiten. Rückerstattungen erfolgen über die
                                ursprüngliche Zahlungsmethode. Wir
                                benachrichtigen Sie per E-Mail, wenn Ihre
                                Rücksendung bearbeitet wurde.
                            </p>
                        </li>
                        <li>
                            <span>Rückgabeprozess</span>
                            <p>
                                Um einen Artikel zurückzusenden, legen Sie ihn
                                zusammen mit Ihrem Kaufbeleg sicher in die
                                Originalverpackung und senden Sie Ihre
                                Rücksendung an die folgende Adresse:
                            </p>
                            <p>[Address]</p>
                            <p>
                                Bitte beachten Sie, dass Sie für alle
                                Rücksendekosten verantwortlich sind. Wir
                                empfehlen Ihnen dringend, für den Versand Ihrer
                                Rücksendung eine nachverfolgbare Methode zu
                                verwenden.
                            </p>
                            <p>
                                Alle Rücksendungen, die nicht unseren
                                Richtlinien entsprechen, werden abgelehnt und
                                auf Ihre Kosten erneut an den Absender
                                zurückgesandt. In diesem Fall erfolgt keine
                                Rückerstattung, wenn der Kunde sein Paket nicht
                                abholt oder ablehnt.
                            </p>
                        </li>
                        <li>
                            <span>Defekte oder beschädigte Produkte</span>
                            <p>
                                Bitte kontaktieren Sie uns unter den unten
                                angegebenen Kontaktdaten, um eine Rückerstattung
                                oder einen Umtausch zu veranlassen.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Geistigen Eigentums</span>
                    <ol>
                        <li>
                            <span>Inhalt</span>
                            <p>
                                Der gesamte Inhalt dieser Website,
                                einschließlich Texte, Bilder, Logos und
                                Grafiken, ist durch Gesetze zum Schutz des
                                geistigen Eigentums geschützt und Eigentum von
                                [Name Ihrer E-Commerce-Website] oder seinen
                                Lizenzgebern.
                            </p>
                        </li>
                        <li>
                            <span>Nutzungsbeschränkungen</span>
                            <p>
                                Ohne unsere ausdrückliche Zustimmung dürfen Sie
                                den Inhalt nicht reproduzieren, verbreiten,
                                modifizieren oder daraus abgeleitete Werke
                                erstellen.
                            </p>
                        </li>
                    </ol>
                </li>
                <li>
                    <span>Anwendbares Recht und Gerichtsstand</span>
                    <p>
                        Diese Allgemeinen Geschäftsbedingungen unterliegen den
                        Gesetzen Luxemburgs. Alle Streitigkeiten, die sich aus
                        der Nutzung dieser Website oder dem Kauf von Produkten
                        ergeben, unterliegen der ausschließlichen Zuständigkeit
                        der Gerichte von Luxemburg.
                    </p>
                </li>
                <li>
                    <span>Verantwortung</span>
                    <p>
                        Wir haften nicht für die Nichterfüllung oder Verzögerung
                        bei der Erfüllung unserer Verpflichtungen Ihnen
                        gegenüber, wenn diese Nichterfüllung oder Verzögerung
                        durch ein Ereignis verursacht wird, das außerhalb
                        unserer Kontrolle liegt.
                    </p>
                </li>
                <li>
                    <span>Änderungen der Bedingungen</span>
                    <p>
                        Wir behalten uns das Recht vor, diese Allgemeinen
                        Geschäftsbedingungen jederzeit zu ändern. Alle
                        Änderungen werden mit der Veröffentlichung auf der
                        Website wirksam. Durch Ihre fortgesetzte Nutzung der
                        Website nach solchen Änderungen erklären Sie sich mit
                        den geänderten Bedingungen einverstanden.
                    </p>
                </li>
                <li>
                    <span>Persönliche Daten und Datenschutzbestimmungen</span>
                    <p>
                        Wir behandeln Ihre persönlichen Daten privat und
                        vertraulich. Durch die Nutzung von [Name Ihrer
                        E-Commerce-Website] stimmen Sie der Verwendung Ihrer
                        Daten gemäß unserer{' '}
                        <a href={`/${locale}/privacy-policy`}>
                            Datenschutzrichtlinie
                        </a>{' '}
                        zu und garantieren, dass alle von Ihnen bereitgestellten
                        Daten korrekt sind.
                    </p>
                    <p>
                        Weitere Einzelheiten finden Sie in der
                        Datenschutzrichtlinie von [Name Ihrer
                        E-Commerce-Website].
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Terms;
