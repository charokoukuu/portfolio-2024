import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Card, CardBody, ChakraProvider, Text } from '@chakra-ui/react';
import Appbar from '@/components/global/Appbar';
import Breadcrumbs from '@/components/global/Breadcrumbs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gray-200`}>
        <ChakraProvider>
          <Appbar />
          <Breadcrumbs className="my-3 ml-20 hidden text-gray-400 sm:flex" />
          <Card className="m-auto mt-1 w-[98vw]">
            <CardBody>{children}</CardBody>
          </Card>
        </ChakraProvider>
      </body>
    </html>
  );
}
