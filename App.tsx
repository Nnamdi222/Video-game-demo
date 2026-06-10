import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WaveLayer } from "./components/WaveLayer";
import { DebrisItem, DebrisType } from "./components/DebrisItem";
import { ToolPanel, ToolId } from "./components/ToolPanel";
import { BubbleParticles } from "./components/BubbleParticle";
import {
  IconPalmTree,
  IconSeashell,
  IconSeagull,
  IconSun,
  IconTrophy,
  IconIsland,
  IconBrokenHeart,
  IconCheckCircle,
  IconFishingNet,
  IconGrabberArm,
  IconOilAbsorber,
  IconNetCutter,
  IconPlasticBottle,
  IconPlasticBag,
  IconOilSlick,
  IconTinCan,
  IconTire,
  IconGhostNet,
} from "./components/GameIcons";

interface DebrisObject {
  id: string;
  type: DebrisType;
  x: number;
  y: number;
  collected: boolean;
  points: number;
}

const DEBRIS_TYPES: DebrisType[] = ["bottle", "bag", "oil", "can", "tire", "net"];
const DEBRIS_POINTS: Record<DebrisType, number> = {
  bottle: 10,
  bag: 10,
  oil: 25,
  can: 15,
  tire: 30,
  net: 40,
};

function generateDebris(count: number): DebrisObject[] {
  return Array.from({ length: count }, (_, i) => {
    const type = DEBRIS_TYPES[Math.floor(Math.random() * DEBRIS_TYPES.length)];
    return {
      id: `debris-${i}-${Date.now()}`,
      type,
      x: 8 + Math.random() * 76,
      y: 10 + Math.random() * 78,
      collected: false,
      points: DEBRIS_POINTS[type],
    };
  });
}

const LEVEL_CONFIGS = [
  { label: "Calm Waters",  count: 8,  target: 8,  timeLimit: 90 },
  { label: "Rising Tide",  count: 12, target: 12, timeLimit: 80 },
  { label: "Toxic Surge",  count: 16, target: 14, timeLimit: 70 },
  { label: "Deep Crisis",  count: 20, target: 16, timeLimit: 60 },
];

type GameState = "menu" | "playing" | "levelComplete" | "gameOver" | "victory";

const TOOL_GUIDE = [
  { Icon: IconFishingNet,  label: "Fishing Net",  desc: "Bottles & Bags" },
  { Icon: IconGrabberArm,  label: "Grabber Arm",  desc: "Cans & Tires"   },
  { Icon: IconOilAbsorber, label: "Oil Absorber", desc: "Oil Slicks"      },
  { Icon: IconNetCutter,   label: "Net Cutter",   desc: "Ghost Nets"      },
];

const DEBRIS_GUIDE = [
  { Icon: IconPlasticBottle, label: "Plastic Bottle" },
  { Icon: IconPlasticBag,    label: "Plastic Bag"    },
  { Icon: IconOilSlick,      label: "Oil Slick"      },
  { Icon: IconTinCan,        label: "Tin Can"         },
  { Icon: IconTire,          label: "Old Tire"        },
  { Icon: IconGhostNet,      label: "Ghost Net"       },
];

