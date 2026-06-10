interface IconProps {
  size?: number;
  className?: string;
}

export function IconPlasticBottle({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 60" fill="none">
      <rect x="14" y="2" width="12" height="5" rx="2" fill="#b0d4e8" stroke="#7ab3cc" strokeWidth="1"/>
      <path d="M10 10 Q8 16 8 22 L8 50 Q8 54 12 54 L28 54 Q32 54 32 50 L32 22 Q32 16 30 10 Z" fill="#d6ecf7" stroke="#7ab3cc" strokeWidth="1.2"/>
      <path d="M10 10 L30 10 Q32 16 32 22 L32 26 Q20 30 8 26 L8 22 Q8 16 10 10 Z" fill="#c2e0f0" stroke="#7ab3cc" strokeWidth="0.8"/>
      <ellipse cx="20" cy="38" rx="8" ry="4" fill="rgba(255,255,255,0.3)"/>
      <path d="M13 30 Q20 27 27 30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="none"/>
      <path d="M12 42 Q20 39 28 42" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
      <rect x="14" y="7" width="12" height="3" rx="1" fill="#90c4de" stroke="#6aa5bc" strokeWidth="0.8"/>
    </svg>
  );
}

export function IconPlasticBag({ size = 44 }: IconProps) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 44 48" fill="none">
      <path d="M16 6 Q16 2 22 2 Q28 2 28 6" stroke="#90b8d4" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M14 8 L12 10 Q6 20 8 34 Q9 44 22 44 Q35 44 36 34 Q38 20 32 10 L30 8 Z" fill="#c8dff0" stroke="#8ab0cc" strokeWidth="1.2"/>
      <path d="M14 8 L30 8 L32 10 Q30 14 22 14 Q14 14 12 10 Z" fill="#b0cce0" stroke="#8ab0cc" strokeWidth="0.8"/>
      <path d="M12 22 Q22 26 32 22" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" fill="none"/>
      <path d="M10 30 Q22 35 34 30" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
      <path d="M16 6 Q16 2 22 2" stroke="#7a9eb8" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M28 6 Q28 2 22 2" stroke="#7a9eb8" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function IconOilSlick({ size = 54 }: IconProps) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 54 32" fill="none">
      <ellipse cx="27" cy="18" rx="25" ry="12" fill="#1a1a2e" opacity="0.85"/>
      <ellipse cx="22" cy="16" rx="12" ry="5" fill="url(#oilShimmer1)" opacity="0.7"/>
      <ellipse cx="34" cy="20" rx="8" ry="3.5" fill="url(#oilShimmer2)" opacity="0.6"/>
      <ellipse cx="18" cy="22" rx="6" ry="2.5" fill="url(#oilShimmer3)" opacity="0.5"/>
      <defs>
        <radialGradient id="oilShimmer1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9b5de5"/>
          <stop offset="40%" stopColor="#f15bb5"/>
          <stop offset="80%" stopColor="#00bbf9"/>
          <stop offset="100%" stopColor="#00f5d4"/>
        </radialGradient>
        <radialGradient id="oilShimmer2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fee440"/>
          <stop offset="50%" stopColor="#00bbf9"/>
          <stop offset="100%" stopColor="#9b5de5"/>
        </radialGradient>
        <radialGradient id="oilShimmer3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f15bb5"/>
          <stop offset="100%" stopColor="#00f5d4"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function IconTinCan({ size = 38 }: IconProps) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 38 50" fill="none">
      <ellipse cx="19" cy="8" rx="13" ry="4" fill="#c8c8c8" stroke="#999" strokeWidth="1"/>
      <rect x="6" y="8" width="26" height="34" fill="#d4d4d4" stroke="#aaa" strokeWidth="1"/>
      <rect x="6" y="8" width="26" height="34" fill="url(#canGrad)"/>
      <ellipse cx="19" cy="42" rx="13" ry="4" fill="#b8b8b8" stroke="#999" strokeWidth="1"/>
      <rect x="8" y="12" width="22" height="26" rx="1" fill="#e8524a" opacity="0.85"/>
      <rect x="8" y="15" width="22" height="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="8" y="32" width="22" height="2" fill="rgba(255,255,255,0.2)"/>
      <path d="M15 20 L17 26 L19 22 L21 26 L23 20" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="19" cy="8" rx="9" ry="2.5" fill="#e0e0e0" stroke="#bbb" strokeWidth="0.8"/>
      <defs>
        <linearGradient id="canGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,0,0,0.15)"/>
          <stop offset="30%" stopColor="rgba(255,255,255,0.1)"/>
          <stop offset="60%" stopColor="rgba(255,255,255,0.05)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.2)"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconTire({ size = 52 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="24" fill="#2a2a2a" stroke="#111" strokeWidth="1.5"/>
      <circle cx="26" cy="26" r="18" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
      <circle cx="26" cy="26" r="10" fill="#2e2e2e"/>
      <circle cx="26" cy="26" r="6" fill="#3a3a3a" stroke="#555" strokeWidth="1"/>
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 26 + Math.cos(rad) * 10;
        const y1 = 26 + Math.sin(rad) * 10;
        const x2 = 26 + Math.cos(rad) * 18;
        const y2 = 26 + Math.sin(rad) * 18;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#444" strokeWidth="2"/>;
      })}
      <path d="M4 26 Q4 10 26 4" stroke="#444" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M26 4 Q42 4 48 16" stroke="#444" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="26" cy="26" r="24" fill="none" stroke="#3a3a3a" strokeWidth="2" strokeDasharray="4 4"/>
    </svg>
  );
}

