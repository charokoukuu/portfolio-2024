import { Achievement } from '@/components/home/Achievement';
import { Internship } from '@/components/home/Internship';
import { Profile } from '@/components/home/Profile';

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
