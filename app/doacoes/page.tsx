import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Doações — Help Pet",
  description: "Contribua com a saúde animal. Sua doação transforma vidas.",
};

export default function DoacoesPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-gradient-accent text-white py-16 text-center px-4">
        <Badge variant="purple" size="sm" className="mb-4 bg-white/20 text-white border-white/30">
          Ajude quem precisa
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Faça uma Doação</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Sua contribuição ajuda a manter nossos programas de castração, banco de ração e resgate.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card variant="highlight" className="p-8 text-center">
            <span className="text-5xl mb-4 block">❤️</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Doação Única</h3>
            <p className="text-gray-500 mb-6">Contribua com qualquer valor</p>
            <div className="space-y-3 mb-6">
              {[20, 50, 100, 200].map((v) => (
                <button key={v} className="w-full py-3 px-4 rounded-lg border-2 border-purple-200 hover:border-purple-600 hover:bg-purple-50 transition-all font-semibold text-purple-700">
                  R$ {v},00
                </button>
              ))}
            </div>
            <Button variant="primary" fullWidth size="lg">
              Doar agora
            </Button>
          </Card>

          <Card variant="default" className="p-8 text-center">
            <span className="text-5xl mb-4 block">🔄</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Doação Recorrente</h3>
            <p className="text-gray-500 mb-6">Ajude todos os meses</p>
            <div className="space-y-3 mb-6">
              {[15, 30, 50, 100].map((v) => (
                <button key={v} className="w-full py-3 px-4 rounded-lg border-2 border-accent-400 hover:border-accent-600 hover:bg-orange-50 transition-all font-semibold text-accent-600">
                  R$ {v},00/mês
                </button>
              ))}
            </div>
            <Button variant="primary" fullWidth size="lg">
              Doar mensalmente
            </Button>
          </Card>
        </div>

        <Card variant="highlight" className="p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📍 Doação de Ração</h3>
          <p className="text-gray-500 mb-6">
            Contribua com ração e alimentos para pets em situação de rua ou tutores de baixa renda.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Button variant="outline" fullWidth size="lg">
              Quero doar ração
            </Button>
            <Button variant="outline" fullWidth size="lg">
              Pontos de coleta
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
