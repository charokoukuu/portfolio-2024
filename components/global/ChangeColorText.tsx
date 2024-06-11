'use client';

import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  name: string;
}

const ColorLabel = [
  { name: '案件', color: '#FF7A00' },
  { name: 'サークル', color: '#006C84' },
  { name: '個人', color: '#7000FF' },
  { name: 'ハッカソン', color: '#7000FF' },
];
const ChangeColorText = ({ name }: Props) => {
  return (
    <Box
      style={{
        background: ColorLabel.filter((item) => item.name === name)[0].color,
      }}
      className="flex h-[25px] w-[80px] rounded-2xl"
    >
      <div className="m-auto text-center text-sm font-bold text-white">
        {name}
      </div>
    </Box>
  );
};

export default ChangeColorText;
