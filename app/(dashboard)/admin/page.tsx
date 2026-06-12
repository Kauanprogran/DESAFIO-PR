import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Painel Admin — Help Pet",
  description: "Painel administrativo do Help Pet.",
};

const cards = [
  { href: "/admin/agendamentos", icon: "📅", title: "Agendamentos", count: "24", color: "text-purple-600" },
  { href: "/admin/usuarios", icon: "👥", title: "Usuários", count: "1.234", color: "text-info" },
  { href: "/admin/animais", icon: "🐾", title: "Animais", count: "89", color: "text-success" },
  { href: "/admin/parceiros", icon: "🏪", title: "Parceiros", count: "47", color: "text-warning" },
  { href: "/admin/doacoes", icon: "❤️", title: "Doações", count: "R$ 12.450", color: "text-danger" },
  { href: "/admin/relatorios", icon: "📊", title: "Relatórios", count: "12", color: "text-purple-600" },
];

export default function AdminPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
        <p className="text-gray-500">Gerencie sua plataforma Help Pet</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Link key={c.href} href={c.href}>
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{c.icon}</span>
                <Badge variant="neutral" size="sm">{c.count}</Badge>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Agendamentos Recentes</h3>
          {[
            { nome: "Maria Silva", servico: "Consulta", data: "Hoje 14h", status: "Confirmado" },
            { nome: "João Oliveira", servico: "Vacinação", data: "Hoje 15h", status: "Pendente" },
            { nome: "Ana Costa", servico: "Castração", data: "Amanhã 09h", status: "Confirmado" },
          ].map((a) => (
            <div key={a.nome} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-900">{a.nome}</p>
                <p className="text-xs text-gray-400">{a.servico} — {a.data}</p>
              </div>
              <Badge variant={a.status === "Confirmado" ? "success" : "warning"} size="sm">{a.status}</Badge>
            </div>
          ))}
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Resumo Financeiro</h3>
          <div className="space-y-4">
            {[
              { label: "Faturamento do mês", value: "R$ 18.450", change: "+12%" },
              { label: "Doações recebidas", value: "R$ 12.450", change: "+8%" },
              { label: "Novos usuários", value: "234", change: "+23%" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{r.label}</span>
                <div className="text-right">
                  <span className="text-sm font-bold text-gray-900">{r.value}</span>
                  <span className="text-xs text-success ml-1">{r.change}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
