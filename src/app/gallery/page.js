"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Camera,
  ArrowLeft,
  Sun,
  Moon,
  Sliders,
  Filter,
  Grid,
  Layers,
  Heart,
  Share2,
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Comprehensive Gallery Data incorporating gallary-1, gallary-2, and all asset images
const galleryItems = [
  {
    id: "gallary-1",
    title: "Cinematic Portrait - Studio Masterpiece",
    category: "Featured",
    subCategory: "Portraits",
    src: "/gallery/gallary-1.jpg",
    width: 6000,
    height: 4000,
    aspect: "landscape",
    featured: true,
    tag: "FEATURED HIGHLIGHT",
    description: "Ultra high-resolution Nikon RAW capture showcasing dramatic studio lighting, fine texture, and expressive portraiture.",
    camera: "Nikon RAW (Converted 6000x4000)",
    date: "August 2026",
    likes: 248
  },
  {
    id: "gallary-2",
    title: "Expressive Visual Art - Light & Shadow",
    category: "Featured",
    subCategory: "Creative",
    src: "/gallery/gallary-2.jpg",
    width: 6000,
    height: 4000,
    aspect: "landscape",
    featured: true,
    tag: "FEATURED HIGHLIGHT",
    description: "A captivating study of lighting dynamics and depth. Captured in raw format to preserve maximum dynamic range and rich tones.",
    camera: "Nikon RAW (Converted 6000x4000)",
    date: "August 2026",
    likes: 312
  },
  {
    id: "gallary-3",
    title: "High-Contrast Studio Perspective",
    category: "Portraits",
    subCategory: "Studio",
    src: "/gallery/gallary-3.jpg",
    width: 6000,
    height: 4000,
    aspect: "landscape",
    featured: false,
    tag: "STUDIO RAW",
    description: "Refined aesthetic composition exploring high-contrast balance, natural shadow gradients, and focus precision.",
    camera: "Nikon RAW (6000x4000)",
    date: "August 2026",
    likes: 189
  },
  {
    id: "gallary-4",
    title: "Creative Depth & Fine Art Composition",
    category: "Creative",
    subCategory: "Conceptual",
    src: "/gallery/gallary-4.jpg",
    width: 3000,
    height: 2000,
    aspect: "landscape",
    featured: false,
    tag: "FINE ART",
    description: "Atmospheric composition highlighting depth of field and soft color hues for modern web and print aesthetics.",
    camera: "HD Optical Lens",
    date: "July 2026",
    likes: 145
  },
  {
    id: "gallary-5",
    title: "Ambient Tone & Character Capture",
    category: "Portraits",
    subCategory: "Portraits",
    src: "/gallery/gallary-5.jpg",
    width: 6000,
    height: 4000,
    aspect: "landscape",
    featured: false,
    tag: "PORTRAIT RAW",
    description: "Clean detail resolution and warm ambient tones, captured with precision glass to emphasize natural highlights.",
    camera: "Nikon RAW (6000x4000)",
    date: "August 2026",
    likes: 210
  },
  {
    id: "gallary-6",
    title: "Monochrome & Minimalist Aesthetic",
    category: "Creative",
    subCategory: "Minimalist",
    src: "/gallery/gallary-6.jpg",
    width: 2400,
    height: 1600,
    aspect: "landscape",
    featured: false,
    tag: "MINIMALIST",
    description: "Sleek contrast and clean geometry creating a minimalist visual statement with timeless elegance.",
    camera: "HD Digital Sensor",
    date: "June 2026",
    likes: 167
  },
  {
    id: "gallary-7",
    title: "Modern Expressive Visual Story",
    category: "Portraits",
    subCategory: "Portraits",
    src: "/gallery/gallary-7.jpg",
    width: 4000,
    height: 2667,
    aspect: "landscape",
    featured: false,
    tag: "EXPRESSIVE",
    description: "Full dynamic color palette combined with crisp modern line details for a powerful visual presence.",
    camera: "Pro Digital Capture",
    date: "August 2026",
    likes: 275
  },
  {
    id: "gallary-9",
    title: "Architectural & Ambient Horizon",
    category: "Creative",
    subCategory: "Studio",
    src: "/gallery/gallary-9.jpg",
    width: 3800,
    height: 2533,
    aspect: "landscape",
    featured: false,
    tag: "AMBIENT",
    description: "Deep perspective and textured highlights crafted for modern digital showcase and portfolio presentation.",
    camera: "Pro Digital Capture",
    date: "May 2026",
    likes: 198
  }
];

