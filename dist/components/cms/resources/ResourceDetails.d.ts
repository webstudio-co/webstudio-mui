import React from 'react';
import { DisplayFieldType } from '../../../types';
type ResourceDetailsProps = {
    loading?: boolean;
    open: boolean;
    avatar?: React.ReactNode;
    handleClose: () => void;
    resource: any;
    primary: string;
    secondary?: string;
    label?: string;
    image?: string;
    enableEdit?: boolean;
    enableDelete?: boolean;
    handleEdit?: () => void;
    handleDelete?: () => void;
    fields: DisplayFieldType[];
};
declare const ResourceDetails: React.FC<ResourceDetailsProps>;
export default ResourceDetails;
