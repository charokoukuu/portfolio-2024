'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/50 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-lg tracking-widest"
        >
          <span className="text-cyan-700 transition-colors group-hover:text-cyan-600">
            HINATA
          </span>
          <span className="text-slate-600">//</span>
          <span className="text-slate-700 transition-colors group-hover:text-cyan-900">
            SAITO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 font-mono text-xs tracking-widest text-slate-600 transition-colors hover:text-cyan-700"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 rounded bg-cyan-500/0 transition-colors hover:bg-cyan-500/5" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle Navigation"
          id="mobile-menu-toggle"
        >
          <span
            className={`h-0.5 w-5 bg-cyan-400 transition-all ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-5 bg-cyan-400 transition-all ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-5 bg-cyan-400 transition-all ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`overflow-hidden border-t border-cyan-300 bg-white/95 backdrop-blur-lg transition-all duration-300 md:hidden ${isOpen ? 'max-h-80' : 'max-h-0 border-t-0'
          }`}
      >
        <nav className="flex flex-col px-4 py-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-cyan-300/50 py-3 font-mono text-sm tracking-widest text-slate-700 transition-colors hover:text-cyan-700"
            >
              <span className="mr-2 text-cyan-700">&gt;</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
