"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/shared/TiltCard";

export default function RelatoriosPage() {
  return (
    <div className="p-6" style={{ background: "#0F0A2E", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-white mb-6">Relatórios e Analytics</motion.h1>

        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[{ label: "Usuários ativos", value: "1.234", change: "+12%" }, { label: "Agendamentos/mês", value: "456", change: "+8%" }, { label: "Taxa de conversão", value: "68%", change: "+3%" }, { label: "Ticket médio", value: "R$ 47", change: "+5%" }].map((m) => (
            <motion.div key={m.label} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
              <TiltCard><div className="card-dark card-glow rounded-2xl p-4"><p className="text-sm text-purple-300/50">{m.label}</p><p className="text-2xl font-bold text-white">{m.value}</p><p className="text-xs text-emerald-400">{m.change}</p></div></TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="card-dark rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Agendamentos por Serviço</h3>
            {[{ servico: "Consultas", percentual: 45 }, { servico: "Vacinação", percentual: 25 }, { servico: "Castração", percentual: 15 }, { servico: "Exames", percentual: 10 }, { servico: "Outros", percentual: 5 }].map((s) => (
              <div key={s.servico} className="flex items-center gap-3 mb-3">
                <span className="text-sm text-purple-300/50 w-24">{s.servico}</span>
                <div className="flex-1 h-4 rounded-full overflow-hidden bg-white/5">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${s.percentual}%` }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400" />
                </div>
                <span className="text-sm font-medium text-white w-10 text-right">{s.percentual}%</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="card-dark rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Cobertura Geográfica</h3>
            {[{ cidade: "Curitiba", agendamentos: 1234 }, { cidade: "São José dos Pinhais", agendamentos: 456 }, { cidade: "Capitão Leônidas", agendamentos: 234 }, { cidade: "Londrina", agendamentos: 189 }, { cidade: "Maringá", agendamentos: 156 }].map((c) => {
              const max = 1234;
              return (
                <div key={c.cidade} className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-purple-300/50 w-28">{c.cidade}</span>
                  <div className="flex-1 h-4 rounded-full overflow-hidden bg-white/5">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${(c.agendamentos / max) * 100}%` }} transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400" />
                  </div>
                  <span className="text-sm font-medium text-white w-12 text-right">{c.agendamentos}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