export default function GalleryPage() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [likedImages, setLikedImages] = useState({});
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter items based on selected tab
  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory || item.subCategory === activeCategory);

  const activeImage = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const toggleLike = (id, e) => {
    if (e) e.stopPropagation();
    setLikedImages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (e) => {
    if (e) e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
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

      <main className="w-full flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Back Link & Breadcrumb Header */}
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
            <Camera className="w-4 h-4 text-purple-500" />
            <span>EXHIBITION GALLERY</span>
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="relative mb-12 rounded-3xl p-8 sm:p-12 overflow-hidden border backdrop-blur-xl transition-all shadow-2xl">
          {/* Decorative Glowing Orbs background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-400 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ULTRA HD VISUAL COLLECTION</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 ${
                isLightTheme ? "text-gray-900" : "text-white"
              }`}
            >
              Photography & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Gallery</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed mb-6 ${
                isLightTheme ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Explore our curated portfolio of high-resolution digital captures, featuring spotlight captures <span className="font-bold text-purple-400">gallary-1</span> and <span className="font-bold text-indigo-400">gallary-2</span> alongside studio compositions.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/10 text-xs font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className={isLightTheme ? "text-gray-600" : "text-gray-400"}>8 High-Res Masterpieces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className={isLightTheme ? "text-gray-600" : "text-gray-400"}>Nikon RAW 6000x4000 HD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className={isLightTheme ? "text-gray-600" : "text-gray-400"}>Interactive Lightbox View</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Filter Categories & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-500/20">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Featured", "Portraits", "Creative"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                    : isLightTheme
                    ? "bg-gray-200/80 text-gray-700 hover:bg-gray-300"
                    : "bg-[#111111] text-gray-400 hover:text-white hover:bg-[#1A1A1A] border border-[#222222]"
                }`}
              >
                {category === "Featured" ? "★ Featured" : category}
              </button>
            ))}
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Showing {filteredItems.length} photos</span>
          </div>
        </div>

        {/* FEATURED SPOTLIGHT BANNER FOR GALLARY-1 & GALLARY-2 */}
        {activeCategory === "All" && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
              <h2 className="text-xl font-mono font-bold tracking-wider uppercase">
                SPOTLIGHT CAPTURES (GALLARY-1 & GALLARY-2)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryItems.filter(item => item.featured).map((item, idx) => {
                const isLiked = likedImages[item.id];
                const actualIndex = galleryItems.findIndex(g => g.id === item.id);

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    onClick={() => setSelectedImageIndex(actualIndex)}
                    className="group relative rounded-3xl overflow-hidden cursor-pointer border shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
                    style={{
                      borderColor: isLightTheme ? "#E5E7EB" : "rgba(168, 85, 247, 0.3)"
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg border border-purple-300/30">
                          {item.tag}
                        </span>

                        <div className="flex items-center gap-2 pointer-events-auto">
                          <button
                            onClick={(e) => toggleLike(item.id, e)}
                            className={`p-2.5 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                              isLiked ? "bg-red-500 text-white" : "bg-black/60 text-white hover:bg-black/80"
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                          </button>
                        </div>
                      </div>

                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-widest block mb-1">
                            {item.id.toUpperCase()} • {item.subCategory}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-4 font-light">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between text-xs font-mono text-gray-300 border-t border-white/20 pt-3">
                            <span className="flex items-center gap-1.5">
                              <Camera className="w-3.5 h-3.5 text-purple-400" />
                              {item.camera}
                            </span>
                            <span className="flex items-center gap-1 text-purple-300 font-bold group-hover:translate-x-1 transition-transform">
                              <span>VIEW HD</span>
                              <Maximize2 className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* MAIN GALLERY MASONRY GRID */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <Grid className="w-4 h-4 text-purple-500" />
              <span>{activeCategory === "All" ? "ALL GALLERY CAPTURES" : `${activeCategory.toUpperCase()} COLLECTION`}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => {
              const isLiked = likedImages[item.id];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border shadow-lg transition-all duration-300 hover:-translate-y-1.5 ${
                    isLightTheme
                      ? "bg-white border-gray-200 hover:shadow-xl"
                      : "bg-[#0E0E10] border-[#222225] hover:border-purple-500/50 hover:shadow-purple-500/10"
                  }`}
                >
                  {/* Image Aspect Box */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/20">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Top Tag & Like */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide backdrop-blur-md border ${
                        item.featured
                          ? "bg-purple-600/90 text-white border-purple-400"
                          : "bg-black/60 text-gray-200 border-white/20"
                      }`}>
                        {item.id.toUpperCase()}
                      </span>

                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        className={`p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                          isLiked ? "bg-red-500 text-white" : "bg-black/50 text-white hover:bg-black/80"
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-current" : ""}`} />
                      </button>
                    </div>

                    {/* Hover Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-[11px] font-mono text-purple-300 font-semibold block mb-1">
                          {item.category} • {item.subCategory}
                        </span>
                        <h3 className="text-base font-bold text-white mb-1 leading-snug line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-300 line-clamp-2 mb-3">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between text-[11px] font-mono text-gray-300 border-t border-white/20 pt-2.5">
                          <span className="flex items-center gap-1 text-gray-300">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Click to Zoom</span>
                          </span>
                          <span className="text-purple-300 font-bold flex items-center gap-1">
                            FULL HD <Maximize2 className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Info */}
                  <div className={`p-4 transition-colors ${
                    isLightTheme ? "bg-white" : "bg-[#0E0E10]"
                  }`}>
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-bold truncate pr-2 ${
                        isLightTheme ? "text-gray-900" : "text-white"
                      }`}>
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-gray-400 whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-1 mt-1 font-mono">
                      {item.camera}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[92vh] flex flex-col lg:flex-row bg-[#0A0A0C] border border-[#222228] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 text-white hover:bg-white hover:text-black border border-white/20 transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Navigation Controls */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/70 text-white hover:bg-purple-600 border border-white/20 transition-all cursor-pointer shadow-xl"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 lg:right-96 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/70 text-white hover:bg-purple-600 border border-white/20 transition-all cursor-pointer shadow-xl"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image Stage */}
              <div className="relative flex-1 min-h-[40vh] sm:min-h-[55vh] lg:min-h-[75vh] bg-black/80 flex items-center justify-center p-4">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-contain p-2 sm:p-6"
                  priority
                />
              </div>

              {/* Sidebar Info Panel */}
              <div className="w-full lg:w-96 p-6 sm:p-8 bg-[#0F0F13] border-t lg:border-t-0 lg:border-l border-[#22222A] flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-600/30 border border-purple-400/30 text-purple-300">
                      {activeImage.id.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {selectedImageIndex + 1} of {filteredItems.length}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                    {activeImage.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">
                    {activeImage.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white font-semibold">{activeImage.category}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">Sub-Category:</span>
                      <span className="text-white font-semibold">{activeImage.subCategory}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">Camera / Format:</span>
                      <span className="text-purple-400 font-semibold">{activeImage.camera}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">Resolution:</span>
                      <span className="text-white font-semibold">{activeImage.width} x {activeImage.height}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-gray-400">Date Captured:</span>
                      <span className="text-white font-semibold">{activeImage.date}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={(e) => toggleLike(activeImage.id, e)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      likedImages[activeImage.id]
                        ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                        : "bg-[#1A1A22] text-white hover:bg-[#252530] border border-white/10"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedImages[activeImage.id] ? "fill-current" : ""}`} />
                    <span>{likedImages[activeImage.id] ? "LIKED" : "LIKE"}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-mono font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-purple-500/20"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span>SHARE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
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
