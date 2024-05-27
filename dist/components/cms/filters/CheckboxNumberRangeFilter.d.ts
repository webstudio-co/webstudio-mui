import React from 'react';
import { FilterOperatorType, FilterWhereType, FilterOptionType } from '../../../types';
type CheckboxNumberRangeFilterProps = {
    name: string;
    where?: FilterWhereType;
    operator?: FilterOperatorType;
    options?: {
        label: string;
        min: string | number;
        max: string | number;
    }[];
    values?: any;
    handleClick: (filter: FilterOptionType) => void;
    label?: string;
    icon?: React.ReactNode;
    disablePadding?: boolean;
    defaultClosed?: boolean;
};
declare const CheckboxNumberRangeFilter: React.FC<CheckboxNumberRangeFilterProps>;
export default CheckboxNumberRangeFilter;
