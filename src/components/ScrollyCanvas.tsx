'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import Overlay from '@/components/Overlay';

const FRAME_COUNT = 120; // Number of images in sequence

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const requestRef = useRef<number>(null);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Pad single/double-digit numbers with leading zeros up to 3 digits like "frame_000..."
      const idx = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${idx}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          // Draw first frame immediately
          requestAnimationFrame(() => renderFrame(0, loadedImages));
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Update canvas on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Map progress 0-1 to frame index 0-119
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(() => {
      renderFrame(frameIndex, images);
    });
  });

  const renderFrame = (index: number, imgArray: HTMLImageElement[]) => {
    if (!canvasRef.current || !imgArray[index] || !imgArray[index].complete) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle object-fit: cover natively on canvas
    const img = imgArray[index];
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Keep canvas resolution synced to window size for Retina crispness
  useEffect(() => {
    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      
      // Re-render current frame after resize
      const currentScroll = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(currentScroll * FRAME_COUNT)
      );
      if (images.length > 0) renderFrame(frameIndex, images);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // initial setup
    
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Overlay gradient to help blend frames with background */}
        <div className="absolute inset-0 bg-black/30 w-full h-full pointer-events-none" />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
