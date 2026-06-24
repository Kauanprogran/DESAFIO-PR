"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/shared/TiltCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function BancoRacaoPage() {
  const [solicitando, setSolicitando] = useState(false);
  const [doando, setDoando] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4 hero-gradient" style={{ background: "linear-gradient(-45deg, #1A1045, #78350F, #D97706, #1A1045)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.12 }}>🦴</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.12, animationDelay: "1s" }}>🐾</span>
        </div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-amber-400/40 text-amber-200 bg-white/5 backdrop-blur-sm mb-4">Solidariedade</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Banco de <span className="text-gradient bg-gradient-to-r from-amber-300 to-yellow-200">Ração</span>
          </h1>
          <p className="text-amber-200/60 text-lg max-w-xl mx-auto">Junte-se a nós para garantir que nenhum pet passe fome.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0A2E] to-transparent z-10" />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp(0.1)}>
            <TiltCard>
              <div className="card-dark card-glow rounded-2xl p-8 text-center">
                <span className="text-6xl block mb-4">📦</span>
                <h2 className="text-2xl font-bold text-white mb-4">Solicitar Ração</h2>
                <p className="text-purple-300/50 mb-6">Tutores de baixa renda podem solicitar ração gratuitamente.</p>
                <ul className="space-y-3 mb-8 text-sm text-left max-w-xs mx-auto">
                  {["Cadastro gratuito", "Retirada em pontos parceiros", "5kg de ração por mês por pet"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-purple-200/60">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0"><span className="text-emerald-400 text-xs">✓</span></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.button onClick={() => setSolicitando(!solicitando)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25">
                  {solicitando ? "✅ Solicitação enviada!" : "Solicitar ração"}
                </motion.button>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <TiltCard>
              <div className="card-highlight card-glow rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500/10 to-transparent px-4 py-1 rounded-bl-2xl">
                  <span className="text-xs font-semibold text-amber-400">💜 Solidariedade</span>
                </div>
                <span className="text-6xl block mb-4">🎁</span>
                <h2 className="text-2xl font-bold text-white mb-4">Doar Ração</h2>
                <p className="text-purple-300/50 mb-6">Contribua com ração para ajudar pets.</p>
                <ul className="space-y-3 mb-8 text-sm text-left max-w-xs mx-auto">
                  {["Doe ração nova ou lacrada", "Pontos de coleta em toda cidade", "Recibo para dedução no IR"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-purple-200/60">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0"><span className="text-emerald-400 text-xs">✓</span></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button onClick={() => setDoando(!doando)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25">
                    {doando ? "✅ Obrigado!" : "Doar ração"}
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent text-purple-300 font-semibold text-base border border-purple-500/30 hover:bg-purple-500/10 transition-all">
                    Ver pontos
                  </motion.button>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
