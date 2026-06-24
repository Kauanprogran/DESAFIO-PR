import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relatórios — Help Pet",
  description: "Relatórios e métricas do Help Pet.",
};

export default function RelatoriosPage() {
  return (
    <div className="p-6" style={{ background: "#0F0A2E", minHeight: "100vh" }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Relatórios e Analytics</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Usuários ativos", value: "1.234", change: "+12%" },
            { label: "Agendamentos/mês", value: "456", change: "+8%" },
            { label: "Taxa de conversão", value: "68%", change: "+3%" },
            { label: "Ticket médio", value: "R$ 47", change: "+5%" },
          ].map((m) => (
            <div key={m.label} className="card-dark rounded-2xl p-4">
              <p className="text-sm text-purple-300/50">{m.label}</p>
              <p className="text-2xl font-bold text-white">{m.value}</p>
              <p className="text-xs text-emerald-400">{m.change}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-dark rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Agendamentos por Serviço</h3>
            {[
              { servico: "Consultas", percentual: 45 },
              { servico: "Vacinação", percentual: 25 },
              { servico: "Castração", percentual: 15 },
              { servico: "Exames", percentual: 10 },
              { servico: "Outros", percentual: 5 },
            ].map((s) => (
              <div key={s.servico} className="flex items-center gap-3 mb-3">
                <span className="text-sm text-purple-300/50 w-24">{s.servico}</span>
                <div className="flex-1 h-4 rounded-full overflow-hidden bg-white/5">
                  <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400" style={{ width: `${s.percentual}%` }} />
                </div>
                <span className="text-sm font-medium text-white w-10 text-right">{s.percentual}%</span>
              </div>
            ))}
          </div>

          <div className="card-dark rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Cobertura Geográfica</h3>
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
                  <span className="text-sm text-purple-300/50 w-28">{c.cidade}</span>
                  <div className="flex-1 h-4 rounded-full overflow-hidden bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400" style={{ width: `${(c.agendamentos / max) * 100}%` }} />
                  </div>
                  <span className="text-sm font-medium text-white w-12 text-right">{c.agendamentos}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
