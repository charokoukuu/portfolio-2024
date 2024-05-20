import { Section } from '@/components/global/Section';
import { ProductCard } from '@/components/product/ProductCard';
import { getProtopedia } from '@/lib/connect/protopedia';
import { addEllipsis } from '@/lib/utils/util';

export const dynamic = 'force-static';
const Products: React.FC = async () => {
  const data = await getProtopedia();

  const uniqueData = data
    .filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    )
    .sort((a, b) => b.releaseAt.localeCompare(a.releaseAt));

  console.log(uniqueData);
  return (
    <>
      <Section>開発実績</Section>
      <div className="mx-auto grid w-[90%] justify-center gap-x-2.5 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] sm:gap-y-3">
        {uniqueData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.prototypeNm}
            thumbnail={item.image1}
            description={addEllipsis(item.summary)}
            category={'WEBアプリ'}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
