'use client';

import Slider from '@/ui-components/Slider';

export default function Hero() {
  const heroSlides = [
    {
      content: (
        <section className="flex flex-col-reverse md:flex-row items-center md:h-[500px] bg-primary text-white">
          {/* Text Section */}
          <div className="w-full h-full md:w-2/5 flex flex-col justify-center items-center md:items-start p-6 md:p-10 text-center md:text-left">
            <h1 className="text-[24px] md:text-[40px] font-semibold leading-tight">
              Eco-Friendly Packaging for Everyone and Everything You Need.
            </h1>
            <p className="text-[14px] md:text-[16px]">
              Your One-Stop Packaging Solution. Fast and Hassle-Free Deliveries. Trusted by 10,000+ customers.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-primary font-semibold rounded-md hover:bg-green-100">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-3/5 h-[300px] md:h-[500px]">
            <img src="images/hero-1.webp" alt="Slide 1" className="w-full h-full object-cover" />
          </div>
        </section>
      ),
    },
    {
      content: (
        <section className="flex flex-col-reverse md:flex-row items-center h-full md:h-[500px] text-white">
          {/* Image Section */}
          <div className="w-full md:w-3/5 h-[300px] md:h-[500px]">
            <img src="images/hero-2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/5 md:h-full h-[257px] flex flex-col justify-center items-center md:items-start p-6 md:p-10 bg-primary text-center md:text-left">
            <h1 className="text-[24px] md:text-[40px] font-semibold leading-tight">
              Sustainable and Affordable Bulk Packaging.
            </h1>
            <p className="text-[14px] md:text-[16px]">
              We offer sustainable, premium-quality options at wholesale prices. Choose from our extensive range and
              give your brand the boost it deserves!
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-primary font-semibold rounded-md hover:bg-green-100">
              Shop Now
            </button>
          </div>
        </section>
      ),
    },
  ];

  return (
    <div className="h-auto">
      <Slider slides={heroSlides} loop={true} effect="fade" speed={800} />
    </div>
  );
}
