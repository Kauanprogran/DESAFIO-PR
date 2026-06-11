import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function AdminUsuariosPage() {
  const usuarios = [
    { nome: "Maria Silva", email: "maria@email.com", role: "Tutor", status: "Ativo" },
    { nome: "Dr. Carlos", email: "carlos@vet.com", role: "Veterinário", status: "Ativo" },
    { nome: "Ana Costa", email: "ana@email.com", role: "Tutor", status: "Ativo" },
    { nome: "Pet Shop Amigo", email: "contato@amigo.com", role: "Parceiro", status: "Pendente" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Usuários</h1>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 font-semibold text-gray-600">Nome</th>
                <th className="pb-3 font-semibold text-gray-600">E-mail</th>
                <th className="pb-3 font-semibold text-gray-600">Tipo</th>
                <th className="pb-3 font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u, i) => (
                <tr key={i} className="border-b border-gray-50">
                  <td className="py-3 text-gray-900">{u.nome}</td>
                  <td className="py-3 text-gray-600">{u.email}</td>
                  <td className="py-3"><Badge variant="purple" size="sm">{u.role}</Badge></td>
                  <td className="py-3">
                    <Badge variant={u.status === "Ativo" ? "success" : "warning"}>
                      {u.status}
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
