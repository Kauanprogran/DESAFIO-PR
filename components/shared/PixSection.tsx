"use client";

import { useState } from "react";

const PIX_KEY = "helppet@ajuda.com.br";

export function PixSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
      <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center border border-purple-500/10">
        <div className="text-center">
          <span className="text-6xl block mb-2">📱</span>
          <span className="text-xs text-purple-400/50">QR Code Pix</span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-purple-500/10 mb-4">
        <code className="flex-1 text-sm text-purple-200/70 text-left truncate">
          {PIX_KEY}
        </code>
        <button
          onClick={handleCopy}
          className="text-xs font-semibold text-purple-300 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
        >
          {copied ? "Copiado ✓" : "Copiar"}
        </button>
      </div>
    </div>
  );
}
