import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative bg-[#121212] py-32 px-6 overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          {/* Left Column: Big Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none mb-8">
              Let's create <br />
              <span className="text-gray-500 hover:text-white transition-colors duration-500">together.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-md leading-relaxed">

            </p>
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col flex-wrap justify-center gap-12 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md">

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="p-4 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-1">Phone</p>
                <a href="tel:+1234567890" className="text-2xl md:text-3xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                  +91 (7304) 776-139
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="p-4 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-1">Email</p>
                <a href="mailto:hello@example.com" className="text-2xl md:text-3xl font-semibold text-white group-hover:text-gray-300 transition-colors break-all">
                  itsashishvishwaakrma@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 rounded-full bg-white/10">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-1">Location</p>
                <p className="text-2xl md:text-3xl font-semibold text-white">
                  Mumbai, India
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
