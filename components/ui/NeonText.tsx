import { ReactNode } from 'react';

type NeonColor = 'cyan' | 'lime' | 'red' | 'gold';

interface NeonTextProps {
  children: ReactNode;
  color?: NeonColor;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3';
}

export default function NeonText({
  children,
  color = 'cyan',
  className = '',
  as: Tag = 'span',
}: NeonTextProps) {
  const colorClass: Record<NeonColor, string> = {
    cyan: 'neon-text-cyan',
    lime: 'neon-text-lime',
    red: 'neon-text-red',
    gold: 'neon-text-gold',
  };

  return <Tag className={`${colorClass[color]} ${className}`}>{children}</Tag>;
}
