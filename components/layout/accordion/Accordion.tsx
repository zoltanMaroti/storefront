'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
    AccordionContainer,
    AccordionContent,
    IconContainer,
    LabelContainer,
} from '@/components/layout/accordion/style';
import { AccordionProps } from '@/lib/types';

const Accordion = ({
    label,
    children,
    defaultOpen = false,
    borderTop = true,
    borderBottom = true,
    padding = true,
}: AccordionProps) => {
    const [isOpen, setOpen] = useState<boolean>(defaultOpen);
    const toggleOpen = () => setOpen((prevState) => !prevState);

    return (
        <AccordionContainer
            borderTop={borderTop}
            borderBottom={borderBottom}
            padding={padding}
        >
            <LabelContainer onClick={toggleOpen}>
                {label}
                <IconContainer isOpen={isOpen}>
                    <FiChevronDown size={24} />
                </IconContainer>
            </LabelContainer>
            <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
        </AccordionContainer>
    );
};

export default Accordion;
