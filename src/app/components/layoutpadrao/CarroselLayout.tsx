"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imagens = [
  { id: 1, src: "/imgRest1.png", alt: "Sopa Especial" },
  { id: 2, src: "/imgRest2.png", alt: "Petisco Variado" },
  { id: 3, src: "/imgRest3.png", alt: "Vinho Tinto" },
];

const Carrossel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0} 
        slidesPerView={1} 
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2700 }}
        loop={true}
        className="w-full h-full" 
      >
        {imagens.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(min-width: 768px) 800px, 100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
