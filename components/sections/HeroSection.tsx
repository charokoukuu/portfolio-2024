import GlassPanel from '@/components/ui/GlassPanel';
import GlitchText from '@/components/ui/GlitchText';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
          {/* Profile Image */}
          <div className="relative shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-lg border border-cyan-400/80 sm:h-48 sm:w-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="profile.JPG"
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
              className="mb-4 text-3xl font-bold tracking-wider text-cyan-900 sm:text-4xl"
            />
            <div className="relative rounded-sm border border-cyan-500/50 bg-cyan-950/5 p-6 sm:p-8 backdrop-blur-sm mb-6">
              {/* HUD Corner Accents */}
              <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400" />

              {/* Cyberpunk Header Badge Overlay */}
              <div className="absolute -top-3.5 left-6 border border-cyan-500/50 bg-[#eff2f5] px-3 py-0.5 font-mono text-xs font-bold tracking-widest text-cyan-600 sm:text-sm">
                [ SYS_PROFILE::SUMMARY ]
              </div>

              <div className="absolute -bottom-2.5 right-6 hidden border border-cyan-500/30 bg-[#eff2f5] px-2 text-[10px] tracking-widest text-cyan-500 sm:block">
                SYS.LOG // {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </div>

              <div className="space-y-4 text-left font-mono text-[13px] leading-relaxed text-slate-700 sm:text-sm sm:leading-loose">
                <p>
                  2026年新卒でLINEヤフー株式会社にソフトウェアエンジニアとして入社。同年、大阪工業大学大学院 ロボティクス＆デザイン工学研究科 博士前期課程 修了。
                </p>
                <p>
                  クライアントからサーバーまで一貫したWebサービス開発が得意です。技術スタックは Next.js / Vue.js に加え、Node.js (NestJS, Express)、MongoDB, PostgreSQL など。最近は gRPC や GraphQL を用いたBFF開発や、クリーンアーキテクチャベースのマイクロサービス設計にも注力しています。
                </p>
                <p>
                  フリーランスとしての受託開発やPjMの経験も持ち、企画や要件定義から実装・納品まで幅広く担当できます。チーム開発やハッカソンへの参加も好きで、複数の技術系イベントでの受賞歴があります。
                </p>
              </div>
            </div>

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
