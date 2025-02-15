'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type SliderProps = {
  slides: {
    content: React.ReactNode;
  }[];
  loop?: boolean;
  effect?: 'slide' | 'fade';
  speed?: number; // Transition speed
};

export default function Slider({ slides, loop = true, effect = 'fade', speed = 1000 }: SliderProps) {
  useEffect(() => {
    import('swiper').then((SwiperCore) => {
      SwiperCore.default.use([Navigation, EffectFade]);
    });
  }, []);

  return (
    <div className="relative h-full w-full">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        effect={effect}
        loop={loop}
        speed={speed}
        slidesPerView={1}
        className="relative h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide.content}</SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="w-full items-right absolute bottom mt-[-20px] text-black right-5 flex justify-end gap-3 z-10">
        <button className="custom-prev bg-white px-3 py-3 rounded-full shadow hover:scale-105">
          <MdChevronLeft size={20} />
        </button>
        <button className="custom-next bg-white px-3 py-3 rounded-full shadow hover:scale-105">
          <MdChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
