interface EmbedBlockProps {
  url: string;
  caption?: string;
  forceEmbed?: boolean;
}

type EmbedType =
  | 'youtube'
  | 'speakerdeck'
  | 'google-slides'
  | 'google-docs'
  | 'google-maps'
  | 'twitter'
  | 'codepen'
  | 'codesandbox'
  | 'figma'
  | 'excalidraw'
  | 'github-gist'
  | 'loom'
  | 'vimeo'
  | 'spotify'
  | 'canva'
  | 'notion'
  | 'miro'
  | 'generic';

function getEmbedType(url: string): EmbedType {
  if (/youtube\.com|youtu\.be/.test(url)) return 'youtube';
  if (/vimeo\.com/.test(url)) return 'vimeo';
  if (/speakerdeck\.com/.test(url)) return 'speakerdeck';
  if (/docs\.google\.com\/presentation/.test(url)) return 'google-slides';
  if (/docs\.google\.com\/document/.test(url)) return 'google-docs';
  if (/google\.com\/maps|maps\.google/.test(url)) return 'google-maps';
  if (/twitter\.com|x\.com/.test(url)) return 'twitter';
  if (/codepen\.io/.test(url)) return 'codepen';
  if (/codesandbox\.io/.test(url)) return 'codesandbox';
  if (/figma\.com/.test(url)) return 'figma';
  if (/excalidraw\.com/.test(url)) return 'excalidraw';
  if (/gist\.github\.com/.test(url)) return 'github-gist';
  if (/loom\.com/.test(url)) return 'loom';
  if (/spotify\.com/.test(url)) return 'spotify';
  if (/canva\.com/.test(url)) return 'canva';
  if (/notion\.site|notion\.so/.test(url)) return 'notion';
  if (/miro\.com/.test(url)) return 'miro';
  return 'generic';
}

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function getVimeoEmbedUrl(url: string): string {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}` : url;
}

function getGoogleSlidesEmbedUrl(url: string): string {
  if (url.includes('/embed')) return url;
  return url.replace(/\/pub.*$/, '/embed?start=false&loop=false&delayms=3000');
}

function getGoogleDocsEmbedUrl(url: string): string {
  if (url.includes('/preview')) return url;
  return url.replace(/\/edit.*$/, '/preview');
}

function getCodePenEmbedUrl(url: string): string {
  return url.replace('/pen/', '/embed/') + '?default-tab=result&theme-id=dark';
}

function getCodeSandboxEmbedUrl(url: string): string {
  return url.replace('codesandbox.io/s/', 'codesandbox.io/embed/') + '?theme=dark';
}

function getFigmaEmbedUrl(url: string): string {
  return `https://www.figma.com/embed?embed_host=notion&url=${encodeURIComponent(url)}`;
}

function getLoomEmbedUrl(url: string): string {
  return url.replace('/share/', '/embed/');
}

function getSpotifyEmbedUrl(url: string): string {
  return url.replace('open.spotify.com/', 'open.spotify.com/embed/');
}

function getCanvaEmbedUrl(url: string): string {
  // Canva design URLs: ensure they use the embed-friendly format
  // e.g. https://www.canva.com/design/XXXXX/view → add ?embed at end if missing
  if (url.includes('?embed')) return url;
  if (url.includes('/view')) return url + '?embed';
  // For URLs like /watch or others, append /view?embed
  return url;
}

function isIframeEmbeddable(type: EmbedType): boolean {
  return type !== 'generic' && type !== 'twitter' && type !== 'github-gist';
}

function getEmbedUrl(url: string, type: EmbedType): string {
  switch (type) {
    case 'youtube':
      return getYouTubeEmbedUrl(url);
    case 'vimeo':
      return getVimeoEmbedUrl(url);
    case 'google-slides':
      return getGoogleSlidesEmbedUrl(url);
    case 'google-docs':
      return getGoogleDocsEmbedUrl(url);
    case 'google-maps':
      return url;
    case 'codepen':
      return getCodePenEmbedUrl(url);
    case 'codesandbox':
      return getCodeSandboxEmbedUrl(url);
    case 'figma':
      return getFigmaEmbedUrl(url);
    case 'excalidraw':
      return url;
    case 'loom':
      return getLoomEmbedUrl(url);
    case 'spotify':
      return getSpotifyEmbedUrl(url);
    case 'canva':
      return getCanvaEmbedUrl(url);
    case 'notion':
    case 'miro':
    case 'speakerdeck':
      return url;
    default:
      return url;
  }
}

function getAspectRatio(type: EmbedType): string {
  switch (type) {
    case 'spotify':
      return '30%';
    default:
      return '56.25%';
  }
}

function getTypeLabel(type: EmbedType): string {
  const labels: Record<EmbedType, string> = {
    youtube: 'YouTube',
    vimeo: 'Vimeo',
    speakerdeck: 'SpeakerDeck',
    'google-slides': 'Google Slides',
    'google-docs': 'Google Docs',
    'google-maps': 'Google Maps',
    twitter: 'X / Twitter',
    codepen: 'CodePen',
    codesandbox: 'CodeSandbox',
    figma: 'Figma',
    excalidraw: 'Excalidraw',
    'github-gist': 'GitHub Gist',
    loom: 'Loom',
    spotify: 'Spotify',
    canva: 'Canva',
    notion: 'Notion',
    miro: 'Miro',
    generic: 'Link',
  };
  return labels[type];
}

export default function EmbedBlock({ url, caption, forceEmbed = false }: EmbedBlockProps) {
  const type = getEmbedType(url);

  // Non-iframe fallback (external link card) — but if forceEmbed, try iframe anyway
  if (!isIframeEmbeddable(type) && !forceEmbed) {
    return (
      <div className="my-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex items-center gap-3 p-4 transition-colors hover:border-cyan-500/50"
        >
          <span className="text-cyan-700">&gt;</span>
          <div className="min-w-0 flex-1">
            <span className="mb-0.5 block font-mono text-[10px] uppercase tracking-widest text-slate-600">
              {getTypeLabel(type)}
            </span>
            <span className="block truncate font-mono text-sm text-cyan-400 underline underline-offset-4">
              {url}
            </span>
          </div>
          <span className="shrink-0 text-slate-600">↗</span>
        </a>
        {caption && (
          <p className="mt-1 text-center font-mono text-xs text-slate-500">
            {caption}
          </p>
        )}
      </div>
    );
  }

  const embedUrl = getEmbedUrl(url, type);
  const aspectRatio = getAspectRatio(type);

  return (
    <div className="my-6">
      <div className="neon-border overflow-hidden rounded-lg">
        <div className="relative w-full" style={{ paddingTop: aspectRatio }}>
          <iframe
            src={embedUrl}
            className="absolute inset-0 h-full w-full"
            allowFullScreen
            loading="lazy"
            title={caption || `Embedded ${getTypeLabel(type)}`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      </div>
      {caption && (
        <p className="mt-2 text-center font-mono text-xs text-slate-500">
          {caption}
        </p>
      )}
    </div>
  );
}
