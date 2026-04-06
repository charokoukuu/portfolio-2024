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
          theme: 'base',
          themeVariables: {
            darkMode: false,
            background: '#f8fafc',
            primaryColor: '#0891b2',
            primaryTextColor: '#1e293b',
            primaryBorderColor: '#67e8f9',
            lineColor: '#0891b2',
            secondaryColor: '#f1f5f9',
            tertiaryColor: '#e2e8f0',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '14px',
            noteBkgColor: '#f1f5f9',
            noteTextColor: '#1e293b',
            noteBorderColor: '#67e8f9',
          },
        });
        const { svg } = await mermaid.render(renderIdRef.current, code);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Mermaid render error:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `<pre class="text-red-500 text-xs font-mono">[Mermaid Error] ${String(error)}</pre>`;
        }
      }
    };
    renderMermaid();
  }, [code]);

  return (
    <div className="my-6">
      <div className="overflow-x-auto rounded-lg border border-cyan-400/50 bg-slate-50 p-4">
        <div ref={containerRef} className="flex justify-center [&_svg]:max-w-full" />
      </div>
    </div>
  );
}
