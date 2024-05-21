'use client';

import { Text, Card, CardBody, Box, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface Props {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  category: {
    name: string;
    color: string;
  } | null;
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
        className="m-auto w-[90vw] cursor-pointer transition-transform hover:scale-105 hover:bg-gray-200 sm:w-[400px]"
        onClick={handleClick}
      >
        <CardBody>
          <img
            className="relative m-auto h-[48vw] w-full rounded-lg object-cover object-center sm:h-[202px]"
            src={props.thumbnail}
            alt={props.name}
          />
          <div className="flex flex-row items-center justify-between">
            <Text align={'left'} className="mt-3 flex font-bold">
              {props.name}
            </Text>
            {props.category && (
              <Box
                style={{
                  background: props.category.color,
                }}
                className="flex h-[25px] w-[90px] rounded-2xl bg-gradient-to-b"
              >
                <Text className="m-auto flex  justify-center text-center text-sm font-bold text-white">
                  {props.category.name}
                </Text>
              </Box>
            )}
          </div>
          <Divider className="mb-3" />
          <Text color={'#707070'} align={'left'}>
            {props.description}
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};
