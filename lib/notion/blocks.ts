import { notion } from './client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getPageBlocks(pageId: string): Promise<any[]> {
  try {
    const blocks: unknown[] = [];
    let cursor: string | undefined = undefined;

    do {
      const response = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
        page_size: 100,
      });
      blocks.push(...response.results);
      cursor = response.has_more
        ? (response.next_cursor ?? undefined)
        : undefined;
    } while (cursor);

    // Recursively fetch children for blocks that have children
    for (const block of blocks) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const b = block as any;
      if (
        b.has_children &&
        b.type !== 'child_page' &&
        b.type !== 'child_database'
      ) {
        b.children = await getPageBlocks(b.id);
      }
    }

    return blocks;
  } catch (error) {
    console.error('Failed to fetch page blocks:', error);
    return [];
  }
}
