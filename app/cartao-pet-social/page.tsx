import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartão Pet Social — Help Pet",
  description: "Cartão Pet Social: benefícios exclusivos para tutores de baixa renda.",
};

const beneficios = [
  { icon: "🎯", title: "Descontos", desc: "Até 70% off em consultas e exames" },
  { icon: "📦", title: "Ração gratuita", desc: "5kg/mês por pet cadastrado" },
  { icon: "🚑", title: "Pet SOS prioritário", desc: "Atendimento de emergência prioritário" },
  { icon: "💊", title: "Farmácia popular", desc: "Medicamentos com preço de custo" },
  { icon: "✂️", title: "Castração gratuita", desc: "Procedimento sem custo" },
  { icon: "📋", title: "Acompanhamento", desc: "Histórico completo de saúde do pet" },
];

export default function CartaoPetSocialPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A1045 50%, #0F0A2E 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08 }}>💳</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s" }}>🐾</span>
        </div>
        <div className="relative">
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
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="card-highlight rounded-2xl p-8 mb-8 text-center">
          <div className="w-24 h-24 rounded-2xl bg-purple-500/15 flex items-center justify-center mx-auto mb-6 border border-purple-400/20">
            <span className="text-5xl">💳</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Seu Cartão Pet Social</h2>
          <p className="text-purple-300/50 mb-6 max-w-md mx-auto">
            Gere seu cartão digital e tenha acesso a descontos e benefícios exclusivos.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25">
            Gerar meu cartão
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b) => (
            <div key={b.title} className="card-dark rounded-2xl p-6 text-center">
              <span className="text-4xl mb-3 block">{b.icon}</span>
              <h3 className="font-bold text-white mb-1">{b.title}</h3>
              <p className="text-sm text-purple-300/50">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
