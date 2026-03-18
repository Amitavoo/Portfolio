"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const FRAME_COUNT = 120; // Correct frame count based on the files

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const images = useRef<HTMLImageElement[]>([]);
  const currentFrameIndex = useRef<number>(1);

  useEffect(() => {
    // Preload images
    const loadImages = () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/sequence/ezgif-frame-${frameNumber}.png`;
        img.onload = () => {
          if (i === 1) {
            renderFrame(1);
          }
        };
        images.current.push(img);
      }
    };

    loadImages();
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || !images.current[index - 1]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images.current[index - 1];

    if (img.complete && img.naturalHeight !== 0) {
      // Set canvas size dynamically to fill the screen while maintaining aspect ratio
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;

      // Object-fit: cover calculation
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let renderWidth, renderHeight, offsetX, offsetY;
      
      if (canvasRatio > imgRatio) {
        renderWidth = canvas.width;
        renderHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - renderHeight) / 2;
      } else {
        renderWidth = canvas.height * imgRatio;
        renderHeight = canvas.height;
        offsetX = (canvas.width - renderWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      
      // Draw subtle overlay to darken background for text readability
      ctx.fillStyle = "rgba(10, 10, 10, 0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameIndex.current);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Find the frame index based on scroll progress (1 to 120)
      const frameIndex = Math.min(
        FRAME_COUNT,
        Math.max(1, Math.ceil(latest * FRAME_COUNT))
      );
      
      if (frameIndex !== currentFrameIndex.current) {
        currentFrameIndex.current = frameIndex;
        // Optimization: Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => renderFrame(frameIndex));
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-darkBg noise-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Adds Overlay gradients over the canvas for styling */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darkBg"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg/30 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
