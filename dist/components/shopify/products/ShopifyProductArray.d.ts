import React from 'react';
type ProductArrayProps = {
    handles: string[];
    enableBorder?: boolean;
    enableAddToCart?: boolean;
    enableQuantity?: boolean;
    buttonText?: string;
};
declare const ProductArray: React.FC<ProductArrayProps>;
export default ProductArray;
