import type { Project } from '@/lib/types/project';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import SystemBadge from '@/components/ui/SystemBadge';
import Link from 'next/link';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  // Sort projects and take top 6
  const recentProjects = projects
    .sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 6);

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle system="DATABASE::PROJECT_ARCHIVE" title="Projects" />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <GlassPanel className="h-full overflow-hidden transition-transform group-hover:scale-[1.02]">
                {project.thumbnail && (
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/5 to-transparent" />
                  </div>
                )}
                <div className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-mono text-sm font-bold text-cyan-900">
                      {project.title}
                    </h4>
                    {project.category && (
                      <SystemBadge label={project.category} variant="cyan" />
                    )}
                  </div>
                  <p className="font-mono text-[10px] text-slate-600">
                    {project.date}
                  </p>
                </div>
              </GlassPanel>
            </Link>
          ))}
        </div>

        {recentProjects.length > 0 && (
          <div className="mt-8 text-center">
            <Link href="/projects" className="neon-button inline-block">
              VIEW ALL PROJECTS →
            </Link>
          </div>
        )}

        {projects.length === 0 && (
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
