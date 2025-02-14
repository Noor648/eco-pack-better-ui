import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Category from '@/components/CategoryCard';
import { Section } from '@/components/Section';
import { ProductGrid } from '@/components/ProductGrid';
import { categories, products } from '../../data';
import Footer from '@/components/Footer';
import Features from '@/components/Feature';
import { featuresData } from '@/Constants/FeatureConstants';
import Newsletter from '@/components/NewsLetter';

export default function Home() {
  return (
    <div className="items-center">
      <Navbar />
      <Hero />
      <div className="max-w-[1440px] mx-auto">
        {/* Category Section */}
        <section className="py-10 ">
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
      <Features features={featuresData} />;
      <Newsletter />;
      <Footer />
    </div>
  );
}
