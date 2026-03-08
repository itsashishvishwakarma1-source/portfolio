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
    <section className="relative z-10 py-32">
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

        {/* Categories Loop */}
        <div className="flex flex-col gap-32">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-12">
              
              {/* Category Title */}
              <div className="border-b border-[#1a1a1a]/20 pb-4">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a]">
                  {category}
                </h3>
              </div>

              {/* Category Grid */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {items.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedProject(project)}
                    className="break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer group shadow-lg bg-black/5"
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
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
          ))}
        </div>
      </div>

      <FullscreenGallery 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
