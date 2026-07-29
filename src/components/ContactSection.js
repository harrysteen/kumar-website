"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-24 bg-[#050505] relative z-20 border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Details & Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#DCDCDC]/70">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-6">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-base text-[#A0A0A0] leading-relaxed mb-10 max-w-lg">
              Available for fullstack / frontend web development roles, freelance client projects, and high-impact web applications.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-6 mb-12">
              {/* Phone */}
              <a
                href="tel:+916304467271"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-[#222222] hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#888888]">PHONE</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +91 6304467271
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:kumarraj6304467271@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-[#222222] hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#888888]">EMAIL</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    kumarraj6304467271@gmail.com
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-[#222222]">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-mono">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#888888]">LOCATION</div>
                  <div className="text-sm font-bold text-white">
                    Ameerpet, Hyderabad, Telangana, India
                  </div>
                </div>
              </div>

              {/* Live Portfolio */}
              <a
                href="https://harry.services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-[#222222] hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-[#888888]">LIVE PORTFOLIO</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      harry.services
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#888888] group-hover:text-emerald-400" />
                </div>
              </a>
            </div>

            {/* Social Links (Inline SVGs for GitHub & LinkedIn) */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#DCDCDC] hover:text-white hover:border-[#444444] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#DCDCDC] hover:text-white hover:border-[#444444] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0A] border border-[#1E1E1E] shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono uppercase">SEND A MESSAGE</h3>
              <p className="text-xs text-[#888888] mb-8">
                Have a project idea or job opportunity? Send a quick message below!
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-sm font-mono font-bold text-center">
                  ✓ Message Sent Successfully! Kumar Raju will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-[#AAAAAA] mb-2 uppercase">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#222222] text-white text-sm focus:outline-none focus:border-emerald-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#AAAAAA] mb-2 uppercase">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#222222] text-white text-sm focus:outline-none focus:border-emerald-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#AAAAAA] mb-2 uppercase">MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Kumar, I'd like to discuss a project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#222222] text-white text-sm focus:outline-none focus:border-emerald-500/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-8 mt-8 border-t border-[#181818] text-center text-xs font-mono text-[#666666]">
              © {new Date().getFullYear()} VIPPARTHI KUMAR RAJU • ALL RIGHTS RESERVED
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
