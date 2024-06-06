'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  id: string;
  title: string;
  children?: React.ReactNode;
}
function Card({ id, title, children }: Props) {
  const router = useRouter();

  return (
    <div
      className="m-3 h-[433px] w-[225px] cursor-pointer rounded-[18px] p-4 shadow-[3px_3px_14.4px_0px_rgba(0,0,0,0.15)]"
      onClick={() => {
        router.push(`/projects/${id}?title=${title}`);
      }}
    >
      {children}
    </div>
  );
}

export default Card;
