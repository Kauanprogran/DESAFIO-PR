import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Relatórios — VetMóvel",
  description: "Relatórios e métricas do VetMóvel.",
};

export default function RelatoriosPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Relatórios e Analytics</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Usuários ativos", value: "1.234", change: "+12%", color: "text-purple-600" },
          { label: "Agendamentos/mês", value: "456", change: "+8%", color: "text-info" },
          { label: "Taxa de conversão", value: "68%", change: "+3%", color: "text-success" },
          { label: "Ticket médio", value: "R$ 47", change: "+5%", color: "text-warning" },
        ].map((m) => (
          <Card key={m.label} className="p-4">
            <p className="text-sm text-gray-500">{m.label}</p>
            <p className={`text-2xl font-bold ${m.color}`}>{m.value}</p>
            <p className="text-xs text-success">{m.change}</p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Agendamentos por Serviço</h3>
          {[
            { servico: "Consultas", percentual: 45, cor: "bg-purple-600" },
            { servico: "Vacinação", percentual: 25, cor: "bg-info" },
            { servico: "Castração", percentual: 15, cor: "bg-success" },
            { servico: "Exames", percentual: 10, cor: "bg-warning" },
            { servico: "Outros", percentual: 5, cor: "bg-gray-300" },
          ].map((s) => (
            <div key={s.servico} className="flex items-center gap-3 mb-3">
              <span className="text-sm text-gray-600 w-24">{s.servico}</span>
              <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${s.cor}`} style={{ width: `${s.percentual}%` }} />
              </div>
              <span className="text-sm font-medium text-gray-700 w-10 text-right">{s.percentual}%</span>
            </div>
          ))}
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Cobertura Geográfica</h3>
          {[
            { cidade: "São Paulo", agendamentos: 1234 },
            { cidade: "Guarulhos", agendamentos: 456 },
            { cidade: "Osasco", agendamentos: 234 },
            { cidade: "Santo André", agendamentos: 189 },
            { cidade: "São Bernardo", agendamentos: 156 },
          ].map((c) => {
            const max = 1234;
            return (
              <div key={c.cidade} className="flex items-center gap-3 mb-3">
                <span className="text-sm text-gray-600 w-28">{c.cidade}</span>
                <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-cta"
                    style={{ width: `${(c.agendamentos / max) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 w-12 text-right">{c.agendamentos}</span>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
}
