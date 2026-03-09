'use client';

import { useRef, useState } from 'react';
import { videos } from '@/data/projects';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth * 0.6; // Scroll by roughly the width of one card
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-24 bg-transparent">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-8 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#1a1a1a]">
            How would it look in real
          </h2>
          <p className="text-[#1a1a1a]/60 font-mono text-sm tracking-[0.3em] uppercase mt-2">
            Bringing concepts to life
          </p>
        </div>
        
        {/* Navigation Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-[#1a1a1a]/20 hover:bg-[#1a1a1a]/10 transition-colors text-[#1a1a1a]"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-[#1a1a1a]/20 hover:bg-[#1a1a1a]/10 transition-colors text-[#1a1a1a]"
            aria-label="Next video"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery (Native Swipe & Snap) */}
      <div 
        ref={carouselRef}
        className="flex gap-8 px-4 md:px-8 overflow-x-auto snap-x snap-mandatory pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="relative w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-video flex-shrink-0 snap-center group overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-black/5 cursor-pointer"
            onClick={(e) => {
              // Prevent double-toggling if they clicked the native controls directly (bottom 15% of video)
              const rect = e.currentTarget.getBoundingClientRect();
              const clickY = e.clientY - rect.top;
              if (clickY > rect.height * 0.85) return; // Ignore clicks on the native controls area
              
              const videoEl = document.getElementById(`carousel-video-${video.id}`) as HTMLVideoElement;
              if (videoEl) {
                if (videoEl.paused) {
                  videoEl.play();
                } else {
                  videoEl.pause();
                }
              }
            }}
          >
            {/* 
              Video Element with #t=0.001 
              This forces the browser to fetch the first frame as a thumbnail poster 
            */}
            <video
              id={`carousel-video-${video.id}`}
              src={`${video.src}#t=0.001`}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              controls
              preload="metadata"
              onPlay={() => setPlayingVideos(prev => ({ ...prev, [video.id]: true }))}
              onPause={() => setPlayingVideos(prev => ({ ...prev, [video.id]: false }))}
            />
            
            {/* Custom Play Overlay (fades out when native controls are used or video starts) */}
            <div className={`absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20 transition-opacity duration-300 ${playingVideos[video.id] ? 'opacity-0' : 'group-hover:opacity-0'}`}>
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1a1a1a] shadow-xl">
                <Play size={24} className="ml-1" />
              </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <h3 className="text-white font-bold text-xl tracking-tight drop-shadow-md">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons (Mobile) */}
      <div className="flex justify-center md:hidden gap-4 mt-4">
        <button 
          onClick={() => scroll('left')}
          className="p-3 rounded-full border border-[#1a1a1a]/20 hover:bg-[#1a1a1a]/10 transition-colors text-[#1a1a1a]"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="p-3 rounded-full border border-[#1a1a1a]/20 hover:bg-[#1a1a1a]/10 transition-colors text-[#1a1a1a]"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
