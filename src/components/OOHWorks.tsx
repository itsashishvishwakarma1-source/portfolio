'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const wheelProjects = [
  { id: 1, title: 'Neon Takeover', src: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=2574&auto=format&fit=crop' },
  { id: 2, title: 'Metro Campaign', src: 'https://images.unsplash.com/photo-1606144884260-239b0362cde2?q=80&w=2670&auto=format&fit=crop' },
  { id: 3, title: 'Bus Shelter Ads', src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop' },
  { id: 4, title: 'Urban Projections', src: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2670&auto=format&fit=crop' },
  { id: 5, title: 'Billboard Series', src: 'https://images.unsplash.com/photo-1473042904451-00171c69419d?q=80&w=2692&auto=format&fit=crop' },
  { id: 6, title: 'Street Level', src: 'https://images.unsplash.com/photo-1523368735282-3e284a6c84c1?q=80&w=2670&auto=format&fit=crop' },
  { id: 7, title: 'Transit Wraps', src: 'https://images.unsplash.com/photo-1510926569107-1602bd07f3cc?q=80&w=2669&auto=format&fit=crop' },
  { id: 8, title: 'Digital Boards', src: 'https://images.unsplash.com/photo-1563968743333-044cef800547?q=80&w=2675&auto=format&fit=crop' },
];

export default function OOHWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll of the container to spin the wheel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Rotate based on scroll progress. 1 full spin for the sequence.
  // Using -360 ensures exactly one complete revolution per full scroll of the container.
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#FFD500]">
      
      {/* Sticky container that stays fixed while the section wrapper scrolls 400vh */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start pt-16 md:pt-24 overflow-hidden" style={{ perspective: '1600px' }}>
        
        {/* Background Graphic / Title */}
        <div className="w-full text-center z-0 pointer-events-none mb-10 md:mb-16">
          <h2 className="text-[12vw] md:text-[8vw] font-black tracking-tighter text-black/10 mx-auto uppercase leading-none select-none">
            Out of Home
          </h2>
          <p className="text-black/60 text-lg md:text-xl mt-4 max-w-lg mx-auto font-mono uppercase tracking-widest px-6 shadow-black">
            Scroll to view works
          </p>
        </div>

        {/* Hovering Shadow underneath the assembly */}
        <div className="absolute top-[65%] md:top-[75%] left-1/2 -translate-x-1/2 w-[60vw] md:w-[35vw] h-[8vh] bg-black/40 blur-[40px] rounded-[100%] pointer-events-none z-0" />

        {/* The 3D Wheel Assembly */}
        <div className="relative w-[50vw] h-[35vh] md:w-[18vw] md:h-[40vh] z-10 mx-auto mt-8 md:mt-12" style={{ transformStyle: 'preserve-3d' }}>
          
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ 
              rotateY, 
              transformStyle: 'preserve-3d' 
            }}
          >
            {wheelProjects.map((project, index) => {
              // Calculate angles for the circular arrangement
              const angle = (360 / wheelProjects.length) * index;
              
              return (
                <div 
                  key={project.id}
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    // Rotate each card into position around the Y axis
                    transform: `rotateY(${angle}deg)`, 
                    transformStyle: 'preserve-3d' 
                  }}
                >
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ 
                      // Push each card outward perfectly from the center to form a ring. 
                      // clamp restricts it so it never breaks layout boundaries on smaller screens.
                      transform: `translateZ(clamp(150px, 28vw, 450px))` 
                    }}
                  >
                    {/* The actual visible card */}
                    <motion.div
                      className="absolute inset-0 w-full h-full group rounded-xl overflow-hidden border border-white/5 bg-[#1a1a1a]"
                    >
                      <img
                        src={project.src}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-0 group-hover:grayscale-0"
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
