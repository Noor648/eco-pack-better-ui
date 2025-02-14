'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { useEffect } from 'react';

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
      <div className="w-full items-right absolute bottom-5 right-5 flex justify-end gap-3 z-10">
        <button className="custom-prev bg-white p-4 rounded-full text-green-500 shadow">{'<'}</button>
        <button className="custom-next bg-white p-4 rounded-full text-green-500 shadow">{'>'}</button>
      </div>
    </div>
  );
}
