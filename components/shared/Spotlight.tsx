"use client";

import { useRef, useEffect, useState } from "react";

export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    function onMove(e: PointerEvent) {
      const rect = parent!.getBoundingClientRect();
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
    function onLeave() {
      setPos({ x: 50, y: 50 });
    }

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 ${className}`}
      style={{
        background: `radial-gradient(circle 250px at ${pos.x}% ${pos.y}%, rgba(139, 92, 246, 0.15), transparent 70%)`,
      }}
    />
  );
}
