import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Painel Admin — Help Pet",
  description: "Painel administrativo do Help Pet.",
};

const cards = [
  { href: "/admin/agendamentos", icon: "📅", title: "Agendamentos", count: "24" },
  { href: "/admin/usuarios", icon: "👥", title: "Usuários", count: "1.234" },
  { href: "/admin/animais", icon: "🐾", title: "Animais", count: "89" },
  { href: "/admin/parceiros", icon: "🏪", title: "Parceiros", count: "47" },
  { href: "/admin/doacoes", icon: "❤️", title: "Doações", count: "R$ 12.450" },
  { href: "/admin/relatorios", icon: "📊", title: "Relatórios", count: "12" },
];

const badges = {
  Confirmado: "badge-success",
  Pendente: "badge-warning",
} as const;

export default function AdminPage() {
  return (
    <div className="min-h-screen p-6" style={{ background: "#0F0A2E" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Painel Administrativo</h1>
          <p className="text-purple-300/50">Gerencie sua plataforma Help Pet</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link key={c.href} href={c.href}>
              <div className="card-dark rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{c.icon}</span>
                  <span className="badge-purple px-2 py-0.5 text-sm rounded-full">{c.count}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="card-dark rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Agendamentos Recentes</h3>
            {[
              { nome: "Maria Silva", servico: "Consulta", data: "Hoje 14h", status: "Confirmado" as const },
              { nome: "João Oliveira", servico: "Vacinação", data: "Hoje 15h", status: "Pendente" as const },
              { nome: "Ana Costa", servico: "Castração", data: "Amanhã 09h", status: "Confirmado" as const },
            ].map((a) => (
              <div key={a.nome} className="flex items-center justify-between py-3 border-b border-purple-500/10 last:border-0">
                <div>
                  <p className="text-sm font-medium text-white">{a.nome}</p>
                  <p className="text-xs text-purple-300/40">{a.servico} — {a.data}</p>
                </div>
                <span className={`${badges[a.status]} px-2 py-0.5 text-xs rounded-full`}>{a.status}</span>
              </div>
            ))}
          </div>

          <div className="card-dark rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Resumo Financeiro</h3>
            <div className="space-y-4">
              {[
                { label: "Faturamento do mês", value: "R$ 18.450", change: "+12%" },
                { label: "Doações recebidas", value: "R$ 12.450", change: "+8%" },
                { label: "Novos usuários", value: "234", change: "+23%" },
              ].map((r) => (
                <div key={r.label} className="flex items-center justify-between py-3 border-b border-purple-500/10 last:border-0">
                  <span className="text-sm text-purple-300/50">{r.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white">{r.value}</span>
                    <span className="text-xs text-emerald-400 ml-1">{r.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
