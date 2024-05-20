// products/layout.tsx

import React from 'react';

const ProductsLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default ProductsLayout;
