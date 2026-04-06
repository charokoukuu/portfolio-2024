interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

export default function GlitchText({
  text,
  className = '',
  as: Tag = 'span',
}: GlitchTextProps) {
  return (
    <Tag className={`glitch-text inline-block ${className}`} data-text={text}>
      {text}
    </Tag>
  );
}
