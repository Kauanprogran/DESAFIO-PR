"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/shared/TiltCard";
import { Spotlight } from "@/components/shared/Spotlight";

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

const filtros = [
  { label: "Todos", value: "todos", fn: () => true },
  { label: "Cachorros", value: "cachorro", fn: (a: typeof animais[0]) => a.especie === "Cachorro" },
  { label: "Gatos", value: "gato", fn: (a: typeof animais[0]) => a.especie === "Gato" },
  { label: "Pequeno porte", value: "pequeno", fn: (a: typeof animais[0]) => a.porte === "Pequeno" },
  { label: "Médio porte", value: "medio", fn: (a: typeof animais[0]) => a.porte === "Médio" },
  { label: "Grande porte", value: "grande", fn: (a: typeof animais[0]) => a.porte === "Grande" },
];

function FotoPet({ nome, foto, especie }: { nome: string; foto: string; especie: string }) {
  return (
    <div className="relative w-full h-52 rounded-xl overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900">
      <Image src={foto} alt={nome} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-3 text-xs font-medium text-white/70 bg-black/30 px-2 py-1 rounded-full backdrop-blur">
        {especie === "Cachorro" ? "🐕" : "🐱"} {especie}
      </span>
    </div>
  );
}

export default function AdocaoPage() {
  const [ativo, setAtivo] = useState("todos");
  const filtroAtivo = filtros.find((f) => f.value === ativo)!;
  const filtrados = animais.filter(filtroAtivo.fn);

  return (
    <div className="min-h-screen" style={{ background: "#0F0A2E" }}>
      <section className="relative overflow-hidden py-20 text-center px-4 hero-gradient" style={{ background: "linear-gradient(-45deg, #1A1045, #78350F, #D97706, #1A1045)" }}>
        <Spotlight />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <Badge variant="purple" size="sm" className="mb-4 bg-white/10 text-amber-200 border-amber-400/30">
            🐾 Adoção responsável
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Adote um{" "}
            <span className="text-gradient bg-gradient-to-r from-amber-300 to-orange-200">amigo</span>
          </h1>
          <p className="text-amber-200/60 text-lg max-w-xl mx-auto">
            Centenas de animais esperando por um lar cheio de amor.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F0A2E] to-transparent z-10" />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 pb-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {filtros.map((f) => (
            <button
              key={f.value}
              onClick={() => setAtivo(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-300 ${
                ativo === f.value
                  ? "bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-600/25"
                  : "bg-white/5 text-amber-200/70 border-amber-500/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtrados.map((a) => (
              <motion.div key={a.nome} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <TiltCard>
                  <div className="rounded-2xl overflow-hidden border border-amber-500/10 glass-card card-glow group">
                    <FotoPet nome={a.nome} foto={a.foto} especie={a.especie} />
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">{a.nome}</h3>
                        <Badge variant="success" size="sm">Disponível</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-amber-200/50 mb-5">
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
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtrados.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-amber-300/50 py-12">
            Nenhum animal encontrado para este filtro.
          </motion.p>
        )}
      </section>
    </div>
  );
}
