/* eslint-disable @typescript-eslint/no-explicit-any */
import EmbedBlock from './EmbedBlock';
import MermaidWrapper from './MermaidWrapper';

interface NotionRendererProps {
  blocks: any[];
}

// ─── Rich Text Renderer ────────────────────────────────────────────
function renderRichText(richText: any[]): React.ReactNode {
  if (!richText || richText.length === 0) return null;
  return richText.map((t: any, i: number) => {
    let content: React.ReactNode = t.plain_text;

    // Apply annotations in order
    if (t.annotations?.bold)
      content = <strong key={`b-${i}`}>{content}</strong>;
    if (t.annotations?.italic) content = <em key={`i-${i}`}>{content}</em>;
    if (t.annotations?.strikethrough) content = <s key={`s-${i}`}>{content}</s>;
    if (t.annotations?.underline)
      content = (
        <span key={`u-${i}`} className="underline underline-offset-4">
          {content}
        </span>
      );
    if (t.annotations?.code)
      content = (
        <code
          key={`c-${i}`}
          className="rounded bg-slate-800/80 px-1.5 py-0.5 font-mono text-sm text-cyan-300"
        >
          {content}
        </code>
      );

    // Color
    if (t.annotations?.color && t.annotations.color !== 'default') {
      const colorMap: Record<string, string> = {
        gray: 'text-slate-400',
        brown: 'text-amber-600',
        orange: 'text-orange-400',
        yellow: 'text-yellow-400',
        green: 'text-lime-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400',
        pink: 'text-pink-400',
        red: 'text-red-400',
        gray_background: 'bg-slate-800/60 px-1 rounded',
        brown_background: 'bg-amber-900/30 px-1 rounded',
        orange_background: 'bg-orange-900/30 px-1 rounded',
        yellow_background: 'bg-yellow-900/30 px-1 rounded',
        green_background: 'bg-green-900/30 px-1 rounded',
        blue_background: 'bg-blue-900/30 px-1 rounded',
        purple_background: 'bg-purple-900/30 px-1 rounded',
        pink_background: 'bg-pink-900/30 px-1 rounded',
        red_background: 'bg-red-900/30 px-1 rounded',
      };
      const cls = colorMap[t.annotations.color];
      if (cls) content = <span className={cls}>{content}</span>;
    }

    // Link
    if (t.href)
      content = (
        <a
          key={`a-${i}`}
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

function getRichTextPlain(richText: any[]): string {
  if (!richText) return '';
  return richText.map((t: any) => t.plain_text).join('');
}

// ─── Table Renderer ────────────────────────────────────────────────
function renderTable(block: any): React.ReactNode {
  const rows = block.children ?? [];
  const hasHeader = block.table?.has_column_header;
  const hasRowHeader = block.table?.has_row_header;

  return (
    <div key={block.id} className="relative my-10">
      {/* Psycho-Pass Style Tech Border Wrapper */}
      <div className="relative rounded-sm border border-cyan-500/50 bg-cyan-50/50 p-4 sm:p-6 backdrop-blur-sm">
        {/* HUD Corner Accents */}
        <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400" />

        {/* Cyberpunk Header Badge Overlay */}
        <div className="absolute -top-3.5 left-6 border border-cyan-500/50 bg-slate-50 px-3 py-0.5 font-mono text-xs font-bold tracking-widest text-cyan-600">
          [ SYS::DATA_TABLE ]
        </div>

        {/* Table inner wrapper for scrolling independent of absolute borders */}
        <div className="mt-2 w-full overflow-x-auto">
          <table className="min-w-full border-collapse font-mono text-sm whitespace-nowrap">
            <tbody>
              {rows.map((row: any, rowIndex: number) => {
                const cells = row.table_row?.cells ?? [];
                const isHeaderRow = hasHeader && rowIndex === 0;
                const Tag = isHeaderRow ? 'th' : 'td';

                return (
                  <tr
                    key={row.id}
                    className={
                      isHeaderRow
                        ? 'border-b-2 border-cyan-400/50 bg-cyan-100/50 font-bold'
                        : 'border-b border-cyan-300/30 hover:bg-white/40 transition-colors duration-150'
                    }
                  >
                    {cells.map((cell: any, cellIndex: number) => {
                      const isRowHeaderCell = hasRowHeader && cellIndex === 0;
                      const CellTag = isHeaderRow || isRowHeaderCell ? 'th' : Tag;
                      return (
                        <CellTag
                          key={cellIndex}
                          className={`p-3 sm:p-4 text-left ${isHeaderRow || isRowHeaderCell
                            ? 'font-bold text-cyan-800'
                            : 'text-slate-700'
                            }`}
                        >
                          {renderRichText(cell)}
                        </CellTag>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Column List Renderer ──────────────────────────────────────────
function renderColumnList(block: any): React.ReactNode {
  const columns = block.children ?? [];
  return (
    <div
      key={block.id}
      className="my-4 grid gap-4"
      style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
    >
      {columns.map((column: any) => (
        <div key={column.id}>
          {column.children?.map((child: any, i: number) =>
            renderBlock(child, i)
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Block Renderer ────────────────────────────────────────────────
function renderBlock(block: any, index: number): React.ReactNode {
  const { type } = block;
  const value = block[type];

  switch (type) {
    // ── Text ──
    case 'paragraph': {
      const text = renderRichText(value.rich_text);
      if (!text) return <div key={block.id} className="mb-2 h-4" />;
      return (
        <p key={block.id} className="mb-4 leading-relaxed text-slate-700">
          {text}
        </p>
      );
    }

    // ── Headings ──
    case 'heading_1':
      return (
        <h1
          key={block.id}
          id={`h-${block.id}`}
          className="mb-4 mt-8 font-mono text-2xl font-bold text-cyan-900"
        >
          {renderRichText(value.rich_text)}
        </h1>
      );

    case 'heading_2':
      return (
        <h2
          key={block.id}
          id={`h-${block.id}`}
          className="mb-3 mt-6 font-mono text-xl font-bold text-cyan-800"
        >
          <span className="mr-2 text-cyan-700">#</span>
          {renderRichText(value.rich_text)}
        </h2>
      );

    case 'heading_3':
      return (
        <h3
          key={block.id}
          id={`h-${block.id}`}
          className="mb-2 mt-4 font-mono text-lg font-semibold text-cyan-800"
        >
          <span className="mr-2 text-cyan-700">##</span>
          {renderRichText(value.rich_text)}
        </h3>
      );

    // ── Lists ──
    case 'bulleted_list_item':
      return (
        <li key={block.id} className="mb-1 ml-4 text-slate-700">
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
          className="mb-1 ml-4 list-decimal text-slate-700 marker:text-cyan-600"
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

    case 'to_do':
      return (
        <div key={block.id} className="mb-1 flex items-start gap-2">
          <span
            className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border font-mono text-[10px] ${value.checked
                ? 'border-lime-500/50 bg-lime-500/20 text-lime-400'
                : 'border-slate-600 text-transparent'
              }`}
          >
            {value.checked ? '✓' : ''}
          </span>
          <span
            className={
              value.checked ? 'text-slate-400 line-through' : 'text-slate-700'
            }
          >
            {renderRichText(value.rich_text)}
          </span>
        </div>
      );

    // ── Code ──
    case 'code': {
      const codeText = getRichTextPlain(value.rich_text);
      const language = value.language ?? '';
      const caption = value.caption?.[0]?.plain_text ?? '';

      // Mermaid support
      if (language.toLowerCase() === 'mermaid') {
        return <MermaidWrapper key={block.id} code={codeText} />;
      }

      return (
        <div key={block.id} className="my-4">
          <div className="overflow-x-auto rounded-lg border border-cyan-400/50 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
              <span className="h-2 w-2 rounded-full bg-green-500/60" />
              {language && (
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-slate-600">
                  {language}
                </span>
              )}
            </div>
            <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-cyan-900">
              <code>{codeText}</code>
            </pre>
          </div>
          {caption && (
            <p className="mt-1 text-center font-mono text-xs text-slate-500">
              {caption}
            </p>
          )}
        </div>
      );
    }

    // ── Equation (KaTeX) ──
    case 'equation':
      return (
        <div
          key={block.id}
          className="my-4 overflow-x-auto rounded-lg border border-cyan-400/50 bg-slate-100 p-4 text-center"
        >
          <code className="font-mono text-sm text-cyan-800">
            {value.expression}
          </code>
        </div>
      );

    // ── Image ──
    case 'image': {
      const src = value.type === 'file' ? value.file.url : value.external?.url;
      const caption = value.caption?.[0]?.plain_text ?? '';
      // Notion provides width in various fields depending on API/library
      const widthPercentage = value.format?.block_width;

      return (
        <figure
          key={block.id}
          className="my-10 flex flex-col items-center justify-center"
        >
          <div
            className="group relative overflow-hidden rounded-sm"
            style={
              widthPercentage
                ? { width: `${widthPercentage}%` }
                : { maxWidth: '100%' }
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={caption || 'Content Image'}
              className="mx-auto block h-auto max-w-full object-contain"
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

    // ── Video ──
    case 'video': {
      const videoUrl =
        value.type === 'external' ? value.external?.url : value.file?.url;
      if (!videoUrl) return null;

      // If it's a file URL, render as <video>, else use EmbedBlock
      if (value.type === 'file') {
        return (
          <div key={block.id} className="my-6 text-center">
            <div className="inline-block overflow-hidden rounded-lg">
              <video src={videoUrl} controls className="max-w-full" />
            </div>
          </div>
        );
      }
      return <EmbedBlock key={block.id} url={videoUrl} />;
    }

    // ── Audio ──
    case 'audio': {
      const audioUrl =
        value.type === 'file' ? value.file?.url : value.external?.url;
      if (!audioUrl) return null;
      return (
        <div key={block.id} className="my-4">
          <div className="neon-border rounded-lg p-3">
            <audio src={audioUrl} controls className="w-full" />
          </div>
        </div>
      );
    }

    // ── File / PDF ──
    case 'file':
    case 'pdf': {
      const fileUrl =
        value.type === 'file' ? value.file?.url : value.external?.url;
      const fileName = value.caption?.[0]?.plain_text || value.name || 'File';
      if (!fileUrl) return null;

      if (type === 'pdf' || fileUrl.endsWith('.pdf')) {
        return (
          <div key={block.id} className="my-6">
            <div className="neon-border overflow-hidden rounded-lg">
              <div
                className="relative w-full"
                style={{ paddingTop: '141.42%' /* A4 ratio */ }}
              >
                <iframe
                  src={fileUrl}
                  className="absolute inset-0 h-full w-full"
                  title={fileName}
                />
              </div>
            </div>
          </div>
        );
      }

      return (
        <div key={block.id} className="my-4">
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel flex items-center gap-3 p-3 transition-colors hover:border-cyan-500/50"
          >
            <span className="text-lg">📎</span>
            <span className="font-mono text-sm text-cyan-400 underline underline-offset-4">
              {fileName}
            </span>
            <span className="ml-auto text-slate-600">↓</span>
          </a>
        </div>
      );
    }

    // ── Embeds & Bookmarks ──
    case 'embed': {
      const embedUrl = value.url;
      const caption = value.caption?.[0]?.plain_text ?? '';
      return (
        <EmbedBlock
          key={block.id}
          url={embedUrl}
          caption={caption}
          forceEmbed
        />
      );
    }

    case 'bookmark': {
      const bookmarkUrl = value.url;
      const caption = value.caption?.[0]?.plain_text ?? '';
      return <EmbedBlock key={block.id} url={bookmarkUrl} caption={caption} />;
    }

    case 'link_preview': {
      const previewUrl = value.url;
      return <EmbedBlock key={block.id} url={previewUrl} forceEmbed />;
    }

    // ── Table ──
    case 'table':
      return renderTable(block);

    case 'table_row':
      return null; // Handled by renderTable

    // ── Column Layout ──
    case 'column_list':
      return renderColumnList(block);

    case 'column':
      return null; // Handled by renderColumnList

    // ── Callout ──
    case 'callout':
      return (
        <div
          key={block.id}
          className="my-4 flex gap-3 rounded-lg border border-cyan-400/50 bg-cyan-50/50 p-4"
        >
          <span className="shrink-0 text-lg">{value.icon?.emoji ?? '💡'}</span>
          <div className="min-w-0 flex-1 text-slate-700">
            {renderRichText(value.rich_text)}
            {block.children && (
              <div className="mt-2">
                {block.children.map((child: any, i: number) =>
                  renderBlock(child, i)
                )}
              </div>
            )}
          </div>
        </div>
      );

    // ── Quote ──
    case 'quote':
      return (
        <blockquote
          key={block.id}
          className="my-4 border-l-2 border-cyan-400 pl-4 text-slate-600"
        >
          {renderRichText(value.rich_text)}
          {block.children && (
            <div className="mt-2">
              {block.children.map((child: any, i: number) =>
                renderBlock(child, i)
              )}
            </div>
          )}
        </blockquote>
      );

    // ── Divider ──
    case 'divider':
      return <div key={block.id} className="section-divider" />;

    // ── Toggle ──
    case 'toggle':
      return (
        <details
          key={block.id}
          className="my-2 rounded-lg border border-cyan-300 bg-white p-3"
        >
          <summary className="cursor-pointer font-mono text-sm text-cyan-700">
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

    // ── Table of Contents ──
    case 'table_of_contents':
      return null; // We'll handle this at the page level if needed

    // ── Synced Block ──
    case 'synced_block':
      if (block.children) {
        return (
          <div key={block.id}>
            {block.children.map((child: any, i: number) =>
              renderBlock(child, i)
            )}
          </div>
        );
      }
      return null;

    // ── Link to Page ──
    case 'link_to_page':
      return null; // Cannot render inter-notion links

    // ── Child Page / Database ──
    case 'child_page':
      return (
        <div key={block.id} className="my-2">
          <div className="glass-panel flex items-center gap-2 p-3">
            <span className="text-base">📄</span>
            <span className="font-mono text-sm text-cyan-300">
              {value.title}
            </span>
          </div>
        </div>
      );

    case 'child_database':
      return (
        <div key={block.id} className="my-2">
          <div className="glass-panel flex items-center gap-2 p-3">
            <span className="text-base">🗃️</span>
            <span className="font-mono text-sm text-cyan-300">
              {value.title}
            </span>
          </div>
        </div>
      );

    // ── Breadcrumb / Template ──
    case 'breadcrumb':
    case 'template':
    case 'unsupported':
      return null;

    default:
      // Debug: show unknown block types in dev mode
      if (process.env.NODE_ENV === 'development') {
        return (
          <div
            key={block.id}
            className="my-2 rounded border border-yellow-800/30 bg-yellow-950/20 p-2 font-mono text-xs text-yellow-500"
          >
            [Unsupported block: {type}]
          </div>
        );
      }
      return null;
  }
}

// ─── Main Renderer ─────────────────────────────────────────────────
export default function NotionRenderer({ blocks }: NotionRendererProps) {
  // Group consecutive list items into <ul>/<ol> wrappers
  const groupedBlocks: any[] = [];
  let currentList: any[] | null = null;
  let currentListType: string | null = null;

  for (const block of blocks) {
    const isList =
      block.type === 'bulleted_list_item' ||
      block.type === 'numbered_list_item' ||
      block.type === 'to_do';

    if (isList && currentListType === block.type) {
      currentList!.push(block);
    } else {
      if (currentList) {
        groupedBlocks.push({ type: currentListType, items: currentList });
        currentList = null;
        currentListType = null;
      }
      if (isList) {
        currentList = [block];
        currentListType = block.type;
      } else {
        groupedBlocks.push(block);
      }
    }
  }
  if (currentList) {
    groupedBlocks.push({ type: currentListType, items: currentList });
  }

  return (
    <div className="notion-content">
      {groupedBlocks.map((item, index) => {
        if (item.items) {
          if (item.type === 'to_do') {
            return (
              <div key={`todo-${index}`} className="my-3">
                {item.items.map((block: any, i: number) =>
                  renderBlock(block, i)
                )}
              </div>
            );
          }
          const Tag = item.type === 'bulleted_list_item' ? 'ul' : 'ol';
          return (
            <Tag key={`list-${index}`} className="my-3">
              {item.items.map((block: any, i: number) => renderBlock(block, i))}
            </Tag>
          );
        }
        return renderBlock(item, index);
      })}
    </div>
  );
}
