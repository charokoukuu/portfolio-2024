'use client';

import { Stack, useBreakpointValue } from '@chakra-ui/react';
import { H1 } from '../global/H1';
import { ProfileCard } from './ProfileCard';
import { Dancing_Script } from 'next/font/google';
const dancing_script = Dancing_Script({ subsets: ['latin'] });
export const Profile = () => {
  return (
    <>
      <H1 className={dancing_script.className}>Profile</H1>
      <Stack
        spacing={useBreakpointValue({ base: 5, md: 20 })}
        direction={useBreakpointValue({ base: 'column', md: 'row' })}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ProfileCard />
        <ProfileCard />
      </Stack>
    </>
  );
};
