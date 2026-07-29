"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [isPlayingGame, setIsPlayingGame] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [triggerGameId, setTriggerGameId] = useState(0);
  const [isColorMode, setIsColorMode] = useState(false); // false = B&W, true = Color

  const handlePlayMiniGame = () => {
    setIsPlayingGame(true);
    setTriggerGameId((prev) => prev + 1);
  };

  const handleToggleColorMode = () => {
    setIsColorMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-[#000000] text-[#FFFFFF] flex flex-col font-sans select-none overflow-x-hidden">
      {/* Header Navigation with PLAY MINI-GAME Pill & COLOR MODE Toggle */}
      <Navbar 
        onPlayMiniGame={handlePlayMiniGame}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        isColorMode={isColorMode}
        onToggleColorMode={handleToggleColorMode}
      />

      {/* 1. Hero Section (100vh) */}
      <main className="w-full relative">
        <HeroSection 
          isPlayingGame={isPlayingGame}
          setIsPlayingGame={setIsPlayingGame}
          soundEnabled={soundEnabled}
          triggerGameId={triggerGameId}
          isColorMode={isColorMode}
        />

        {/* 2. Featured Projects Section */}
        <ProjectsSection />

        {/* 3. About & Technical Competencies */}
        <AboutSection />

        {/* 4. Contact & Experience Summary */}
        <ContactSection />
      </main>
    </div>
  );
}
