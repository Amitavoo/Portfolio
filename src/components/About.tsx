"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-darkBg z-20 noise-bg" id="about">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-neonBlue opacity-5 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-neonBlue"></div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-neonBlue font-semibold">About Me</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white glow-text max-w-2xl leading-tight">
            Visionary AI Architect & Product Engineer
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full text-lg text-gray-400 font-light leading-relaxed">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p>
              <strong className="text-white">Amitava Mondal</strong> is a specialized AI engineer focused on the intersection of advanced machine learning models and high-performance engineering. I bridge the gap between theoretical ML research and real-world, scalable AI systems.
            </p>
            <p>
              My expertise lies in training, optimizing, and deploying <span className="text-orangeRed font-medium">Large Language Models (LLMs)</span>, building robust <span className="text-neonBlue font-medium">Retrieval-Augmented Generation (RAG)</span> architectures, and architecting <span className="text-white font-medium">Agentic AI Workflows</span> that enable autonomous action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-neonBlue/30 transition-all duration-300"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-neonBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <h4 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">Education</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-neonBlue font-medium">B.Tech CSE (Artificial Intelligence)</h5>
                <p className="text-sm mt-1">IILM University</p>
              </div>
              <div>
                <h5 className="text-white font-medium">Academic Excellence</h5>
                <p className="text-sm mt-1 bg-white/10 inline-block px-3 py-1 rounded-full border border-white/20">SGPA: 8.52</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
