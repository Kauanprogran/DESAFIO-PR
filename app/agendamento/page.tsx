"use client";

import { motion } from "framer-motion";

export default function AgendamentoPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A1045 50%, #0F0A2E 100%)" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08 }}>📅</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s" }}>🐾</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4">
            Marque seu horário
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Agende seu{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-purple-200">Horário</span>
          </h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">
            Escolha o serviço, o dia e o horário. O veterinário vai até você.
          </p>
        </motion.div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-dark rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl block mb-4"
            >
              📅
            </motion.span>
            <p className="text-purple-300/50">
              Selecione o serviço, data e horário para o atendimento.
            </p>
          </div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-purple-200 mb-1.5">Serviço</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white text-base outline-none focus:border-purple-400/40 transition-colors appearance-none">
                <option className="bg-[#1A1045]">Selecione um serviço</option>
                <option className="bg-[#1A1045]">Consulta veterinária</option>
                <option className="bg-[#1A1045]">Vacinação</option>
                <option className="bg-[#1A1045]">Castração</option>
                <option className="bg-[#1A1045]">Exame laboratorial</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <label className="block text-sm font-medium text-purple-200 mb-1.5">Data</label>
              <input type="date" className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white text-base outline-none focus:border-purple-400/40 transition-colors" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-purple-200 mb-1.5">Horário</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white text-base outline-none focus:border-purple-400/40 transition-colors appearance-none">
                <option className="bg-[#1A1045]">Selecione um horário</option>
                {["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"].map((h) => (
                  <option key={h} className="bg-[#1A1045]">{h}</option>
                ))}
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              <label className="block text-sm font-medium text-purple-200 mb-1.5">Endereço</label>
              <input type="text" placeholder="Rua, número, bairro" className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25"
            >
              Confirmar agendamento
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 text-center"
          >
            <p className="text-xs text-purple-300/40">
              🔒 Seus dados estão seguros. Atendimento humanizado e responsável.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
