import Category from '@/components/CategoryCard';
import { categories } from '../../../data';

const ProductPage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-[1440px] px-4 mx-auto py-10">
      {categories.map((category, index) => (
        <Category key={index} imageSrc={category.image} name={category.name} />
      ))}
      {categories.map((category, index) => (
        <Category key={index} imageSrc={category.image} name={category.name} />
      ))}
    </div>
  );
};

export default ProductPage;
