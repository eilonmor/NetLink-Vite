import React from "react";
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';
import SocialEmbedWithLoader from "../SocialEmbedWithLoader";
import type { SocialKey } from "./SocialRuler";

interface SocialEmbedProps {
  selected: SocialKey;
  embedSize: { width: number; height: number };
}

export const SocialEmbed: React.FC<SocialEmbedProps> = ({ selected, embedSize }) => {
  if (selected === "instagram") {
    return (
      <SocialEmbedWithLoader label="Loading Instagram..." width={embedSize.width} height={embedSize.height}>
        <InstagramEmbed url="https://www.instagram.com/leomessi/" width={embedSize.width} />
      </SocialEmbedWithLoader>
    );
  }
  if (selected === "tiktok") {
    return (
      <SocialEmbedWithLoader label="Loading TikTok..." width={embedSize.width} height={embedSize.height}>
        <TikTokEmbed url="https://www.tiktok.com/@messimaniacos.10" width={embedSize.width} />
      </SocialEmbedWithLoader>
    );
  }
  if (selected === "facebook") {
    return (
      <div style={{ width: embedSize.width, height: embedSize.height, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f8fa', borderRadius: 12 }}>
        <span style={{ color: '#888' }}>Facebook embed not implemented</span>
      </div>
    );
  }
  if (selected === "linkedin") {
    return (
      <div style={{ width: embedSize.width, height: embedSize.height, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f8fa', borderRadius: 12 }}>
        <span style={{ color: '#888' }}>LinkedIn embed not implemented</span>
      </div>
    );
  }
  return null;
};
