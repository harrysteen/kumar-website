"use client";

import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Indigo IndoPak",
      subtitle: "Restaurant E-Commerce Platform",
      role: "Frontend / Fullstack Developer",
      link: "https://indigo2-seven.vercel.app/",
      displayUrl: "indigo2-seven.vercel.app",
      tech: ["Next.js", "Tailwind CSS", "Clover POS API", "Sanity CMS"],
      description: [
        "Developed a full-featured e-commerce platform for a premier restaurant, integrating the Clover POS API for real-time online ordering and secure payment processing.",
        "Implemented Sanity CMS so non-technical staff could update menus and seasonal promotions instantly, improving operational efficiency by 20%.",
        "Optimized SEO and site architecture, boosting organic search rankings and local customer engagement."
      ]
    },
    {
      title: "Evoque Impact",
      subtitle: "AI-First Product & Strategy Studio",
      role: "Frontend / Next.js Developer",
      link: "https://evoqueimpact.com",
      displayUrl: "evoqueimpact.com",
      tech: ["Next.js", "React.js", "JavaScript (ES6+)", "Tailwind CSS", "Vercel"],
      description: [
        "Developed a modern, responsive corporate website showcasing AI services, leadership, case studies, and global impact.",
        "Converted Figma designs into pixel-perfect, responsive pages and built reusable, modular React components.",
        "Optimized performance using Next.js image optimization and server-side rendering; deployed and maintained on Vercel."
      ]
    },
    {
      title: "TiE Silicon Valley",
      subtitle: "Nonprofit Organization Website",
      role: "Frontend Web Developer",
      link: "https://tiesv.ai",
      displayUrl: "tiesv.ai",
      tech: ["WordPress", "Elementor", "HTML5", "CSS3", "JavaScript", "Custom CSS"],
      description: [
        "Developed the official website for TiE Silicon Valley, a globally recognized nonprofit supporting entrepreneurs, innovators, and startups.",
        "Built responsive pages from provided designs and customized layouts using Elementor and custom CSS.",
        "Ensured a consistent experience across desktop, tablet, and mobile; optimized performance and SEO structure."
      ]
    },
    {
      title: "Kshatriya Community Website",
      subtitle: "US-Based Nonprofit Platform",
      role: "WordPress Developer",
      link: "https://revamp.thekshatriyas.org",
      displayUrl: "revamp.thekshatriyas.org",
      tech: ["WordPress", "Elementor", "PHP", "MySQL", "Auth Workflows"],
      description: [
        "Developed and maintained a community website for The Kshatriyas, a US-based nonprofit, enabling members to register, log in, and access exclusive content.",
        "Implemented a secure member login and authentication system with configured registration workflows using WordPress plugins.",
        "Managed member information securely, configured performance plugins, and ensured cross-browser compatibility."
      ]
    }
  ];

  return (
    <section id="portfolio" className="w-full py-24 bg-[#000000] relative z-20 border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#DCDCDC]/70">
              FEATURED WORK & CASE STUDIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            PROJECT EXPERIENCE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A0A0A0] max-w-2xl">
            Real production client applications shipped with modern frameworks, e-commerce integrations, and optimized web performance.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#0B0B0B] border border-[#222222] flex flex-col justify-between hover:border-[#383838] transition-all shadow-2xl group"
            >
              <div>
                {/* Card Header: Subtitle & Live Link */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    {project.role}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white hover:underline bg-[#161616] px-3 py-1 rounded-full border border-[#2B2B2B] transition-colors"
                    >
                      <span>{project.displayUrl}</span>
                      <ExternalLink className="w-3 h-3 text-emerald-400" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#888888] mb-6">
                  {project.subtitle}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#161616] border border-[#262626] text-[11px] font-mono text-[#DCDCDC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {project.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
