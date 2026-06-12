import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Banco de Ração — Help Pet",
  description: "Solicite ou doe ração para pets de tutores de baixa renda.",
};

export default function BancoRacaoPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-gradient-soft text-white py-16 text-center px-4">
        <Badge variant="purple" size="sm" className="mb-4 bg-white/20 text-white border-white/30">
          Solidariedade
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Banco de Ração</h1>
        <p className="text-purple-100/80 text-lg max-w-xl mx-auto">
          Junte-se a nós para garantir que nenhum pet passe fome.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <span className="text-5xl mb-4 block">📦</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Solicitar Ração</h2>
            <p className="text-gray-500 mb-6">
              Tutores de baixa renda podem solicitar ração gratuitamente para seus pets.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-gray-600">
              <li className="flex items-center gap-2">✓ Cadastro gratuito</li>
              <li className="flex items-center gap-2">✓ Retirada em pontos parceiros</li>
              <li className="flex items-center gap-2">✓ 5kg de ração por mês por pet</li>
            </ul>
            <Button variant="primary" fullWidth size="lg">Solicitar ração</Button>
          </Card>

          <Card variant="highlight" className="p-8">
            <span className="text-5xl mb-4 block">🎁</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Doar Ração</h2>
            <p className="text-gray-500 mb-6">
              Contribua com ração e alimentos para ajudar pets em situação de vulnerabilidade.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-gray-600">
              <li className="flex items-center gap-2">✓ Doe ração nova ou lacrada</li>
              <li className="flex items-center gap-2">✓ Pontos de coleta em toda cidade</li>
              <li className="flex items-center gap-2">✓ Recibo para dedução no IR</li>
            </ul>
            <div className="flex gap-3">
              <Button variant="primary" fullWidth size="lg">Doar ração</Button>
              <Button variant="outline" fullWidth size="lg">Ver pontos</Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
