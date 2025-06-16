"use client";
import React, { useEffect, useState, useRef } from "react";

const AltCutoutSVG = ({ frameCount = 5, interval = 150 }) => {
  const [frame, setFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  // Animation loop
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % frameCount);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, frameCount, interval]);

  // Detect if component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <img
        src={`/assets/altFrames/alt-${frame + 1}.svg`}
        alt={`ALT frame ${frame}`}
        style={{
          width: "200px",
          height: "180px",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default AltCutoutSVG;
