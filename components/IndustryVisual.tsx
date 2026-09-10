import type { CSSProperties } from "react";

export function industryImageStyle(index: number): CSSProperties {
  const groupStart = Math.floor(index / 5) * 5 + 1;
  return {
    backgroundImage: `url(/industries/industries-${String(groupStart).padStart(2, "0")}-${String(groupStart + 4).padStart(2, "0")}.webp)`,
    backgroundPosition: `${(index % 5) * 25}% center`,
  };
}
