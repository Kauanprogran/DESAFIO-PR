import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Parceiros — Help Pet",
  description: "Rede de parceiros Help Pet. Veterinários, pet shops e clínicas parceiras.",
};

const parceiros = [
  { nome: "PetCare Centro", categoria: "Clínica Veterinária", cidade: "São Paulo, SP", nota: 4.8 },
  { nome: "Amigo Animal", categoria: "Pet Shop", cidade: "São Paulo, SP", nota: 4.6 },
  { nome: "Saúde Pet", categoria: "Veterinário Móvel", cidade: "Guarulhos, SP", nota: 4.9 },
  { nome: "Patas Felizes", categoria: "Banho & Tosa", cidade: "Osasco, SP", nota: 4.5 },
  { nome: "Vet Popular", categoria: "Clínica Popular", cidade: "São Bernardo, SP", nota: 4.7 },
  { nome: "Animal Care", categoria: "Veterinário 24h", cidade: "Santo André, SP", nota: 4.8 },
];

export default function ParceirosPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-gradient-soft text-white py-16 text-center px-4">
        <Badge variant="purple" size="sm" className="mb-4 bg-white/20 text-white border-white/30">
          Nossa rede
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Rede de Parceiros</h1>
        <p className="text-purple-100/80 text-lg max-w-xl mx-auto">
          Encontre veterinários, clínicas e pet shops parceiros perto de você.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["Todos", "Clínicas", "Pet Shops", "Veterinário Móvel", "Banho & Tosa", "24h"].map((f) => (
            <button key={f} className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium whitespace-nowrap hover:bg-purple-200 transition-colors">{f}</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parceiros.map((p) => (
            <Card key={p.nome} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-xl">🏪</div>
                <Badge variant={p.nota >= 4.8 ? "success" : "neutral"} size="sm">
                  ★ {p.nota}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{p.nome}</h3>
              <p className="text-sm text-purple-600 mb-1">{p.categoria}</p>
              <p className="text-sm text-gray-400 mb-4">{p.cidade}</p>
              <Button variant="primary" fullWidth size="sm">Ver perfil</Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
