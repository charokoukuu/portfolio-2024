import { notion } from './client';
import type { Project } from '@/lib/types/project';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractProject(page: any): Project {
  const props = page.properties;
  return {
    id: page.id,
    title: props.Name?.title?.[0]?.plain_text ?? '',
    slug: props.Slug?.rich_text?.[0]?.plain_text ?? '',
    category: props.Category?.select?.name ?? '',
    thumbnail:
      props.Thumbnail?.files?.[0]?.file?.url ??
      props.Thumbnail?.files?.[0]?.external?.url ??
      null,
    date: props.Date?.date?.start ?? '',
    published: props.Published?.checkbox ?? false,
    order: props.Order?.number ?? 0,
  };
}

export async function getProjects(): Promise<Project[]> {
  const dbId = process.env.NOTION_PROJECTS_DB_ID;
  if (!dbId) return [];

  try {
    const response = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: 'Published',
        checkbox: { equals: true },
      },
      sorts: [{ property: 'Date', direction: 'descending' }],
    });
    return response.results.map(extractProject);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}

export async function getProjectBySlug(
  slug: string
): Promise<{ project: Project; pageId: string } | null> {
  const dbId = process.env.NOTION_PROJECTS_DB_ID;
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
    return { project: extractProject(page), pageId: page.id };
  } catch (error) {
    console.error('Failed to fetch project by slug:', error);
    return null;
  }
}
