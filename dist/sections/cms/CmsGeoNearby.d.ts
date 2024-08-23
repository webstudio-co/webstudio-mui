import React from 'react';
import { CollectionListProps } from '../../components/cms/collections/CollectionList';
import { SectionProps, HeadingProps } from '../../types';
type CmsListProps = SectionProps & HeadingProps & CollectionListProps;
declare const CmsGeoNearbyList: React.FC<CmsListProps>;
export default CmsGeoNearbyList;
