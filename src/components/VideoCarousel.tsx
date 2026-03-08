'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { videos } from '@/data/projects';
import { Play } from 'lucide-react';

export default function VideoCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Section Header */}
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#1a1a1a]">
            Visuals to Real
          </h2>
          <p className="text-[#1a1a1a]/60 font-mono text-sm tracking-[0.3em] uppercase mt-2">
            Bringing concepts to life
          </p>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <motion.div style={{ x }} className="flex gap-8 px-4 md:px-8 w-[400vw] md:w-[250vw]">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-video flex-shrink-0 group overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-black/5"
            >
              {/* Video Element */}
              <video
                src={video.src}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                controls
                preload="metadata"
              />
              
              {/* Custom Play Overlay (fades out when native controls are used or video starts) */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1a1a1a] shadow-xl">
                  <Play size={24} className="ml-1" />
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-xl tracking-tight drop-shadow-md">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
