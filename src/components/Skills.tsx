"use client";

import { motion } from "framer-motion";

const skillsMap = [
  { category: "AI & ML", tags: ["LLMs", "Transformers", "RAG", "Agentic AI"], color: "border-neonBlue text-neonBlue bg-neonBlue/10" },
  { category: "Data Architecture", tags: ["Pandas", "NumPy", "EDA", "Scikit-learn"], color: "border-pink-500 text-pink-400 bg-pink-500/10" },
  { category: "Infrastructure", tags: ["Pinecone", "Supabase", "Vector Databases", "MLOps"], color: "border-orangeRed text-orangeRed bg-orangeRed/10" },
  { category: "Web Engineering", tags: ["React", "Next.js 14", "TailwindCSS", "GSAP / Framer"], color: "border-purple-500 text-purple-400 bg-purple-500/10" },
  { category: "Core Languages", tags: ["Python", "C++", "Java", "SQL", "TypeScript"], color: "border-green-500 text-green-400 bg-green-500/10" },
];

export default function Skills() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-darkBg text-white noise-bg overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 items-center justify-between">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-white"></div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-white font-semibold">Technical Arsenal</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Engineered for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-orangeRed glow-text">Performance</span>
          </h3>
          <p className="text-gray-400 font-light leading-relaxed">
            I don&apos;t just write scripts; I architect distributed, intelligent systems. My stack merges rigorous data science frameworks with cinematic frontend technologies to deliver uncompromised AI UX.
          </p>
        </motion.div>

        <div className="w-full md:w-[60%] flex flex-col gap-6 md:gap-8 relative z-10">
          {skillsMap.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row md:items-center gap-4 border-b border-white/5 pb-6 last:border-0"
            >
              <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold w-40 min-w-[160px]">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skillGroup.tags.map((tag, tagIdx) => (
                  <motion.span
                    key={tagIdx}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-default transition-all duration-300 hover:shadow-[0_0_20px_currentColor] ${skillGroup.color}`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
