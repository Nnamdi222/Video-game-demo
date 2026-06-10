import { motion } from "motion/react";

interface WaveLayerProps {
  color: string;
  opacity: number;
  duration: number;
  delay?: number;
  yOffset?: string | number;
}

export function WaveLayer({ color, opacity, duration, delay = 0, yOffset = 0 }: WaveLayerProps) {
  return (
    <motion.div
      className="absolute inset-x-0"
      style={{ bottom: yOffset, opacity }}
      animate={{ x: [0, -80, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full" style={{ height: 80 }}>
        <motion.path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
          fill={color}
          animate={{
            d: [
              "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z",
              "M0,20 C240,60 480,20 720,60 C960,20 1200,60 1440,20 L1440,120 L0,120 Z",
              "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z",
            ],
          }}
          transition={{ duration: duration * 0.7, delay, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
