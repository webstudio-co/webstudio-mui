import React from 'react';
type DataListItemProps = {
    resource: any;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    handleClick?: () => void;
    handleEdit?: () => void;
    handleDelete?: () => void;
    slots?: {
        item?: any;
        image?: any;
    };
};
declare const DataListItem: React.FC<DataListItemProps>;
export default DataListItem;
