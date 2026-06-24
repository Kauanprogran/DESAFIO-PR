"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const parceiros = [
  { nome: "PetCare Centro", categoria: "Clínica Veterinária", cidade: "Curitiba, PR", nota: 4.8 },
  { nome: "Amigo Animal", categoria: "Pet Shop", cidade: "São José dos Pinhais, PR", nota: 4.6 },
  { nome: "Saúde Pet", categoria: "Veterinário Móvel", cidade: "Capitão Leônidas, PR", nota: 4.9 },
  { nome: "Patas Felizes", categoria: "Banho & Tosa", cidade: "Londrina, PR", nota: 4.5 },
  { nome: "Vet Popular", categoria: "Clínica Popular", cidade: "Maringá, PR", nota: 4.7 },
  { nome: "Animal Care", categoria: "Veterinário 24h", cidade: "Ponta Grossa, PR", nota: 4.8 },
  { nome: "Bicho Amado", categoria: "Clínica Veterinária", cidade: "Cascavel, PR", nota: 4.9 },
  { nome: "Pet Total", categoria: "Pet Shop", cidade: "Foz do Iguaçu, PR", nota: 4.4 },
  { nome: "Vet Móvel PR", categoria: "Veterinário Móvel", cidade: "Guarapuava, PR", nota: 4.7 },
];

const categorias = [
  { label: "Todos", value: "todos" },
  { label: "Clínicas", value: "Clínica Veterinária" },
  { label: "Clínica Popular", value: "Clínica Popular" },
  { label: "Pet Shops", value: "Pet Shop" },
  { label: "Veterinário Móvel", value: "Veterinário Móvel" },
  { label: "Banho & Tosa", value: "Banho & Tosa" },
  { label: "24h", value: "Veterinário 24h" },
];

export default function ParceirosPage() {
  const [ativo, setAtivo] = useState("todos");

  const filtrados = ativo === "todos"
    ? parceiros
    : parceiros.filter((p) => p.categoria === ativo);

  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A1045 50%, #0F0A2E 100%)" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08 }}>🏪</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s" }}>🐾</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4"
          >
            Nossa rede
          </motion.span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Rede de{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-purple-200">Parceiros</span>
          </h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">
            Encontre veterinários, clínicas e pet shops parceiros perto de você.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-2"
        >
          {categorias.map((f) => (
            <button
              key={f.value}
              onClick={() => setAtivo(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-300 ${
                ativo === f.value
                  ? "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/25"
                  : "bg-white/5 text-purple-200/70 border-purple-500/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtrados.map((p) => (
              <motion.div
                key={p.nome}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="card-dark rounded-2xl p-6 h-full flex flex-col group">
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center text-xl"
                    >
                      🏪
                    </motion.div>
                    <span className={`badge-${p.nota >= 4.8 ? 'success' : 'purple'} px-2 py-0.5 text-xs rounded-full`}>
                      ★ {p.nota}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{p.nome}</h3>
                  <p className="text-sm text-purple-400 mb-1">{p.categoria}</p>
                  <p className="text-sm text-purple-300/40 mb-4 flex-1">{p.cidade}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-full px-3.5 py-2 transition-all"
                  >
                    <span>Ver perfil</span>
                    <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtrados.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-purple-300/50 py-12"
          >
            Nenhum parceiro encontrado para esta categoria.
          </motion.p>
        )}
      </section>
    </div>
  );
}
