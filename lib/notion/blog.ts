import { notion } from './client';
import type { BlogPost } from '@/lib/types/blog';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractBlogPost(page: any): BlogPost {
  const props = page.properties;
  return {
    id: page.id,
    title: props.Name?.title?.[0]?.plain_text ?? '',
    slug: props.Slug?.rich_text?.[0]?.plain_text ?? '',
    tags:
      props.Tags?.multi_select?.map((t: { name: string }) => t.name) ?? [],
    description: props.Description?.rich_text?.[0]?.plain_text ?? '',
    thumbnail:
      props.Thumbnail?.files?.[0]?.file?.url ??
      props.Thumbnail?.files?.[0]?.external?.url ??
      null,
    publishedAt: props.PublishedAt?.date?.start ?? '',
    published: props.Published?.checkbox ?? false,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const dbId = process.env.NOTION_BLOG_DB_ID;
  if (!dbId) return [];

  try {
    const response = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: 'Published',
        checkbox: { equals: true },
      },
      sorts: [{ property: 'PublishedAt', direction: 'descending' }],
    });
    return response.results.map(extractBlogPost);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return [];
  }
}

export async function getBlogBySlug(
  slug: string
): Promise<{ post: BlogPost; pageId: string } | null> {
  const dbId = process.env.NOTION_BLOG_DB_ID;
  if (!dbId) return null;

  try {
    const response = await notion.databases.query({
      database_id: dbId,
      filter: {
        and: [
          { property: 'Slug', rich_text: { equals: slug } },
          { property: 'Published', checkbox: { equals: true } },
        ],
      },
    });
    const page = response.results[0];
    if (!page) return null;
    return { post: extractBlogPost(page), pageId: page.id };
  } catch (error) {
    console.error('Failed to fetch blog by slug:', error);
    return null;
  }
}
