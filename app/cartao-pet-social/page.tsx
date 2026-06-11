import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cartão Pet Social — VetMóvel",
  description: "Cartão Pet Social: beneficios exclusivos para tutores de baixa renda.",
};

export default function CartaoPetSocialPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-gradient-soft text-white py-16 text-center px-4">
        <Badge variant="purple" size="sm" className="mb-4 bg-white/20 text-white border-white/30">
          Benefício social
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cartão Pet Social</h1>
        <p className="text-purple-100/80 text-lg max-w-xl mx-auto">
          Benefícios exclusivos para tutores de baixa renda cuidarem dos seus pets.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <Card variant="highlight" className="p-8 mb-8 text-center">
          <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">💳</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Seu Cartão Pet Social</h2>
          <p className="text-gray-500 mb-6">
            Gere seu cartão digital e tenha acesso a descontos e benefícios exclusivos.
          </p>
          <Button variant="primary" size="lg">Gerar meu cartão</Button>
        </Card>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🎯", title: "Descontos", desc: "Até 70% off em consultas e exames" },
            { icon: "📦", title: "Ração gratuita", desc: "5kg/mês por pet cadastrado" },
            { icon: "🚑", title: "Pet SOS prioritário", desc: "Atendimento de emergência prioritário" },
            { icon: "💊", title: "Farmácia popular", desc: "Medicamentos com preço de custo" },
            { icon: "✂", title: "Castração gratuita", desc: "Procedimento sem custo" },
            { icon: "📋", title: "Acompanhamento", desc: "Histórico completo de saúde do pet" },
          ].map((b) => (
            <Card key={b.title} className="p-6 text-center">
              <span className="text-4xl mb-3 block">{b.icon}</span>
              <h3 className="font-semibold text-gray-900 mb-1">{b.title}</h3>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
