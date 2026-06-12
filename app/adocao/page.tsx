import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adoção — Help Pet",
  description: "Adote um animal e transforme uma vida. Centenas de pets esperando por um lar.",
};

const dogFotos = [
  "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400&h=300&fit=crop&q=80",
];

const catFotos = [
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1570458436416-b8fcccfe883f?w=400&h=300&fit=crop&q=80",
  "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=300&fit=crop&q=80",
];

const animais = [
  { nome: "Bolinha", especie: "Cachorro", raca: "SRD", idade: "2 anos", porte: "Médio", sexo: "Macho", cor: "Caramelo", foto: dogFotos[0] },
  { nome: "Mimi", especie: "Gato", raca: "SRD", idade: "1 ano", porte: "Pequeno", sexo: "Fêmea", cor: "Cinza", foto: catFotos[0] },
  { nome: "Thor", especie: "Cachorro", raca: "Vira-lata", idade: "3 anos", porte: "Grande", sexo: "Macho", cor: "Preto", foto: dogFotos[1] },
  { nome: "Luna", especie: "Gato", raca: "SRD", idade: "6 meses", porte: "Pequeno", sexo: "Fêmea", cor: "Branca", foto: catFotos[1] },
  { nome: "Rex", especie: "Cachorro", raca: "SRD", idade: "4 anos", porte: "Médio", sexo: "Macho", cor: "Malhado", foto: dogFotos[2] },
  { nome: "Bela", especie: "Gato", raca: "Persa", idade: "2 anos", porte: "Pequeno", sexo: "Fêmea", cor: "Laranja", foto: catFotos[2] },
];

function FotoPet({ nome, foto, especie }: { nome: string; foto: string; especie: string }) {
  return (
    <div className="relative w-full h-52 rounded-xl overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900">
      <Image
        src={foto}
        alt={nome}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 text-xs font-medium text-white/70 bg-black/30 px-2 py-1 rounded-full backdrop-blur">
        {especie === "Cachorro" ? "🐕" : "🐱"} {especie}
      </span>
    </div>
  );
}

export default function AdocaoPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="py-20 text-center px-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2D1B69, #1A1045)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <Badge variant="purple" size="sm" className="mb-4 bg-white/10 text-purple-200 border-purple-400/30">
            🐾 Adoção responsável
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Adote um amigo</h1>
          <p className="text-purple-200/60 text-lg max-w-xl mx-auto">
            Centenas de animais esperando por um lar cheio de amor.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 pb-20">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["Todos", "Cachorros", "Gatos", "Pequeno porte", "Médio porte", "Grande porte"].map((f) => (
            <button key={f} className="px-4 py-2 rounded-full bg-white/5 text-purple-200/70 text-sm font-medium whitespace-nowrap hover:bg-white/10 hover:text-white transition-colors border border-purple-500/10">
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animais.map((a) => (
            <div key={a.nome} className="rounded-2xl overflow-hidden border border-purple-500/10 glass-card">
              <FotoPet nome={a.nome} foto={a.foto} especie={a.especie} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{a.nome}</h3>
                  <Badge variant="success" size="sm">Disponível</Badge>
                </div>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-purple-200/50 mb-5">
                  <span>📌 {a.especie}</span>
                  <span>🏷️ {a.raca}</span>
                  <span>🎂 {a.idade}</span>
                  <span>📏 {a.porte}</span>
                  <span>{a.sexo === "Macho" ? "♂️" : "♀️"} {a.sexo}</span>
                  <span>🎨 {a.cor}</span>
                </div>
                <Link href={`/adocao/${a.nome.toLowerCase()}`}>
                  <Button variant="primary" fullWidth>Quero adotar</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
