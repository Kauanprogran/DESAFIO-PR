import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adoção — Help Pet",
  description: "Adote um animal e transforme uma vida. Centenas de pets esperando por um lar.",
};

const animais = [
  { nome: "Bolinha", especie: "Cachorro", raca: "SRD", idade: "2 anos", porte: "Médio", sexo: "Macho", cor: "Caramelo" },
  { nome: "Mimi", especie: "Gato", raca: "SRD", idade: "1 ano", porte: "Pequeno", sexo: "Fêmea", cor: "Cinza" },
  { nome: "Thor", especie: "Cachorro", raca: "Vira-lata", idade: "3 anos", porte: "Grande", sexo: "Macho", cor: "Preto" },
  { nome: "Luna", especie: "Gato", raca: "SRD", idade: "6 meses", porte: "Pequeno", sexo: "Fêmea", cor: "Branca" },
  { nome: "Rex", especie: "Cachorro", raca: "SRD", idade: "4 anos", porte: "Médio", sexo: "Macho", cor: "Malhado" },
  { nome: "Bela", especie: "Gato", raca: "Persa", idade: "2 anos", porte: "Pequeno", sexo: "Fêmea", cor: "Laranja" },
];

export default function AdocaoPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-gradient-soft text-white py-16 text-center px-4">
        <Badge variant="purple" size="sm" className="mb-4 bg-white/20 text-white border-white/30">
          Adoção responsável
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Adote um amigo</h1>
        <p className="text-purple-100/80 text-lg max-w-xl mx-auto">
          Centenas de animais esperando por um lar cheio de amor.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["Todos", "Cachorros", "Gatos", "Pequeno porte", "Médio porte", "Grande porte"].map((f) => (
            <button key={f} className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium whitespace-nowrap hover:bg-purple-200 transition-colors">
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animais.map((a) => (
            <Card key={a.nome} className="p-6">
              <div className="w-full h-40 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                <span className="text-6xl">🐾</span>
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{a.nome}</h3>
                <Badge variant="success" size="sm">Disponível</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
                <span>{a.especie}</span><span>{a.raca}</span>
                <span>{a.idade}</span><span>{a.porte}</span>
                <span>{a.sexo}</span><span>{a.cor}</span>
              </div>
              <Link href={`/adocao/${a.nome.toLowerCase()}`}>
                <Button variant="primary" fullWidth>Quero adotar</Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
