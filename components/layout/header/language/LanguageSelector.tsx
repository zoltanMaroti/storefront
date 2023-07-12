'use client';

import React, { useState } from 'react';
import { LanguageSelectorProps, Locale } from '@/lib/types';
import { languages } from '@/lib/constants';
import {
    DropdownContainer,
    Language,
    CurrentLanguage,
    LanguageSwitcherContainer,
    AccordionLabel,
    AccordionContent,
} from '@/components/layout/header/language/style';
import { FiGlobe } from 'react-icons/fi';
import Dropdown from '@/components/layout/dropdown/Dropdown';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next-intl/client';
import Accordion from '@/components/common/accordion/Accordion';

const LanguageSelector = ({ inline }: LanguageSelectorProps) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleOpen = () => setOpen((prevState) => !prevState);

    const onClick = (locale: Locale) => router.push(`/${locale}/${pathname}`);

    if (inline) {
        return (
            <Accordion
                padding={false}
                borderBottom={false}
                borderTop={false}
                label={
                    <AccordionLabel>
                        <FiGlobe size={24} />
                        <CurrentLanguage>{locale}</CurrentLanguage>
                    </AccordionLabel>
                }
            >
                <AccordionContent>
                    {languages.map((language) => (
                        <Language
                            key={language.code}
                            selected={language.code === locale}
                            onClick={() => onClick(language.code)}
                        >
                            {language.name}
                        </Language>
                    ))}
                </AccordionContent>
            </Accordion>
        );
    }

    return (
        <LanguageSwitcherContainer onClick={toggleOpen}>
            <FiGlobe size={24} />
            <CurrentLanguage>{locale}</CurrentLanguage>
            <DropdownContainer>
                <Dropdown isActive={isOpen}>
                    {languages.map((language) => (
                        <Language
                            key={language.code}
                            selected={language.code === locale}
                            onClick={() => onClick(language.code)}
                        >
                            {language.name}
                        </Language>
                    ))}
                </Dropdown>
            </DropdownContainer>
        </LanguageSwitcherContainer>
    );
};

export default LanguageSelector;
