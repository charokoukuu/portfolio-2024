import { notion } from './client';
import type { Skill } from '@/lib/types/skill';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractSkill(page: any): Skill {
  const props = page.properties;
  return {
    id: page.id,
    name: props.Name?.title?.[0]?.plain_text ?? '',
    category: props.Category?.select?.name ?? '',
    proficiency: props.Proficiency?.number ?? 0,
    yearsOfExperience:
      props.YearsOfExperience?.rich_text?.[0]?.plain_text ?? '',
    icon: props.Icon?.files?.[0]?.file?.url ?? props.Icon?.files?.[0]?.external?.url ?? null,
    order: props.Order?.number ?? 0,
  };
}

export async function getSkills(): Promise<Skill[]> {
  const dbId = process.env.NOTION_SKILLS_DB_ID;
  if (!dbId) return [];

  try {
    const response = await notion.databases.query({
      database_id: dbId,
      sorts: [{ property: 'Order', direction: 'ascending' }],
    });
    return response.results.map(extractSkill);
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    return [];
  }
}
