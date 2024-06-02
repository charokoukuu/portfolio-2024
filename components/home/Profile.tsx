'use client';

import { Stack, useBreakpointValue } from '@chakra-ui/react';
import { H1 } from '../global/H1';
import { ProfileCard } from './ProfileCard';
import { SkillCard } from './SkillCard';
import { PR } from './PR';
export const Profile = () => {
  return (
    <>
      <H1>Profile</H1>
      <Stack
        spacing={useBreakpointValue({ base: 5, md: 20 })}
        direction={useBreakpointValue({ base: 'column', md: 'row' })}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ProfileCard />
        <SkillCard />
        <PR />
      </Stack>
    </>
  );
};
