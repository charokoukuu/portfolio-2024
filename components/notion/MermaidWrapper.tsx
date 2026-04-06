'use client';

import dynamic from 'next/dynamic';

const MermaidBlockInner = dynamic(() => import('./MermaidBlock'), {
  ssr: false,
  loading: () => (
    <div className="my-6 rounded-lg border border-cyan-800/30 bg-slate-900/60 p-8 text-center">
      <p className="font-mono text-xs text-slate-500 animate-pulse-neon">RENDERING DIAGRAM...</p>
    </div>
  ),
});

interface MermaidWrapperProps {
  code: string;
}

export default function MermaidWrapper({ code }: MermaidWrapperProps) {
  return <MermaidBlockInner code={code} />;
}
