/* eslint-disable @typescript-eslint/no-explicit-any */
import EmbedBlock from './EmbedBlock';

interface NotionRendererProps {
  blocks: any[];
}

function renderRichText(richText: any[]): React.ReactNode {
  if (!richText) return null;
  return richText.map((t: any, i: number) => {
    let content: React.ReactNode = t.plain_text;

    if (t.annotations?.bold) content = <strong key={i}>{content}</strong>;
    if (t.annotations?.italic) content = <em key={i}>{content}</em>;
    if (t.annotations?.strikethrough)
      content = <s key={i}>{content}</s>;
    if (t.annotations?.underline)
      content = (
        <span key={i} className="underline underline-offset-4">
          {content}
        </span>
      );
    if (t.annotations?.code)
      content = (
        <code
          key={i}
          className="rounded bg-slate-800/80 px-1.5 py-0.5 font-mono text-sm text-cyan-300"
        >
          {content}
        </code>
      );
    if (t.href)
      content = (
        <a
          key={i}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline underline-offset-4 transition-colors hover:text-cyan-300"
        >
          {content}
        </a>
      );

    return <span key={i}>{content}</span>;
  });
}

function renderBlock(block: any, index: number): React.ReactNode {
  const { type } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p key={block.id} className="mb-4 leading-relaxed text-slate-300">
          {renderRichText(value.rich_text)}
        </p>
      );

    case 'heading_1':
      return (
        <h1
          key={block.id}
          className="mb-4 mt-8 font-mono text-2xl font-bold text-cyan-50"
        >
          {renderRichText(value.rich_text)}
        </h1>
      );

    case 'heading_2':
      return (
        <h2
          key={block.id}
          className="mb-3 mt-6 font-mono text-xl font-bold text-cyan-100"
        >
          <span className="mr-2 text-cyan-700">#</span>
          {renderRichText(value.rich_text)}
        </h2>
      );

    case 'heading_3':
      return (
        <h3
          key={block.id}
          className="mb-2 mt-4 font-mono text-lg font-semibold text-cyan-200"
        >
          <span className="mr-2 text-cyan-700">##</span>
          {renderRichText(value.rich_text)}
        </h3>
      );

    case 'bulleted_list_item':
      return (
        <li key={block.id} className="mb-1 ml-4 text-slate-300">
          <span className="mr-2 text-cyan-600">▸</span>
          {renderRichText(value.rich_text)}
          {block.children && (
            <ul className="mt-1">
              {block.children.map((child: any, i: number) =>
                renderBlock(child, i)
              )}
            </ul>
          )}
        </li>
      );

    case 'numbered_list_item':
      return (
        <li
          key={block.id}
          className="mb-1 ml-4 list-decimal text-slate-300 marker:text-cyan-600"
        >
          {renderRichText(value.rich_text)}
          {block.children && (
            <ol className="mt-1">
              {block.children.map((child: any, i: number) =>
                renderBlock(child, i)
              )}
            </ol>
          )}
        </li>
      );

    case 'code':
      return (
        <div key={block.id} className="my-4">
          <div className="overflow-x-auto rounded-lg border border-cyan-800/30 bg-slate-900/80 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
              <span className="h-2 w-2 rounded-full bg-green-500/60" />
              {value.language && (
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  {value.language}
                </span>
              )}
            </div>
            <pre className="font-mono text-sm leading-relaxed text-cyan-200">
              <code>{value.rich_text?.[0]?.plain_text ?? ''}</code>
            </pre>
          </div>
        </div>
      );

    case 'image': {
      const src =
        value.type === 'file' ? value.file.url : value.external?.url;
      const caption = value.caption?.[0]?.plain_text ?? '';
      return (
        <figure key={block.id} className="my-6">
          <div className="neon-border overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={caption || 'Image'}
              className="w-full"
              loading="lazy"
            />
          </div>
          {caption && (
            <figcaption className="mt-2 text-center font-mono text-xs text-slate-500">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case 'video': {
      const videoUrl =
        value.type === 'external' ? value.external?.url : value.file?.url;
      if (videoUrl) {
        return <EmbedBlock key={block.id} url={videoUrl} />;
      }
      return null;
    }

    case 'embed': {
      const embedUrl = value.url;
      const caption = value.caption?.[0]?.plain_text ?? '';
      return (
        <EmbedBlock key={block.id} url={embedUrl} caption={caption} />
      );
    }

    case 'bookmark': {
      const bookmarkUrl = value.url;
      const caption = value.caption?.[0]?.plain_text ?? '';
      return (
        <EmbedBlock
          key={block.id}
          url={bookmarkUrl}
          caption={caption}
        />
      );
    }

    case 'callout':
      return (
        <div
          key={block.id}
          className="my-4 flex gap-3 rounded-lg border border-cyan-800/30 bg-cyan-950/20 p-4"
        >
          <span className="text-lg">
            {value.icon?.emoji ?? '💡'}
          </span>
          <div className="text-slate-300">
            {renderRichText(value.rich_text)}
          </div>
        </div>
      );

    case 'quote':
      return (
        <blockquote
          key={block.id}
          className="my-4 border-l-2 border-cyan-600/50 pl-4 italic text-slate-400"
        >
          {renderRichText(value.rich_text)}
        </blockquote>
      );

    case 'divider':
      return <div key={block.id} className="section-divider" />;

    case 'toggle':
      return (
        <details
          key={block.id}
          className="my-2 rounded-lg border border-cyan-800/20 bg-slate-900/30 p-3"
        >
          <summary className="cursor-pointer font-mono text-sm text-cyan-300">
            {renderRichText(value.rich_text)}
          </summary>
          {block.children && (
            <div className="mt-2 pl-4">
              {block.children.map((child: any, i: number) =>
                renderBlock(child, i)
              )}
            </div>
          )}
        </details>
      );

    default:
      return null;
  }
}

export default function NotionRenderer({ blocks }: NotionRendererProps) {
  // Group consecutive list items
  const groupedBlocks: any[] = [];
  let currentList: any[] | null = null;
  let currentListType: string | null = null;

  for (const block of blocks) {
    if (
      block.type === 'bulleted_list_item' ||
      block.type === 'numbered_list_item'
    ) {
      if (currentListType === block.type) {
        currentList!.push(block);
      } else {
        if (currentList) {
          groupedBlocks.push({ type: currentListType, items: currentList });
        }
        currentList = [block];
        currentListType = block.type;
      }
    } else {
      if (currentList) {
        groupedBlocks.push({ type: currentListType, items: currentList });
        currentList = null;
        currentListType = null;
      }
      groupedBlocks.push(block);
    }
  }
  if (currentList) {
    groupedBlocks.push({ type: currentListType, items: currentList });
  }

  return (
    <div className="notion-content">
      {groupedBlocks.map((item, index) => {
        if (item.items) {
          const Tag = item.type === 'bulleted_list_item' ? 'ul' : 'ol';
          return (
            <Tag key={`list-${index}`} className="my-3">
              {item.items.map((block: any, i: number) =>
                renderBlock(block, i)
              )}
            </Tag>
          );
        }
        return renderBlock(item, index);
      })}
    </div>
  );
}
