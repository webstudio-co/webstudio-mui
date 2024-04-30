import React from 'react';
import { FieldType } from '../../../types';
import { SearchFilterOptionType } from '../../../types';
import { SortOptionType } from '../../../types';
export type CollectionProps = {
    url: string;
    variant: 'list' | 'grid';
    style: 'avatar' | 'card' | 'cover' | 'chip';
    editing?: boolean;
    enableInfiniteLoad?: boolean;
    enableLoadMore?: boolean;
    navigateUrl: any;
    perPage?: number;
    query?: any;
    fields: FieldType[];
    filterAnchor?: 'left' | 'top';
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    secondaryActions?: React.ReactNode;
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
};
declare const Collection: React.FC<CollectionProps>;
export default Collection;
