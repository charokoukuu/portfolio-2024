import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import InternSection from '@/components/sections/InternSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AwardsSection from '@/components/sections/AwardsSection';
import { getSkills } from '@/lib/notion/skills';
import { getInternships } from '@/lib/notion/internships';
import { getAwards } from '@/lib/notion/awards';
import { Protopedia } from '@/lib/types/prototype';

export const revalidate = 3600;

async function getProtopediaProducts(): Promise<Protopedia[]> {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_PROTOPEDIA_API_ENDPOINT ?? '',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) return [];
    return response.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const [skills, internships, products, awards] = await Promise.all([
    getSkills(),
    getInternships(),
    getProtopediaProducts(),
    getAwards(),
  ]);

  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <SkillsSection skills={skills} />
      <div className="section-divider" />
      <InternSection internships={internships} />
      <div className="section-divider" />
      <ProductsSection products={products} />
      <div className="section-divider" />
      <AwardsSection awards={awards} />
    </>
  );
}
