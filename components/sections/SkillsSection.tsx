import type { Skill } from '@/lib/types/skill';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import SystemBadge from '@/components/ui/SystemBadge';

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryColor: Record<string, 'cyan' | 'lime' | 'gold' | 'red' | 'slate'> = {
  Frontend: 'cyan',
  Backend: 'lime',
  Infra: 'gold',
  'AI/ML': 'red',
  Other: 'slate',
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle system="SYSTEM::SKILL_MATRIX" title="Skills" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <GlassPanel key={skill.id} className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {skill.icon && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-8 w-8 rounded object-contain"
                    />
                  )}
                  <div>
                    <p className="font-mono text-sm font-bold text-cyan-50">
                      {skill.name}
                    </p>
                    <p className="font-mono text-[10px] text-slate-500">
                      {skill.yearsOfExperience}
                    </p>
                  </div>
                </div>
                <SystemBadge
                  label={skill.category}
                  variant={categoryColor[skill.category] ?? 'slate'}
                />
              </div>

              {/* Progress Bar */}
              <div className="neon-progress">
                <div
                  className="neon-progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <p className="mt-1 text-right font-mono text-[10px] text-cyan-600">
                {skill.proficiency}%
              </p>
            </GlassPanel>
          ))}
        </div>

        {skills.length === 0 && (
          <div className="glass-panel p-8 text-center">
            <p className="font-mono text-sm text-slate-500">
              <span className="text-cyan-700">&gt;</span> AWAITING DATA FROM
              NOTION DATABASE...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
