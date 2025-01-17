import React from 'react';
import { ButtonType, MetafieldType } from '../../../types';
import { DocumentStyleTypes } from './DocumentList';
export type DocumentListItemsProps = {
    layout?: 'list' | 'grid' | 'slider';
    selectable?: boolean;
    href?: string;
    style?: DocumentStyleTypes;
    buttons: ButtonType[];
    metafields: MetafieldType[];
    handleClick?: (resource: any) => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    enableComments?: boolean;
    enableFavorites?: boolean;
    enableLikes?: boolean;
    enableSharing?: boolean;
    slots?: {
        list?: any;
        item?: any;
    };
};
declare const DocumentListItems: React.FC<DocumentListItemsProps>;
export default DocumentListItems;
