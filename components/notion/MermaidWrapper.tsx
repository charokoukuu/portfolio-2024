'use client';

import dynamic from 'next/dynamic';

const MermaidBlockInner = dynamic(() => import('./MermaidBlock'), {
  ssr: false,
  loading: () => (
    <div className="my-6 rounded-lg border border-cyan-400/50 bg-slate-50 p-8 text-center">
      <p className="animate-pulse-neon font-mono text-xs text-slate-400">
        RENDERING DIAGRAM...
      </p>
    </div>
  ),
});

interface MermaidWrapperProps {
  code: string;
}

export default function MermaidWrapper({ code }: MermaidWrapperProps) {
  return <MermaidBlockInner code={code} />;
}
