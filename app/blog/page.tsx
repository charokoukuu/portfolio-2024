import { getBlogPosts } from '@/lib/notion/blog';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import SystemBadge from '@/components/ui/SystemBadge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog',
  description: 'ブログ — HINATA SAITO Portfolio',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionTitle system="FEED::BLOG_ENTRIES" title="Blog" />

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <GlassPanel className="overflow-hidden transition-transform group-hover:scale-[1.01]">
                <div className="flex flex-col sm:flex-row">
                  {/* Thumbnail */}
                  {post.thumbnail && (
                    <div className="relative h-48 shrink-0 overflow-hidden sm:h-auto sm:w-56">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 sm:bg-gradient-to-r" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-[10px] text-slate-600">
                        {post.publishedAt}
                      </span>
                    </div>
                    <h3 className="mb-2 font-mono text-base font-bold text-cyan-900 group-hover:text-cyan-700">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="mb-3 line-clamp-2 font-mono text-xs leading-relaxed text-slate-600">
                        {post.description}
                      </p>
                    )}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <SystemBadge key={tag} label={tag} variant="cyan" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </GlassPanel>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="glass-panel p-12 text-center">
            <p className="font-mono text-sm text-slate-500">
              <span className="text-cyan-700">&gt;</span> NO BLOG ENTRIES FOUND
              IN NOTION DATABASE
            </p>
            <p className="mt-2 font-mono text-xs text-slate-600">
              Create a Blog database in Notion and configure NOTION_BLOG_DB_ID
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
