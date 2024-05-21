import { Achievement } from '@/components/home/Achievement';
import { Internship } from '@/components/home/Internship';
import { Profile } from '@/components/home/Profile';

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
