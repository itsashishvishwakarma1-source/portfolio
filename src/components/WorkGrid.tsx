'use client';

import { motion } from 'framer-motion';

const categorizedWorks = [
  {
    category: "Billboard & OOH",
    images: [
      { src: "/projects/Billboard/Billord-.jpg", title: "Billboard Display" },
      { src: "/projects/Billboard/Tanishq 2x1_day.jpg", title: "Tanishq Campaign" },
      { src: "/projects/Billboard/Surprise-.jpg", title: "Creative Surprise" },
      { src: "/projects/Billboard/Screenshot 2026-03-08 at 3.39.47 PM.png", title: "Outreach Campaign" },
      { src: "/projects/Billboard/Screenshot 2026-03-08 at 3.40.15 PM.png", title: "Scale Visualization" },
    ]
  },
  {
    category: "AI Renders",
    images: [
      { src: "/projects/AI Renders/Screenshot 2026-03-08 at 3.29.33 PM.png", title: "Conceptual AI Art" },
      { src: "/projects/AI Renders/Screenshot 2026-03-08 at 3.29.47 PM.png", title: "Visual Synthesis" },
      { src: "/projects/AI Renders/Screenshot 2026-03-08 at 3.30.03 PM.png", title: "Digital Exploration" },
      { src: "/projects/AI Renders/Screenshot 2026-03-08 at 3.46.28 PM.png", title: "Generative Design" },
    ]
  },
  {
    category: "Activation & BQS",
    images: [
      { src: "/projects/Activation/Live-Painting.jpg", title: "Live Event Painting" },
      { src: "/projects/Activation/Look-Walkers.jpg", title: "Brand Activation" },
      { src: "/projects/Activation/Swiggy-Makkhan-.jpg", title: "Swiggy Campaign" },
      { src: "/projects/BQS/Amul Macho_vol 5.jpg", title: "Amul Macho BQS" },
      { src: "/projects/BQS/Screenshot 2026-03-08 at 3.45.03 PM.png", title: "Transit Shelter" },
    ]
  },
  {
    category: "Print & Installation",
    images: [
      { src: "/projects/Print Ad/1.jpg", title: "Print Layout 01" },
      { src: "/projects/Print Ad/girl fight02 2.jpg", title: "Visual Narrative" },
      { src: "/projects/Print Ad/Newspaper copy.jpg", title: "Newspaper Layout" },
      { src: "/projects/Installation/Screenshot 2026-03-08 at 3.24.51 PM.png", title: "Spatial Design" },
      { src: "/projects/Installation/Screenshot 2026-03-08 at 3.35.35 PM.png", title: "Exhibition Element" },
    ]
  },
  {
    category: "Story Boards",
    images: [
      { src: "/projects/Story Boards/Screenshot 2026-03-08 at 3.34.40 PM.png", title: "Campaign Storyboard" },
    ]
  }
];

export default function WorkGrid() {
  return (
    <section className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-4">
            Selected <br /> Works
          </h2>
          <p className="text-neutral-500 max-w-xl font-medium text-lg md:text-xl">
            A curated archive of brand experiences, spatial designs, and digital narratives.
          </p>
        </div>

        {categorizedWorks.map((section, sectionIdx) => (
          <div key={section.category} className="mb-24">
            <div className="flex items-center space-x-4 mb-12">
              <span className="h-px flex-1 bg-neutral-800"></span>
              <h3 className="text-neutral-400 font-mono text-sm tracking-[0.3em] uppercase whitespace-nowrap">
                {section.category}
              </h3>
              <span className="h-px flex-1 bg-neutral-800"></span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
              {section.images.map((img, index) => {
                // Randomizing grid spans for an "artistic" masonry feel
                const isWide = (index + sectionIdx) % 5 === 0;
                const isTall = (index + sectionIdx) % 7 === 0;
                const spanClass = isWide && isTall ? 'md:col-span-2 md:row-span-2' : isWide ? 'md:col-span-2' : isTall ? 'md:row-span-2' : '';
                
                return (
                  <motion.div
                    key={`${section.category}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: (index % 10) * 0.05 }}
                    className={`relative overflow-hidden group bg-neutral-900 rounded-lg ${spanClass}`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-white font-bold text-xl drop-shadow-lg">{img.title}</p>
                      <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase mt-1">{section.category}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
