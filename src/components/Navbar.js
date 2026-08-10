"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Gamepad2, Volume2, VolumeX, Sun, Moon, Menu, X, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({
  onPlayMiniGame,
  soundEnabled,
  setSoundEnabled,
  isLightTheme,
  onToggleTheme
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`w-full h-20 px-4 sm:px-6 lg:px-8 xl:px-12 z-50 flex items-center flex-shrink-0 relative transition-colors duration-500 ${
      isLightTheme ? "bg-[#FFFFFF] border-b border-gray-200 text-[#111827]" : "bg-[#000000] border-b border-white/5 text-white"
    }`}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Brand Title Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-extrabold font-mono text-sm sm:text-base tracking-wider whitespace-nowrap">
            <span className={isLightTheme ? "text-[#111827]" : "text-white"}>KUMAR</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent font-black">.RAJU</span>
          </Link>
        </div>

        {/* Center Desktop Navigation Links (PORTFOLIO / ABOUT / GALLERY / CONTACT) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
          <Link
            href="/"
            className={`text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
              isLightTheme ? "text-gray-600 hover:text-purple-600" : "text-white/80 hover:text-purple-300"
            }`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/#about"
            className={`text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
              isLightTheme ? "text-gray-600 hover:text-black" : "text-white/80 hover:text-white"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/gallery"
            className={`text-xs xl:text-sm font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full whitespace-nowrap ${
              isLightTheme 
                ? "bg-purple-100 text-purple-700 hover:bg-purple-200" 
                : "bg-purple-950/60 text-purple-300 border border-purple-500/30 hover:bg-purple-900/60"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>GALLERY</span>
          </Link>
          <Link
            href="/#contact"
            className={`text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${
              isLightTheme ? "text-gray-600 hover:text-black" : "text-white/80 hover:text-white"
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Right Desktop Spot: PLAY MINI-GAME, THEME SWITCHER & SOCIALS */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5">
          {/* Controls Pill */}
          <div className={`flex items-center gap-1.5 p-1 rounded-full border shadow-xl transition-colors ${
            isLightTheme ? "bg-gray-100 border-gray-300" : "bg-[#111115] border-[#22222A]"
          }`}>
            {/* PLAY MINI-GAME BUTTON */}
            <button
              onClick={onPlayMiniGame}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-mono font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span className="tracking-wide">PLAY GAME</span>
            </button>

            {/* GLOBAL THEME SWITCHER (DARK / LIGHT MODE) */}
            <button
              onClick={onToggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-mono font-bold transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap ${
                isLightTheme
                  ? "bg-[#111827] text-white hover:bg-black"
                  : "bg-white text-black hover:bg-neutral-200"
              }`}
              title="Toggle Light / Dark Website Theme"
            >
              {isLightTheme ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-yellow-300" />
                  <span>DARK</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>LIGHT</span>
                </>
              )}
            </button>

            {/* AUDIO SFX TOGGLE BUTTON */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                isLightTheme ? "text-gray-600 hover:text-black hover:bg-gray-200" : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Sound Effects"
            >
              {soundEnabled ? (
                <Volume2 className={`w-3.5 h-3.5 ${isLightTheme ? "text-black" : "text-white"}`} />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-gray-400" />
              )}
            </button>
          </div>

          {/* Social Icons */}
          <div className={`flex items-center gap-3 ${isLightTheme ? "text-[#111827]" : "text-white"}`}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity p-1"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity p-1"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="mailto:kumarraj6304467271@gmail.com"
              className="hover:opacity-80 transition-opacity p-1"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Right Controls: Mini Toggle & Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-full border ${
              isLightTheme ? "bg-gray-100 border-gray-300 text-gray-800" : "bg-[#111111] border-[#222222] text-[#DCDCDC]"
            }`}
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4 text-gray-400" />
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isLightTheme ? "bg-gray-100 border-gray-300 text-black hover:bg-gray-200" : "bg-[#111111] border-[#262626] text-white hover:bg-[#222222]"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden absolute top-20 left-0 right-0 backdrop-blur-xl border-b shadow-2xl overflow-hidden z-50 px-6 py-6 transition-colors ${
              isLightTheme ? "bg-white/95 border-gray-200 text-[#111827]" : "bg-[#0A0A0A]/95 border-[#222222] text-white"
            }`}
          >
            <div className="flex flex-col gap-6">
              
              {/* Quick Game & Mode Controls inside Mobile Menu */}
              <div className={`grid grid-cols-2 gap-3 p-3 rounded-2xl border ${
                isLightTheme ? "bg-gray-100 border-gray-300" : "bg-[#111111] border-[#222222]"
              }`}>
                <button
                  onClick={() => {
                    onPlayMiniGame();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md active:scale-95"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>PLAY GAME</span>
                </button>

                <button
                  onClick={onToggleTheme}
                  className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono font-bold transition-all active:scale-95 ${
                    isLightTheme
                      ? "bg-[#111827] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {isLightTheme ? <Moon className="w-4 h-4 text-yellow-300" /> : <Sun className="w-4 h-4 text-amber-500" />}
                  <span>{isLightTheme ? "DARK MODE" : "LIGHT MODE"}</span>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold font-mono tracking-wider uppercase border-b pb-2 transition-colors ${
                    isLightTheme ? "text-gray-800 border-gray-200 hover:text-black" : "text-white border-white/5 hover:text-[#AAAAAA]"
                  }`}
                >
                  PORTFOLIO
                </Link>
                <Link
                  href="/#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold font-mono tracking-wider uppercase border-b pb-2 transition-colors ${
                    isLightTheme ? "text-gray-800 border-gray-200 hover:text-black" : "text-white border-white/5 hover:text-[#AAAAAA]"
                  }`}
                >
                  ABOUT
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold font-mono tracking-wider uppercase border-b pb-2 transition-colors flex items-center justify-between ${
                    isLightTheme ? "text-purple-700 border-purple-200 hover:text-purple-900" : "text-purple-400 border-white/5 hover:text-purple-300"
                  }`}
                >
                  <span>GALLERY</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/30">NEW</span>
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold font-mono tracking-wider uppercase pb-1 transition-colors ${
                    isLightTheme ? "text-gray-800 hover:text-black" : "text-white hover:text-[#AAAAAA]"
                  }`}
                >
                  CONTACT
                </Link>
              </nav>

              {/* Mobile Social Links */}
              <div className={`flex items-center justify-around pt-4 border-t ${
                isLightTheme ? "border-gray-200 text-gray-800" : "border-[#222222] text-white"
              }`}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono hover:opacity-80"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono hover:opacity-80"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="mailto:kumarraj6304467271@gmail.com"
                  className="flex items-center gap-2 text-xs font-mono hover:opacity-80"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

