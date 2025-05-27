import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

interface SocialEmbedWithLoaderProps {
  children: React.ReactNode;
  label?: string;
  width?: number | string;
  height?: number | string;
}

const SocialEmbedWithLoader: React.FC<SocialEmbedWithLoaderProps> = ({
  children,
  label = "Loading social embed...",
  width = 340,
  height = 480,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Poll for iframe and listen for load
    const checkIframe = () => {
      const iframe = container.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setLoaded(true));
        // If already loaded (cached), set loaded
        if (iframe.complete || iframe.readyState === "complete") {
          setLoaded(true);
        }
        return true;
      }
      return false;
    };
    if (!checkIframe()) {
      // Retry until iframe appears
      const interval = setInterval(() => {
        if (checkIframe()) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [children]);

  return (
    <div style={{ width, minHeight: height, position: "relative" }} ref={containerRef}>
      {!loaded && (
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "#fff8", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Loader size={32} label={label} />
        </div>
      )}
      <div style={{ opacity: loaded ? 1 : 0.2, transition: "opacity 0.3s" }}>{children}</div>
    </div>
  );
};

export default SocialEmbedWithLoader;
