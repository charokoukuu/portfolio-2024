import type { Protopedia } from '@/lib/types/prototype';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassPanel from '@/components/ui/GlassPanel';
import SystemBadge from '@/components/ui/SystemBadge';
import Link from 'next/link';

interface ProductsSectionProps {
  products: Protopedia[];
}

function categorizeTag(
  tag: string | null
): { name: string; variant: 'cyan' | 'lime' | 'red' } | null {
  if (!tag) return null;
  const webTags = [
    'webApp',
    'React',
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
    'M5',
    'SDL',
    'Python',
    'Raspberry Pi',
    '電子工作',
  ];

  const isWeb = webTags.some((t) =>
    tag.toLowerCase().includes(t.toLowerCase())
  );
  const isHw = hwTags.some((t) => tag.toLowerCase().includes(t.toLowerCase()));

  if (isWeb && isHw) return { name: 'Hybrid', variant: 'red' };
  if (isWeb) return { name: 'Software', variant: 'cyan' };
  if (isHw) return { name: 'Hardware', variant: 'lime' };
  return null;
}

function addEllipsis(str: string, limit = 60): string {
  return str.length > limit ? str.substring(0, limit) + '...' : str;
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  const uniqueProducts = products
    .filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    )
    .sort((a, b) => b.releaseAt.localeCompare(a.releaseAt))
    .slice(0, 6);

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle system="DATABASE::PRODUCT_REGISTRY" title="Products" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uniqueProducts.map((product) => {
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
                  {/* Thumbnail */}
                  <div className="relative h-44 overflow-hidden">
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

                  {/* Content */}
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

        {uniqueProducts.length > 0 && (
          <div className="mt-8 text-center">
            <Link href="/products" className="neon-button inline-block">
              VIEW ALL PRODUCTS →
            </Link>
          </div>
        )}

        {products.length === 0 && (
          <div className="glass-panel p-8 text-center">
            <p className="font-mono text-sm text-slate-500">
              <span className="text-cyan-700">&gt;</span> CONNECTING TO
              PROTOPEDIA API...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
