"use client";

import { motion } from "framer-motion";
import { PetSOSButton } from "@/components/shared/PetSOSButton";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function PetSOSPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #7F1D1D 0%, #450A0A 100%)" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08, color: "#EF4444" }}>🚨</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s", color: "#EF4444" }}>🐾</span>
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
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-red-400/30 text-red-300 bg-red-500/10 mb-4 animate-pulse"
          >
            🚨 EMERGÊNCIA 24 HORAS
          </motion.span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Pet <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-300">SOS</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Seu pet passou mal? Acione o veterinário mais próximo com um clique.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PetSOSButton
              variant="danger"
              size="lg"
              className="text-lg px-12 py-4 animate-pulse shadow-lg shadow-red-600/30"
            >
              🆘 ACIONAR PET SOS AGORA
            </PetSOSButton>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📍", title: "Geolocalização", desc: "Identificamos sua localização para enviar o vet mais próximo." },
            { icon: "⏱️", title: "Resposta rápida", desc: "Veterinário a caminho em até 30 minutos na sua região." },
            { icon: "💬", title: "WhatsApp integrado", desc: "Acompanhe o status pelo WhatsApp com atualizações em tempo real." },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp(0.1 * i)} className="card-dark rounded-2xl p-6 group">
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="text-5xl mb-4 block"
              >
                {item.icon}
              </motion.span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
              <p className="text-sm text-purple-300/50">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 card-dark rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Instruções</h2>
          <ol className="text-left max-w-md mx-auto space-y-4">
            {[
              "Clique no botão \"Acionar Pet SOS\"",
              "Permita o acesso à sua localização",
              "Descreva rapidamente o que está acontecendo",
              "Um veterinário será notificado e irá até você",
            ].map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="bg-red-600 text-white w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold shadow-lg shadow-red-600/20">{i + 1}</span>
                <span className="text-purple-200/60 pt-1">{text}</span>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </section>
    </div>
  );
}
