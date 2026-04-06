import { notFound } from 'next/navigation';
import { getBlogPosts, getBlogBySlug } from '@/lib/notion/blog';
import { getPageBlocks } from '@/lib/notion/blocks';
import NotionRenderer from '@/components/notion/NotionRenderer';
import SystemBadge from '@/components/ui/SystemBadge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);
  if (!result) return { title: 'Not Found' };
  return {
    title: result.post.title,
    description: result.post.description || `${result.post.title} — Blog`,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);

  if (!result) notFound();

  const { post, pageId } = result;
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
          <Link href="/blog" className="hover:text-cyan-500">
            BLOG
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-400">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-slate-500">
              {post.publishedAt}
            </span>
            {post.tags.map((tag) => (
              <SystemBadge key={tag} label={tag} variant="cyan" />
            ))}
          </div>
          <h1 className="font-mono text-2xl font-bold text-cyan-50 sm:text-3xl">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-3 font-mono text-sm text-slate-400">
              {post.description}
            </p>
          )}
          <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-700/50 to-transparent" />
        </header>

        {/* Article Content */}
        <article>
          <NotionRenderer blocks={blocks} />
        </article>

        {/* Back Link */}
        <div className="mt-12 border-t border-cyan-800/20 pt-6">
          <Link
            href="/blog"
            className="font-mono text-sm text-cyan-500 hover:text-cyan-400"
          >
            ← BACK TO BLOG
          </Link>
        </div>
      </div>
    </div>
  );
}
