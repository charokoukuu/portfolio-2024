import type { Award } from '@/lib/types/award';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import NeonText from '@/components/ui/NeonText';

interface AwardsSectionProps {
  awards: Award[];
}

function getRankColor(rank: string): 'gold' | 'cyan' | 'lime' | 'red' {
  switch (rank) {
    case 'Gold':
      return 'gold';
    case 'Silver':
      return 'cyan';
    case 'Bronze':
      return 'lime';
    case 'Special':
      return 'red';
    default:
      return 'cyan';
  }
}

function getRankBorderClass(rank: string): string {
  switch (rank) {
    case 'Gold':
      return 'neon-border-gold';
    case 'Special':
      return 'neon-border-red';
    default:
      return '';
  }
}

export default function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          system="ACHIEVEMENT_LOG::AWARDS"
          title="Awards"
        />

        <div className="relative">
          {/* Timeline line */}
          {awards.length > 0 && <div className="timeline-line" />}

          <div className="space-y-4">
            {awards.map((award) => {
              const color = getRankColor(award.rank);
              const borderClass = getRankBorderClass(award.rank);

              return (
                <div key={award.id} className="relative pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-[18px] top-4 h-3 w-3 rounded-full border border-cyan-500 bg-slate-950">
                    <div className="absolute inset-0.5 rounded-full bg-cyan-500/50" />
                  </div>

                  <GlassPanel className={`p-4 ${borderClass}`}>
                    <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        {award.rank && (
                          <NeonText color={color} className="text-xs font-bold uppercase">
                            [{award.rank}]
                          </NeonText>
                        )}
                        <h3 className="font-mono text-sm font-bold text-cyan-50">
                          {award.name}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] text-slate-600">
                        {award.date}
                      </span>
                    </div>
                    {award.event && (
                      <p className="mb-1 font-mono text-xs text-slate-400">
                        {award.event}
                      </p>
                    )}
                    {award.prize && (
                      <p className="font-mono text-xs text-slate-500">
                        <span className="text-cyan-700">PRIZE:</span>{' '}
                        {award.prize}
                      </p>
                    )}
                    {award.url && (
                      <a
                        href={award.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block font-mono text-xs text-cyan-500 underline underline-offset-4 hover:text-cyan-400"
                      >
                        READ MORE →
                      </a>
                    )}
                  </GlassPanel>
                </div>
              );
            })}
          </div>

          {awards.length === 0 && (
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
