'use client';

import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const ColorLabel = [
  { name: 'WEBアプリ', color: '#FF7A00' },
  { name: 'LIFF APP', color: '#00CB42' },
  { name: 'HARDWARE', color: '#7000FF' },
];
const ChangeColorText = ({ children }: Props) => {
  return (
    <div
      className="text-[17px] font-bold"
      style={{
        color: ColorLabel.find((label) => label.name === children)?.color,
      }}
    >
      {children}
    </div>
  );
};

export default ChangeColorText;
