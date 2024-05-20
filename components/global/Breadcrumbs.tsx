'use client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

interface Props {
  className?: string;
}
const Breadcrumbs = (props: Props) => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  const paths = [
    {
      path: '/',
      breadcrumbName: 'HOME',
    },
    {
      path: '/products',
      breadcrumbName: 'PRODUCTS',
    },

    {
      path: '/contact',
      breadcrumbName: 'CONTACT',
    },
  ];
  return (
    <>
      {pathname !== '/' && (
        <Breadcrumb
          className={props.className}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href={'/'}>HOME</BreadcrumbLink>
          </BreadcrumbItem>
          {pathnames.map((item) => {
            const currentPath = paths.find((path) => path.path === `/${item}`);
            return (
              <BreadcrumbItem key={item}>
                <BreadcrumbLink href={currentPath?.path}>
                  {currentPath?.breadcrumbName}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      )}
    </>
  );
};
export default Breadcrumbs;
