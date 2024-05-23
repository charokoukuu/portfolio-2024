import { H1 } from '@/components/global/H1';
import { ProductCard } from '@/components/product/ProductCard';
import { getProtopedia } from '@/lib/connect/protopedia';
import { addEllipsis, categorizeTag } from '@/lib/utils/util';
const Products: React.FC = async () => {
  const data = await getProtopedia();

  const uniqueData = data
    .filter(
      (item, index, self) => index === self.findIndex((t) => t.id === item.id)
    )
    .sort((a, b) => b.releaseAt.localeCompare(a.releaseAt));

  return (
    <>
      <H1>Products</H1>
      <div className="mx-auto grid w-[90%] justify-center gap-x-2.5 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] sm:gap-y-3">
        {uniqueData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.prototypeNm}
            thumbnail={item.image1}
            description={addEllipsis(item.summary)}
            category={categorizeTag(item.tags ?? '')}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
