import React from 'react';
import { SwiperContainer } from '@/components/common/swiper/style';
import { GenericSwiperProps } from '@/lib/types';

const Swiper = <T extends { uuid: string }>({
    items,
    maxItemWidth,
    Renderer,
}: GenericSwiperProps<T>) => {
    return (
        <SwiperContainer>
            {items.map((item) => (
                <Renderer
                    key={item.uuid}
                    item={item}
                    maxItemWidth={maxItemWidth}
                />
            ))}
        </SwiperContainer>
    );
};

export default Swiper;
