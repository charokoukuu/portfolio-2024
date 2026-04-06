export default function HexagonLoader() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Hexagon Spinner */}
      <div className="relative h-20 w-20">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full animate-spin"
          style={{ animationDuration: '3s' }}
        >
          <polygon
            points="50 5, 93 25, 93 75, 50 95, 7 75, 7 25"
            fill="none"
            stroke="rgba(34, 211, 238, 0.3)"
            strokeWidth="1.5"
          />
          <polygon
            points="50 5, 93 25, 93 75, 50 95, 7 75, 7 25"
            fill="none"
            stroke="rgba(34, 211, 238, 0.8)"
            strokeWidth="1.5"
            strokeDasharray="280"
            strokeDashoffset="200"
            className="animate-pulse-neon"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 animate-pulse-neon rounded-full bg-cyan-400" />
        </div>
      </div>

      {/* Loading Text */}
      <p className="animate-flicker font-mono text-xs tracking-[0.3em] text-cyan-600">
        ACCESSING SIBYL SYSTEM...
      </p>
    </div>
  );
}
