import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Ethereal E-Commerce',
    category: 'WebGL, Next.js',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  },
  {
    title: 'Aura Dashboard',
    category: 'React, Tailwind, Framer Motion',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Quantum Fintech',
    category: 'TypeScript, Three.js',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop',
  },
  {
    title: 'Nexus Platform',
    category: 'Fullstack, Design System',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            A curated collection of my most recent projects, combining scalable engineering with award-winning design aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] aspect-[4/3] flex flex-col justify-end p-8"
            >
              {/* Background Image Setup */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-80" />

              <div className="relative z-10 flex flex-col gap-2 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <p className="text-sm font-medium tracking-widest text-[#a3a3a3] uppercase">
                  {project.category}
                </p>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors pointer-events-auto">
                      <Github size={18} className="text-white" />
                    </button>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors pointer-events-auto">
                      <ExternalLink size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
