'use client';

import Slider from '@/ui-components/Slider';

export default function Hero() {
  const heroSlides = [
    {
      content: (
        <section className="flex flex-col items-start md:flex-row h-[500px] text-white md:items-center">
          <div className="flex flex-col justify-center items-center md:w-2/5 space-y-4 h-[100%] bg-primary p-8">
            <h1 className="text-[40px] font-semi-bold">Eco-Friendly Packaging for everyone and everything you need.</h1>
            <p className="text-[15px]">
              Your One-Stop Packaging Solution. Fast and Hassle-Free Deliveries. Trusted by 10,000+ customers.
            </p>
            <button className="px-6 py-2 bg-white text-primary font-semibold rounded-md hover:bg-green-100">
              Shop Now
            </button>
          </div>
          <div className="md:w-3/5 h-[100%]">
            <img src="images/hero-1.webp" alt="Slide 1" className="h-[100%] w-[100%] object-cover" />
          </div>
        </section>
      ),
    },
    {
      content: (
        <section className="flex flex-col items-start md:flex-row h-[500px] text-white md:items-center">
          <div className="md:w-3/5 h-[100%]">
            <img src="images/hero-2.jpg" alt="Slide 2" className="h-[100%] w-[100%] object-cover" />
          </div>
          <div className="flex flex-col justify-center items-center md:w-2/5 space-y-4 h-[100%] bg-primary p-8">
            <h1 className="text-[40px] font-semi-bold">Sustainable and Affordable Bulk Packaging.</h1>
            <p className="text-[15px]">
              We offer sustainable, premium-quality options at wholesale prices. Choose from our extensive range and
              give your brand the boost it deserves!
            </p>
            <button className="px-6 py-2 bg-white text-primary font-semibold rounded-md hover:bg-green-100">
              Shop Now
            </button>
          </div>
        </section>
      ),
    },
  ];

  return (
    <div className="h-[500px]">
      <Slider slides={heroSlides} loop={true} effect="fade" speed={800} />
    </div>
  );
}
