'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Editorial Design',
    src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Brand Identity',
    src: 'https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Digital Experience',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Creative Direction',
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Motion Graphics',
    src: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop',
  }
];

export default function Carousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#2A0005]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Section Header */}
        <div className="absolute top-20 left-6 md:left-12 z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
            Visual Gallery
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-medium">
            A horizontal journey through aesthetics.
          </p>
        </div>

        {/* Carousel Rail */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 mt-20">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="group relative h-[50vh] min-w-[70vw] md:h-[60vh] md:min-w-[45vw] overflow-hidden rounded-2xl bg-black/5 shadow-xl border-2 border-white/50"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${slide.src})` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-semibold text-white tracking-tight drop-shadow-md group-hover:text-red-200 transition-colors duration-300">
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
