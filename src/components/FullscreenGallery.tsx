'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface FullscreenGalleryProps {
  project: {
    src: string;
    title: string;
    category: string;
    type?: 'image' | 'video';
  } | null;
  onClose: () => void;
}

export default function FullscreenGallery({ project, onClose }: FullscreenGalleryProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={onClose}
          >
            <X size={40} strokeWidth={1.5} />
          </motion.button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full h-full flex flex-col items-center justify-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-6xl h-[70vh] md:h-[80vh]">
              {project.type === 'video' ? (
                <video
                  src={project.src}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>
            
            <div className="text-center">
              <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter uppercase">
                {project.title}
              </h2>
              <p className="text-yellow-400 font-mono text-sm tracking-[0.3em] uppercase mt-2">
                {project.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
