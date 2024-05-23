'use client';
import React from 'react';

interface Props {
  color?: string;
  className?: string;
}

const Tack = ({ color = 'red', className }: Props) => {
  return (
    <div
      className={
        'flex h-32 w-16 rotate-45 transform items-center justify-center ' +
        className
      }
    >
      {/* 画鋲の影 */}
      <div
        className="absolute h-16 w-16 rounded-full bg-gray-300 opacity-50 shadow-lg"
        style={{
          transform: 'translate(20px, 20px)',
          filter: 'blur(4px)',
        }}
      ></div>
      {/* 画鋲の針 */}
      <div
        className="absolute bg-gray-600"
        style={{
          width: '4px',
          height: '40px',
          bottom: '10px',
          transform: 'translateY(50%)',
          transformOrigin: 'bottom',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      ></div>
      {/* 画鋲の円柱部分 */}
      <div
        className={`absolute ${color === 'red' ? 'bg-red-600' : color === 'blue' ? 'bg-blue-600' : 'bg-green-600'}`}
        style={{
          width: '12px',
          height: '20px',
          bottom: '30px',
          borderRadius: '6px 6px 0 0',
          transform: 'translateY(50%)',
          transformOrigin: 'bottom',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      ></div>
      {/* 画鋲の頭 */}
      <div
        className={`absolute ${color === 'red' ? 'bg-red-500' : color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`}
        style={{
          width: '40px',
          height: '12px',
          borderRadius: '50%',
          bottom: '40px',
          transform: 'translateY(50%)',
          transformOrigin: 'bottom',
          boxShadow:
            '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
        }}
      ></div>
      <div
        className={`absolute ${color === 'red' ? 'bg-red-400' : color === 'blue' ? 'bg-blue-400' : 'bg-green-400'}`}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          bottom: '52px',
          transform: 'translateY(50%)',
          transformOrigin: 'bottom',
          boxShadow:
            '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
        }}
      ></div>
    </div>
  );
};

export default Tack;
