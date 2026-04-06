import { notFound } from 'next/navigation';
import { getProjects, getProjectBySlug } from '@/lib/notion/projects';
import { getPageBlocks } from '@/lib/notion/blocks';
import NotionRenderer from '@/components/notion/NotionRenderer';
import SystemBadge from '@/components/ui/SystemBadge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);
  if (!result) return { title: 'Not Found' };
  return {
    title: result.project.title,
    description: `${result.project.title} — SAITO HINATA Portfolio`,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);

  if (!result) notFound();

  const { project, pageId } = result;
  const blocks = await getPageBlocks(pageId);

  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-6 font-mono text-xs text-slate-600">
          <Link href="/" className="hover:text-cyan-500">
            HOME
          </Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-cyan-500">
            PROJECTS
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-400">{project.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            {project.category && (
              <SystemBadge label={project.category} variant="cyan" />
            )}
            <span className="font-mono text-xs text-slate-600">
              {project.date}
            </span>
          </div>
          <h1 className="font-mono text-2xl font-bold text-cyan-50 sm:text-3xl">
            {project.title}
          </h1>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-700/50 to-transparent" />
        </div>

        {/* Notion Content */}
        <article>
          <NotionRenderer blocks={blocks} />
        </article>

        {/* Back Link */}
        <div className="mt-12 border-t border-cyan-800/20 pt-6">
          <Link
            href="/projects"
            className="font-mono text-sm text-cyan-500 hover:text-cyan-400"
          >
            ← BACK TO PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
}
