import { H1 } from '@/components/global/H1';
import { Achievement } from '@/components/home/Achievement';
import { InternCard } from '@/components/home/InternCard';
import { Internship } from '@/components/home/Internship';
import { Profile } from '@/components/home/Profile';
import { ProfileCard } from '@/components/home/ProfileCard';
import { Timeline } from '@/components/home/Timeline';
import { Stack, useBreakpointValue } from '@chakra-ui/react';
import { Dancing_Script } from 'next/font/google';

export const dynamic = 'force-static';
const Home: React.FC = () => {
  return (
    <div>
      <Profile />
      <Internship />
      <Achievement />
    </div>
  );
};

export default Home;
