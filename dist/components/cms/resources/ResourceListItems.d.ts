import React from 'react';
import { TableHeaderType, SortOptionType, QueryParamsType } from '../../../types';
export type ResourceListProps = {
    query?: QueryParamsType;
    resources: any[];
    headers?: TableHeaderType[];
    page: number;
    numPages: number;
    enableBorder?: boolean;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleClick?: (resource: any) => void;
    handleEdit?: (resource: any) => void;
    handleDelete?: (resource: any) => void;
    handleDrop?: (sorted: any[]) => void;
    handleLoadMore: () => void;
    handleSort: (field: SortOptionType) => void;
    renderItem: (resource: any, props: any) => React.ReactNode;
};
declare const ResourceList: React.FC<ResourceListProps>;
export default ResourceList;
