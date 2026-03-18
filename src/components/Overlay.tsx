"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Amitava Mondal — right side, gradually fades out
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.20, 0.35],
    [1, 1, 0]
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 h-[500vh] w-full pointer-events-none"
    >
      <div className="sticky top-0 h-screen w-full p-6">

        {/* Amitava Mondal — Right Side */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 text-right z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neonBlue drop-shadow-[0_0_20px_#00f0ff]">
            Amitava Mondal
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/70 drop-shadow-md">
            AI Engineer | Generative AI | Agentic Systems
          </p>
        </motion.div>

        {/* Quote — Left Side */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute left-6 md:left-16 bottom-[12%] md:bottom-[18%] max-w-md z-10"
        >
          <div className="relative flex items-center">
            {/* Glowing accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neonBlue via-neonBlue/60 to-transparent shadow-[0_0_12px_#00f0ff]" />
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed pl-5">
              Turning <span className="text-neonBlue font-medium">neural networks</span> into 
              <span className="text-orangeRed font-medium"> real-world intelligence</span>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
