'use client';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}
const BgCard = ({ children }: Props) => {
  return <div className="w-[97vw] rounded-lg">{children}</div>;
};

export default BgCard;
