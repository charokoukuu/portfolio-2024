'use client';

import { Stack, useBreakpointValue, Wrap } from '@chakra-ui/react';
import { H1 } from '../global/H1';
import { InternCard } from './InternCard';
import { internship } from '@/lib/store/internship';
export const Internship = () => {
  return (
    <>
      <H1>Internship</H1>
      <Wrap
        spacing={useBreakpointValue({ base: 5, md: 20 })}
        justify={'center'}
        align={'center'}
      >
        {internship.map((item, index) => (
          <InternCard
            key={item.name}
            name={item.name}
            term={item.term}
            index={index}
          >
            {item.content}
          </InternCard>
        ))}
      </Wrap>
    </>
  );
};
