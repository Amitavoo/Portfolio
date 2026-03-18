"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";

const openSource = [
  {
    org: "Keras Hub",
    ecosystem: "Google Ecosystem",
    role: "Open Source Contributor",
    desc: "Debugged complex transformer model configurations, specifically enhancing Qwen integration for downstream researchers.",
  },
  {
    org: "Metaflow",
    ecosystem: "Netflix ML Infrastructure",
    role: "Open Source Contributor",
    desc: "Fixed core ML pipeline orchestration issues seamlessly improving state-machine behavior during distributed compute tasks.",
  },
  {
    org: "ControlNet",
    ecosystem: "Generative AI Research",
    role: "Open Source Contributor",
    desc: "Authored logic bridging edge-detection layers, tangibly improving multi-cond inference workflows and image generation latency.",
  }
];

const leadership = [
  { role: "Team Lead", org: "Institution's Innovation Council" },
  { role: "UI/UX Designer", org: "NextGenX AI" },
  { role: "Google Gemini Ambassador", org: "Google Developers" },
];

export default function Experience() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-darkBg text-white noise-bg" id="experience">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full text-center"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 md:w-16 bg-neonBlue/50"></div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-neonBlue font-semibold">Global Impact</h2>
            <div className="h-[2px] w-8 md:w-16 bg-neonBlue/50"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold glow-text leading-tight">
            Contributions & Leadership
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 w-full">
          {/* Open Source Timeline */}
          <div>
            <h4 className="text-2xl font-bold mb-10 text-white border-b border-white/10 pb-4 inline-block">Global Open Source</h4>
            <div className="border-l border-white/10 ml-4 space-y-12">
              {openSource.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative pl-8 md:pl-12 group"
                >
                  <div className="absolute top-1 -left-[9px] w-[17px] h-[17px] rounded-full bg-darkBg border-2 border-neonBlue group-hover:bg-neonBlue transition-colors shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                  
                  <div className="text-xs uppercase tracking-widest text-orangeRed font-bold mb-2">
                    {item.ecosystem}
                  </div>
                  <h5 className="text-2xl font-bold text-white mb-1">{item.org}</h5>
                  <h6 className="text-gray-400 font-medium mb-4">{item.role}</h6>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership List */}
          <div>
            <h4 className="text-2xl font-bold mb-10 text-white border-b border-white/10 pb-4 inline-block">Leadership & Architecture</h4>
            <div className="space-y-6">
              {leadership.map((item, idx) => (
                <motion.a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:border-orangeRed/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <h5 className="text-xl font-bold text-white group-hover:text-orangeRed transition-colors mb-1">
                      <span>{item.role} — {item.org}</span>
                    </h5>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-orangeRed group-hover:border-orangeRed/30 transition-all font-bold">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Glowing Accent */}
            <div className="mt-16 relative h-40 w-full rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent overflow-hidden flex items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-neonBlue/10 blur-[50px]"></div>
              <p className="relative z-10 text-gray-300 font-light leading-relaxed text-sm md:text-base">
                Building products is more than just code.<br />
                It&apos;s about crafting <span className="text-white font-medium glow-text">intelligent workflows</span> that effortlessly enhance human potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
