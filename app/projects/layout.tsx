import React from 'react';
import '../wordpress.css';

const ProductsLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main>{children}</main>;
};

export default ProductsLayout;
