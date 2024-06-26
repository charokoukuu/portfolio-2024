'use client';

import { Dancing_Script } from 'next/font/google';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const dancing_script = Dancing_Script({ subsets: ['latin'] });
export const H1 = ({ className, children }: Props) => {
  return (
    <div
      className={
        'm-auto flex justify-center py-8 ' +
        dancing_script.className +
        ` ${className}`
      }
    >
      <div className="flex h-20 w-full items-center justify-center border-b-2 border-gray-300 text-center text-5xl text-gray-800 sm:w-3/4 lg:w-1/2">
        {children}
      </div>
    </div>
  );
};
