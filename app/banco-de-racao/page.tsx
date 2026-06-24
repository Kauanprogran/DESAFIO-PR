"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A1045 50%, #0F0A2E 100%)" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08 }}>🦴</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s" }}>🐾</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4">
            Solidariedade
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Banco de{" "}
            <span className="text-gradient bg-gradient-to-r from-amber-400 to-yellow-300">Ração</span>
          </h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">
            Junte-se a nós para garantir que nenhum pet passe fome.
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp(0.1)} className="card-dark rounded-2xl p-8 text-center">
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl block mb-4"
            >
              📦
            </motion.span>
            <h2 className="text-2xl font-bold text-white mb-4">Solicitar Ração</h2>
            <p className="text-purple-300/50 mb-6">
              Tutores de baixa renda podem solicitar ração gratuitamente para seus pets.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-left max-w-xs mx-auto">
              {["Cadastro gratuito", "Retirada em pontos parceiros", "5kg de ração por mês por pet"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-purple-200/60">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 text-xs">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <motion.button
              onClick={() => setSolicitando(!solicitando)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25"
            >
              {solicitando ? "✅ Solicitação enviada!" : "Solicitar ração"}
            </motion.button>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="card-highlight rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500/10 to-transparent px-4 py-1 rounded-bl-2xl">
              <span className="text-xs font-semibold text-amber-400">💜 Solidariedade</span>
            </div>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl block mb-4"
            >
              🎁
            </motion.span>
            <h2 className="text-2xl font-bold text-white mb-4">Doar Ração</h2>
            <p className="text-purple-300/50 mb-6">
              Contribua com ração e alimentos para ajudar pets em situação de vulnerabilidade.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-left max-w-xs mx-auto">
              {["Doe ração nova ou lacrada", "Pontos de coleta em toda cidade", "Recibo para dedução no IR"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-purple-200/60">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 text-xs">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                onClick={() => setDoando(!doando)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25"
              >
                {doando ? "✅ Obrigado!" : "Doar ração"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent text-purple-300 font-semibold text-base border border-purple-500/30 hover:bg-purple-500/10 transition-all"
              >
                Ver pontos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
