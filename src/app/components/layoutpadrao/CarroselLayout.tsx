"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imagens = [
  { id: 1, src: "/carroselimg/imgRest1.png", alt: "Sopa Especial" },
  { id: 2, src: "/carroselimg/imgRest2.png", alt: "Petisco Variado" },
  { id: 3, src: "/carroselimg/imgRest3.png", alt: "Vinho Tinto" },
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
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover rounded-lg h-[200px] md:h-[400px]"  
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
