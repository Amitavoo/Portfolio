"use client";

import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, ArrowRight } from "lucide-react";
import { LINKS } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-darkBg text-white noise-bg overflow-hidden" id="contact">
      {/* Dynamic BG elements */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-orangeRed/10 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-neonBlue/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Let’s build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-white to-orangeRed glow-text">future of AI</span> together.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s deploying autonomous agents, scaling LLMs, or crafting beautiful intelligent interfaces — I&apos;m ready for the next challenge.
          </p>

          <a 
            href={LINKS.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent overflow-hidden rounded-full border border-neonBlue text-neonBlue font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            {/* Button Hover Glow */}
            <div className="absolute inset-0 bg-neonBlue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
              Get in Touch <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <div className="mt-20 flex gap-8 justify-center border-t border-white/10 pt-10 w-full max-w-md mx-auto">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 border border-transparent hover:border-white/20">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neonBlue transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 border border-transparent hover:border-neonBlue/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neonBlue transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 border border-transparent hover:border-neonBlue/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full">
        <p className="text-xs text-gray-600 tracking-widest uppercase">
          © {new Date().getFullYear()} Amitava Mondal. All rights reserved.
        </p>
      </div>
    </section>
  );
}
