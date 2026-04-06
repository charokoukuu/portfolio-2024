import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* System Status */}
          <div className="font-mono text-xs text-slate-500">
            <p className="mb-1">
              <span className="text-cyan-700">&gt;</span> SYSTEM STATUS:{' '}
              <span className="text-lime-600 font-bold">NOMINAL</span>
            </p>
            <p>
              <span className="text-cyan-700">&gt;</span> UPTIME:{' '}
              <span className="text-slate-600">
                {year}.04.06 — ACTIVE
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/charokoukuu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-slate-500 transition-colors hover:text-cyan-600"
            >
              GITHUB
            </a>
            <a
              href="https://protopedia.net/prototyper/charokoukuu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-slate-500 transition-colors hover:text-cyan-600"
            >
              PROTOPEDIA
            </a>
            <a
              href="https://beavers-hive.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-slate-500 transition-colors hover:text-cyan-600"
            >
              BEAVER&apos;S HIVE
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-slate-600">
            &copy; {year} SAITO HINATA
          </p>
        </div>
      </div>
    </footer>
  );
}
