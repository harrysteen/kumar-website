"use client";

import { motion } from "framer-motion";
import { Award, Code2, CheckCircle2, Server, Globe } from "lucide-react";

export default function AboutSection({ isLightTheme = false }) {
  const highlights = [
    { number: "2+", label: "Years Experience", desc: "Shipping production websites end-to-end" },
    { number: "20+", label: "Websites Built", desc: "Client & corporate web applications" },
    { number: "50+", label: "Domains Managed", desc: "DNS, SSL, hosting & infrastructure" },
    { number: "POS", label: "Clover API", desc: "Real-time e-commerce POS integrations" }
  ];

  const skillCategories = [
    {
      title: "Frontend Core",
      icon: <Code2 className={`w-5 h-5 ${isLightTheme ? "text-black" : "text-white"}`} />,
      skills: ["React.js", "Next.js 15", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "CMS & Backend",
      icon: <Server className={`w-5 h-5 ${isLightTheme ? "text-black" : "text-white"}`} />,
      skills: ["MERN Stack (MongoDB, Express, Node)", "WordPress", "Elementor", "Sanity CMS", "PHP", "MySQL"]
    },
    {
      title: "DevOps & Tools",
      icon: <Globe className={`w-5 h-5 ${isLightTheme ? "text-black" : "text-white"}`} />,
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
            <span className={`w-2 h-2 rounded-full ${isLightTheme ? "bg-black" : "bg-white"}`} />
            <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest ${
              isLightTheme ? "text-gray-500" : "text-[#DCDCDC]/70"
            }`}>
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
              className={`p-4 sm:p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                isLightTheme ? "bg-white border-gray-200 shadow-md hover:border-gray-400" : "bg-[#0D0D0D] border-[#222222] hover:border-[#333333]"
              }`}
            >
              <div className={`text-2xl sm:text-4xl font-black font-mono mb-2 ${isLightTheme ? "text-[#111827]" : "text-white"}`}>
                {item.number}
              </div>
              <div>
                <div className={`text-xs sm:text-sm font-bold mb-1 ${isLightTheme ? "text-gray-900" : "text-white"}`}>{item.label}</div>
                <div className={`text-[11px] sm:text-xs leading-snug ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Technical Skills Grid */}
        <div>
          <h3 className={`text-base sm:text-xl font-bold font-mono uppercase tracking-wider mb-6 sm:mb-8 flex items-center gap-2.5 sm:gap-3 ${
            isLightTheme ? "text-[#111827]" : "text-white"
          }`}>
            <Award className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${isLightTheme ? "text-black" : "text-white"}`} />
            TECHNICAL STACK & COMPETENCIES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border flex flex-col shadow-sm ${
                  isLightTheme ? "bg-white border-gray-200" : "bg-[#0A0A0A] border-[#1E1E1E]"
                }`}
              >
                <div className={`flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b ${
                  isLightTheme ? "border-gray-200" : "border-[#1A1A1A]"
                }`}>
                  {cat.icon}
                  <h4 className={`text-sm sm:text-base font-bold uppercase font-mono ${isLightTheme ? "text-gray-900" : "text-white"}`}>{cat.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-mono flex items-center gap-1.5 ${
                        isLightTheme ? "bg-gray-100 border-gray-200 text-gray-800" : "bg-[#141414] border-[#252525] text-[#DCDCDC]"
                      }`}
                    >
                      <CheckCircle2 className={`w-3 h-3 shrink-0 ${isLightTheme ? "text-black" : "text-white"}`} />
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
