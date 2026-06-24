"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/shared/TiltCard";
import { Spotlight } from "@/components/shared/Spotlight";

const servicos = [
  { icon: "🏥", title: "Consultas", desc: "Atendimento clínico geral domiciliar.", preco: "A partir de R$ 49", badge: "Popular" },
  { icon: "💉", title: "Vacinação", desc: "Vacinas V8, V10, antirrábica e mais.", preco: "A partir de R$ 39", badge: "Campanha" },
  { icon: "✂️", title: "Castração", desc: "Procedimento seguro com equipe especializada.", preco: "Gratuito", badge: "Social" },
  { icon: "🧪", title: "Exames", desc: "Coleta domiciliar, resultado em 48h.", preco: "A partir de R$ 29", badge: "Novo" },
  { icon: "🦷", title: "Odontologia", desc: "Limpeza, extração e tratamento bucal.", preco: "Sob consulta", badge: "Especialidade" },
  { icon: "🧴", title: "Banho & Tosa", desc: "Higiene completa com produtos hipoalergênicos.", preco: "A partir de R$ 59", badge: "Popular" },
  { icon: "🔬", title: "Ultrassom", desc: "Diagnóstico por imagem com laudo veterinário.", preco: "A partir de R$ 89", badge: "Especialidade" },
  { icon: "💊", title: "Farmácia", desc: "Medicamentos com entrega em casa.", preco: "Consulte", badge: "Novo" },
  { icon: "🥩", title: "Nutrição", desc: "Plano alimentar personalizado para seu pet.", preco: "A partir de R$ 35", badge: "Novo" },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4 hero-gradient" style={{ background: "linear-gradient(-45deg, #1A1045, #2D1B69, #4C1D95, #1A1045)" }}>
        <Spotlight />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.12 }}>🐾</span>
          <span className="pet-decoration top-32 right-[12%] animate-float-med" style={{ opacity: 0.12, animationDelay: "1s" }}>🏥</span>
          <span className="pet-decoration bottom-32 left-[15%] animate-float-fast" style={{ opacity: 0.12, animationDelay: "2s" }}>🐕</span>
          <span className="pet-decoration bottom-20 right-[8%] animate-float-slow" style={{ opacity: 0.12, animationDelay: "0.5s" }}>💉</span>
        </div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/40 text-purple-200 bg-white/5 backdrop-blur-sm mb-4">
            Nossos serviços
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Serviços{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-300 via-violet-300 to-purple-200">Veterinários</span>
          </h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">
            Cuidado completo para seu pet com preços acessíveis.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0A2E] to-transparent z-10" />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s) => (
            <motion.div key={s.title} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } } }}>
              <TiltCard>
                <div className="card-dark card-glow rounded-2xl p-6 h-full flex flex-col group cursor-default">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{s.icon}</span>
                    <span className="badge-purple px-2 py-0.5 text-xs rounded-full">{s.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{s.title}</h3>
                  <p className="text-sm text-purple-300/50 mb-4 flex-1">{s.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-purple-500/10 mt-auto">
                    <span className="text-sm font-bold text-purple-400 group-hover:text-purple-300 transition-colors">{s.preco}</span>
                    <Link
                      href="/agendamento"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-full px-3.5 py-1.5 transition-all"
                    >
                      <span>Agendar</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
