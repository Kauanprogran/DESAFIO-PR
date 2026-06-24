export default function AdminAgendamentosPage() {
  const agendamentos = [
    { id: 1, tutor: "Maria Silva", servico: "Consulta", data: "11/06 14:00", status: "Confirmado" },
    { id: 2, tutor: "João Oliveira", servico: "Vacinação", data: "11/06 15:00", status: "Pendente" },
    { id: 3, tutor: "Ana Costa", servico: "Castração", data: "12/06 09:00", status: "Confirmado" },
    { id: 4, tutor: "Carlos Souza", servico: "Exame", data: "12/06 11:00", status: "Concluído" },
    { id: 5, tutor: "Patrícia Lima", servico: "Consulta", data: "12/06 14:00", status: "Cancelado" },
  ];

  const badgeMap: Record<string, string> = {
    Confirmado: "badge-success",
    Pendente: "badge-warning",
    Concluído: "badge-purple",
    Cancelado: "badge-danger",
  };

  return (
    <div className="p-6 min-h-screen" style={{ background: "#0F0A2E" }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Gerenciar Agendamentos</h1>
        <div className="card-dark rounded-2xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-purple-500/10 text-left">
                  <th className="pb-3 font-semibold text-purple-300/50">Tutor</th>
                  <th className="pb-3 font-semibold text-purple-300/50">Serviço</th>
                  <th className="pb-3 font-semibold text-purple-300/50">Data</th>
                  <th className="pb-3 font-semibold text-purple-300/50">Status</th>
                </tr>
              </thead>
              <tbody>
                {agendamentos.map((a) => (
                  <tr key={a.id} className="border-b border-purple-500/5">
                    <td className="py-3 text-white">{a.tutor}</td>
                    <td className="py-3 text-purple-300/50">{a.servico}</td>
                    <td className="py-3 text-purple-300/50">{a.data}</td>
                    <td className="py-3">
                      <span className={`${badgeMap[a.status]} px-2 py-0.5 text-xs rounded-full`}>
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
