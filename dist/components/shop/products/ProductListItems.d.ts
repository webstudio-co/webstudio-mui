import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
export type ProductListItemsProps = {
    style?: 'list' | 'card' | 'avatar' | 'cover' | 'text';
    buttons: ButtonType[];
    displayFields: MetafieldType[];
    handleClick: (resource: any) => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableRatings?: boolean;
    enableSharing?: boolean;
    slots?: {
        list?: any;
        item?: any;
    };
};
declare const ProductListItems: React.FC<ProductListItemsProps>;
export default ProductListItems;
