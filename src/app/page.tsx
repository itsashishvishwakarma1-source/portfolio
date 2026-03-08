import ScrollyCanvas from '@/components/ScrollyCanvas';
import Contact from '@/components/Contact';
import CategorizedGallery from '@/components/CategorizedGallery';
import ClientMarquee from '@/components/ClientMarquee';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-black/10">
      
      {/* Scrollytelling Sequence */}
      <div className="relative">
        <ScrollyCanvas />
      </div>

      {/* Categorized Work Gallery */}
      <CategorizedGallery />

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
