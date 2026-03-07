'use client';

import { motion } from 'framer-motion';

const images = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  src: `https://picsum.photos/seed/${i + 100}/800/1000`, // Using Picsum for variety, or could use Unsplash specific IDs
  title: `Project ${i + 1}`,
  category: i % 3 === 0 ? 'Branding' : i % 2 === 0 ? 'Editorial' : 'Digital',
  // Randomizing grid spans for an "artistic" masonry feel
  span: i % 7 === 0 ? 'md:col-span-2 md:row-span-2' : i % 5 === 0 ? 'md:col-span-2' : 'md:col-span-1'
}));

export default function WorkGrid() {
  return (
    <section className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase">
            Selected <br /> Works
          </h2>
          <p className="text-neutral-500 mt-4 max-w-xl font-medium text-lg md:text-xl">
            A comprehensive archive of art direction, design, and digital experiences across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 10) * 0.05 }}
              className={`relative overflow-hidden group bg-neutral-900 rounded-lg ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-bold text-xl drop-shadow-lg">{img.title}</p>
                <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase mt-1">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
