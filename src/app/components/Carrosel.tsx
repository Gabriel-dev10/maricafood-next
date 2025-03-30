"use client";

import { useState, useEffect } from "react";

interface CarrosselProps {
  imagens: string[];
  className?: string;
}

const Carrossel = ({ imagens, className = "" }: CarrosselProps) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    if (slideIndex < 0) {
      setSlideIndex(imagens.length - 1);
    } else if (slideIndex >= imagens.length) {
      setSlideIndex(0);
    }
  }, [slideIndex, imagens.length]);

  const moveSlide = (direction: number) => {
    setSlideIndex((prev) => prev + direction);
  };

  return (
    <div className={`relative w-full max-w-full h-[400px] mx-auto overflow-hidden rounded-2xl ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 30}%)` }}
      >
        {imagens.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`imgcarrosel-${index}`} 
            className="w-[750px] h-full object-cover mx-auto"
          />
        ))}
      </div>    

      <button
        onClick={() => moveSlide(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
      >
        ❮
      </button>

      <button
        onClick={() => moveSlide(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
      >
        ❯
      </button>
    </div>
  );
};

export default Carrossel;
