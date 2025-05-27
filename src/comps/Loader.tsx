import React from "react";
import "../App.css";

interface LoaderProps {
  size?: number; // px
  color?: string;
  label?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 48, color = "#7460ee", label = "Loading..." }) => (
  <div className="loader-container" role="status" aria-live="polite">
    <span
      className="loader-spinner"
      style={{ width: size, height: size, borderTopColor: color }}
      aria-hidden="true"
    />
    <span className="loader-label">{label}</span>
  </div>
);

export default Loader;
