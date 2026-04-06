type BadgeVariant = 'cyan' | 'lime' | 'red' | 'gold' | 'slate';

interface SystemBadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  cyan: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
  lime: 'border-lime-500/40 bg-lime-500/10 text-lime-400',
  red: 'border-red-500/40 bg-red-500/10 text-red-400',
  gold: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400',
  slate: 'border-slate-500/40 bg-slate-500/10 text-slate-400',
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
