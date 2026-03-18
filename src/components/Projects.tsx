"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { LINKS } from "@/lib/constants";

interface Project {
  title: string;
  tags: string[];
  description: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Retrieval-Augmented Generation (RAG) System",
    tags: ["Pinecone", "Gemini LLM", "Google Drive API"],
    description: "Built a full document parsing and semantic search pipeline that ingests Google Drive data and integrates with Gemini LLM for high-accuracy contextual answers.",
    github: "#"
  },
  {
    title: "Agentic AI Customer Support System",
    tags: ["Autonomous Agents", "Gmail Trigger", "Vector DB"],
    description: "Fully autonomous AI workflow: triggered by incoming Gmails, classifies intent, retrieves related context, and automatically drafts or responds with correct resolution.",
    github: "#"
  },
  {
    title: "Disease Prediction System",
    tags: ["Machine Learning", "Scikit", "Feature DB"],
    description: "End-to-end ML pipeline with 87% accuracy using advanced feature engineering and model parameter optimization algorithms.",
    github: "#"
  },
  {
    title: "Collaborative Filtering Recommendation Engine",
    tags: ["Data Science", "Similarity Matrix", "Python"],
    description: "Highly scalable user-based similarity matrix algorithm providing ultra-personalized content recommendations efficiently.",
    github: "#"
  },
  {
    title: "Dynamic Pricing Model",
    tags: ["Regression", "Demand Forecasting", "Econometrics"],
    description: "Predictive algorithmic pricing utilizing regression models for real-time demand forecasting and profit optimization.",
    github: "#"
  },
  {
    title: "Spotify Analytics Tool",
    tags: ["API Integration", "Data Structuring"],
    description: "Complex ETL pipeline that extracts, structures, and visualizes deep audio metadata and listening habits from the Spotify API over time.",
    github: "#"
  },
  {
    title: "AnimeRewards Web Experience",
    tags: ["React", "GSAP", "Scroll UX"],
    description: "Award-winning scroll-based storytelling interface featuring heavy GSAP micro-animations and physics-based fluid UI.",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-darkBg z-20 noise-bg" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-orangeRed"></div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-orangeRed font-semibold">Engineering Portfolio</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">
              Systems Built for Scale
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm">From generative AI architectures and regression forecasting to 60fps cinematic web apps.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card flex flex-col h-full rounded-2xl p-6 md:p-8 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.3)] transition-all duration-500 hover:border-neonBlue/40 cursor-default"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neonBlue group-hover:bg-neonBlue/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-neonBlue transition-colors">{project.title}</h4>
              <p className="text-gray-400 font-light flex-grow mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex gap-4 mt-auto border-t border-white/10 pt-6">
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 transition-colors border border-white/10 hover:border-white/30" aria-label="Github link">
                  <Github size={20} />
                </a>
                <a href={LINKS.githubRepos} target="_blank" rel="noopener noreferrer" className="flex-grow flex items-center justify-center gap-2 py-3 rounded-full bg-neonBlue/10 text-neonBlue font-medium hover:bg-neonBlue hover:text-black transition-colors border border-neonBlue/30 hover:border-transparent">
                  View Demo <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
