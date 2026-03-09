'use client';

import { motion } from 'framer-motion';
import { awards } from '@/data/awards';

export default function Awards() {
  return (
    <section className="relative py-32 bg-[#1a1a1a] text-white">
      {/* Subtle Noise Overlay for texture consistency */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="awards-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.2 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#awards-noise)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-2">
            Accolades
          </h2>
          <div className="w-24 h-1 bg-white/20 mb-6"></div>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50">
            Industry Recognition
          </p>
        </div>

        {/* Awards List */}
        <div className="flex flex-col border-t border-white/10">
          {awards.map((award, index) => {
            
            const AwardContent = (
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full relative z-10">
                {/* Left: Year & Title */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 w-full md:w-1/2">
                  <span className="font-mono text-sm text-white/40 tracking-wider">
                    {award.year}
                  </span>
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:px-4 transition-all duration-500">
                      {award.title}
                    </h3>
                    {award.link && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white/50 -ml-2 group-hover:ml-0">
                        <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Right: Project, Category, Result */}
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-1/2 mt-6 md:mt-0 gap-4 md:gap-8">
                  <div className="flex flex-col">
                    <span className="text-lg font-medium text-white/90">
                      {award.project}
                    </span>
                    <span className="text-sm text-white/50">
                      {award.category}
                    </span>
                  </div>
                  
                  {/* Result Pill */}
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/20 bg-white/5 align-self-start md:align-self-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/80">
                      {award.result}
                    </span>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {award.link ? (
                  <a 
                    href={award.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-6 cursor-pointer -mx-4 md:-mx-6 block"
                  >
                    {AwardContent}
                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                  </a>
                ) : (
                  <div className="group relative flex py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-6 cursor-default -mx-4 md:-mx-6">
                    {AwardContent}
                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
