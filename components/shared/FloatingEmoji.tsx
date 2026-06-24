"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface FloatingEmojiProps {
  children: React.ReactNode;
  className?: string;
  factor?: number;
  delay?: number;
}

export function FloatingEmoji({ children, className, factor = 25, delay = 0 }: FloatingEmojiProps) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 25, damping: 12 });
  const sy = useSpring(py, { stiffness: 25, damping: 12 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      px.set(((e.clientX / window.innerWidth) - 0.5) * factor);
      py.set(((e.clientY / window.innerHeight) - 0.5) * factor);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [factor, px, py]);

  return (
    <motion.span
      className={className}
      style={{ x: sx, y: sy }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.12, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
