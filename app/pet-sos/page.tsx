import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { PetSOSButton } from "@/components/shared/PetSOSButton";

export const metadata: Metadata = {
  title: "Pet SOS — Help Pet",
  description: "Emergência veterinária com resposta imediata. Acione o veterinário mais próximo agora.",
};

export default function PetSOSPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero SOS */}
      <section className="bg-danger py-12 text-white text-center px-4">
        <Badge variant="danger" size="sm" className="mb-4 bg-white/20 text-white border-white/30 animate-pulse">
          🚨 EMERGÊNCIA 24 HORAS
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Pet SOS
        </h1>
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
          Seu pet passou mal? Acione o veterinário mais próximo com um clique.
        </p>
        <PetSOSButton
          variant="danger"
          size="lg"
          className="!bg-white !text-danger hover:!brightness-95 text-lg px-12 py-4 animate-pulse"
        >
          🆘 ACIONAR PET SOS AGORA
        </PetSOSButton>
      </section>

      {/* Info */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📍", title: "Geolocalização", desc: "Identificamos sua localização para enviar o vet mais próximo." },
            { icon: "⏱️", title: "Resposta rápida", desc: "Veterinário a caminho em até 30 minutos na sua região." },
            { icon: "💬", title: "WhatsApp integrado", desc: "Acompanhe o status pelo WhatsApp com atualizações em tempo real." },
          ].map((item) => (
            <div key={item.title} className="p-6">
              <span className="text-5xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-danger-light/40 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Instruções</h2>
          <ol className="text-left max-w-md mx-auto space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="bg-danger text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">1</span>
              Clique no botão &ldquo;Acionar Pet SOS&rdquo;
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-danger text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">2</span>
              Permita o acesso à sua localização
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-danger text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">3</span>
              Descreva rapidamente o que está acontecendo
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-danger text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">4</span>
              Um veterinário será notificado e irá até você
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
