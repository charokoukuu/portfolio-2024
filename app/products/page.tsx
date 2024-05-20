import { getProtopedia } from '@/lib/client';
import { Protopedia } from '../types/Prototype.type';
import { ProductCard } from '@/components/product/ProductCard';

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
    <div className="text-center">
      {uniqueData.map((item) => (
        <ProductCard
          key={item.id}
          name={item.prototypeNm}
          thumbnail={item.image1}
          description={item.summary}
          category={'WEBアプリ'}
        />
      ))}
    </div>
  );
};

export default Products;
