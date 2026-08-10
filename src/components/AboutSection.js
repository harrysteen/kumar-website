"use client";

import { motion } from "framer-motion";
import { Award, Code2, CheckCircle2, Server, Globe, Sparkles } from "lucide-react";

export default function AboutSection({ isLightTheme = false }) {
  const highlights = [
    { number: "2+", label: "Years Experience", desc: "Shipping production websites end-to-end", gradient: "from-emerald-400 to-teal-400", border: "border-emerald-500/30 shadow-emerald-500/10" },
    { number: "20+", label: "Websites Built", desc: "Client & corporate web applications", gradient: "from-cyan-400 to-blue-500", border: "border-cyan-500/30 shadow-cyan-500/10" },
    { number: "50+", label: "Domains Managed", desc: "DNS, SSL, hosting & infrastructure", gradient: "from-purple-400 to-indigo-500", border: "border-purple-500/30 shadow-purple-500/10" },
    { number: "POS", label: "Clover API", desc: "Real-time e-commerce POS integrations", gradient: "from-rose-400 to-pink-500", border: "border-rose-500/30 shadow-rose-500/10" }
  ];

  const skillCategories = [
    {
      title: "Frontend Core",
      color: "text-cyan-400",
      badgeBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      skills: ["React.js", "Next.js 15", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "CMS & Backend",
      color: "text-emerald-400",
      badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      skills: ["MERN Stack (MongoDB, Express, Node)", "WordPress", "Elementor", "Sanity CMS", "PHP", "MySQL"]
    },
    {
      title: "DevOps & Tools",
      color: "text-amber-400",
      badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
      icon: <Globe className="w-5 h-5 text-amber-400" />,
      skills: ["Git", "GitHub", "Vercel", "Clover POS API", "DNS & SSL", "Hosting & Backups"]
    }
  ];

  return (
    <section id="about" className={`w-full py-16 sm:py-24 relative z-20 transition-colors duration-500 ${
      isLightTheme ? "bg-[#F8F9FA] border-t border-gray-200" : "bg-[#050505] border-t border-[#1F1F1F]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/50" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              BACKGROUND & SKILLS
            </span>
          </div>
          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase ${
            isLightTheme ? "text-[#111827]" : "text-white"
          }`}>
            ABOUT KUMAR RAJU
          </h2>
          <p className={`mt-3 sm:mt-4 text-sm sm:text-lg max-w-3xl leading-relaxed ${
            isLightTheme ? "text-gray-600" : "text-[#A0A0A0]"
          }`}>
            Frontend & Fullstack Developer with 2+ years of experience shipping real client websites end to end. Specializing in modern React/Next.js architectures, custom CMS builds, and seamless e-commerce POS integrations.
          </p>
        </div>

        {/* 1. Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className={`p-5 sm:p-6 rounded-3xl border flex flex-col justify-between transition-all shadow-lg ${item.border} ${
                isLightTheme ? "bg-white" : "bg-[#0D0D12]"
              }`}
            >
              <div className={`text-3xl sm:text-4xl font-black font-mono mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                {item.number}
              </div>
              <div>
                <div className={`text-xs sm:text-sm font-bold mb-1 ${isLightTheme ? "text-gray-900" : "text-white"}`}>{item.label}</div>
                <div className={`text-[11px] sm:text-xs leading-snug ${isLightTheme ? "text-gray-500" : "text-gray-400"}`}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Technical Skills Grid */}
        <div>
          <h3 className={`text-base sm:text-xl font-bold font-mono uppercase tracking-wider mb-6 sm:mb-8 flex items-center gap-2.5 sm:gap-3 ${
            isLightTheme ? "text-[#111827]" : "text-white"
          }`}>
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            TECHNICAL STACK & COMPETENCIES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border flex flex-col shadow-lg transition-all ${
                  isLightTheme 
                    ? "bg-white border-gray-200" 
                    : "bg-[#0B0B0E] border-[#20202A] hover:border-purple-500/30"
                }`}
              >
                <div className={`flex items-center gap-3 mb-5 pb-4 border-b ${
                  isLightTheme ? "border-gray-200" : "border-white/10"
                }`}>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {cat.icon}
                  </div>
                  <h4 className={`text-base font-bold uppercase font-mono ${isLightTheme ? "text-gray-900" : "text-white"}`}>
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-full border text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${cat.badgeBg}`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 opacity-80" />
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
