"use client";

import { motion } from "framer-motion";
import { Award, Code2, CheckCircle2, Server, Globe } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    { number: "2+", label: "Years Experience", desc: "Shipping production websites end-to-end" },
    { number: "20+", label: "Websites Built", desc: "Client & corporate web applications" },
    { number: "50+", label: "Domains Managed", desc: "DNS, SSL, hosting & infrastructure" },
    { number: "POS", label: "Clover API", desc: "Real-time e-commerce POS integrations" }
  ];

  const skillCategories = [
    {
      title: "Frontend Core",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      skills: ["React.js", "Next.js 15", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "CMS & Backend",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      skills: ["MERN Stack (MongoDB, Express, Node)", "WordPress", "Elementor", "Sanity CMS", "PHP", "MySQL"]
    },
    {
      title: "DevOps & Tools",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      skills: ["Git", "GitHub", "Vercel", "Clover POS API", "DNS & SSL", "Hosting & Backups"]
    }
  ];

  return (
    <section id="about" className="w-full py-24 bg-[#050505] border-t border-[#1F1F1F] relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#DCDCDC]/70">
              BACKGROUND & SKILLS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            ABOUT KUMAR RAJU
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A0A0A0] max-w-3xl leading-relaxed">
            Frontend & Fullstack Developer with 2+ years of experience shipping real client websites end to end. Specializing in modern React/Next.js architectures, custom CMS builds, and seamless e-commerce POS integrations.
          </p>
        </div>

        {/* 1. Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#222222] flex flex-col justify-between hover:border-[#333333] transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-black font-mono text-white mb-2">
                {item.number}
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-1">{item.label}</div>
                <div className="text-xs text-[#888888] leading-snug">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Technical Skills Grid */}
        <div>
          <h3 className="text-xl font-bold font-mono uppercase tracking-wider text-white mb-8 flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-400" />
            TECHNICAL STACK & COMPETENCIES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0A0A0A] border border-[#1E1E1E] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1A1A1A]">
                  {cat.icon}
                  <h4 className="text-base font-bold text-white uppercase font-mono">{cat.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-[#141414] border border-[#252525] text-xs font-mono text-[#DCDCDC] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
