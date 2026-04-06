import GlassPanel from '@/components/ui/GlassPanel';
import GlitchText from '@/components/ui/GlitchText';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
          {/* Profile Image */}
          <div className="relative shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-lg border border-cyan-700/40 sm:h-48 sm:w-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://avatars.githubusercontent.com/u/35647163?v=4"
                alt="Saito Hinata"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Corner decorations */}
            <div className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-cyan-500/60" />
            <div className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-cyan-500/60" />
            <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-cyan-500/60" />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-cyan-500/60" />
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <p className="mb-2 font-mono text-xs tracking-[0.4em] text-cyan-700">
              SUBJECT PROFILE
            </p>
            <GlitchText
              text="SAITO HINATA"
              as="h1"
              className="mb-4 text-3xl font-bold tracking-wider text-cyan-50 sm:text-4xl"
            />
            <p className="mb-6 font-mono text-sm leading-relaxed text-slate-400">
              LINEヤフー株式会社
              <br />
              ソフトウェアエンジニア
            </p>

            {/* Crime Coefficient Display */}
            {/* <GlassPanel className="inline-block max-w-md p-4">
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">CRIME COEFFICIENT:</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-lime-500 to-lime-400"
                        style={{ width: '42%' }}
                      />
                    </div>
                    <span className="neon-text-lime font-bold">42.3</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">STATUS:</span>
                  <span className="neon-text-lime">
                    CLEAR — NOT A TARGET FOR ENFORCEMENT
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">HUE:</span>
                  <span className="text-cyan-400">PURE WHITE</span>
                </div>
              </div>
            </GlassPanel> */}

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-4 sm:justify-start">
              <a
                href="https://github.com/charokoukuu"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button px-4 py-2 text-[10px]"
              >
                GITHUB
              </a>
              <a
                href="https://protopedia.net/prototyper/charokoukuu"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button px-4 py-2 text-[10px]"
              >
                PROTOPEDIA
              </a>
              <a
                href="https://beavers-hive.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button px-4 py-2 text-[10px]"
              >
                BEAVER&apos;S HIVE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
