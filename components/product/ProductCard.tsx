'use client';

import { Text, Image, Card, CardBody, Box, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface Props {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  category: string;
}

export const ProductCard = (props: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_PROTOPEDIA_PAGE_ENDPOINT}${props.id}`
    );
  };
  return (
    <Box m="6">
      <Card
        className="m-auto w-[90vw] cursor-pointer hover:bg-gray-200 sm:w-[400px]"
        onClick={handleClick}
      >
        <CardBody>
          <Image
            className="m-auto h-[48vw] w-full object-cover object-center sm:h-[202px]"
            src={props.thumbnail}
            alt={props.name}
            borderRadius="lg"
          />
          <Text align={'left'} className="mt-3 font-bold">
            {props.name}
          </Text>
          <Divider className="mb-3" />
          <Text align={'left'}>{props.description}</Text>
        </CardBody>
      </Card>
    </Box>
  );
};
