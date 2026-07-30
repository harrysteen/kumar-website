"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ProjectsSection({ isLightTheme = false }) {
  const [activeTab, setActiveTab] = useState(0);

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

  const nextProject = () => {
    setActiveTab((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveTab((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className={`w-full py-14 sm:py-24 relative z-20 transition-colors duration-500 ${
      isLightTheme ? "bg-[#FFFFFF] border-t border-gray-200" : "bg-[#000000] border-t border-[#1C1C1C]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        
        {/* Section Title Header */}
        <div className="flex flex-col mb-6 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-2 h-2 rounded-full ${isLightTheme ? "bg-black" : "bg-white"}`} />
            <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest ${
              isLightTheme ? "text-gray-500" : "text-[#DCDCDC]/70"
            }`}>
              FEATURED WORK & CASE STUDIES
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase ${
            isLightTheme ? "text-[#111827]" : "text-white"
          }`}>
            PROJECT EXPERIENCE
          </h2>
          <p className={`mt-2 sm:mt-4 text-sm sm:text-lg max-w-2xl hidden sm:block ${
            isLightTheme ? "text-gray-600" : "text-[#A0A0A0]"
          }`}>
            Real production client applications shipped with modern frameworks, e-commerce integrations, and optimized web performance.
          </p>
        </div>

        {/* MOBILE VIEW (< 768px): TABBED CAROUSEL WITH NO CLIPPED TEXT */}
        <div className="block md:hidden">
          
          {/* Mobile Project Selector Pills + Nav Buttons */}
          <div className="flex items-center justify-between gap-2 mb-4">
            {/* Scrollable Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 flex-1 pr-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {projects.map((proj, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === idx
                      ? isLightTheme
                        ? "bg-[#111827] text-white shadow-md scale-105"
                        : "bg-white text-black shadow-lg scale-105"
                      : isLightTheme
                        ? "bg-gray-100 text-gray-700 border border-gray-200"
                        : "bg-[#141414] text-[#A0A0A0] border border-[#222222]"
                  }`}
                >
                  {proj.title}
                </button>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={prevProject}
                className={`p-1.5 rounded-full border transition-all active:scale-95 cursor-pointer ${
                  isLightTheme ? "bg-gray-100 border-gray-300 text-black hover:border-black" : "bg-[#141414] border-[#262626] text-white hover:border-white"
                }`}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextProject}
                className={`p-1.5 rounded-full border transition-all active:scale-95 cursor-pointer ${
                  isLightTheme ? "bg-gray-100 border-gray-300 text-black hover:border-black" : "bg-[#141414] border-[#262626] text-white hover:border-white"
                }`}
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Mobile Project Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className={`w-full p-5 rounded-3xl border shadow-xl flex flex-col justify-between ${
                isLightTheme ? "bg-white border-gray-200 text-gray-900" : "bg-[#0B0B0B] border-[#222222] text-white"
              }`}
            >
              <div>
                {/* Header: Role & Live Link */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isLightTheme ? "text-gray-700" : "text-[#DCDCDC]"
                  }`}>
                    {projects[activeTab].role}
                  </span>
                  {projects[activeTab].link && (
                    <a
                      href={projects[activeTab].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full border max-w-full ${
                        isLightTheme ? "bg-gray-100 border-gray-200 text-gray-800 hover:text-black" : "bg-[#161616] border-[#2B2B2B] text-white/80 hover:text-white"
                      }`}
                    >
                      <span className="truncate max-w-[140px]">{projects[activeTab].displayUrl}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className={`text-xl font-extrabold mb-0.5 ${isLightTheme ? "text-[#111827]" : "text-white"}`}>
                  {projects[activeTab].title}
                </h3>
                <p className={`text-xs font-medium mb-4 ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>
                  {projects[activeTab].subtitle}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {projects[activeTab].tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${
                        isLightTheme ? "bg-gray-100 border-gray-200 text-gray-700" : "bg-[#161616] border-[#262626] text-[#DCDCDC]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5">
                  {projects[activeTab].description.map((bullet, bIdx) => (
                    <li key={bIdx} className={`flex items-start gap-2 text-xs leading-relaxed ${
                      isLightTheme ? "text-gray-600" : "text-[#AAAAAA]"
                    }`}>
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isLightTheme ? "text-black" : "text-white"}`} />
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Counter / Quick Indicators */}
              <div className={`flex items-center justify-between mt-5 pt-3.5 border-t text-[10px] font-mono ${
                isLightTheme ? "border-gray-200 text-gray-500" : "border-white/5 text-[#888888]"
              }`}>
                <span>PROJECT {activeTab + 1} OF {projects.length}</span>
                <div className="flex items-center gap-1.5">
                  {projects.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveTab(dotIdx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activeTab === dotIdx
                          ? isLightTheme ? "w-5 bg-black" : "w-5 bg-white"
                          : isLightTheme ? "w-1.5 bg-gray-300" : "w-1.5 bg-[#262626]"
                      }`}
                      aria-label={`Select project ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* DESKTOP VIEW (≥ 768px): CLASSIC 2-COLUMN GRID */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all shadow-xl group ${
                isLightTheme
                  ? "bg-white border-gray-200 hover:border-gray-400"
                  : "bg-[#0B0B0B] border-[#222222] hover:border-[#444444]"
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    isLightTheme ? "text-gray-700" : "text-[#DCDCDC]"
                  }`}>
                    {project.role}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border transition-colors ${
                        isLightTheme
                          ? "bg-gray-100 border-gray-200 text-gray-800 hover:text-black hover:underline"
                          : "bg-[#161616] border-[#2B2B2B] text-white/80 hover:text-white hover:underline"
                      }`}
                    >
                      <span>{project.displayUrl}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className={`text-3xl font-extrabold mb-1 transition-colors ${
                  isLightTheme ? "text-[#111827] group-hover:text-black" : "text-white group-hover:text-[#DDDDDD]"
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm font-medium mb-6 ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>
                  {project.subtitle}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-2.5 py-1 rounded-md border text-[11px] font-mono ${
                        isLightTheme ? "bg-gray-100 border-gray-200 text-gray-700" : "bg-[#161616] border-[#262626] text-[#DCDCDC]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {project.description.map((bullet, bIdx) => (
                    <li key={bIdx} className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                      isLightTheme ? "text-gray-600" : "text-[#AAAAAA]"
                    }`}>
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isLightTheme ? "text-black" : "text-white"}`} />
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

