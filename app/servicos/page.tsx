import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Serviços — Help Pet",
  description: "Serviços veterinários completos: consultas, vacinação, exames, castração e mais.",
};

const servicos = [
  { icon: "🏥", title: "Consultas", desc: "Atendimento clínico geral domiciliar.", preco: "A partir de R$ 49", badge: "Popular" },
  { icon: "💉", title: "Vacinação", desc: "Vacinas V8, V10, antirrábica e mais.", preco: "A partir de R$ 39", badge: "Campanha" },
  { icon: "✂", title: "Castração", desc: "Procedimento seguro com equipe especializada.", preco: "Gratuito", badge: "Social" },
  { icon: "🧪", title: "Exames", desc: "Coleta domiciliar, resultado em 48h.", preco: "A partir de R$ 29", badge: "Novo" },
  { icon: "🦷", title: "Odontologia", desc: "Limpeza, extração e tratamento bucal.", preco: "Sob consulta", badge: "Especialidade" },
  { icon: "🧴", title: "Banho & Tosa", desc: "Higiene completa com produtos hipoalergênicos.", preco: "A partir de R$ 59", badge: "Popular" },
  { icon: "🧬", title: "Ultrassom", desc: "Diagnóstico por imagem com laudo veterinário.", preco: "A partir de R$ 89", badge: "Especialidade" },
  { icon: "💊", title: "Farmácia", desc: "Medicamentos com entrega em casa.", preco: "Consulte", badge: "Novo" },
  { icon: "🥩", title: "Nutrição", desc: "Plano alimentar personalizado para seu pet.", preco: "A partir de R$ 35", badge: "Novo" },
];

export default function ServicosPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-gradient-soft text-white py-16 text-center px-4">
        <Badge variant="purple" size="sm" className="mb-4 bg-white/20 text-white border-white/30">
          Nossos serviços
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Serviços Veterinários</h1>
        <p className="text-purple-100/80 text-lg max-w-xl mx-auto">
          Cuidado completo para seu pet com preços acessíveis.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{s.icon}</span>
                <Badge variant="purple" size="sm">{s.badge}</Badge>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-purple-700">{s.preco}</span>
                <Link href="/agendamento">
                  <Button variant="primary" size="sm">Agendar</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
