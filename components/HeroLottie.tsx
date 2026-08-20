"use client";

import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";
import animationData from "@/data/live-chatbot.json";

export function HeroLottie() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="hero-lottie" role="img" aria-label="Asistente virtual animado">
      <Lottie
        src={animationData}
        autoplay={!reduceMotion}
        loop={!reduceMotion}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
