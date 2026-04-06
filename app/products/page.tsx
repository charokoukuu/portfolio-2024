import { Protopedia } from '@/lib/types/prototype';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import SystemBadge from '@/components/ui/SystemBadge';
import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Products',
  description: 'プロダクト一覧 — SAITO HINATA Portfolio',
};

function categorizeTag(
  tag: string | null
): { name: string; variant: 'cyan' | 'lime' | 'red' } | null {
  if (!tag) return null;
  const webTags = [
    'webApp',
    'React',
    '機械学習',
    'MQTT',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express',
    'Firebase',
    'Vue.js',
  ];
  const hwTags = [
    'arduino',
    'IoT',
    'DCモーター',
    'ステッピングモーター',
    '電子工作',
    'M5',
    'SDL',
    'Python',
    'Raspberry Pi',
  ];

  const isWeb = webTags.some((t) =>
    tag.toLowerCase().includes(t.toLowerCase())
  );
  const isHw = hwTags.some((t) =>
    tag.toLowerCase().includes(t.toLowerCase())
  );

  if (isWeb && isHw) return { name: 'Hybrid', variant: 'red' };
  if (isWeb) return { name: 'Software', variant: 'cyan' };
  if (isHw) return { name: 'Hardware', variant: 'lime' };
  return null;
}

function addEllipsis(str: string, limit = 64): string {
  return str.length > limit ? str.substring(0, limit) + '...' : str;
}

async function getProtopedia(): Promise<Protopedia[]> {
  const endpoint = process.env.NEXT_PUBLIC_PROTOPEDIA_API_ENDPOINT;
  if (!endpoint || endpoint === 'https://protopedia.net/api/...') return [];

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      console.warn('Protopedia API returned non-JSON response:', contentType);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch Protopedia products:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const data = await getProtopedia();

  const products = data
    .filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    )
    .sort((a, b) => b.releaseAt.localeCompare(a.releaseAt));

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          system="DATABASE::PRODUCT_REGISTRY"
          title="Products"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const category = categorizeTag(product.tags);
            return (
              <a
                key={product.id}
                href={`https://protopedia.net/prototype/${product.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <GlassPanel className="h-full overflow-hidden transition-transform group-hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image1}
                      alt={product.prototypeNm}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/5 to-transparent" />
                    {category && (
                      <div className="absolute bottom-2 right-2">
                        <SystemBadge
                          label={category.name}
                          variant={category.variant}
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-mono text-sm font-bold text-cyan-900">
                      {product.prototypeNm}
                    </h3>
                    <p className="font-mono text-xs leading-relaxed text-slate-500">
                      {addEllipsis(product.summary)}
                    </p>
                  </div>
                </GlassPanel>
              </a>
            );
          })}
        </div>

        {products.length === 0 && (
          <div className="glass-panel p-12 text-center">
            <p className="font-mono text-sm text-slate-500">
              <span className="text-cyan-700">&gt;</span> CONNECTING TO
              PROTOPEDIA API...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
