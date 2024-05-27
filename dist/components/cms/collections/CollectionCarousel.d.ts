import React from 'react';
import { ActionType } from '../../../types';
export type CollectionCarouselProps = {
    actions: ActionType[];
    url: string;
    style: 'card' | 'avatar' | 'cover' | 'chip' | 'text' | 'image';
    fields?: any;
    editing?: boolean;
    href: any;
    perPage?: number;
    query?: any;
    enableAutoPlay?: boolean;
    enableArrows?: boolean;
    enableBorder?: boolean;
    enableDots?: boolean;
    enableGradient?: boolean;
};
declare const CollectionCarousel: React.FC<CollectionCarouselProps>;
export default CollectionCarousel;
