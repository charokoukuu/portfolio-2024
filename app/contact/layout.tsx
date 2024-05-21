import React from 'react';

const ProductsLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main>{children}</main>;
};

export default ProductsLayout;
