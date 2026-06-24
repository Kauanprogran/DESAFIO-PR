export default function AdminUsuariosPage() {
  const usuarios = [
    { nome: "Maria Silva", email: "maria@email.com", role: "Tutor", status: "Ativo" },
    { nome: "Dr. Carlos", email: "carlos@vet.com", role: "Veterinário", status: "Ativo" },
    { nome: "Ana Costa", email: "ana@email.com", role: "Tutor", status: "Ativo" },
    { nome: "Pet Shop Amigo", email: "contato@amigo.com", role: "Parceiro", status: "Pendente" },
  ];

  return (
    <div className="p-6 min-h-screen" style={{ background: "#0F0A2E" }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Usuários</h1>
        <div className="card-dark rounded-2xl p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-purple-500/10 text-left">
                  <th className="pb-3 font-semibold text-purple-300/50">Nome</th>
                  <th className="pb-3 font-semibold text-purple-300/50">E-mail</th>
                  <th className="pb-3 font-semibold text-purple-300/50">Tipo</th>
                  <th className="pb-3 font-semibold text-purple-300/50">Status</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u, i) => (
                  <tr key={i} className="border-b border-purple-500/5">
                    <td className="py-3 text-white">{u.nome}</td>
                    <td className="py-3 text-purple-300/50">{u.email}</td>
                    <td className="py-3"><span className="badge-purple px-2 py-0.5 text-xs rounded-full">{u.role}</span></td>
                    <td className="py-3">
                      <span className={`${u.status === "Ativo" ? "badge-success" : "badge-warning"} px-2 py-0.5 text-xs rounded-full`}>
                        {u.status}
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
