'use client';

import { Card, Divider, Text } from '@chakra-ui/react';
import { ChartCircle } from '../global/MyDoughnutChart';
import Image from 'next/image';

interface Props {
  name: string;
  rate: number;
  image: string;
}
export const SkillContent = (props: Props) => {
  return (
    <Card className="relative h-[125px] w-[100px]">
      <ChartCircle
        rate={props.rate}
        className="absolute left-1/2 top-2 flex -translate-x-1/2 transform"
      />
      <Image
        className="absolute left-1/2 top-[29px] m-auto -translate-x-1/2 rounded-lg"
        src={props.image}
        alt={props.name}
        width={40}
        height={40}
      />
      <Divider borderColor={'#707070'} mt={4} />
      <Text className="text-1xl text-center text-black">{props.name}</Text>
    </Card>
  );
};