export function IconGhostNet({ size = 50 }: IconProps) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 50 40" fill="none">
      <path d="M4 4 Q12 2 20 6 Q28 10 36 4 Q44 2 48 6" stroke="#b8a88a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M4 4 Q6 16 8 36" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
      <path d="M14 3 Q16 16 17 36" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
      <path d="M24 5 Q26 18 26 36" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
      <path d="M34 4 Q36 17 36 36" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
      <path d="M44 5 Q46 18 46 36" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
      <path d="M4 12 Q26 10 48 12" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
      <path d="M5 20 Q26 18 47 20" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
      <path d="M6 28 Q26 26 47 28" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
      <path d="M7 36 Q26 34 46 36" stroke="#b8a88a" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

/* ── Tool Icons ── */

export function IconFishingNet({ size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="18" r="12" fill="none" stroke="#8ab4e0" strokeWidth="2"/>
      <path d="M6 10 Q16 6 26 10" stroke="#8ab4e0" strokeWidth="1.5" fill="none"/>
      <line x1="16" y1="6" x2="16" y2="30" stroke="#8ab4e0" strokeWidth="1.2"/>
      <line x1="4" y1="18" x2="28" y2="18" stroke="#8ab4e0" strokeWidth="1.2"/>
      <path d="M7 11 Q11.5 14 16 12 Q20.5 10 25 11" stroke="#8ab4e0" strokeWidth="1" fill="none"/>
      <path d="M5 22 Q10.5 19 16 20 Q21.5 21 27 22" stroke="#8ab4e0" strokeWidth="1" fill="none"/>
      <path d="M8 26 Q12 24 16 25 Q20 26 24 26" stroke="#8ab4e0" strokeWidth="1" fill="none"/>
      <line x1="9" y1="8" x2="16" y2="2" stroke="#c8a86a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="2" x2="23" y2="8" stroke="#c8a86a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="2" x2="16" y2="7" stroke="#c8a86a" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconGrabberArm({ size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="14" y="2" width="4" height="12" rx="2" fill="#8a9eb8" stroke="#6a7e98" strokeWidth="1"/>
      <rect x="10" y="12" width="12" height="6" rx="3" fill="#7a8ea8" stroke="#5a6e88" strokeWidth="1"/>
      <path d="M8 18 Q4 20 4 25 Q4 29 8 29 L10 29 L10 18 Z" fill="#8a9eb8" stroke="#6a7e98" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M24 18 Q28 20 28 25 Q28 29 24 29 L22 29 L22 18 Z" fill="#8a9eb8" stroke="#6a7e98" strokeWidth="1" strokeLinejoin="round"/>
      <rect x="10" y="18" width="12" height="11" rx="1" fill="#9aaec8" stroke="#6a7e98" strokeWidth="1"/>
      <line x1="14" y1="20" x2="14" y2="28" stroke="#6a7e98" strokeWidth="1"/>
      <line x1="18" y1="20" x2="18" y2="28" stroke="#6a7e98" strokeWidth="1"/>
      <circle cx="16" cy="10" r="2" fill="#c8d4e0" stroke="#8a9eb8" strokeWidth="0.8"/>
    </svg>
  );
}

