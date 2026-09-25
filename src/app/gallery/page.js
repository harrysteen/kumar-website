"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Workspace Moments Images
const workspaceImages = [
  {
    id: "snap-1",
    src: "/gallery/gallary-1.jpg",
    alt: "Workspace snapshot 1",
  },
  {
    id: "snap-2",
    src: "/gallery/gallary-2.jpg",
    alt: "Workspace snapshot 2",
  },
  {
    id: "snap-3",
    src: "/gallery/gallary-3.jpg",
    alt: "Workspace snapshot 3",
  },
  {
    id: "snap-4",
    src: "/gallery/gallary-4.jpg",
    alt: "Workspace snapshot 4",
  },
  {
    id: "snap-5",
    src: "/gallery/gallary-5.jpg",
    alt: "Workspace snapshot 5",
  },
  {
    id: "snap-6",
    src: "/gallery/gallary-6.jpg",
    alt: "Workspace snapshot 6",
  },
  {
    id: "snap-7",
    src: "/gallery/gallary-7.jpg",
    alt: "Workspace snapshot 7",
  },
  {
    id: "snap-8",
    src: "/gallery/gallary-9.jpg",
    alt: "Workspace snapshot 8",
  }
];

export default function GalleryPage() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const activeImage = selectedImageIndex !== null ? workspaceImages[selectedImageIndex] : null;

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? workspaceImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === workspaceImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`min-h-screen w-full flex flex-col font-sans select-none overflow-x-hidden transition-colors duration-500 ${
      isLightTheme ? "bg-[#F8F9FA] text-[#111827]" : "bg-[#050505] text-[#FFFFFF]"
    }`}>
      {/* Site Navbar */}
      <Navbar 
        onPlayMiniGame={() => {
          if (typeof window !== "undefined") {
            window.location.href = "/#hero";
          }
        }}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        isLightTheme={isLightTheme}
        onToggleTheme={() => setIsLightTheme(prev => !prev)}
      />

      <main className="w-full flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all border shadow-sm ${
              isLightTheme
                ? "bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-black"
                : "bg-[#111111] border-[#222222] text-gray-300 hover:bg-[#1A1A1A] hover:text-white"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <Layers className="w-4 h-4 text-purple-500" />
            <span>WORKSPACE GALLERY</span>
          </div>
        </div>

        {/* Header Title Section */}
        <div className="relative mb-10 text-center sm:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>WORKSPACE MOMENTS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 ${
              isLightTheme ? "text-gray-900" : "text-white"
            }`}
          >
            Workspace <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Moments</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
              isLightTheme ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Moments and candid snapshots captured at different times in my workspace.
          </motion.p>
        </div>

        {/* Clean Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {workspaceImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              onClick={() => setSelectedImageIndex(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isLightTheme
                  ? "bg-white border-gray-200 hover:border-purple-400/50"
                  : "bg-[#0E0E12] border-[#202028] hover:border-purple-500/60"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 4}
                />

                {/* Subtle Hover Overlay with Expand Icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Modal Container */}
            <div 
              className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-40 p-3 rounded-full bg-black/70 text-white hover:bg-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-2xl"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Image Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-3.5 rounded-full bg-black/70 text-white hover:bg-purple-600 border border-white/20 transition-all cursor-pointer shadow-2xl"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Image Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-3.5 rounded-full bg-black/70 text-white hover:bg-purple-600 border border-white/20 transition-all cursor-pointer shadow-2xl"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image Container */}
              <motion.div 
                key={activeImage.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-contain p-2 sm:p-4 drop-shadow-2xl select-none"
                  priority
                />
              </motion.div>

              {/* Counter Indicator at Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full bg-black/70 border border-white/15 text-xs font-mono text-gray-300 backdrop-blur-md">
                {selectedImageIndex + 1} / {workspaceImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`w-full py-8 border-t transition-colors mt-auto ${
        isLightTheme ? "bg-white border-gray-200 text-gray-600" : "bg-black border-white/10 text-gray-400"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} KUMAR RAJU • ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-purple-400 transition-colors">HOME</Link>
            <Link href="/#portfolio" className="hover:text-purple-400 transition-colors">PORTFOLIO</Link>
            <Link href="/gallery" className="text-purple-400 font-bold">GALLERY</Link>
            <Link href="/#contact" className="hover:text-purple-400 transition-colors">CONTACT</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
