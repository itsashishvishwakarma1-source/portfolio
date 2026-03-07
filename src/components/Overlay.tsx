'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% to 10% (100% opacity), then fades to 30% by 15% and stays there
  const opacity1 = useTransform(progress, [0, 0.1, 0.15], [1, 1, 0.3]);

  // Section 2: Fades in at 30%, peaks at 35%, stays until 45%, fades rapidly to 10% by 55%
  const opacity2 = useTransform(progress, [0.3, 0.35, 0.45, 0.55], [0, 1, 1, 0.1]);

  // Section 3: Fades in only as the animation is about to end (80%-100%), and stays solid thereafter
  const opacity3 = useTransform(progress, [0.8, 0.85, 1], [0, 1, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6 w-full h-screen">

      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1 }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          Ashish Vishwakarma.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] tracking-wide">
          Art Director.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2 }}
        className="absolute inset-x-0 top-[80%] -translate-y-1/2 flex flex-col items-start px-8 md:px-16"
      >
        <h2 className="text-4xl md:text-6xl max-w-2xl font-semibold tracking-tight leading-tight text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          I believe the best idea is...
        </h2>
        <div className="w-24 h-1 bg-white mt-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3 }}
        className="absolute inset-x-0 top-[80%] -translate-y-1/2 flex flex-col items-end px-8 md:px-16 text-right"
      >
        <h2 className="text-4xl md:text-6xl max-w-2xl font-semibold tracking-tight leading-tight text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          always the next one.
        </h2>
        <div className="w-24 h-1 bg-white mt-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </motion.div>

    </div>
  );
}
