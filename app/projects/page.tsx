import { getProjects } from '@/lib/notion/projects';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import SystemBadge from '@/components/ui/SystemBadge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Projects',
  description: 'プロジェクト一覧 — HINATA SAITO Portfolio',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  // Group by year
  const grouped = projects.reduce(
    (acc, project) => {
      const year = project.date
        ? new Date(project.date).getFullYear().toString()
        : 'Other';
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
      return acc;
    },
    {} as Record<string, typeof projects>
  );

  const sortedYears = Object.keys(grouped).sort((a, b) =>
    b.localeCompare(a)
  );

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          system="DATABASE::PROJECT_ARCHIVE"
          title="Projects"
        />

        {sortedYears.map((year) => (
          <div key={year} className="relative mt-8">
            {/* Psycho-Pass Style Tech Border Wrapper for Year Group */}
            <div className="relative rounded-sm border border-cyan-500/50 bg-cyan-950/5 p-6 sm:p-8 backdrop-blur-sm">
              {/* HUD Corner Accents */}
              <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400" />

              {/* Cyberpunk Header Badge Overlay */}
              <div className="absolute -top-3.5 left-6 border border-cyan-500/50 bg-[#eff2f5] px-3 py-0.5 font-mono text-xs font-bold tracking-widest text-cyan-600 sm:text-sm">
                [ ARCHIVE_YEAR::{year} ]
              </div>

              <div className="absolute -bottom-2.5 right-6 hidden border border-cyan-500/30 bg-[#eff2f5] px-2 text-[10px] tracking-widest text-cyan-500 sm:block">
                SYS.LOG // HASH:{Math.random().toString(36).substring(2, 10).toUpperCase()}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[year].map((project) => (
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
                            <SystemBadge
                              label={project.category}
                              variant="cyan"
                            />
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
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="glass-panel p-12 text-center">
            <p className="font-mono text-sm text-slate-500">
              <span className="text-cyan-700">&gt;</span> NO PROJECTS FOUND
              IN NOTION DATABASE
            </p>
            <p className="mt-2 font-mono text-xs text-slate-600">
              Create a Projects database in Notion and configure
              NOTION_PROJECTS_DB_ID
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
