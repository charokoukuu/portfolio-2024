'use client';
import { ProfileCard } from '@/components/home/ProfileCard';
import { Stack, useBreakpointValue } from '@chakra-ui/react';

export const dynamic = 'force-static';
const Home: React.FC = () => {
  return (
    <div>
      <Stack
        spacing={useBreakpointValue({ base: 5, md: 20 })}
        direction={useBreakpointValue({ base: 'column', md: 'row' })}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ProfileCard />
        <ProfileCard />
      </Stack>
    </div>
  );
};

export default Home;
