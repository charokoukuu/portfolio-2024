import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Card, CardBody, ChakraProvider, Text } from '@chakra-ui/react';
import Appbar from '@/components/global/Appbar';
import Breadcrumbs from '@/components/global/Breadcrumbs';
import { Footer } from '@/components/global/Footer';
import { ParticleSystem } from '@/components/global/ParticleSystem';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '斎藤陽太のポートフォリオ',
  description:
    '斎藤陽太のポートフォリオ。Next.js、Vue.js、Nest.js、PostgreSQL、gRPC、GraphQLの専門知識を紹介。Pixiv、チームラボ、Skyでのインターンシップとプロジェクト経験も掲載。',
  keywords:
    '斎藤陽太, WEBエンジニア, Next.js, Vue.js, Nest.js, PostgreSQL, gRPC, GraphQL, ポートフォリオ, インターンシップ, Pixiv, チームラボ, Sky, ハッカソン受賞',
  openGraph: {
    title: '斎藤陽太 - WEBエンジニア ポートフォリオ',
    description:
      '斎藤陽太のポートフォリオ。Next.js、Vue.js、Nest.js、PostgreSQL、gRPC、GraphQLの専門知識を紹介。Pixiv、チームラボ、Skyでのインターンシップとプロジェクト経験も掲載。',
    url: 'https://portfolio-2024-f4c09.web.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '斎藤陽太 - WEBエンジニア ポートフォリオ',
    description:
      '斎藤陽太のポートフォリオ。Next.js、Vue.js、Nest.js、PostgreSQL、gRPC、GraphQLの専門知識を紹介。Pixiv、チームラボ、Skyでのインターンシップとプロジェクト経験も掲載。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body className={`${inter.className} bg-gray-200`}>
        <ChakraProvider>
          <Appbar />
          <Breadcrumbs className="my-3 ml-20 hidden text-gray-400 sm:flex" />
          <Card className="m-auto mb-3 mt-1 w-[98vw] sm:mt-3">
            <ParticleSystem />
            <CardBody className="rounded-lg bg-gray-50">{children}</CardBody>
          </Card>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
