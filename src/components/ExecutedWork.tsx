'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { executedWork, ExecutedProject } from '@/data/executed';
import FullscreenGallery from './FullscreenGallery';

export default function ExecutedWork() {
  const [selectedImage, setSelectedImage] = useState<{ src?: string; title: string; category: string } | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});

  // Helper function to map format to grid span classes
  const getGridClasses = (format: string, index: number) => {
    // A simple deterministic layout pattern for a bento box look
    if (index === 0) return 'md:col-span-2 md:row-span-2'; // Large feature
    if (index === 3) return 'md:col-span-2 md:row-span-1'; // Wide banner
    if (format === 'portrait') return 'md:col-span-1 md:row-span-2'; // Tall portrait
    return 'md:col-span-1 md:row-span-1'; // Standard square/landscape
  };

  return (
    <section className="relative z-10 py-32 bg-transparent border-t border-[#1a1a1a]/10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4 text-[#1a1a1a]">
            Executed Work
          </h2>
          <p className="text-[#1a1a1a]/60 font-mono text-sm tracking-[0.3em] uppercase">
            The final deliverables
          </p>
        </div>

        {/* Tinted Background Wrapper for Bento Box */}
        <div className="bg-[#1a1a1a]/10 p-4 md:p-8 rounded-3xl">
          {/* Asymmetric Grid (Bento Box) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {executedWork.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative rounded-2xl overflow-hidden group shadow-lg bg-black/5 border border-white/20 ${getGridClasses(project.format, index)}`}
                onClick={(e) => {
                  // Only open fullscreen for images. Videos natively play in place.
                  if (project.type === 'image') {
                    setSelectedImage({ src: project.src, title: project.title, category: 'Executed Work' });
                  } else {
                    // Prevent double-toggling if they clicked the native controls directly (bottom 15% of video)
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickY = e.clientY - rect.top;
                    if (clickY > rect.height * 0.85) return; // Ignore clicks on the native controls area
                    
                    const videoEl = document.getElementById(`video-${project.id}`) as HTMLVideoElement;
                    if (videoEl) {
                      if (videoEl.paused) {
                        videoEl.play();
                      } else {
                        videoEl.pause();
                      }
                    }
                  }
                }}
              >
                {project.type === 'image' ? (
                  <>
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out cursor-pointer"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h4 className="text-white text-xl font-bold tracking-tight drop-shadow-md">
                        {project.title}
                      </h4>
                    </div>
                  </>
                ) : (
                  <>
                    <video
                      id={`video-${project.id}`}
                      src={`${project.src}#t=0.001`}
                      className="w-full h-full object-cover cursor-pointer"
                      loop
                      muted
                      playsInline
                      controls
                      preload="metadata"
                      onPlay={() => setPlayingVideos(prev => ({ ...prev, [project.id]: true }))}
                      onPause={() => setPlayingVideos(prev => ({ ...prev, [project.id]: false }))}
                    />
                    {/* Custom Play Overlay (fades out when native controls are used or video starts) */}
                    <div className={`absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20 transition-opacity duration-300 ${playingVideos[project.id] ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1a1a1a] shadow-xl">
                        <Play size={24} className="ml-1" />
                      </div>
                    </div>
                    {/* Video Title Overlay */}
                    <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h3 className="text-white font-bold text-xl tracking-tight drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reusing FullscreenGallery for executed images (mocking the project structure format) */}
      <FullscreenGallery 
        project={selectedImage as any} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
}
