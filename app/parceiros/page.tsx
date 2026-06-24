import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parceiros — Help Pet",
  description: "Rede de parceiros Help Pet. Veterinários, pet shops e clínicas parceiras.",
};

const parceiros = [
  { nome: "PetCare Centro", categoria: "Clínica Veterinária", cidade: "São Paulo, SP", nota: 4.8 },
  { nome: "Amigo Animal", categoria: "Pet Shop", cidade: "São Paulo, SP", nota: 4.6 },
  { nome: "Saúde Pet", categoria: "Veterinário Móvel", cidade: "Guarulhos, SP", nota: 4.9 },
  { nome: "Patas Felizes", categoria: "Banho & Tosa", cidade: "Osasco, SP", nota: 4.5 },
  { nome: "Vet Popular", categoria: "Clínica Popular", cidade: "São Bernardo, SP", nota: 4.7 },
  { nome: "Animal Care", categoria: "Veterinário 24h", cidade: "Santo André, SP", nota: 4.8 },
];

export default function ParceirosPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A1045 50%, #0F0A2E 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08 }}>🏪</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s" }}>🐾</span>
        </div>
        <div className="relative">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4">
            Nossa rede
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Rede de{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-purple-200">Parceiros</span>
          </h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">
            Encontre veterinários, clínicas e pet shops parceiros perto de você.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["Todos", "Clínicas", "Pet Shops", "Veterinário Móvel", "Banho & Tosa", "24h"].map((f) => (
            <button key={f} className="px-4 py-2 rounded-full bg-white/5 text-purple-200/70 text-sm font-medium whitespace-nowrap hover:bg-white/10 hover:text-white transition-colors border border-purple-500/10">
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parceiros.map((p) => (
            <div key={p.nome} className="card-dark rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center text-xl">🏪</div>
                <span className={`badge-${p.nota >= 4.8 ? 'success' : 'purple'} px-2 py-0.5 text-xs rounded-full`}>
                  ★ {p.nota}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{p.nome}</h3>
              <p className="text-sm text-purple-400 mb-1">{p.categoria}</p>
              <p className="text-sm text-purple-300/40 mb-4">{p.cidade}</p>
              <button className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-full px-3.5 py-2 transition-all">
                <span>Ver perfil</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
