import { notion } from './client';
import type { Internship } from '@/lib/types/internship';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractInternship(page: any): Internship {
  const props = page.properties;
  return {
    id: page.id,
    name: props.Name?.title?.[0]?.plain_text ?? '',
    period: props.Period?.rich_text?.[0]?.plain_text ?? '',
    description: props.Description?.rich_text?.[0]?.plain_text ?? '',
    techStack:
      props.TechStack?.multi_select?.map((s: { name: string }) => s.name) ?? [],
    order: props.Order?.number ?? 0,
  };
}

export async function getInternships(): Promise<Internship[]> {
  const dbId = process.env.NOTION_INTERNSHIPS_DB_ID;
  if (!dbId) return [];

  try {
    const response = await notion.databases.query({
      database_id: dbId,
      sorts: [{ property: 'Order', direction: 'ascending' }],
    });
    return response.results.map(extractInternship);
  } catch (error) {
    console.error('Failed to fetch internships:', error);
    return [];
  }
}
