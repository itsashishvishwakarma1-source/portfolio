import ScrollyCanvas from '@/components/ScrollyCanvas';
import Contact from '@/components/Contact';
import OOHWorks from '@/components/OOHWorks';
import WorkGrid from '@/components/WorkGrid';
import ClientMarquee from '@/components/ClientMarquee';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/20">
      
      {/* Scrollytelling Sequence */}
      <div className="relative">
        <ScrollyCanvas />
      </div>

      {/* Out of Home Highlights */}
      <OOHWorks />

      {/* Selected Works Grid */}
      <WorkGrid />

      {/* Client Marquee */}
      <ClientMarquee />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-[#121212] border-t border-white/10 py-12 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ashish Vishwakarma. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
