import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Agendamento — Help Pet",
  description: "Agende consultas e serviços veterinários para seu pet.",
};

export default function AgendamentoPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-gradient-soft text-white py-16 text-center px-4">
        <Badge variant="purple" size="sm" className="mb-4 bg-white/20 text-white border-white/30">
          Marque seu horário
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Agendamento</h1>
        <p className="text-purple-100/80 text-lg max-w-xl mx-auto">
          Escolha o serviço, o dia e o horário. O veterinário vai até você.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-12">
        <Card className="p-8">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">📅</span>
            <p className="text-gray-500">
              Calendário interativo para seleção de data e horário será implementado em breve.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Serviço</label>
              <select className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-base">
                <option>Selecione um serviço</option>
                <option>Consulta veterinária</option>
                <option>Vacinação</option>
                <option>Castração</option>
                <option>Exame laboratorial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
              <input type="date" className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-base" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Horário</label>
              <select className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-base">
                <option>Selecione um horário</option>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
              <input type="text" placeholder="Rua, número, bairro" className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-base" />
            </div>

            <Button variant="primary" fullWidth size="lg">
              Confirmar agendamento
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
