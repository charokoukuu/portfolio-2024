import type { Internship } from '@/lib/types/internship';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import SystemBadge from '@/components/ui/SystemBadge';

interface InternSectionProps {
  internships: Internship[];
}

export default function InternSection({ internships }: InternSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          system="ACCESS_LOG::CAREER_HISTORY"
          title="Internship"
        />

        <div className="relative">
          {/* Timeline line */}
          {internships.length > 0 && (
            <div className="timeline-line" />
          )}

          <div className="space-y-6">
            {internships.map((intern) => (
              <div key={intern.id} className="relative pl-14">
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-4 h-3 w-3 rounded-full border border-cyan-500 bg-slate-950">
                  <div className="absolute inset-0.5 rounded-full bg-cyan-500/50" />
                </div>

                <GlassPanel className="p-5">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-mono text-base font-bold text-cyan-50">
                      {intern.name}
                    </h3>
                    <span className="font-mono text-xs text-slate-500">
                      {intern.period}
                    </span>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-slate-400">
                    {intern.description}
                  </p>
                  {intern.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {intern.techStack.map((tech) => (
                        <SystemBadge
                          key={tech}
                          label={tech}
                          variant="cyan"
                        />
                      ))}
                    </div>
                  )}
                </GlassPanel>
              </div>
            ))}
          </div>

          {internships.length === 0 && (
            <div className="glass-panel p-8 text-center">
              <p className="font-mono text-sm text-slate-500">
                <span className="text-cyan-700">&gt;</span> AWAITING DATA
                FROM NOTION DATABASE...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
