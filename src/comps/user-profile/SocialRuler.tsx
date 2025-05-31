import React from "react";

import instegram from '../../assets/Instagram.jpg';
import tiktok from '../../assets/tiktok.png';
import facebook from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';

const SOCIALS = [
  { key: "instagram", label: "Instagram", icon: instegram },
  { key: "tiktok", label: "TikTok", icon: tiktok },
  { key: "facebook", label: "Facebook", icon: facebook },
  { key: "linkedin", label: "LinkedIn", icon: linkedin },
];

type SocialKey = "instagram" | "tiktok" | "facebook" | "linkedin";

interface SocialRulerProps {
  selected: SocialKey;
  onSelect: (key: SocialKey) => void;
}

export const SocialRuler: React.FC<SocialRulerProps> = ({ selected, onSelect }) => (
  <div style={{ display: "flex", gap: 16, justifyContent: "center", margin: "1rem 0" }}>
    {SOCIALS.map((s) => (
      <button
        key={s.key}
        onClick={() => onSelect(s.key as SocialKey)}
        style={{
          border: "none",
          background: selected === s.key ? "#e24a60" : "#fff",
          borderRadius: 8,
          padding: 8,
          boxShadow: selected === s.key ? "0 2px 8px #e24a6022" : undefined,
          outline: selected === s.key ? "2px solid #e24a60" : undefined,
          cursor: "pointer",
          transition: "all 0.2s",
          display: 'flex', alignItems: 'center', gap: 8
        }}
        aria-label={s.label}
        aria-pressed={selected === s.key}
      >
        <img src={s.icon} alt={s.label} style={{ width: 24, height: 24, opacity: selected === s.key ? 1 : 0.6 }} />
        <span style={{ fontWeight: selected === s.key ? 700 : 400, color: selected === s.key ? '#fff' : '#333', fontSize: 16 }}>{s.label}</span>
      </button>
    ))}
  </div>
);

export type { SocialKey };
