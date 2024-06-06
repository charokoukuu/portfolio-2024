'use client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
  className?: string;
}
const Breadcrumbs = (props: Props) => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);
  const router = useRouter();
  const searchParams = useSearchParams();

  const title = searchParams.get('title');
  const paths = [
    {
      path: '/',
      breadcrumbName: 'HOME',
    },
    {
      path: '/projects',
      breadcrumbName: 'PROJECTS',
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
                  {currentPath ? currentPath.breadcrumbName : title}
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
