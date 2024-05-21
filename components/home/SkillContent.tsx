'use client';

import { Box, Card, Divider, Text, Tooltip } from '@chakra-ui/react';
import { ChartCircle } from '../global/MyDoughnutChart';
import Image from 'next/image';

interface Props {
  name: string;
  rate: number;
  image: string;
}
export const SkillContent = (props: Props) => {
  return (
    <Tooltip
      key={props.name}
      label={`${props.name} - ${props.rate}%`}
      aria-label={`${props.name} skill level`}
    >
      <Card
        className="relative h-[125px] w-[100px] transform cursor-pointer transition-transform hover:scale-105"
        style={{
          background: 'rgba(0, 0, 0, 0.45)',
        }}
      >
        <ChartCircle
          rate={props.rate}
          className="absolute left-1/2 top-2 z-10 flex -translate-x-1/2 transform"
        />
        <Image
          className="absolute left-1/2 top-[29px] z-20 m-auto -translate-x-1/2 rounded-lg"
          src={props.image}
          alt={props.name}
          width={40}
          height={40}
        />
        <Box className="absolute left-1/2 top-[16px] z-0 m-auto h-[70px] w-[70px] -translate-x-1/2 rounded-full bg-white" />
        <Divider borderColor={'#707070'} mt={4} />
        <Text className="text-1xl text-center text-white">{props.name}</Text>
      </Card>
    </Tooltip>
  );
};
