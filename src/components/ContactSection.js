"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send, ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactSection({ isLightTheme = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Submit via FormSubmit AJAX service directly to kumarraj6304467271@gmail.com
      const res = await fetch("https://formsubmit.co/ajax/kumarraj6304467271@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: `⚡ New Portfolio Inquiry from ${formData.name}`,
          _template: "table"
        })
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback: mailto link
        window.location.href = `mailto:kumarraj6304467271@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AReply-to: ${encodeURIComponent(formData.email)}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback to mailto trigger
      window.location.href = `mailto:kumarraj6304467271@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AReply-to: ${encodeURIComponent(formData.email)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className={`w-full py-16 sm:py-24 relative z-20 transition-colors duration-500 ${
      isLightTheme ? "bg-[#FFFFFF] border-t border-gray-200" : "bg-[#050505] border-t border-[#1C1C1C]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Column: Contact Details & Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${isLightTheme ? "bg-black" : "bg-white"}`} />
              <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest ${
                isLightTheme ? "text-gray-500" : "text-[#DCDCDC]/70"
              }`}>
                GET IN TOUCH
              </span>
            </div>
            <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase mb-4 sm:mb-6 ${
              isLightTheme ? "text-[#111827]" : "text-white"
            }`}>
              LET'S WORK TOGETHER
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg ${
              isLightTheme ? "text-gray-600" : "text-[#A0A0A0]"
            }`}>
              Available for fullstack / frontend web development roles, freelance client projects, and high-impact web applications.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {/* Phone */}
              <a
                href="tel:+916304467271"
                className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border transition-colors group ${
                  isLightTheme ? "bg-gray-50 border-gray-200 hover:border-gray-400" : "bg-[#0D0D0D] border-[#222222] hover:border-white/50"
                }`}
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center font-mono shrink-0 ${
                  isLightTheme ? "bg-white border-gray-200 text-black shadow-sm" : "bg-[#161616] border-[#2B2B2B] text-white"
                }`}>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className={`text-[10px] sm:text-xs font-mono ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>PHONE</div>
                  <div className={`text-xs sm:text-sm font-bold transition-colors truncate ${isLightTheme ? "text-gray-900 group-hover:text-black" : "text-white group-hover:text-white"}`}>
                    +91 6304467271
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:kumarraj6304467271@gmail.com"
                className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border transition-colors group ${
                  isLightTheme ? "bg-gray-50 border-gray-200 hover:border-gray-400" : "bg-[#0D0D0D] border-[#222222] hover:border-white/50"
                }`}
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center font-mono shrink-0 ${
                  isLightTheme ? "bg-white border-gray-200 text-black shadow-sm" : "bg-[#161616] border-[#2B2B2B] text-white"
                }`}>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`text-[10px] sm:text-xs font-mono ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>EMAIL</div>
                  <div className={`text-xs sm:text-sm font-bold transition-colors break-all leading-tight ${isLightTheme ? "text-gray-900 group-hover:text-black" : "text-white group-hover:text-white"}`}>
                    kumarraj6304467271@gmail.com
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border ${
                isLightTheme ? "bg-gray-50 border-gray-200" : "bg-[#0D0D0D] border-[#222222]"
              }`}>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center font-mono shrink-0 ${
                  isLightTheme ? "bg-white border-gray-200 text-black shadow-sm" : "bg-[#161616] border-[#2B2B2B] text-white"
                }`}>
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className={`text-[10px] sm:text-xs font-mono ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>LOCATION</div>
                  <div className={`text-xs sm:text-sm font-bold truncate ${isLightTheme ? "text-gray-900" : "text-white"}`}>
                    Ameerpet, Hyderabad, Telangana, India
                  </div>
                </div>
              </div>

              {/* Live Portfolio */}
              <a
                href="https://harry.services"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border transition-colors group ${
                  isLightTheme ? "bg-gray-50 border-gray-200 hover:border-gray-400" : "bg-[#0D0D0D] border-[#222222] hover:border-white/50"
                }`}
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center font-mono shrink-0 ${
                  isLightTheme ? "bg-white border-gray-200 text-black shadow-sm" : "bg-[#161616] border-[#2B2B2B] text-white"
                }`}>
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <div>
                    <div className={`text-[10px] sm:text-xs font-mono ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>LIVE PORTFOLIO</div>
                    <div className={`text-xs sm:text-sm font-bold transition-colors ${isLightTheme ? "text-gray-900 group-hover:text-black" : "text-white group-hover:text-white"}`}>
                      harry.services
                    </div>
                  </div>
                  <ExternalLink className={`w-4 h-4 shrink-0 ${isLightTheme ? "text-gray-400 group-hover:text-black" : "text-[#888888] group-hover:text-white"}`} />
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center transition-colors ${
                  isLightTheme ? "bg-gray-100 border-gray-300 text-gray-800 hover:text-black hover:border-gray-400" : "bg-[#111111] border-[#262626] text-[#DCDCDC] hover:text-white hover:border-[#444444]"
                }`}
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center transition-colors ${
                  isLightTheme ? "bg-gray-100 border-gray-300 text-gray-800 hover:text-black hover:border-gray-400" : "bg-[#111111] border-[#262626] text-[#DCDCDC] hover:text-white hover:border-[#444444]"
                }`}
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className={`p-5 sm:p-10 rounded-3xl border shadow-xl flex flex-col justify-between ${
            isLightTheme ? "bg-white border-gray-200" : "bg-[#0A0A0A] border-[#1E1E1E]"
          }`}>
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 font-mono uppercase ${isLightTheme ? "text-[#111827]" : "text-white"}`}>SEND A MESSAGE</h3>
              <p className={`text-xs mb-6 sm:mb-8 ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>
                Have a project idea or job opportunity? Send a message directly to <strong>kumarraj6304467271@gmail.com</strong>
              </p>

              {submitted ? (
                <div className={`p-5 sm:p-6 rounded-2xl border text-xs sm:text-sm font-mono font-bold text-center leading-relaxed ${
                  isLightTheme ? "bg-gray-100 border-gray-300 text-gray-900" : "bg-white/10 border border-white/30 text-white"
                }`}>
                  ✓ Message Sent Successfully to <strong>kumarraj6304467271@gmail.com</strong>!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className={`block text-xs font-mono mb-2 uppercase ${isLightTheme ? "text-gray-700" : "text-[#AAAAAA]"}`}>YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        isLightTheme ? "bg-gray-50 border-gray-300 text-gray-900 focus:border-black" : "bg-[#121212] border-[#222222] text-white focus:border-white"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-2 uppercase ${isLightTheme ? "text-gray-700" : "text-[#AAAAAA]"}`}>YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        isLightTheme ? "bg-gray-50 border-gray-300 text-gray-900 focus:border-black" : "bg-[#121212] border-[#222222] text-white focus:border-white"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-2 uppercase ${isLightTheme ? "text-gray-700" : "text-[#AAAAAA]"}`}>MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Kumar, I'd like to discuss a project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors resize-none ${
                        isLightTheme ? "bg-gray-50 border-gray-300 text-gray-900 focus:border-black" : "bg-[#121212] border-[#222222] text-white focus:border-white"
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
                      isLightTheme ? "bg-[#111827] text-white hover:bg-black" : "bg-white text-black hover:bg-neutral-200"
                    } ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING TO KUMAR...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className={`pt-6 sm:pt-8 mt-6 sm:mt-8 border-t text-center text-[10px] sm:text-xs font-mono ${
              isLightTheme ? "border-gray-200 text-gray-500" : "border-[#181818] text-[#666666]"
            }`}>
              © {new Date().getFullYear()} VIPPARTHI KUMAR RAJU • ALL RIGHTS RESERVED
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
