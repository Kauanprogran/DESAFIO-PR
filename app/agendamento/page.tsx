"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/shared/TiltCard";

export default function AgendamentoPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4 hero-gradient" style={{ background: "linear-gradient(-45deg, #1A1045, #2D1B69, #6D28D9, #1A1045)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.12 }}>📅</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.12, animationDelay: "1s" }}>🐾</span>
        </div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/40 text-purple-200 bg-white/5 backdrop-blur-sm mb-4">Marque seu horário</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Agende seu <span className="text-gradient bg-gradient-to-r from-purple-300 to-violet-200">Horário</span>
          </h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">Escolha o serviço, o dia e o horário.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0A2E] to-transparent z-10" />
      </section>

      <section className="max-w-2xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <TiltCard>
            <div className="card-dark card-glow rounded-2xl p-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1.5">Serviço</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white text-base outline-none focus:border-purple-400/40 transition-colors input-glow appearance-none">
                    <option className="bg-[#1A1045]">Selecione um serviço</option>
                    <option className="bg-[#1A1045]">Consulta veterinária</option>
                    <option className="bg-[#1A1045]">Vacinação</option>
                    <option className="bg-[#1A1045]">Castração</option>
                    <option className="bg-[#1A1045]">Exame laboratorial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1.5">Data</label>
                  <input type="date" className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white text-base outline-none focus:border-purple-400/40 transition-colors input-glow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1.5">Horário</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white text-base outline-none focus:border-purple-400/40 transition-colors input-glow appearance-none">
                    <option className="bg-[#1A1045]">Selecione um horário</option>
                    {["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"].map((h) => (
                      <option key={h} className="bg-[#1A1045]">{h}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1.5">Endereço</label>
                  <input type="text" placeholder="Rua, número, bairro" className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors input-glow" />
                </div>
                <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25">
                  Confirmar agendamento
                </motion.button>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </section>
    </div>
  );
}
