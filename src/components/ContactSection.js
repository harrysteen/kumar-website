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
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
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
                className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border transition-all group ${
                  isLightTheme ? "bg-gray-50 border-gray-200 hover:border-emerald-400" : "bg-[#0B0B0E] border-[#20202A] hover:border-emerald-500/50 shadow-emerald-500/5"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-emerald-400 font-bold">PHONE</div>
                  <div className={`text-xs sm:text-sm font-bold transition-colors truncate ${isLightTheme ? "text-gray-900 group-hover:text-emerald-600" : "text-white group-hover:text-emerald-300"}`}>
                    +91 6304467271
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:kumarraj6304467271@gmail.com"
                className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border transition-all group ${
                  isLightTheme ? "bg-gray-50 border-gray-200 hover:border-cyan-400" : "bg-[#0B0B0E] border-[#20202A] hover:border-cyan-500/50 shadow-cyan-500/5"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] sm:text-xs font-mono text-cyan-400 font-bold">EMAIL</div>
                  <div className={`text-xs sm:text-sm font-bold transition-colors break-all leading-tight ${isLightTheme ? "text-gray-900 group-hover:text-cyan-600" : "text-white group-hover:text-cyan-300"}`}>
                    kumarraj6304467271@gmail.com
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border ${
                isLightTheme ? "bg-gray-50 border-gray-200" : "bg-[#0B0B0E] border-[#20202A]"
              }`}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center font-mono shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-mono text-amber-400 font-bold">LOCATION</div>
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
                className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl border transition-all group ${
                  isLightTheme ? "bg-gray-50 border-gray-200 hover:border-purple-400" : "bg-[#0B0B0E] border-[#20202A] hover:border-purple-500/50 shadow-purple-500/5"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center font-mono shrink-0 shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <div>
                    <div className="text-[10px] sm:text-xs font-mono text-purple-400 font-bold">LIVE PORTFOLIO</div>
                    <div className={`text-xs sm:text-sm font-bold transition-colors ${isLightTheme ? "text-gray-900 group-hover:text-purple-600" : "text-white group-hover:text-purple-300"}`}>
                      harry.services
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 shrink-0 text-purple-400" />
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                  isLightTheme ? "bg-gray-100 border-gray-300 text-gray-800 hover:text-purple-600 hover:border-purple-300" : "bg-[#111115] border-[#22222A] text-gray-300 hover:text-purple-400 hover:border-purple-500/50"
                }`}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                  isLightTheme ? "bg-gray-100 border-gray-300 text-gray-800 hover:text-pink-600 hover:border-pink-300" : "bg-[#111115] border-[#22222A] text-gray-300 hover:text-pink-400 hover:border-pink-500/50"
                }`}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className={`p-6 sm:p-10 rounded-3xl border shadow-2xl flex flex-col justify-between ${
            isLightTheme ? "bg-white border-gray-200" : "bg-[#0B0B0E] border-[#20202A]"
          }`}>
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 font-mono uppercase ${isLightTheme ? "text-[#111827]" : "text-white"}`}>SEND A MESSAGE</h3>
              <p className={`text-xs mb-6 sm:mb-8 ${isLightTheme ? "text-gray-500" : "text-[#888888]"}`}>
                Have a project idea or job opportunity? Send a message directly to <strong>kumarraj6304467271@gmail.com</strong>
              </p>

              {submitted ? (
                <div className="p-5 sm:p-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-mono font-bold text-center leading-relaxed shadow-lg shadow-emerald-500/10">
                  ✓ Message Sent Successfully to <strong>kumarraj6304467271@gmail.com</strong>!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className={`block text-xs font-mono mb-2 uppercase font-semibold ${isLightTheme ? "text-gray-700" : "text-gray-300"}`}>YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                        isLightTheme 
                          ? "bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20" 
                          : "bg-[#14141A] border-[#262632] text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-2 uppercase font-semibold ${isLightTheme ? "text-gray-700" : "text-gray-300"}`}>YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                        isLightTheme 
                          ? "bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20" 
                          : "bg-[#14141A] border-[#262632] text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-2 uppercase font-semibold ${isLightTheme ? "text-gray-700" : "text-gray-300"}`}>MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Kumar, I'd like to discuss a project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all resize-none ${
                        isLightTheme 
                          ? "bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20" 
                          : "bg-[#14141A] border-[#262632] text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-2xl font-mono font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white hover:opacity-95 shadow-lg shadow-purple-500/30 cursor-pointer ${
                      loading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
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
              isLightTheme ? "border-gray-200 text-gray-500" : "border-[#1A1A22] text-gray-500"
            }`}>
              © {new Date().getFullYear()} VIPPARTHI KUMAR RAJU • ALL RIGHTS RESERVED
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
