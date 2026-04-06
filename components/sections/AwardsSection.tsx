import type { Award } from '@/lib/types/award';
import SectionTitle from '@/components/ui/SectionTitle';

interface AwardsSectionProps {
  awards: Award[];
}

function getRankIcon(rank: string): string {
  switch (rank) {
    case 'Gold':
      return '🏆';
    case 'Silver':
      return '🥈';
    case 'Bronze':
      return '🥉';
    case 'Special':
      return '📺';
    default:
      return '🏅';
  }
}

function getMetalClass(rank: string): string {
  switch (rank) {
    case 'Gold':
      return 'metal-gold';
    case 'Silver':
      return 'metal-silver';
    case 'Bronze':
      return 'metal-bronze';
    case 'Special':
      return 'metal-obsidian';
    default:
      return 'glass-panel';
  }
}

function getBadgeStyle(rank: string): string {
  switch (rank) {
    case 'Gold':
      return 'border-yellow-700/40 bg-yellow-800/15 text-yellow-900';
    case 'Silver':
      return 'border-slate-400/40 bg-slate-500/15 text-slate-700';
    case 'Bronze':
      return 'border-amber-800/40 bg-amber-700/15 text-amber-900';
    case 'Special':
      return 'border-purple-400/50 bg-purple-500/20 text-purple-200';
    default:
      return 'border-cyan-400/50 bg-white/50 text-cyan-800';
  }
}

// Obsidian & Bronze have dark backgrounds => light text
function isDarkPanel(rank: string): boolean {
  return rank === 'Special';
}

export default function AwardsSection({ awards }: AwardsSectionProps) {
  // Group awards by rank
  const groupedAwards = awards.reduce((acc, award) => {
    const rank = award.rank || 'Other';
    if (!acc[rank]) acc[rank] = [];
    acc[rank].push(award);
    return acc;
  }, {} as Record<string, Award[]>);

  // Define display order for grades
  const rankOrder = ['Special', 'Gold', 'Silver', 'Bronze', 'Other'];
  const activeRanks = rankOrder.filter(
    (rank) => groupedAwards[rank] && groupedAwards[rank].length > 0
  );

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          system="ACHIEVEMENT_LOG::AWARDS"
          title="Awards"
        />

        <div className="mt-8 space-y-16">
          {activeRanks.map((rank) => (
            <div key={rank} className="relative mt-8">
              {/* Psycho-Pass Style Tech Border Wrapper */}
              <div className="relative rounded-sm border border-cyan-500/50 bg-cyan-950/5 p-6 sm:p-8 backdrop-blur-sm">
                {/* HUD Corner Accents */}
                <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400" />

                {/* Cyberpunk Header Badge Overlay */}
                <div className="absolute -top-3.5 left-6 border border-cyan-500/50 bg-[#eff2f5] px-3 py-0.5 font-mono text-xs font-bold tracking-widest text-cyan-600 sm:text-sm">
                  [ AUTH_LEVEL::{rank.toUpperCase()} ]
                </div>

                <div className="absolute -bottom-2.5 right-6 hidden border border-cyan-500/30 bg-[#eff2f5] px-2 text-[10px] tracking-widest text-cyan-500 sm:block">
                  SYS.LOG // HASH:{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </div>

                <div className="space-y-6 pt-2">
                  {groupedAwards[rank].map((award) => {
                    const metalClass = getMetalClass(award.rank);
                    const dark = isDarkPanel(award.rank);
                    const isSpecial = award.rank === 'Special';

                    return (
                      <div
                        key={award.id}
                        className={`${metalClass} ${isSpecial ? 'p-6 shadow-xl sm:p-8' : 'p-5'
                          }`}
                      >
                        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-3">
                            {award.rank && (
                              <div
                                className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1 ${getBadgeStyle(
                                  award.rank
                                )}`}
                              >
                                <span
                                  className={isSpecial ? 'text-lg' : 'text-base'}
                                >
                                  {getRankIcon(award.rank)}
                                </span>
                                <span
                                  className={`font-mono font-bold uppercase tracking-wider ${isSpecial ? 'text-sm' : 'text-xs'
                                    }`}
                                >
                                  {award.rank}
                                </span>
                              </div>
                            )}
                            <h3
                              className={`font-mono font-bold ${dark ? 'text-white' : 'text-slate-900'
                                } ${isSpecial
                                  ? 'text-xl tracking-wide sm:text-2xl'
                                  : award.rank === 'Gold'
                                    ? 'text-base sm:text-lg'
                                    : 'text-sm'
                                }`}
                            >
                              {award.name}
                            </h3>
                          </div>
                          <span
                            className={`font-mono ${isSpecial
                              ? 'text-xs text-slate-400'
                              : dark
                                ? 'text-[10px] text-slate-300'
                                : 'text-[10px] text-slate-600'
                              }`}
                          >
                            {award.date}
                          </span>
                        </div>

                        {award.event && (
                          <p
                            className={`mb-1 font-mono ${isSpecial
                              ? 'mt-2 text-sm text-slate-300'
                              : dark
                                ? 'text-xs text-slate-400'
                                : 'text-xs text-slate-500'
                              }`}
                          >
                            {award.event}
                          </p>
                        )}

                        {award.prize && (
                          <p
                            className={`font-mono font-bold ${isSpecial ? 'mt-3 text-sm' : 'text-xs'
                              } ${dark ? 'text-cyan-300' : 'text-slate-700'}`}
                          >
                            <span
                              className={
                                dark ? 'text-cyan-400' : 'text-cyan-700'
                              }
                            >
                              PRIZE:
                            </span>{' '}
                            {award.prize}
                          </p>
                        )}

                        {award.url && (
                          <a
                            href={award.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-3 inline-block font-mono underline underline-offset-4 ${isSpecial ? 'text-sm' : 'text-xs'
                              } ${dark
                                ? 'text-cyan-300 hover:text-cyan-200'
                                : 'text-slate-700 hover:text-slate-900'
                              }`}
                          >
                            READ MORE →
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          {awards.length === 0 && (
            <div className="glass-panel p-8 text-center">
              <p className="font-mono text-sm text-slate-500">
                <span className="text-cyan-700">&gt;</span> AWAITING DATA FROM
                NOTION DATABASE...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
