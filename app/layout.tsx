import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScanlineOverlay from '@/components/layout/ScanlineOverlay';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'HINATA SAITO — Portfolio',
    template: '%s | HINATA SAITO',
  },
  description:
    '斎藤陽太のポートフォリオ。大阪工業大学大学院 ロボティクス＆デザイン工学研究科所属。Next.js, Vue.js, IoT, AI/MLの専門知識とプロダクト開発経験を紹介。',
  keywords:
    '斎藤陽太, WEBエンジニア, Next.js, Vue.js, Nest.js, IoT, AI, ポートフォリオ',
  openGraph: {
    title: 'HINATA SAITO — Portfolio',
    description:
      '斎藤陽太のポートフォリオ。Next.js, Vue.js, IoT, AI/MLの専門知識とプロダクト開発経験を紹介。',
    url: 'https://portfolio.run-ticket.com/',
    type: 'website',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-2024-f85ca.appspot.com/o/ogp.png?alt=media&token=a5700aa2-a409-4ee6-a969-61c5e4d64122',
        width: 1200,
        height: 630,
        alt: 'HINATA SAITO Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HINATA SAITO — Portfolio',
    description:
      '斎藤陽太のポートフォリオ。Next.js, Vue.js, IoT, AI/MLの専門知識とプロダクト開発経験を紹介。',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-2024-f85ca.appspot.com/o/ogp.png?alt=media&token=a5700aa2-a409-4ee6-a969-61c5e4d64122',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body className={`${jetbrains.variable} ${spaceMono.variable} font-mono`}>
        <ScanlineOverlay />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