export function IconOilAbsorber({ size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="10" width="24" height="18" rx="3" fill="#f0e8d8" stroke="#c8b898" strokeWidth="1.2"/>
      <rect x="6" y="12" width="20" height="14" rx="2" fill="#e8d8c0"/>
      {[0,1,2,3].map(i => (
        <rect key={i} x={7 + i * 5} y="13" width="3" height="12" rx="1.5" fill="#d8c8a8" stroke="#c0a888" strokeWidth="0.6"/>
      ))}
      {[0,1,2].map(i => (
        <rect key={i} x="6" y={14 + i * 4} width="20" height="1.5" rx="0.75" fill="rgba(0,0,0,0.06)"/>
      ))}
      <rect x="10" y="5" width="12" height="6" rx="2" fill="#c8b898" stroke="#a89878" strokeWidth="1"/>
      <rect x="13" y="3" width="6" height="4" rx="1.5" fill="#b8a888" stroke="#9a8868" strokeWidth="0.8"/>
      <circle cx="8" cy="24" r="1.5" fill="#9ab8a8" opacity="0.6"/>
      <circle cx="14" cy="26" r="1" fill="#7a98a8" opacity="0.5"/>
      <circle cx="22" cy="23" r="1.2" fill="#6a88a8" opacity="0.4"/>
    </svg>
  );
}

export function IconNetCutter({ size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="10" cy="10" r="5" fill="none" stroke="#c8c8c8" strokeWidth="2"/>
      <circle cx="10" cy="22" r="5" fill="none" stroke="#c8c8c8" strokeWidth="2"/>
      <line x1="14" y1="13" x2="28" y2="4" stroke="#b0b0b0" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="14" y1="19" x2="28" y2="28" stroke="#b0b0b0" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="2.5" fill="#e8e8e8"/>
      <circle cx="10" cy="22" r="2.5" fill="#e8e8e8"/>
      <line x1="14" y1="14" x2="16" y2="16" stroke="#ff6644" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Environment Icons ── */

export function IconPalmTree({ size = 52 }: IconProps) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 52 72" fill="none">
      <path d="M24 70 Q26 40 28 20" stroke="#8B6914" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M28 20 Q32 10 24 14 Q16 18 22 26" fill="#4a7a28" stroke="#386020" strokeWidth="0.8"/>
      <path d="M28 20 Q38 12 32 22 Q28 28 24 26" fill="#4a7a28" stroke="#386020" strokeWidth="0.8"/>
      <path d="M28 20 Q40 22 34 30 Q30 34 26 30" fill="#5a8a34" stroke="#406824" strokeWidth="0.8"/>
      <path d="M28 20 Q14 14 18 24 Q20 30 26 28" fill="#5a8a34" stroke="#406824" strokeWidth="0.8"/>
      <path d="M28 20 Q20 26 26 34 Q28 38 30 32" fill="#4a7a28" stroke="#386020" strokeWidth="0.8"/>
      <path d="M28 20 Q30 14 36 18 Q40 22 34 26" fill="#6a9a3e" stroke="#4a7a2e" strokeWidth="0.8"/>
      <ellipse cx="24" cy="26" rx="3" ry="2" fill="#f5c842" opacity="0.8"/>
      <ellipse cx="28" cy="28" rx="2.5" ry="1.8" fill="#f5c842" opacity="0.7"/>
    </svg>
  );
}

