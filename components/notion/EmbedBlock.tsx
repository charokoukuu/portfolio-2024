interface EmbedBlockProps {
  url: string;
  caption?: string;
}

function getEmbedType(url: string): 'youtube' | 'speakerdeck' | 'google-slides' | 'generic' {
  if (/youtube\.com|youtu\.be/.test(url)) return 'youtube';
  if (/speakerdeck\.com/.test(url)) return 'speakerdeck';
  if (/docs\.google\.com\/presentation/.test(url)) return 'google-slides';
  return 'generic';
}

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function getGoogleSlidesEmbedUrl(url: string): string {
  if (url.includes('/embed')) return url;
  return url.replace(/\/pub.*$/, '/embed?start=false&loop=false&delayms=3000');
}

export default function EmbedBlock({ url, caption }: EmbedBlockProps) {
  const type = getEmbedType(url);

  if (type === 'generic') {
    return (
      <div className="my-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex items-center gap-3 p-4 transition-colors hover:border-cyan-500/50"
        >
          <span className="text-cyan-700">&gt;</span>
          <span className="font-mono text-sm text-cyan-400 underline underline-offset-4">
            {url}
          </span>
          <span className="ml-auto text-slate-600">↗</span>
        </a>
        {caption && (
          <p className="mt-1 text-center font-mono text-xs text-slate-500">
            {caption}
          </p>
        )}
      </div>
    );
  }

  let embedUrl = url;
  if (type === 'youtube') embedUrl = getYouTubeEmbedUrl(url);
  if (type === 'google-slides') embedUrl = getGoogleSlidesEmbedUrl(url);

  return (
    <div className="my-6">
      <div className="neon-border overflow-hidden rounded-lg">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={embedUrl}
            className="absolute inset-0 h-full w-full"
            allowFullScreen
            loading="lazy"
            title={caption || 'Embedded content'}
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
