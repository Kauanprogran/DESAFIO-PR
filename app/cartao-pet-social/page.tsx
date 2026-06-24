"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A1045 50%, #0F0A2E 100%)" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08 }}>💳</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s" }}>🐾</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4">
            Benefício social
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Cartão{" "}
            <span className="text-gradient bg-gradient-to-r from-emerald-400 to-emerald-300">Pet Social</span>
          </h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">
            Benefícios exclusivos para tutores de baixa renda cuidarem dos seus pets.
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-highlight rounded-2xl p-8 mb-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-24 h-24 rounded-2xl bg-purple-500/15 flex items-center justify-center mx-auto mb-6 border border-purple-400/20"
          >
            <span className="text-5xl">💳</span>
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Seu Cartão Pet Social</h2>
          <p className="text-purple-300/50 mb-6 max-w-md mx-auto">
            Gere seu cartão digital e tenha acesso a descontos e benefícios exclusivos.
          </p>
          <motion.button
            onClick={() => setGerado(!gerado)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25"
          >
            {gerado ? "✅ Cartão gerado!" : "Gerar meu cartão"}
          </motion.button>
          {gerado && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
            >
              <p className="text-emerald-300 text-sm">
                Seu cartão digital foi gerado! Acesse a área do tutor para visualizar.
              </p>
            </motion.div>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp(0.1 * i)}
              className="card-dark rounded-2xl p-6 text-center group"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-4xl mb-3 block"
              >
                {b.icon}
              </motion.span>
              <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{b.title}</h3>
              <p className="text-sm text-purple-300/50">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