export function IconSeashell({ size = 36 }: IconProps) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 36 28" fill="none">
      <path d="M18 26 Q4 20 4 12 Q4 4 18 4 Q32 4 32 12 Q32 20 18 26 Z" fill="#f0d8b8" stroke="#c8a878" strokeWidth="1"/>
      <path d="M18 26 L18 4" stroke="#c8a878" strokeWidth="1" strokeDasharray="2 2"/>
      <path d="M10 22 Q14 14 18 4" stroke="#d4b898" strokeWidth="0.8" fill="none"/>
      <path d="M26 22 Q22 14 18 4" stroke="#d4b898" strokeWidth="0.8" fill="none"/>
      <path d="M6 16 Q12 12 18 14 Q24 12 30 16" stroke="#c8a878" strokeWidth="0.8" fill="none"/>
      <path d="M5 12 Q11 9 18 10 Q25 9 31 12" stroke="#c8a878" strokeWidth="0.8" fill="none"/>
    </svg>
  );
}

export function IconSeagull({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 28 14" fill="none">
      <path d="M14 7 Q8 2 2 4" stroke="#d0d0d0" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M14 7 Q20 2 26 4" stroke="#d0d0d0" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M12 7 Q14 8 16 7" stroke="#c0c0c0" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function IconSun({ size = 90 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none">
      <circle cx="45" cy="45" r="22" fill="#ffe87c"/>
      <circle cx="45" cy="45" r="18" fill="#ffd740"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 45 + Math.cos(rad) * 26;
        const y1 = 45 + Math.sin(rad) * 26;
        const x2 = 45 + Math.cos(rad) * 34;
        const y2 = 45 + Math.sin(rad) * 34;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f5c842" strokeWidth={i % 2 === 0 ? 3 : 2} strokeLinecap="round"/>;
      })}
    </svg>
  );
}

export function IconTrophy({ size = 72 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <rect x="28" y="54" width="16" height="6" rx="2" fill="#c8a030"/>
      <rect x="22" y="60" width="28" height="5" rx="2" fill="#b89028"/>
      <path d="M20 10 L20 36 Q20 50 36 50 Q52 50 52 36 L52 10 Z" fill="#f5c842" stroke="#d4a820" strokeWidth="1.5"/>
      <path d="M20 14 Q10 14 10 24 Q10 34 20 34" stroke="#d4a820" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M52 14 Q62 14 62 24 Q62 34 52 34" stroke="#d4a820" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M28 54 L28 50" stroke="#c8a030" strokeWidth="2"/>
      <path d="M44 54 L44 50" stroke="#c8a030" strokeWidth="2"/>
      <path d="M26 28 L32 34 L44 22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 10 L52 10" stroke="#d4a820" strokeWidth="2"/>
    </svg>
  );
}

export function IconIsland({ size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="58" rx="28" ry="10" fill="#c8a96a"/>
      <ellipse cx="40" cy="55" rx="24" ry="8" fill="#d4b87a"/>
      <path d="M36 56 Q38 30 40 14" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M40 14 Q44 6 36 10 Q28 14 34 22" fill="#4a7a28" stroke="#386020" strokeWidth="0.6"/>
      <path d="M40 14 Q50 8 44 18 Q40 24 36 22" fill="#5a8a34" stroke="#406824" strokeWidth="0.6"/>
      <path d="M40 14 Q50 18 44 26 Q40 30 38 26" fill="#4a7a28" stroke="#386020" strokeWidth="0.6"/>
      <path d="M40 14 Q28 10 32 20 Q34 26 38 24" fill="#5a8a34" stroke="#406824" strokeWidth="0.6"/>
      <path d="M14 62 Q40 72 66 62" stroke="#a08050" strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function IconBrokenHeart({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M32 54 Q10 38 10 24 Q10 14 20 14 Q26 14 32 20 Q38 14 44 14 Q54 14 54 24 Q54 38 32 54 Z" fill="#e05050" stroke="#c03030" strokeWidth="1.5"/>
      <path d="M32 20 L28 32 L34 32 L30 44" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function IconCheckCircle({ size = 64 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="28" fill="#2ab08a" stroke="#209070" strokeWidth="1.5"/>
      <path d="M18 32 L28 42 L46 22" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function IconWave({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size * 0.4} viewBox="0 0 24 10" fill="none">
      <path d="M0 5 C4 1 8 9 12 5 C16 1 20 9 24 5" stroke="#67e8f9" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
