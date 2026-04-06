interface SectionTitleProps {
  system: string;
  title: string;
  className?: string;
}

export default function SectionTitle({
  system,
  title,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-700">
        {system}
      </p>
      <h2 className="font-mono text-2xl font-bold tracking-wider text-cyan-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
    </div>
  );
}
