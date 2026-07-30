"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Award, RefreshCw, Trophy, Target } from "lucide-react";

export default function HeroSection({
  isPlayingGame,
  setIsPlayingGame,
  soundEnabled = true,
  triggerGameId = 0,
  isLightTheme = false
}) {
  const canvasRef = useRef(null);

  // Score & XP State
  const [xp, setXp] = useState(150);
  const [level, setLevel] = useState(1);
  const [achievement, setAchievement] = useState(null);
  const [xpFloatingText, setXpFloatingText] = useState([]);

  // PLAYABLE MINI-GAME STATE (15 SEC TIMER & USER SKILLS)
  const [gameScore, setGameScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameFinished, setGameFinished] = useState(false);
  const [orbs, setOrbs] = useState([]);

  // SKILLS LIST (Vibrant Colorful Badges for Mini-Game)
  const techList = [
    { label: "Next.js", color: "bg-white text-black font-extrabold shadow-lg shadow-white/50 border border-white" },
    { label: "MongoDB", color: "bg-emerald-500 text-black font-extrabold shadow-lg shadow-emerald-500/50 border border-emerald-400" },
    { label: "React.js", color: "bg-cyan-400 text-black font-extrabold shadow-lg shadow-cyan-400/50 border border-cyan-300" },
    { label: "HTML", color: "bg-orange-500 text-white font-extrabold shadow-lg shadow-orange-500/50 border border-orange-400" },
    { label: "CSS", color: "bg-blue-600 text-white font-extrabold shadow-lg shadow-blue-600/50 border border-blue-400" },
    { label: "JavaScript", color: "bg-yellow-400 text-black font-extrabold shadow-lg shadow-yellow-400/50 border border-yellow-300" }
  ];

  // Web Audio Synth for Gamified Sound Effects (User Favorite)
  const playSound = (freq = 587, type = "sine") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {
      // Audio fallback
    }
  };

  // XP Add function
  const addXp = (amount, label, event) => {
    playSound(440 + amount * 6, "triangle");
    setXp((prev) => {
      const nextXp = prev + amount;
      if (nextXp >= level * 300) {
        setLevel((l) => l + 1);
        triggerAchievement(`LEVEL UP! REACHED LEVEL ${level + 1}`);
        playSound(880, "square");
      }
      return nextXp;
    });

    const id = Date.now();
    const x = event?.clientX || (typeof window !== "undefined" ? window.innerWidth / 2 : 300);
    const y = event?.clientY || (typeof window !== "undefined" ? window.innerHeight / 2 : 300);
    setXpFloatingText((prev) => [...prev, { id, amount, x, y }]);
    setTimeout(() => {
      setXpFloatingText((prev) => prev.filter((item) => item.id !== id));
    }, 1200);
  };

  const triggerAchievement = (title) => {
    setAchievement(title);
    setTimeout(() => setAchievement(null), 3200);
  };

  // Trigger Mini Game when triggerGameId changes from Navbar
  useEffect(() => {
    if (triggerGameId > 0) {
      startMiniGame();
    }
  }, [triggerGameId]);

  // MINI-GAME STARTER (15 Seconds)
  const startMiniGame = () => {
    setIsPlayingGame(true);
    setGameScore(0);
    setTimeLeft(15);
    setGameFinished(false);
    playSound(600, "square");
    triggerAchievement("🎮 MINI-GAME STARTED: CATCH TECH ORBS!");
    spawnOrbsBatch();
  };

  const spawnOrbsBatch = () => {
    const newOrbs = [];
    for (let i = 0; i < 6; i++) {
      const tech = techList[Math.floor(Math.random() * techList.length)];
      newOrbs.push({
        id: Math.random(),
        label: tech.label,
        color: tech.color,
        top: Math.random() * 50 + 25,
        left: Math.random() * 60 + 10,
        scale: Math.random() * 0.25 + 0.9
      });
    }
    setOrbs(newOrbs);
  };

  // 15 Seconds Countdown Timer
  useEffect(() => {
    if (!isPlayingGame || gameFinished) return;
    if (timeLeft <= 0) {
      setGameFinished(true);
      playSound(880, "sine");
      triggerAchievement(`🏆 GAME OVER! SCORE: ${gameScore} PTS!`);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlayingGame, timeLeft, gameFinished, gameScore]);

  // Catch/Pop Orb Action
  const popOrb = (id, event) => {
    event.stopPropagation();
    playSound(700 + Math.random() * 300, "triangle");
    setGameScore((prev) => prev + 100);
    addXp(100, "Orb Popped", event);

    setOrbs((prev) => {
      const filtered = prev.filter((o) => o.id !== id);
      const tech = techList[Math.floor(Math.random() * techList.length)];
      return [
        ...filtered,
        {
          id: Math.random(),
          label: tech.label,
          color: tech.color,
          top: Math.random() * 50 + 25,
          left: Math.random() * 60 + 10,
          scale: Math.random() * 0.25 + 0.9
        }
      ];
    });
  };

  // Particle Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 40;
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 150 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isLightTheme ? `rgba(17, 24, 39, ${force * 0.2})` : `rgba(255, 255, 255, ${force * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isLightTheme ? "rgba(17, 24, 39, 0.4)" : "rgba(255, 255, 255, 0.75)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLightTheme]);

  return (
    <section 
      id="hero" 
      onClick={(e) => addXp(25, "Energy Burst", e)}
      className={`relative w-full min-h-[calc(100vh-80px)] sm:h-[calc(100vh-80px)] overflow-hidden flex flex-col items-center justify-end select-none cursor-crosshair pb-2 sm:pb-0 transition-colors duration-500 ${
        isLightTheme ? "bg-[#F8F9FA]" : "bg-[#000000]"
      }`}
    >
      {/* Interactive Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Floating +XP Popups */}
      {xpFloatingText.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 1, y: item.y, x: item.x, scale: 0.8 }}
          animate={{ opacity: 0, y: item.y - 60, scale: 1.3 }}
          transition={{ duration: 1 }}
          className="fixed pointer-events-none z-50 font-mono font-bold text-sm text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
        >
          +{item.amount} XP ⚡
        </motion.div>
      ))}

      {/* Achievement Banner */}
      <AnimatePresence>
        {achievement && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 z-50 inline-flex items-center gap-2 sm:gap-3 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#1C1C1C] border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] text-[11px] sm:text-xs font-mono font-bold text-white max-w-[90vw] text-center"
          >
            <Award className="w-4 h-4 text-white animate-bounce shrink-0" />
            <span className="truncate">{achievement}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PLAYABLE MINI-GAME OVERLAY */}
      {isPlayingGame && (
        <div className="absolute inset-0 z-40 pointer-events-none">
          
          {/* Mini Game HUD Header */}
          <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 sm:gap-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#111111]/95 backdrop-blur-md border border-emerald-500/40 shadow-2xl shadow-emerald-500/20 font-mono text-white pointer-events-auto max-w-[95vw]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-spin" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-emerald-400 font-bold">SCORE:</span>
              <span className="text-sm sm:text-lg font-black text-white">{gameScore} PTS</span>
            </div>
            <div className="w-[1px] h-4 bg-white/20" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-400 font-bold">TIME:</span>
              <span className={`text-sm sm:text-lg font-black ${timeLeft <= 3 ? "text-red-500 animate-ping" : "text-white"}`}>
                {timeLeft}s
              </span>
            </div>
            <button
              onClick={() => setIsPlayingGame(false)}
              className="text-[11px] sm:text-xs text-white/50 hover:text-white ml-1 underline cursor-pointer"
            >
              Exit
            </button>
          </div>

          {/* Active Target Tech Orbs */}
          {!gameFinished && (
            <div className="absolute inset-0 pointer-events-none z-40">
              {orbs.map((orb) => (
                <motion.button
                  key={orb.id}
                  onClick={(e) => popOrb(orb.id, e)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: orb.scale, opacity: 1, y: [0, -12, 0] }}
                  transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.85 }}
                  style={{ top: `${orb.top}%`, left: `${orb.left}%` }}
                  className={`absolute pointer-events-auto px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-mono text-[10px] sm:text-xs font-extrabold shadow-2xl flex items-center gap-1 cursor-pointer transition-transform ${orb.color}`}
                >
                  <span>⚡ {orb.label}</span>
                </motion.button>
              ))}
            </div>
          )}

          {/* Game Over Screen */}
          {gameFinished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md pointer-events-auto px-4"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-[#161616] border border-emerald-500/40 text-center max-w-sm sm:max-w-md shadow-2xl w-full">
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-3 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-black font-mono text-white mb-1">GAME OVER!</h3>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono font-bold mb-4">
                  FINAL SCORE: {gameScore} PTS ⚡
                </p>
                <p className="text-xs text-white/70 mb-6">
                  You caught Kumar Raju's core tech skills in 15 seconds!
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <button
                    onClick={startMiniGame}
                    className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-mono font-bold text-xs hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-emerald-500/30"
                  >
                    <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>PLAY AGAIN</span>
                  </button>
                  <button
                    onClick={() => setIsPlayingGame(false)}
                    className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/10 text-white font-mono font-bold text-xs hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    EXIT
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      )}

      {/* 1. Giant Background Typography (KUMAR Left / RAJU Right) */}
      <div className="absolute top-[26%] sm:top-[28%] -translate-y-1/2 w-full flex justify-between items-center pointer-events-none select-none z-0 px-1 sm:px-6 lg:px-12">
        <span className="text-giant-title text-right flex-1 pr-2 sm:pr-14 md:pr-20 lg:pr-28 transition-colors duration-500">
          KUMAR
        </span>
        <span className="text-giant-title text-left flex-1 pl-2 sm:pl-14 md:pl-20 lg:pl-28 transition-colors duration-500">
          RAJU
        </span>
      </div>

      {/* 2. Centered Subject Image */}
      <div className="relative z-10 w-full h-full max-w-4xl lg:max-w-5xl px-0 sm:px-4 flex items-end justify-center">
        <div className="relative w-full h-[90vh] sm:h-[84vh] md:h-[88%] max-h-[750px] scale-125 xs:scale-120 sm:scale-100 origin-bottom">
          <Image
            src={isLightTheme ? "/kumar-raju-image2.png" : "/kumar-raju-image.png"}
            alt="Kumar Raju Portfolio Visual"
            fill
            priority
            className="object-contain object-bottom transition-all duration-700"
          />
        </div>
      </div>

      {/* 3. GAMIFIED XP SCORE HUD (Bottom Left) */}
      <div 
        onClick={(e) => {
          e.stopPropagation();
          addXp(100, "Secret Node Unlocked", e);
          triggerAchievement("SECRET DISCOVERED: +100 XP!");
        }}
        className={`absolute bottom-3 left-3 sm:bottom-8 sm:left-8 z-20 inline-flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl backdrop-blur-md cursor-pointer transition-all shadow-2xl group max-w-[150px] sm:max-w-none ${
          isLightTheme ? "bg-white/90 border border-gray-300 hover:border-gray-500 text-gray-900" : "bg-[#000000]/85 border border-[#262626] hover:border-white/50 text-white"
        }`}
      >
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs group-hover:scale-110 transition-transform shrink-0 ${
          isLightTheme ? "bg-gray-100 text-gray-900 border border-gray-300" : "bg-white/10 text-white border border-white/20"
        }`}>
          LVL {level}
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className={`text-[11px] sm:text-xs font-mono font-bold tracking-wider truncate ${isLightTheme ? "text-gray-900" : "text-white"}`}>
              {xp} <span className={isLightTheme ? "text-gray-500" : "text-[#AAAAAA]"}>XP</span>
            </span>
            <span className={`text-[9px] sm:text-[10px] font-mono uppercase hidden xs:inline ${isLightTheme ? "text-gray-400" : "text-[#DCDCDC]/50"}`}>
              / {level * 300}
            </span>
          </div>
          <div className={`w-16 sm:w-24 h-1 sm:h-1.5 rounded-full overflow-hidden mt-1 ${isLightTheme ? "bg-gray-200" : "bg-[#222222]"}`}>
            <div 
              className={`h-full transition-all duration-300 ${isLightTheme ? "bg-black" : "bg-white"}`}
              style={{ width: `${Math.min(100, (xp / (level * 300)) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4. Floating Bottom Right Short Description */}
      <div className={`absolute bottom-3 right-3 sm:bottom-8 sm:right-8 z-20 max-w-[155px] xs:max-w-[200px] sm:max-w-xs text-right backdrop-blur-md p-2.5 sm:p-4 rounded-xl shadow-2xl transition-all ${
        isLightTheme ? "bg-white/90 border border-gray-300 text-gray-900" : "bg-[#000000]/80 border border-[#222222] text-white"
      }`}>
        <div className="flex items-center justify-end gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse shrink-0 ${isLightTheme ? "bg-black" : "bg-white"}`} />
          <span className={`text-[9px] sm:text-xs font-mono uppercase tracking-widest truncate ${isLightTheme ? "text-gray-500" : "text-[#DCDCDC]/75"}`}>
            FULL-STACK ARCHITECT
          </span>
        </div>
        <p className={`text-[10px] sm:text-sm font-medium leading-tight sm:leading-snug ${isLightTheme ? "text-gray-800" : "text-white/90"}`}>
          Crafting web apps & digital experiences.
        </p>
      </div>

    </section>
  );
}
