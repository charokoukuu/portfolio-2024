'use client';

import { Dancing_Script } from 'next/font/google';

interface Props {
  children?: React.ReactNode;
}

export const dancing_script = Dancing_Script({ subsets: ['latin'] });
export const H1 = ({ children }: Props) => {
  return (
    <div
      className={
        'm-auto flex justify-center py-[3%] ' + dancing_script.className
      }
    >
      <div className="flex h-[67px] w-full items-center justify-center border-b-2 border-solid border-b-[#006C84] text-center text-5xl text-[#006C84] sm:w-[60vw]">
        {children}
      </div>
    </div>
  );
};
