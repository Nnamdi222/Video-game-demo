import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export function BubbleParticles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 4 + Math.random() * 10,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 5,
    }));
    setBubbles(initial);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.x}%`,
            bottom: "0%",
            width: b.size,
            height: b.size,
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
          animate={{ y: [0, -(300 + Math.random() * 200)], opacity: [0, 0.7, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
