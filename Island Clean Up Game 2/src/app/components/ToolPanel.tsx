import { motion } from "motion/react";
import { IconFishingNet, IconGrabberArm, IconOilAbsorber, IconNetCutter } from "./GameIcons";

export type ToolId = "net" | "grabber" | "absorber" | "cutter";

interface Tool {
  id: ToolId;
  Icon: React.FC<{ size?: number }>;
  label: string;
  targets: string;
}

const TOOLS: Tool[] = [
  { id: "net",      Icon: IconFishingNet,  label: "Fishing Net",  targets: "Bottles & Bags" },
  { id: "grabber",  Icon: IconGrabberArm,  label: "Grabber Arm",  targets: "Cans & Tires"   },
  { id: "absorber", Icon: IconOilAbsorber, label: "Oil Absorber", targets: "Oil Slicks"      },
  { id: "cutter",   Icon: IconNetCutter,   label: "Net Cutter",   targets: "Ghost Nets"      },
];

interface ToolPanelProps {
  activeTool: ToolId | null;
  onSelectTool: (id: ToolId) => void;
}

export function ToolPanel({ activeTool, onSelectTool }: ToolPanelProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: "#67e8f9" }}>
        Tools
      </p>
      {TOOLS.map((tool) => {
        const active = activeTool === tool.id;
        return (
          <motion.button
            key={tool.id}
            onClick={() => onSelectTool(tool.id)}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-left"
            style={{
              background: active ? "rgba(245,200,66,0.2)" : "rgba(255,255,255,0.06)",
              border: active ? "1.5px solid rgba(245,200,66,0.65)" : "1.5px solid rgba(255,255,255,0.1)",
              color: "#ffffff",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div
              className="rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                width: 40,
                height: 40,
                background: active ? "rgba(245,200,66,0.15)" : "rgba(255,255,255,0.08)",
              }}
            >
              <tool.Icon size={26} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{tool.label}</div>
              <div className="text-xs truncate" style={{ color: "rgba(168,220,229,0.75)" }}>
                {tool.targets}
              </div>
            </div>
            {active && (
              <motion.div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "#fde047" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
