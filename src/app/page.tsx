import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amitava Mondal | AI Engineer & Architect",
  description: "AI engineer specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Agentic AI Systems.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-darkBg text-white selection:bg-neonBlue selection:text-black">
      {/* Cinematic Hero Section */}
      <div className="relative w-full h-[500vh]">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Main Content Sections */}
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      
    </main>
  );
}
