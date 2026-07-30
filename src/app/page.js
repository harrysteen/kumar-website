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
  const [isLightTheme, setIsLightTheme] = useState(false); // false = Dark Theme, true = Light Theme

  const handlePlayMiniGame = () => {
    setIsPlayingGame(true);
    setTriggerGameId((prev) => prev + 1);
  };

  const handleToggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  return (
    <div className={`min-h-screen w-full flex flex-col font-sans select-none overflow-x-hidden transition-colors duration-500 ${
      isLightTheme ? "bg-[#F8F9FA] text-[#111827]" : "bg-[#000000] text-[#FFFFFF]"
    }`}>
      {/* Header Navigation with Theme Switcher & Mini Game Button */}
      <Navbar 
        onPlayMiniGame={handlePlayMiniGame}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        isLightTheme={isLightTheme}
        onToggleTheme={handleToggleTheme}
      />

      {/* 1. Hero Section */}
      <main className="w-full relative">
        <HeroSection 
          isPlayingGame={isPlayingGame}
          setIsPlayingGame={setIsPlayingGame}
          soundEnabled={soundEnabled}
          triggerGameId={triggerGameId}
          isLightTheme={isLightTheme}
        />

        {/* 2. Featured Projects Section */}
        <ProjectsSection isLightTheme={isLightTheme} />

        {/* 3. About & Technical Competencies */}
        <AboutSection isLightTheme={isLightTheme} />

        {/* 4. Contact & Experience Summary */}
        <ContactSection isLightTheme={isLightTheme} />
      </main>
    </div>
  );
}
