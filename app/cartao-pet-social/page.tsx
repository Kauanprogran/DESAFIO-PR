"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/shared/TiltCard";
import { Spotlight } from "@/components/shared/Spotlight";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const beneficios = [
  { icon: "🎯", title: "Descontos", desc: "Até 70% off em consultas e exames" },
  { icon: "📦", title: "Ração gratuita", desc: "5kg/mês por pet cadastrado" },
  { icon: "🚑", title: "Pet SOS prioritário", desc: "Atendimento de emergência prioritário" },
  { icon: "💊", title: "Farmácia popular", desc: "Medicamentos com preço de custo" },
  { icon: "✂️", title: "Castração gratuita", desc: "Procedimento sem custo" },
  { icon: "📋", title: "Acompanhamento", desc: "Histórico completo de saúde do pet" },
];

export default function CartaoPetSocialPage() {
  const [gerado, setGerado] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4 hero-gradient" style={{ background: "linear-gradient(-45deg, #022C22, #065F46, #047857, #022C22)" }}>
        <Spotlight />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.12 }}>💳</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.12, animationDelay: "1s" }}>🐾</span>
        </div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-emerald-400/40 text-emerald-200 bg-white/5 backdrop-blur-sm mb-4">Benefício social</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Cartão <span className="text-gradient bg-gradient-to-r from-emerald-300 to-teal-200">Pet Social</span>
          </h1>
          <p className="text-emerald-200/60 text-lg max-w-xl mx-auto">Benefícios exclusivos para tutores de baixa renda.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0A2E] to-transparent z-10" />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <TiltCard>
            <div className="card-highlight card-glow rounded-2xl p-8 mb-8 text-center">
              <div className="w-24 h-24 rounded-2xl bg-emerald-500/15 flex items-center justify-center mx-auto mb-6 border border-emerald-400/20">
                <span className="text-5xl">💳</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Seu Cartão Pet Social</h2>
              <p className="text-purple-300/50 mb-6 max-w-md mx-auto">Gere seu cartão digital e tenha acesso a descontos exclusivos.</p>
              <motion.button onClick={() => setGerado(!gerado)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25">
                {gerado ? "✅ Cartão gerado!" : "Gerar meu cartão"}
              </motion.button>
              {gerado && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-emerald-300 text-sm">Seu cartão digital foi gerado!</p>
                </motion.div>
              )}
            </div>
          </TiltCard>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <motion.div key={b.title} {...fadeUp(0.1 * i)}>
              <TiltCard>
                <div className="card-dark card-glow rounded-2xl p-6 text-center group">
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform duration-300">{b.icon}</span>
                  <h3 className="font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">{b.title}</h3>
                  <p className="text-sm text-purple-300/50">{b.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
