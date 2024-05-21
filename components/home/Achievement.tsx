import { H1 } from '../global/H1';
import { Dancing_Script } from 'next/font/google';
import { Timeline } from './Timeline';
const dancing_script = Dancing_Script({ subsets: ['latin'] });
export const Achievement = () => {
  return (
    <>
      <H1 className={dancing_script.className}>Achievement</H1>
      <Timeline />
    </>
  );
};
