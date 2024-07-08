import React from 'react';
import { SortOptionType, FilterOptionType } from '../../types';
declare const useSearch: (props: any) => {
    loading: any;
    delayedLoading: any;
    resources: any;
    query: any;
    findMany: (queryParams?: import("frontend-js").QueryParamsType, loadMore?: boolean) => Promise<any>;
    reloadMany: () => Promise<any>;
    page: number;
    numPages: number;
    loadMore: () => void;
    keywords: string;
    setKeywords: React.Dispatch<React.SetStateAction<string>>;
    handleKeywordChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: (keywords?: string) => void;
    handleSortBy: (field: SortOptionType) => void;
    handleSortDirection: (sortDirection: 'asc' | 'desc') => void;
    activeFilters: any[];
    handleFilter: (filter: FilterOptionType) => void;
    handleClearFilters: () => void;
};
export default useSearch;