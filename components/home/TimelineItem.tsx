'use client';

import React, { useEffect, useState } from 'react';
import { ISOStringToLocaleString } from '@/lib/utils/util';
import { Text } from '@chakra-ui/react';
import { M_PLUS_Rounded_1c } from 'next/font/google';

interface TimelineItemProps {
  data: {
    category: {
      tag: string;
      color: string;
    };
    date: string;
    text: string;
    link?: {
      url: string;
      text: string;
    };
    award?: string;
  };
}

export const titleFont = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: '700',
});
export const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .dynamic-hover {
        transition: transform 0.2s;
      }
      .dynamic-hover:hover {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const backgroundStyle =
    data.category.tag === '優勝' ||
    data.category.tag.includes('優秀賞') ||
    data.category.tag.includes('トランジスタ技術賞')
      ? 'linear-gradient(261deg,#d4af37 -14.11%,#fceabb 30%,#ffffff 50%,#fceabb 70%, #d4af37 89.75%)'
      : data.category.tag === '準優勝' || data.category.tag === 'はちゅ賞'
        ? 'linear-gradient( 261deg, #c0c0c0 -14.11%, #e0e0e0 30%, #ffffff 50%, #e0e0e0 70%, #c0c0c0 89.75% )'
        : 'linear-gradient(261deg, #cd7f32 -14.11%, #e3a869 30%, #ffffff 50%, #e3a869 70%, #cd7f32 89.75%)';

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={'timeline-item'}
      onClick={() => {
        if (data.link) {
          window.open(data.link.url, '_self');
        }
      }}
    >
      <div
        className={
          'timeline-item-content shiny-gold ' +
          (data.link ? 'dynamic-hover cursor-pointer' : '')
        }
        style={{
          background: backgroundStyle,
        }}
      >
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>
          <span className="text-black sm:text-gray-100">
            {ISOStringToLocaleString(data.date)}
          </span>
        </time>
        <Text className={titleFont.className}>{data.text}</Text>
        {data.award && (
          <Text className="font-bold text-blue-900">副賞: {data.award}</Text>
        )}
        {data.link && (
          <a target="_self" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}
        {!isHovered && data.link && <span className="circle" />}
      </div>
    </div>
  );
};
