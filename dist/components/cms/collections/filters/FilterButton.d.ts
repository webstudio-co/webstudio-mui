import React from 'react';
import { FilterOptionType, SearchFilterOptionType } from '../../../..';
type FilterButtonProps = {
    filters?: FilterOptionType[];
    loading?: boolean;
    filterOptions?: SearchFilterOptionType[];
    handleFilter: (filter: FilterOptionType) => void;
    handleClear: () => void;
};
declare const FilterButton: React.FC<FilterButtonProps>;
export default FilterButton;