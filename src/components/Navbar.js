"use client";

import { Mail, Gamepad2, Volume2, VolumeX, Palette } from "lucide-react";

export default function Navbar({
  onPlayMiniGame,
  soundEnabled,
  setSoundEnabled,
  isColorMode,
  onToggleColorMode
}) {
  return (
    <header className="w-full h-20 bg-[#000000] px-6 sm:px-12 lg:px-16 z-50 flex items-center flex-shrink-0 border-b border-white/5">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Left Navigation Links (PORTFOLIO / ABOUT / CONTACT) */}
        <nav className="flex items-center gap-6 sm:gap-10">
          <a
            href="#portfolio"
            className="text-xs sm:text-sm font-semibold tracking-wider text-[#FFFFFF]/90 hover:text-[#FFFFFF] uppercase transition-opacity"
          >
            PORTFOLIO
          </a>
          <a
            href="#about"
            className="text-xs sm:text-sm font-semibold tracking-wider text-[#FFFFFF]/90 hover:text-[#FFFFFF] uppercase transition-opacity"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-semibold tracking-wider text-[#FFFFFF]/90 hover:text-[#FFFFFF] uppercase transition-opacity"
          >
            CONTACT
          </a>
        </nav>

        {/* Center Spot: PLAY MINI-GAME Button & COLOR/B&W Toggle Button */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 rounded-full bg-[#111111] border border-[#262626] shadow-2xl">
          {/* PLAY MINI-GAME BUTTON */}
          <button
            onClick={onPlayMiniGame}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Gamepad2 className="w-4 h-4" />
            <span className="tracking-wide">PLAY MINI-GAME</span>
          </button>

          {/* NEW: COLOR / B&W IMAGE TOGGLE BUTTON */}
          <button
            onClick={onToggleColorMode}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all shadow-md active:scale-95 ${
              isColorMode
                ? "bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 text-white shadow-cyan-500/20 scale-105"
                : "bg-[#222222] text-[#DCDCDC] hover:text-white hover:bg-[#333333]"
            }`}
            title="Toggle Color / Black & White Image"
          >
            <Palette className={`w-3.5 h-3.5 ${isColorMode ? "animate-spin" : ""}`} />
            <span>{isColorMode ? "COLOR MODE" : "B&W MODE"}</span>
          </button>

          {/* AUDIO SFX TOGGLE BUTTON */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 rounded-full text-[#DCDCDC]/70 hover:text-white hover:bg-white/10 transition-colors pr-1.5"
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-red-400" />}
          </button>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-4 sm:gap-6 text-[#FFFFFF]">
          {/* Facebook Icon */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Mail Icon */}
          <a
            href="mailto:contact@kumar.dev"
            className="hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

      </div>
    </header>
  );
}
