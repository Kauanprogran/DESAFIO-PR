import type { Metadata } from "next";
import { PetSOSButton } from "@/components/shared/PetSOSButton";

export const metadata: Metadata = {
  title: "Pet SOS — Help Pet",
  description: "Emergência veterinária com resposta imediata. Acione o veterinário mais próximo agora.",
};

export default function PetSOSPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #7F1D1D 0%, #450A0A 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08, color: "#EF4444" }}>🚨</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s", color: "#EF4444" }}>🐾</span>
        </div>
        <div className="relative">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-red-400/30 text-red-300 bg-red-500/10 mb-4 animate-pulse">
            🚨 EMERGÊNCIA 24 HORAS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Pet <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-300">SOS</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Seu pet passou mal? Acione o veterinário mais próximo com um clique.
          </p>
          <PetSOSButton
            variant="danger"
            size="lg"
            className="text-lg px-12 py-4 animate-pulse shadow-lg shadow-red-600/30"
          >
            🆘 ACIONAR PET SOS AGORA
          </PetSOSButton>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📍", title: "Geolocalização", desc: "Identificamos sua localização para enviar o vet mais próximo." },
            { icon: "⏱️", title: "Resposta rápida", desc: "Veterinário a caminho em até 30 minutos na sua região." },
            { icon: "💬", title: "WhatsApp integrado", desc: "Acompanhe o status pelo WhatsApp com atualizações em tempo real." },
          ].map((item) => (
            <div key={item.title} className="card-dark rounded-2xl p-6">
              <span className="text-5xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-purple-300/50">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card-dark rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Instruções</h2>
          <ol className="text-left max-w-md mx-auto space-y-4">
            {[
              'Clique no botão "Acionar Pet SOS"',
              "Permita o acesso à sua localização",
              "Descreva rapidamente o que está acontecendo",
              "Um veterinário será notificado e irá até você",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-red-600 text-white w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold shadow-lg shadow-red-600/20">{i + 1}</span>
                <span className="text-purple-200/60 pt-1">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
