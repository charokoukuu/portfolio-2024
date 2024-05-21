'use client';

import { Stack, useBreakpointValue } from '@chakra-ui/react';
import { H1 } from '../global/H1';
import { Dancing_Script } from 'next/font/google';
import { InternCard } from './InternCard';
import { internship } from '@/lib/store/internship';
const dancing_script = Dancing_Script({ subsets: ['latin'] });
export const Internship = () => {
  return (
    <>
      <H1 className={dancing_script.className}>Internship</H1>
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
