'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects, Project } from '@/data/projects';
import FullscreenGallery from './FullscreenGallery';

export default function CategorizedGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Group projects by category
  const categories = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <section className="relative z-10 py-24 bg-transparent border-t border-[#1a1a1a]/10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Gallery Header */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-[#1a1a1a]">
            Selected Works
          </h2>
          <p className="text-[#1a1a1a]/60 font-mono text-sm tracking-[0.3em] uppercase">
            A curated archive of creative discourse
          </p>
        </div>
      </div>

      {/* Categories Loop */}
      <div className="flex flex-col gap-24">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="flex flex-col">
            
            {/* Category Title */}
            <div className="container mx-auto px-4 md:px-8 mb-8">
              <div className="border-b border-[#1a1a1a]/20 pb-4 flex items-end justify-between">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a]">
                  {category}
                </h3>
                <span className="text-sm font-mono text-[#1a1a1a]/50">
                  {items.length} PROJECTS
                </span>
              </div>
            </div>

            {/* Tinted Background Wrapper for Horizontal Scroll */}
            <div className="bg-[#1a1a1a]/10 py-12">
              {/* Horizontal Scroll Container */}
              <div 
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-8 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {items.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedProject(project)}
                    className="relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[30vw] aspect-[4/5] snap-center rounded-xl overflow-hidden cursor-pointer group shadow-lg bg-white/20 border border-white/30"
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h4 className="text-white text-lg font-bold tracking-tight">
                        {project.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>

      <FullscreenGallery 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
