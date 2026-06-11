import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function AdminAgendamentosPage() {
  const agendamentos = [
    { id: 1, tutor: "Maria Silva", servico: "Consulta", data: "11/06 14:00", status: "Confirmado" },
    { id: 2, tutor: "João Oliveira", servico: "Vacinação", data: "11/06 15:00", status: "Pendente" },
    { id: 3, tutor: "Ana Costa", servico: "Castração", data: "12/06 09:00", status: "Confirmado" },
    { id: 4, tutor: "Carlos Souza", servico: "Exame", data: "12/06 11:00", status: "Concluído" },
    { id: 5, tutor: "Patrícia Lima", servico: "Consulta", data: "12/06 14:00", status: "Cancelado" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Gerenciar Agendamentos</h1>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 font-semibold text-gray-600">Tutor</th>
                <th className="pb-3 font-semibold text-gray-600">Serviço</th>
                <th className="pb-3 font-semibold text-gray-600">Data</th>
                <th className="pb-3 font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {agendamentos.map((a) => (
                <tr key={a.id} className="border-b border-gray-50">
                  <td className="py-3 text-gray-900">{a.tutor}</td>
                  <td className="py-3 text-gray-600">{a.servico}</td>
                  <td className="py-3 text-gray-600">{a.data}</td>
                  <td className="py-3">
                    <Badge variant={{
                      "Confirmado": "success",
                      "Pendente": "warning",
                      "Concluído": "info",
                      "Cancelado": "danger",
                    }[a.status] as "success" | "warning" | "info" | "danger"}>
                      {a.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
