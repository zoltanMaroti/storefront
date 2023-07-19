import React, { Children, Fragment } from 'react';
import { GenericContainerProps } from '@/lib/types';
import { BreadCrumbsContainer } from '@/components/layout/breadcrumbs/style';

const BreadCrumbs = ({ children }: GenericContainerProps) => {
    const childrenArray = Children.toArray(children);

    const childrenWithSeparator = childrenArray.map((child, index) => {
        if (index !== childrenArray.length - 1) {
            return (
                <Fragment key={index}>
                    {child}
                    <span>{'/'}</span>
                </Fragment>
            );
        }
        return child;
    });

    return (
        <nav>
            <BreadCrumbsContainer>{childrenWithSeparator}</BreadCrumbsContainer>
        </nav>
    );
};

export default BreadCrumbs;
