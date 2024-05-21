/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'upload.wikimedia.org',
      'protopedia.net',
      'cdn.qiita.com',
      'encrypted-tbn0.gstatic.com',
      'tech-lab.sios.jp',
      'cdn.iconscout.com',
      'w7.pngwing.com',
    ],
  },
};

export default nextConfig;
