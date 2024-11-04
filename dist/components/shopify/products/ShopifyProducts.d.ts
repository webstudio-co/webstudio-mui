import React from 'react';
import { ShopifyProductType } from 'frontend-shopify';
type ShopifyProductsProps = {
    loading?: boolean;
    products: ShopifyProductType[];
    buttonText?: string;
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuickShop?: boolean;
    enableQuantity?: boolean;
};
declare const ShopifyProducts: React.FC<ShopifyProductsProps>;
export default ShopifyProducts;
