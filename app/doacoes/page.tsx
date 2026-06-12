import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PixSection } from "@/components/shared/PixSection";


export const metadata: Metadata = {
  title: "Doações — Help Pet",
  description: "Sua doação transforma vidas. Contribua com saúde animal no Paraná.",
};

const valores = [20, 50, 100, 200];
const valoresMensal = [15, 30, 50, 100];

export default function DoacoesPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-center px-4" style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A1045 50%, #0F0A2E 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.08 }}>🐾</span>
          <span className="pet-decoration top-32 right-[12%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s" }}>❤️</span>
          <span className="pet-decoration bottom-32 left-[15%] animate-float-fast" style={{ opacity: 0.08, animationDelay: "2s" }}>🐕</span>
          <span className="pet-decoration bottom-20 right-[8%] animate-float-slow" style={{ opacity: 0.08, animationDelay: "0.5s" }}>🐱</span>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Badge variant="purple" size="sm" className="mb-5 bg-white/10 text-purple-200 border-purple-400/30">
            ❤️ Ajude quem precisa
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Sua doação{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-300">
              salva vidas
            </span>
          </h1>
          <p className="text-purple-200/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Com R$ 20 você alimenta um pet por um mês. Com R$ 50 você ajuda na castração.
            Cada contribuição transforma o abandonado em amado.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-center mb-8">
            {[
              { value: "1.200+", label: "Animais ajudados" },
              { value: "3.500+", label: "Kg de ração" },
              { value: "340+", label: "Castrações" },
              { value: "89%", label: "Vão direto aos pets" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-purple-300/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pix */}
      <section className="py-16 px-4" style={{ background: "#0F0A2E" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="purple" size="sm" className="mb-4 bg-white/5 text-purple-200 border-purple-400/20">
            ⚡ Rápido e seguro
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Doe via <span className="text-gradient bg-gradient-to-r from-emerald-400 to-emerald-300">Pix</span>
          </h2>
          <p className="text-purple-200/50 mb-8">
            Escaneie o QR Code ou copie a chave Pix. O valor chega na hora.
          </p>

          <PixSection />
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4" style={{ background: "#1A1045" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="purple" size="sm" className="mb-4 bg-white/5 text-purple-200 border-purple-400/20">
              💜 Escolha como ajudar
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Faça a diferença hoje
            </h2>
            <p className="text-purple-200/50 max-w-xl mx-auto">
              Qualquer valor ajuda. Sua contribuição mantém nossos programas ativos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-8 text-center">
              <span className="text-5xl block mb-4">❤️</span>
              <h3 className="text-xl font-bold text-white mb-1">Doação Única</h3>
              <p className="text-sm text-purple-200/50 mb-6">Contribua com qualquer valor</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {valores.map((v) => (
                  <button key={v} className="py-3 px-4 rounded-xl border border-purple-500/20 bg-white/5 hover:bg-purple-600/20 hover:border-purple-400/40 transition-all font-semibold text-purple-200 hover:text-white text-lg">
                    R$ {v}
                  </button>
                ))}
              </div>
              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Outro valor"
                  className="w-full py-3 px-4 text-center bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 rounded-xl outline-none focus:border-purple-400/40 transition-colors"
                />
              </div>
              <Button variant="primary" fullWidth size="lg">
                Doar agora
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500/10 to-transparent px-4 py-1 rounded-bl-2xl">
                <span className="text-xs font-semibold text-purple-300">💜 Melhor valor</span>
              </div>
              <span className="text-5xl block mb-4">🔄</span>
              <h3 className="text-xl font-bold text-white mb-1">Doação Recorrente</h3>
              <p className="text-sm text-purple-200/50 mb-6">Ajude todos os meses</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {valoresMensal.map((v) => (
                  <button key={v} className="py-3 px-4 rounded-xl border border-purple-500/20 bg-white/5 hover:bg-purple-600/20 hover:border-purple-400/40 transition-all font-semibold text-purple-200 hover:text-white text-lg">
                    R$ {v}/mês
                  </button>
                ))}
              </div>
              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Outro valor mensal"
                  className="w-full py-3 px-4 text-center bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 rounded-xl outline-none focus:border-purple-400/40 transition-colors"
                />
              </div>
              <Button variant="primary" fullWidth size="lg">
                Doar mensalmente
              </Button>
            </div>
          </div>

          {/* Ração */}
          <div className="glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <span className="text-5xl block mb-4">🦴</span>
            <h3 className="text-xl font-bold text-white mb-2">Doação de Ração</h3>
            <p className="text-purple-200/50 mb-6 max-w-lg mx-auto">
              Contribua com ração e alimentos para pets em situação de rua ou tutores de baixa renda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button variant="outline" size="lg" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }} className="hover:bg-white/10">
                  Quero doar ração
                </Button>
              </Link>
              <Link href="/banco-de-racao">
                <Button variant="outline" size="lg" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }} className="hover:bg-white/10">
                  Pontos de coleta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-16 px-4" style={{ background: "#0F0A2E" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="purple" size="sm" className="mb-4 bg-white/5 text-purple-200 border-purple-400/20">
            🔍 Transparência
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Para onde vai sua doação
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { icon: "🏥", pct: "45%", title: "Castração e cirurgias", desc: "Procedimentos veterinários essenciais para animais de rua e tutores de baixa renda." },
              { icon: "🦴", pct: "30%", title: "Banco de ração", desc: "Distribuição de alimentos para famílias em situação de vulnerabilidade." },
              { icon: "🚐", pct: "25%", title: "Resgate e logística", desc: "Combustível, manutenção da van e equipamentos para atendimento em campo." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <div className="text-3xl font-bold text-white mb-1">{item.pct}</div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-purple-200/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-purple-300/50">
            <span className="inline-flex items-center gap-1.5">🔒 Ambiente seguro</span>
            <span className="inline-flex items-center gap-1.5">📋 CRMV-PR ativo</span>
            <span className="inline-flex items-center gap-1.5">💰 Nota fiscal disponível</span>
            <span className="inline-flex items-center gap-1.5">✅ Dados protegidos LGPD</span>
          </div>
        </div>
      </section>

      {/* Conta */}
      <section className="py-16 px-4" style={{ background: "#1A1045" }}>
        <div className="max-w-lg mx-auto text-center">
          <Badge variant="purple" size="sm" className="mb-4 bg-white/5 text-purple-200 border-purple-400/20">
            🏦 Transferência bancária
          </Badge>
          <h2 className="text-2xl font-bold text-white mb-6">Dados bancários</h2>
          <div className="glass-card rounded-2xl p-6 text-left space-y-3">
            {[
              { label: "Banco", value: "Banco do Brasil (001)" },
              { label: "Agência", value: "1234-5" },
              { label: "Conta", value: "56789-0" },
              { label: "Pix", value: "helppet@ajuda.com.br" },
              { label: "Titular", value: "Help Pet Associação" },
            ].map((d) => (
              <div key={d.label} className="flex justify-between items-center">
                <span className="text-sm text-purple-300/50">{d.label}</span>
                <span className="text-sm text-white font-medium">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
