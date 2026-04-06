import { notion } from './client';
import type { Award } from '@/lib/types/award';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractAward(page: any): Award {
  const props = page.properties;
  return {
    id: page.id,
    name: props.Name?.title?.[0]?.plain_text ?? '',
    event: props.Event?.rich_text?.[0]?.plain_text ?? '',
    date: props.Date?.date?.start ?? '',
    rank: props.Rank?.select?.name ?? '',
    prize: props.Prize?.rich_text?.[0]?.plain_text ?? '',
    url: props.URL?.url ?? null,
  };
}

export async function getAwards(): Promise<Award[]> {
  const dbId = process.env.NOTION_AWARDS_DB_ID;
  if (!dbId) return [];

  try {
    const response = await notion.databases.query({
      database_id: dbId,
      sorts: [{ property: 'Date', direction: 'descending' }],
    });
    return response.results.map(extractAward);
  } catch (error) {
    console.error('Failed to fetch awards:', error);
    return [];
  }
}
