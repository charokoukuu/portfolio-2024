import { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}

export default function GlassPanel({
  children,
  className = '',
  hover = true,
  id,
}: GlassPanelProps) {
  return (
    <div
      id={id}
      className={`glass-panel ${hover ? '' : 'hover:border-cyan-800/30 hover:shadow-none'} ${className}`}
    >
      {children}
    </div>
  );
}
