import React from 'react';
import { FilterOptionType } from '../../../types';
import { SortOptionType, SearchFilterOptionType } from '../../../types';
export type CollectionToolbarProps = {
    query: any;
    activeFilters: FilterOptionType[];
    enableSearch?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    filterOptions?: SearchFilterOptionType[];
    sortOptions?: SortOptionType[];
    enableCreate?: boolean;
    handleAdd: () => void;
    handleFilter: (filter: FilterOptionType) => void;
    handleClearFilters: () => void;
    handleSortBy: (sortBy: SortOptionType) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
    keywords: string;
    handleKeywordChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: (keywords: string) => void;
};
declare const CollectionToolbar: React.FC<CollectionToolbarProps>;
export default CollectionToolbar;