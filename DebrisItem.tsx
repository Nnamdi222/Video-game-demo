import { motion, AnimatePresence } from "motion/react";
import {
  IconPlasticBottle,
  IconPlasticBag,
  IconOilSlick,
  IconTinCan,
  IconTire,
  IconGhostNet,
} from "./GameIcons";

export type DebrisType = "bottle" | "bag" | "oil" | "can" | "tire" | "net";

interface DebrisItemProps {
  id: string;
  type: DebrisType;
  x: number;
  y: number;
  collected: boolean;
  onCollect: (id: string) => void;
  activeTool: string | null;
}

const DEBRIS_META: Record<DebrisType, { label: string; requiredTool: string[]; Icon: React.FC<{ size?: number }> }> = {
  bottle: { label: "Plastic Bottle", requiredTool: ["net", "grabber"], Icon: IconPlasticBottle },
  bag:    { label: "Plastic Bag",    requiredTool: ["net", "grabber"], Icon: IconPlasticBag },
  oil:    { label: "Oil Slick",      requiredTool: ["absorber"],       Icon: IconOilSlick },
  can:    { label: "Tin Can",        requiredTool: ["net", "grabber"], Icon: IconTinCan },
  tire:   { label: "Old Tire",       requiredTool: ["grabber"],        Icon: IconTire },
  net:    { label: "Ghost Net",      requiredTool: ["cutter"],         Icon: IconGhostNet },
};

export function DebrisItem({ id, type, x, y, collected, onCollect, activeTool }: DebrisItemProps) {
  const meta = DEBRIS_META[type];
  const canCollect = !!activeTool && meta.requiredTool.includes(activeTool);
  const { Icon } = meta;

  return (
    <AnimatePresence>
      {!collected && (
        <motion.div
          key={id}
          className="absolute"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: "translate(-50%, -50%)",
            cursor: canCollect ? "pointer" : "not-allowed",
            zIndex: 20,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [1, 1.04, 1], y: [0, -7, 0] }}
          exit={{ opacity: 0, scale: 0, y: -30 }}
          transition={{
            opacity: { duration: 0.4 },
            scale: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
          }}
          onClick={() => canCollect && onCollect(id)}
          title={canCollect ? `Collect ${meta.label}` : `Need: ${meta.requiredTool.join(" or ")}`}
          whileHover={canCollect ? { scale: 1.25, filter: "drop-shadow(0 0 10px rgba(245,200,66,0.85))" } : { scale: 1.05 }}
          whileTap={canCollect ? { scale: 0.85 } : {}}
        >
          <Icon size={48} />
          {canCollect && (
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ inset: -6, border: "2px solid rgba(253,224,71,0.75)", borderRadius: "50%" }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.88, 1.1, 0.88] }}
              transition={{ duration: 1.3, repeat: Infinity }}
            />
          )}
          {!canCollect && activeTool && (
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ inset: -4, border: "2px solid rgba(255,100,100,0.35)", borderRadius: "50%" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
