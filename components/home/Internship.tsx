'use client';

import { Stack, useBreakpointValue } from '@chakra-ui/react';
import { H1 } from '../global/H1';
import { InternCard } from './InternCard';
import { internship } from '@/lib/store/internship';
export const Internship = () => {
  return (
    <>
      <H1>Internship</H1>
      <Stack
        spacing={useBreakpointValue({ base: 5, md: 20 })}
        direction={useBreakpointValue({ base: 'column', xl: 'row' })}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {internship.map((item) => (
          <InternCard key={item.name} name={item.name} term={item.term}>
            {item.content}
          </InternCard>
        ))}
      </Stack>
    </>
  );
};
