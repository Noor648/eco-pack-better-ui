import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Category from '@/components/CategoryCard';
import { Section } from '@/components/Section';
import { ProductGrid } from '@/components/ProductGrid';

const categories = [
  { name: 'Customized Printed Sticker', image: '/images/category-1.webp' },
  { name: 'Restaurant & Cafes', image: '/images/category-2.webp' },
  { name: 'Birchwood Cutlery', image: '/images/category-3.webp' },
  { name: 'Bakery and Cake', image: '/images/category-4.webp' },
  { name: 'Salad & Rice Bowls', image: '/images/category-1.webp' },
  { name: 'Paper Bags', image: '/images/category-2.webp' },
  { name: 'Ecommerce Boxes', image: '/images/category-3.webp' },
  { name: 'Kraft Bowls', image: '/images/category-4.webp' },
  { name: 'Coffee/Tea Cafe', image: '/images/category-1.webp' },
];

const products = [
  {
    id: 1,
    image: 'images/product-1.webp',
    name: 'Corrugated Flat Box - 12.5" x 10.5" x 2" Inches',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
  {
    id: 2,
    image: 'images/product-2.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 3,
    image: 'images/product-3.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: false,
  },
  {
    id: 4,
    image: 'images/product-4.webp',
    name: 'Corrugated Frame Box',
    price: 'Rs 50.00',
    originalPrice: 'Rs 58.00',
    isOnSale: true,
  },
  {
    id: 5,
    image: 'images/product-5.webp',
    name: 'Corrugated Flat Box',
    price: 'Rs 56.00',
    originalPrice: 'Rs 70.00',
    isOnSale: true,
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Category Section */}
      <section className="py-10">
        <h2 className="text-4xl font-semi-bold text-center text-gray-600 mb-9">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-[1440px] px-4 mx-auto">
          {categories.map((category, index) => (
            <Category key={index} imageSrc={category.image} name={category.name} />
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <Section title="New Arrivals" link="/new-arrivals">
        <ProductGrid products={products.slice(0, 5)} />
      </Section>

      {/* Best Sellers Section */}
      <Section title="Best Sellers" link="/best-sellers">
        <ProductGrid products={products.slice(0, 5)} />
      </Section>

      {/* Save on Bundles Section */}
      <Section title="Save on Bundles" link="/bundles">
        <ProductGrid products={products.slice(0, 5)} />
        <ProductGrid products={products.slice(0, 5)} />
      </Section>
    </div>
  );
}
