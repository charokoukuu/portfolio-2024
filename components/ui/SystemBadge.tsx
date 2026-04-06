type BadgeVariant = 'cyan' | 'lime' | 'red' | 'gold' | 'slate';

interface SystemBadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  cyan: 'border-cyan-400/80 bg-white text-cyan-800',
  lime: 'border-lime-400/80 bg-white text-lime-800',
  red: 'border-red-400/80 bg-white text-red-800',
  gold: 'border-yellow-400/80 bg-white text-yellow-800',
  slate: 'border-slate-400/80 bg-white text-slate-800',
};

export default function SystemBadge({
  label,
  variant = 'cyan',
  className = '',
}: SystemBadgeProps) {
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
