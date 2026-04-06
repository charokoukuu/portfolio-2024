'use client';

import { useEffect, useRef } from 'react';

interface MermaidBlockProps {
  code: string;
}

export default function MermaidBlock({ code }: MermaidBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderIdRef = useRef(`mermaid-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    const renderMermaid = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            darkMode: true,
            background: '#0f172a',
            primaryColor: '#22d3ee',
            primaryTextColor: '#e2e8f0',
            primaryBorderColor: '#164e63',
            lineColor: '#22d3ee',
            secondaryColor: '#1e293b',
            tertiaryColor: '#0f172a',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '14px',
            noteBkgColor: '#1e293b',
            noteTextColor: '#e2e8f0',
            noteBorderColor: '#164e63',
          },
        });
        const { svg } = await mermaid.render(renderIdRef.current, code);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Mermaid render error:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `<pre class="text-red-400 text-xs font-mono">[Mermaid Error] ${String(error)}</pre>`;
        }
      }
    };
    renderMermaid();
  }, [code]);

  return (
    <div className="my-6">
      <div className="overflow-x-auto rounded-lg border border-cyan-800/30 bg-slate-900/60 p-4">
        <div ref={containerRef} className="flex justify-center [&_svg]:max-w-full" />
      </div>
    </div>
  );
}
