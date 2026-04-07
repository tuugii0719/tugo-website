"use client";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function Counter({ from = 0, to, duration = 2, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let start;
    let rafId;
    const animate = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      const current = from + (to - from) * eased;
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, from, to, duration, decimals]);

  return <span ref={ref}>{count}{suffix}</span>;
}
