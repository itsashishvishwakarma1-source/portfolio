'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const wheelProjects = [
  { id: 1, title: 'Activation', src: '/projects/Activation/Swiggy-Makkhan-.jpg' },
  { id: 2, title: 'BQS Design', src: '/projects/BQS/Amul Macho_vol 5.jpg' },
  { id: 3, title: 'Billboard', src: '/projects/Billboard/Tanishq 2x1_day.jpg' },
  { id: 4, title: 'AI Render', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.29.33 PM.png' },
  { id: 5, title: 'Live Painting', src: '/projects/Activation/Live-Painting.jpg' },
  { id: 6, title: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.24.51 PM.png' },
  { id: 7, title: 'Print Ad', src: '/projects/Print Ad/1.jpg' },
  { id: 8, title: 'Billboard Creative', src: '/projects/Billboard/Surprise-.jpg' },
];

export default function OOHWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll of the container to spin the wheel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Rotate based on scroll progress. 1 full spin for the sequence.
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
                      transform: `translateZ(clamp(150px, 28vw, 450px))` 
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 w-full h-full group rounded-xl overflow-hidden border border-white/5 bg-[#1a1a1a]"
                    >
                      <img
                        src={project.src}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-0"
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
