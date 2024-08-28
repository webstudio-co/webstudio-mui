import React from 'react';
type ResourceToolbarButtonsProps = {
    selected: any[];
    selectedIds: number[] | string[];
    buttons: {
        color?: 'primary' | 'secondary';
        variant?: 'contained' | 'outlined';
        icon?: string;
        label: string;
        onClick: (selected: any[]) => void;
    }[];
};
declare const ResourceToolbarButtons: React.FC<ResourceToolbarButtonsProps>;
export default ResourceToolbarButtons;