import { Card, CardBody } from '@chakra-ui/react';
import React from 'react';

const ProductsLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Card className="m-auto mt-1 w-[98vw] sm:mt-0">
      <CardBody>
        <main>{children}</main>
      </CardBody>
    </Card>
  );
};

export default ProductsLayout;
