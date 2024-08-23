import React from 'react';
import { FormFieldType, SearchFilterOptionType, TableHeaderType, DisplayFieldType } from '../../../types';
import { SortOptionType } from '../../../types';
export type ResourceListProps = {
    toolbar?: React.FC<any>;
    list?: React.FC<any>;
    edit?: React.FC<any>;
    create?: React.FC<any>;
    show?: React.FC<any>;
    url: string;
    name: string;
    component?: React.FC<any>;
    layout?: 'list' | 'grid';
    dense?: boolean;
    handleClick?: (resource: any) => void;
    enableInfiniteLoad?: boolean;
    enableLoadMore?: boolean;
    perPage?: number;
    query?: any;
    headers?: TableHeaderType[];
    fields?: FormFieldType[];
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    displayFields?: DisplayFieldType[];
    enableSearch?: boolean;
    buttonText?: string;
    enableShow?: boolean;
    enableEdit?: boolean;
    enableCreate?: boolean;
    enableDelete?: boolean;
    sortable?: boolean;
    enableBorder?: boolean;
    direction?: 'row' | 'column';
    emptyIcon?: string;
    emptyTitle?: string;
    emptyDescription?: string;
    itemProps?: any;
    slots?: {
        list?: any;
        edit?: any;
        create?: any;
        show?: any;
        toolbar?: any;
    };
};
declare const ResourceList: React.FC<ResourceListProps>;
export default ResourceList;
