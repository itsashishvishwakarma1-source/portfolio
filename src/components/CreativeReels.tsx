'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { projects, Project } from '@/data/projects';
import FullscreenGallery from './FullscreenGallery';

export default function CreativeReels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Split projects into two halves for left and right reels
  const half = Math.ceil(projects.length / 2);
  const leftProjects = projects.slice(0, half);
  const rightProjects = projects.slice(half);

  // Left reel moves down (slower)
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  // Right reel moves up (opposite direction)
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[200vh] bg-black overflow-hidden py-32"
    >
      {/* Background Text */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[20vw] font-black text-white/[0.03] tracking-tighter uppercase select-none leading-none">
          Creative <br /> Showcase
        </h2>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex justify-between gap-8 md:gap-24">
        
        {/* Left Reel */}
        <motion.div 
          style={{ y: leftY }}
          className="flex flex-col gap-8 md:gap-16 w-1/2 md:w-[400px]"
        >
          {leftProjects.map((project) => (
            <ReelItem 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </motion.div>

        {/* Right Reel */}
        <motion.div 
          style={{ y: rightY }}
          className="flex flex-col gap-8 md:gap-16 w-1/2 md:w-[400px] mt-[20vh]"
        >
          {rightProjects.map((project) => (
            <ReelItem 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </motion.div>
      </div>

      {/* Central Guide Message */}
      <div className="sticky bottom-12 w-full text-center pointer-events-none z-20">
        <p className="text-white/40 font-mono text-xs tracking-[0.4em] uppercase">
          Spin to browse • Click to view
        </p>
      </div>

      <FullscreenGallery 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

function ReelItem({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative aspect-[3/4] w-full bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer group border border-white/5"
      onClick={onClick}
    >
      <Image
        src={project.src}
        alt={project.title}
        fill
        className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
        <span className="text-yellow-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-2">
          {project.category}
        </span>
        <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-tight">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}