export default function App() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [level, setLevel] = useState(0);
  const [debris, setDebris] = useState<DebrisObject[]>([]);
  const [activeTool, setActiveTool] = useState<ToolId | null>(null);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90);
  const [collectedCount, setCollectedCount] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; id: number } | null>(null);

  const config = LEVEL_CONFIGS[Math.min(level, LEVEL_CONFIGS.length - 1)];

  const startLevel = useCallback((lvl: number) => {
    const cfg = LEVEL_CONFIGS[Math.min(lvl, LEVEL_CONFIGS.length - 1)];
    setDebris(generateDebris(cfg.count));
    setActiveTool(null);
    setScore(0);
    setCollectedCount(0);
    setTimeLeft(cfg.timeLimit);
    setGameState("playing");
  }, []);

  useEffect(() => {
    if (gameState !== "playing") return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setDebris((prev) => {
            const collected = prev.filter((d) => d.collected).length;
            const target = LEVEL_CONFIGS[Math.min(level, LEVEL_CONFIGS.length - 1)].target;
            if (collected >= target) {
              setGameState("levelComplete");
            } else {
              setGameState("gameOver");
            }
            return prev;
          });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState, level]);

  const handleCollect = useCallback(
    (id: string) => {
      setDebris((prev) => {
        const next = prev.map((d) => (d.id === id ? { ...d, collected: true } : d));
        const collected = next.filter((d) => d.collected).length;
        const item = prev.find((d) => d.id === id);
        if (item) {
          const pts = item.points;
          setScore((s) => s + pts);
          setCollectedCount(collected);
          setFeedback({ text: `+${pts}`, id: Date.now() });
          setTimeout(() => setFeedback(null), 900);
          const target = LEVEL_CONFIGS[Math.min(level, LEVEL_CONFIGS.length - 1)].target;
          if (collected >= target) {
            setTimeout(() => setGameState("levelComplete"), 400);
          }
        }
        return next;
      });
    },
    [level]
  );

  const handleLevelComplete = () => {
    const newTotal = totalScore + score;
    setTotalScore(newTotal);
    if (level + 1 >= LEVEL_CONFIGS.length) {
      setGameState("victory");
    } else {
      const nextLevel = level + 1;
      setLevel(nextLevel);
      startLevel(nextLevel);
    }
  };

  const handleRestart = () => {
    setLevel(0);
    setTotalScore(0);
    setGameState("menu");
  };

  const pollutionPercent = Math.max(0, 100 - Math.round((collectedCount / config.count) * 100));
  const timePercent = (timeLeft / config.timeLimit) * 100;

  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none" style={{ background: "#062d3c" }}>

      {/* Sky */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #0a1628 0%, #1a4a6e 30%, #1e7fa8 55%, #0d8fa5 80%, #0a7a8f 100%)" }}
      />

      {/* Sun */}
      <motion.div
        className="absolute"
        style={{ top: 20, right: 70 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <IconSun size={90} />
      </motion.div>

      {/* Clouds */}
      {[
        { x: "12%", y: 60, w: 160 },
        { x: "40%", y: 45, w: 120 },
        { x: "68%", y: 70, w: 100 },
      ].map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: c.x, top: c.y, width: c.w, height: 38, background: "rgba(255,255,255,0.13)", filter: "blur(6px)" }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Ocean body */}
      <div
        className="absolute inset-x-0"
        style={{ top: "38%", bottom: 0, background: "linear-gradient(180deg, #0d9ab8 0%, #0a7a8f 40%, #05506a 100%)" }}
      />

      {/* Waves */}
      <div className="absolute inset-0 pointer-events-none" style={{ top: "30%" }}>
        <WaveLayer color="#1ab3d4" opacity={0.5} duration={9}  delay={0}   yOffset="55%" />
        <WaveLayer color="#0fa8c8" opacity={0.6} duration={7}  delay={1.5} yOffset="48%" />
        <WaveLayer color="#0d9ab8" opacity={0.8} duration={5}  delay={0.5} yOffset="40%" />
        <WaveLayer color="#0a7a8f" opacity={1}   duration={6}  delay={1}   yOffset="20%" />
      </div>

      {/* Bubbles */}
      <div className="absolute inset-x-0 pointer-events-none" style={{ top: "45%", bottom: 0 }}>
        <BubbleParticles />
      </div>

      {/* Sandy beach */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: "14%" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C360,0 720,60 1080,20 C1260,0 1380,30 1440,30 L1440,80 L0,80 Z" fill="#c8a96a" />
          <path d="M0,50 C360,20 720,70 1080,40 C1260,20 1380,50 1440,50 L1440,80 L0,80 Z" fill="#d4b87a" />
        </svg>
        <div className="absolute bottom-2 left-6">
          <IconPalmTree size={52} />
        </div>
        <div className="absolute bottom-2 right-10">
          <IconPalmTree size={48} />
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <IconSeashell size={34} />
        </div>
      </div>

      {/* Seagulls */}
      {[22, 52, 74].map((x, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${x}%`, top: `${16 + i * 5}%` }}
          animate={{ x: [0, 50, 0], y: [0, -8, 0] }}
          transition={{ duration: 9 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <IconSeagull size={26 + i * 2} />
        </motion.div>
      ))}

      {/* ── GAMEPLAY ── */}
      {gameState === "playing" && (
        <>
          {/* Debris */}
          <div className="absolute inset-0" style={{ top: "35%", bottom: "14%" }}>
            {debris.map((d) => (
              <DebrisItem
                key={d.id}
                id={d.id}
                type={d.type}
                x={d.x}
                y={d.y}
                collected={d.collected}
                onCollect={handleCollect}
                activeTool={activeTool}
              />
            ))}
          </div>

          {/* HUD */}
          <div className="absolute top-0 inset-x-0 p-3 flex items-center gap-3 z-30">
            <div
              className="flex-1 rounded-2xl px-4 py-2 flex items-center gap-4"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="text-center">
                <div className="text-xs uppercase tracking-wider" style={{ color: "#67e8f9" }}>Level</div>
                <div className="font-bold text-white">{level + 1}</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-xs uppercase tracking-wider" style={{ color: "#67e8f9" }}>Score</div>
                <div className="font-bold" style={{ color: "#fde047" }}>{score}</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <div className="text-xs uppercase tracking-wider" style={{ color: "#67e8f9" }}>Cleaned</div>
                <div className="font-bold" style={{ color: "#86efac" }}>{collectedCount}/{config.target}</div>
              </div>
              <div className="w-px h-8 bg-white/20 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="uppercase tracking-wider" style={{ color: "#67e8f9" }}>Pollution</span>
                  <span className="text-white">{pollutionPercent}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: pollutionPercent > 60 ? "#ff6b35" : pollutionPercent > 30 ? "#f5c842" : "#2ab08a" }}
                    animate={{ width: `${pollutionPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              <div className="w-px h-8 bg-white/20 flex-shrink-0" />
              <div className="text-center">
                <div className="text-xs uppercase tracking-wider" style={{ color: "#67e8f9" }}>Time</div>
                <div className={`font-bold ${timeLeft <= 15 ? "animate-pulse" : ""}`} style={{ color: timeLeft <= 15 ? "#f87171" : "#ffffff" }}>
                  {timeLeft}s
                </div>
              </div>
              <div className="w-16">
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: timePercent > 50 ? "#2ab08a" : timePercent > 25 ? "#f5c842" : "#f87171" }}
                    animate={{ width: `${timePercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tool Panel */}
          <div className="absolute right-3 z-30" style={{ top: 72, bottom: "16%" }}>
            <div
              className="rounded-2xl p-3 h-full overflow-y-auto w-52"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <ToolPanel activeTool={activeTool} onSelectTool={setActiveTool} />
              <p className="mt-4 text-xs text-center leading-snug" style={{ color: "rgba(168,220,229,0.7)" }}>
                {activeTool ? "Click matching debris to clean!" : "Select a tool above"}
              </p>
            </div>
          </div>

          {/* Level badge */}
          <div className="absolute left-4 z-30" style={{ top: 72 }}>
            <div
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "rgba(42,176,138,0.3)", border: "1px solid rgba(42,176,138,0.5)", color: "#7ef0cc" }}
            >
              {config.label}
            </div>
          </div>

          {/* Score pop */}
          <AnimatePresence>
            {feedback && (
              <motion.div
                key={feedback.id}
                className="absolute left-1/2 z-50 font-bold pointer-events-none"
                style={{ top: "42%", transform: "translateX(-50%)", fontSize: 28, color: "#f5c842", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -55 }}
                transition={{ duration: 0.9 }}
              >
                {feedback.text} pts
              </motion.div>
            )}
          </AnimatePresence>

          {/* No tool selected hint */}
          {!activeTool && (
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "rgba(255,107,53,0.25)", border: "1px solid rgba(255,107,53,0.5)", color: "#ffb399" }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Select a tool from the right panel
            </motion.div>
          )}
        </>
      )}

      {/* ── MENU ── */}
      <AnimatePresence>
        {gameState === "menu" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-3xl p-8 max-w-lg w-full mx-4"
              style={{ background: "rgba(6,45,60,0.92)", backdropFilter: "blur(16px)", border: "1.5px solid rgba(255,255,255,0.12)" }}
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <IconIsland size={72} />
                </motion.div>
                <div>
                  <h1 className="text-white" style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.5px" }}>
                    Island Cleanup
                  </h1>
                  <p style={{ color: "#a8dce5", fontSize: 14, lineHeight: 1.5 }}>
                    The ocean is polluted — use the right tools to clean it before time runs out.
                  </p>
                </div>
              </div>

              {/* Tool guide */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "#67e8f9" }}>Cleanup Tools</p>
                <div className="grid grid-cols-2 gap-2">
                  {TOOL_GUIDE.map((t) => (
                    <div key={t.label} className="flex items-center gap-2 rounded-xl p-2" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="rounded-lg p-1" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <t.Icon size={28} />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{t.label}</div>
                        <div className="text-xs" style={{ color: "#a8dce5" }}>{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Debris guide */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "#67e8f9" }}>Debris to Remove</p>
                <div className="grid grid-cols-3 gap-2">
                  {DEBRIS_GUIDE.map((d) => (
                    <div key={d.label} className="flex flex-col items-center gap-1 rounded-xl py-2 px-1" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <d.Icon size={36} />
                      <span className="text-xs text-center" style={{ color: "#a8dce5" }}>{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={() => { setLevel(0); setTotalScore(0); startLevel(0); }}
                className="w-full py-4 rounded-2xl font-bold"
                style={{ background: "linear-gradient(135deg, #f5c842, #f5a623)", color: "#1a2a0a", fontSize: 18 }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(245,200,66,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                Start Cleaning
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LEVEL COMPLETE ── */}
      <AnimatePresence>
        {gameState === "levelComplete" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            style={{ background: "rgba(0,0,0,0.55)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-3xl p-8 max-w-sm w-full mx-4 text-center"
              style={{ background: "rgba(6,45,60,0.95)", backdropFilter: "blur(16px)", border: "1.5px solid rgba(42,176,138,0.4)" }}
              initial={{ scale: 0.7, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 0.8, repeat: 3 }}
                className="flex justify-center mb-3"
              >
                <IconCheckCircle size={64} />
              </motion.div>
              <h2 className="text-white mb-2" style={{ fontSize: 26, fontWeight: 800 }}>Level {level + 1} Complete!</h2>
              <p className="mb-4 text-sm" style={{ color: "#7ef0cc" }}>
                {collectedCount} items removed. The waters are cleaner!
              </p>
              <div className="rounded-2xl p-4 mb-5" style={{ background: "rgba(42,176,138,0.15)", border: "1px solid rgba(42,176,138,0.3)" }}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: "#a8dce5" }}>Level Score</span>
                  <span className="font-bold" style={{ color: "#fde047" }}>{score}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: "#a8dce5" }}>Running Total</span>
                  <span className="font-bold" style={{ color: "#fde047" }}>{totalScore + score}</span>
                </div>
              </div>
              <motion.button
                onClick={handleLevelComplete}
                className="w-full py-3 rounded-2xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, #2ab08a, #0fa8c8)" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {level + 1 >= LEVEL_CONFIGS.length ? "Claim Victory" : "Next Level"}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── GAME OVER ── */}
      <AnimatePresence>
        {gameState === "gameOver" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            style={{ background: "rgba(0,0,0,0.65)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-3xl p-8 max-w-sm w-full mx-4 text-center"
              style={{ background: "rgba(6,25,40,0.95)", backdropFilter: "blur(16px)", border: "1.5px solid rgba(255,107,53,0.4)" }}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <div className="flex justify-center mb-3">
                <IconBrokenHeart size={64} />
              </div>
              <h2 className="text-white mb-2" style={{ fontSize: 26, fontWeight: 800 }}>Time's Up!</h2>
              <p className="mb-4 text-sm" style={{ color: "#ffa08a" }}>
                You needed {config.target} items but only cleaned {collectedCount}. Try again!
              </p>
              <div className="rounded-2xl p-4 mb-5" style={{ background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.3)" }}>
                <div className="flex justify-between text-sm">
                  <span style={{ color: "#a8dce5" }}>Score this attempt</span>
                  <span className="font-bold" style={{ color: "#fde047" }}>{score}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => startLevel(level)}
                  className="flex-1 py-3 rounded-2xl font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #f5c842, #f5a623)", color: "#1a2a0a" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Retry
                </motion.button>
                <motion.button
                  onClick={handleRestart}
                  className="flex-1 py-3 rounded-2xl font-bold text-sm text-white"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Main Menu
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── VICTORY ── */}
      <AnimatePresence>
        {gameState === "victory" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50"
            style={{ background: "rgba(0,0,0,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-3xl p-8 max-w-sm w-full mx-4 text-center"
              style={{ background: "rgba(6,45,60,0.97)", backdropFilter: "blur(20px)", border: "2px solid rgba(245,200,66,0.5)" }}
              initial={{ scale: 0.6, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <motion.div
                className="flex justify-center mb-3"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <IconTrophy size={72} />
              </motion.div>
              <h2 className="mb-1" style={{ fontSize: 28, fontWeight: 800, color: "#f5c842" }}>Island Saved!</h2>
              <p className="mb-4 text-sm" style={{ color: "#a8dce5", lineHeight: 1.6 }}>
                You've cleaned all the waters around the island. The ocean thanks you!
              </p>
              <div className="rounded-2xl p-5 mb-5" style={{ background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.3)" }}>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "#a8dce5" }}>Final Score</div>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#f5c842" }}>{totalScore + score}</div>
                <div className="text-xs mt-1" style={{ color: "#7ef0cc" }}>Ocean Hero Rank</div>
              </div>
              <motion.button
                onClick={handleRestart}
                className="w-full py-4 rounded-2xl font-bold"
                style={{ background: "linear-gradient(135deg, #f5c842, #f5a623)", color: "#1a2a0a", fontSize: 17 }}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(245,200,66,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                Play Again
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
