"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PetSOSButton } from "@/components/shared/PetSOSButton";
import {
  Stethoscope,
  Syringe,
  AlertTriangle,
  Scissors,
  FlaskConical,
  Bone,
  Package,
  PawPrint,
  Pill,
} from "lucide-react";

const RotaAnimada = dynamic(() => import("@/components/map/RotaAnimada"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[280px] md:h-[350px] rounded-2xl bg-purple-950/50 animate-pulse flex items-center justify-center">
      <span className="text-purple-400 text-4xl">🚐</span>
    </div>
  ),
});

const ParanaMap = dynamic(() => import("@/components/map/ParanaMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[280px] md:h-[350px] rounded-2xl bg-purple-950/50 animate-pulse flex items-center justify-center">
      <span className="text-purple-400 text-4xl">🗺️</span>
    </div>
  ),
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const servicos = [
  {
    icon: Stethoscope,
    title: "Consultas Veterinárias",
    desc: "Atendimento clínico geral no conforto da sua casa. Equipamentos completos para consulta, exames básicos e prescrição.",
  },
  {
    icon: Syringe,
    title: "Vacinação",
    desc: "Vacinas obrigatórias e opcionais com certificado digital. Caderneta sempre atualizada no app.",
  },
  {
    icon: AlertTriangle,
    title: "Pet SOS",
    desc: "Emergência 24h com geolocalização. Veterinário mais próximo em minutos.",
  },
  {
    icon: Scissors,
    title: "Castração",
    desc: "Procedimento seguro com equipe especializada e pós-operatório completo.",
  },
  {
    icon: FlaskConical,
    title: "Exames Laboratoriais",
    desc: "Coleta domiciliar sem estresse. Resultados em até 48h com laudo detalhado.",
  },
  {
    icon: Bone,
    title: "Odontologia",
    desc: "Limpeza, extração e tratamento bucal. Saúde bucal essencial para o bem-estar do seu pet.",
  },
  {
    icon: Package,
    title: "Banco de Ração",
    desc: "Distribuição de ração para tutores em situação de vulnerabilidade. Cadastre-se e solicite ajuda.",
  },
  {
    icon: PawPrint,
    title: "Adoção Responsável",
    desc: "Encontre seu novo amigo. Processo transparente com suporte total da equipe.",
  },
  {
    icon: Pill,
    title: "Farmácia Veterinária",
    desc: "Medicamentos com entrega domiciliar. Prescrição digital válida em todo Brasil.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 35%, #BEBBE8 65%, #DDD6FE 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-200/15 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow" style={{ opacity: 0.15, color: "#7C3AED" }}>🐾</span>
          <span className="pet-decoration top-32 right-[12%] animate-float-med" style={{ opacity: 0.15, color: "#8B5CF6", animationDelay: "1s" }}>🐕</span>
          <span className="pet-decoration bottom-48 left-[15%] animate-float-fast" style={{ opacity: 0.15, color: "#7C3AED", animationDelay: "2s" }}>🐱</span>
          <span className="pet-decoration bottom-32 right-[8%] animate-float-slow" style={{ opacity: 0.15, color: "#8B5CF6", animationDelay: "0.5s" }}>🦴</span>
          <span className="pet-decoration top-1/2 left-[5%] animate-float-med" style={{ opacity: 0.15, color: "#7C3AED", animationDelay: "1.5s" }}>🐰</span>
          <span className="pet-decoration top-2/3 right-[5%] animate-float-fast" style={{ opacity: 0.15, color: "#8B5CF6", animationDelay: "0.8s" }}>🐶</span>
          <span className="pet-decoration top-[15%] left-[30%] animate-float-slow" style={{ opacity: 0.15, color: "#7C3AED", animationDelay: "2.5s" }}>🐾</span>
          <span className="pet-decoration top-[40%] right-[25%] animate-float-med" style={{ opacity: 0.15, color: "#8B5CF6", animationDelay: "1.2s" }}>🐕</span>
          <span className="pet-decoration bottom-[20%] left-[35%] animate-float-fast" style={{ opacity: 0.15, color: "#7C3AED", animationDelay: "0.3s" }}>🐱</span>
          <span className="pet-decoration bottom-[5%] left-[55%] animate-float-slow" style={{ opacity: 0.15, color: "#8B5CF6", animationDelay: "3s" }}>🦴</span>
          <span className="pet-decoration top-[60%] left-[8%] animate-float-med" style={{ opacity: 0.15, color: "#7C3AED", animationDelay: "1.8s" }}>🐰</span>
          <span className="pet-decoration top-[5%] right-[35%] animate-float-fast" style={{ opacity: 0.15, color: "#8B5CF6", animationDelay: "0.5s" }}>🐶</span>
          <span className="pet-decoration bottom-[60%] right-[8%] animate-float-slow" style={{ opacity: 0.15, color: "#7C3AED", animationDelay: "2s" }}>🐾</span>
          <span className="pet-decoration top-[25%] left-[60%] animate-float-med" style={{ opacity: 0.15, color: "#8B5CF6", animationDelay: "0.7s" }}>🐱</span>
          <span className="pet-decoration bottom-[35%] left-[5%] animate-float-fast" style={{ opacity: 0.15, color: "#7C3AED", animationDelay: "1.5s" }}>🐕</span>
          <span className="pet-decoration top-[50%] right-[40%] animate-float-slow" style={{ opacity: 0.15, color: "#8B5CF6", animationDelay: "2.2s" }}>🦴</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-700/30 text-purple-800 bg-white/60 mb-6">
                  🐾 Saúde animal em todo o Paraná
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-purple-900 leading-tight mb-6">
                Cuidado veterinário{" "}
                 <span className="text-gradient bg-gradient-to-r from-purple-800 to-purple-600">
                  onde seu pet está
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-purple-700/80 max-w-xl mb-6 mx-auto lg:mx-0 leading-relaxed">
                Agende consultas, veterinários parceiros, emergência 24h, banco de ração
                e adoção responsável. Tudo perto de você no estado do Paraná.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-purple-800/70 mb-8 justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> CRMV registrado</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Dados protegidos LGPD</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Atendimento humanizado</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/servicos">
                  <Button size="lg" variant="primary">
                    Ver serviços
                  </Button>
                </Link>
                <Link href="/pet-sos">
                  <Button
                    size="lg"
                    variant="outline"
                    style={{ borderColor: "#7C3AED", color: "#7C3AED" }}
                    className="hover:bg-purple-50"
                  >
                    🆘 Pet SOS 24h
                  </Button>
                </Link>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-[420px] h-[420px]">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl" />
                <div className="absolute inset-8 border border-purple-400/10 rounded-full" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="text-[220px] leading-none opacity-90">🐾</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0A2E] to-transparent pointer-events-none" />
      </section>

      {/* Como funciona */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#0F0A2E" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border border-purple-400/20 text-purple-200 bg-white/5 mb-5">
              Como funciona
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Cuidado em{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200">
                3 passos simples
              </span>
            </h2>
            <p className="text-base text-purple-300/50 max-w-lg mx-auto">
              Você escolhe o serviço, a gente cuida do resto.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-20 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-0.5 bg-gradient-to-r from-purple-600/40 via-purple-400/40 to-purple-600/40" />

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { step: "01", icon: "📱", title: "Cadastre-se", desc: "Crie sua conta gratuita em menos de 2 minutos. Cadastre seu pet e acesse todos os serviços." },
                { step: "02", icon: "🔍", title: "Escolha o serviço", desc: "Navegue pelos serviços, agende consultas ou solicite Pet SOS em emergências." },
                { step: "03", icon: "🏠", title: "Atendimento em casa", desc: "O veterinário vai até você com tudo que seu pet precisa. Cuidado completo e humanizado." },
              ].map((item, i) => (
                <motion.div key={item.step} {...fadeUp(i * 0.15)} className="relative">
                  <div className="glass-card rounded-2xl p-8 text-center h-full flex flex-col items-center relative z-10 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-400/20 flex items-center justify-center mb-6">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold text-purple-400/60 tracking-widest">
                        PASSO {item.step}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-purple-500/40" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-purple-300/50 leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp(0.4)} className="text-center mt-12">
            <Link href="/register">
              <Button
                variant="outline"
                size="lg"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fff" }}
                className="hover:bg-white/5"
              >
                Começar agora →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" style={{ background: "#0F0A2E" }}><div className="section-divider-diamond" /></div>

      {/* Serviços */}
      <section id="servicos" className="py-24 relative overflow-hidden" style={{ background: "#1A1045" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="pet-decoration top-5 left-[10%] animate-float-slow" style={{ opacity: 0.06 }}>🐱</span>
          <span className="pet-decoration top-20 right-[8%] animate-float-med" style={{ opacity: 0.06, animationDelay: "1s" }}>🐾</span>
          <span className="pet-decoration bottom-10 left-[20%] animate-float-fast" style={{ opacity: 0.06, animationDelay: "0.5s" }}>🐕</span>
          <span className="pet-decoration bottom-32 right-[15%] animate-float-slow" style={{ opacity: 0.06, animationDelay: "1.5s" }}>🦴</span>
          <span className="pet-decoration top-[40%] left-[5%] animate-float-med" style={{ opacity: 0.06, animationDelay: "2s" }}>🐰</span>
          <span className="pet-decoration top-[60%] right-[5%] animate-float-fast" style={{ opacity: 0.06, animationDelay: "0.3s" }}>🐶</span>
          <span className="pet-decoration top-[15%] left-[45%] animate-float-slow" style={{ opacity: 0.06, animationDelay: "1.2s" }}>🐾</span>
          <span className="pet-decoration bottom-[20%] right-[40%] animate-float-med" style={{ opacity: 0.06, animationDelay: "0.8s" }}>🐱</span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4">
              Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Tudo para o seu pet
            </h2>
            <p className="text-lg text-purple-200/50 max-w-2xl mx-auto">
              Da prevenção à emergência, oferecemos serviços completos com atendimento humanizado.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, i) => (
              <motion.div
                key={servico.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={servico.title === "Pet SOS" ? "/pet-sos" : servico.title === "Banco de Ração" ? "/banco-de-racao" : servico.title === "Adoção Responsável" ? "/adocao" : "/servicos"}>
                  <div className="glass-card rounded-2xl p-6 h-full cursor-pointer group">
                    <div className="flex items-center gap-4 mb-4">
                      <servico.icon className="w-8 h-8 text-purple-300" strokeWidth={1.5} />
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {servico.title}
                      </h3>
                    </div>
                    <p className="text-sm text-purple-200/50 leading-relaxed">{servico.desc}</p>
                    <div className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="text-center mt-10">
            <Link href="/servicos">
              <Button variant="primary" size="lg">
                Ver todos os serviços
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" style={{ background: "#1A1045" }}><div className="section-divider-diamond" /></div>

      {/* Nossa Van */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#0F0A2E" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="pet-decoration top-10 left-[5%] animate-float-slow" style={{ opacity: 0.06 }}>🐾</span>
          <span className="pet-decoration bottom-10 right-[5%] animate-float-med" style={{ opacity: 0.06, animationDelay: "1s" }}>🐕</span>
          <span className="pet-decoration top-1/2 left-[20%] animate-float-fast" style={{ opacity: 0.06, animationDelay: "0.3s" }}>🐱</span>
          <span className="pet-decoration bottom-1/3 right-[20%] animate-float-slow" style={{ opacity: 0.06, animationDelay: "2s" }}>🦴</span>
          <span className="pet-decoration top-[30%] right-[35%] animate-float-med" style={{ opacity: 0.06, animationDelay: "0.8s" }}>🐰</span>
          <span className="pet-decoration bottom-[5%] left-[40%] animate-float-fast" style={{ opacity: 0.06, animationDelay: "1.5s" }}>🐶</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()} className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4">
                🚐 Nossa Van
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Atendimento veterinário{" "}
                <span className="text-gradient bg-gradient-to-r from-purple-400 to-purple-200">
                  vai até você
                </span>
              </h2>
              <p className="text-lg text-purple-200/50 mb-8 leading-relaxed">
                Nossa van veterinária percorre bairros e cidades do Paraná levando atendimento
                clínico, vacinação, exames e castração gratuita para tutores de baixa renda.
                Equipamentos completos e equipe especializada a bordo.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "📍", text: "Atendimento em bairros e comunidades" },
                  { icon: "⏰", text: "Rota semanal com horários agendados" },
                  { icon: "🏥", text: "Equipamentos clínicos completos a bordo" },
                  { icon: "💜", text: "Prioridade para tutores de baixa renda" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <span className="text-purple-200/60">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/servicos">
                <Button variant="primary" size="lg">
                  Ver rota da van
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 flex items-center justify-center"
            >
              <div className="relative w-[360px] h-[360px]">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl" />
                <div className="absolute inset-6 border border-purple-400/10 rounded-full" />
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src="/images/van-help-pet.jpeg"
                    alt="Van Help Pet"
                    width={360}
                    height={360}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Acompanhe a Rota */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#0F0A2E" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="pet-decoration top-10 left-[10%] animate-float-slow" style={{ opacity: 0.06 }}>🚐</span>
          <span className="pet-decoration bottom-10 right-[10%] animate-float-med" style={{ opacity: 0.06, animationDelay: "1.5s" }}>🐾</span>
          <span className="pet-decoration top-1/3 right-[20%] animate-float-fast" style={{ opacity: 0.06, animationDelay: "0.5s" }}>🐕</span>
          <span className="pet-decoration bottom-1/4 left-[15%] animate-float-slow" style={{ opacity: 0.06, animationDelay: "1s" }}>🐱</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4">
              🚐 Rota ao vivo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Acompanhe a{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-purple-200">rota da van</span>
            </h2>
            <p className="text-lg text-purple-200/50 max-w-2xl mx-auto">
              Veja em tempo real a van saindo da base em Capitão Leônidas Marques até o endereço do cliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <RotaAnimada />
          </motion.div>
        </div>
      </section>

      <div className="section-divider" style={{ background: "#0F0A2E" }}><div className="section-divider-diamond" /></div>

      {/* Pet SOS */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1045 0%, #0F0A2E 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />
          <span className="pet-decoration top-10 left-[10%] animate-float-slow">🐾</span>
          <span className="pet-decoration bottom-10 right-[10%] animate-float-med" style={{ animationDelay: "1.5s" }}>🐶</span>
          <span className="pet-decoration top-20 right-[30%] animate-float-fast" style={{ animationDelay: "0.5s" }}>🐾</span>
          <span className="pet-decoration bottom-20 left-[30%] animate-float-slow" style={{ animationDelay: "2s" }}>🐕</span>
          <span className="pet-decoration top-[40%] left-[15%] animate-float-med" style={{ animationDelay: "1s" }}>🐱</span>
          <span className="pet-decoration bottom-[30%] right-[20%] animate-float-fast" style={{ animationDelay: "0.3s" }}>🦴</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-red-400/30 text-red-300 bg-red-500/10 mb-4">
                🚨 Emergência 24h
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Pet SOS — ajuda imediata{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-300">
                  quando seu pet precisa
                </span>
              </h2>
              <p className="text-lg text-purple-200/50 mb-8 leading-relaxed">
                Emergências não avisam. Acione o veterinário mais próximo com um clique.
                Resposta rápida, geolocalização, atendimento humanizado.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: "⏰", text: "Atendimento 24h, todos os dias, inclusive feriados" },
                  { icon: "📍", text: "Veterinário mais próximo geolocalizado em até 30 min" },
                  { icon: "💬", text: "Integração com WhatsApp para resposta imediata" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <span className="text-purple-200/60">{item.text}</span>
                  </div>
                ))}
              </div>
              <PetSOSButton variant="danger" size="lg">
                🆘 Acionar Pet SOS agora
              </PetSOSButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-2xl" />
                <div className="absolute inset-4 border-2 border-dashed border-red-400/10 rounded-full" />
                <span className="absolute inset-0 flex items-center justify-center text-[180px]">🚑</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ background: "linear-gradient(135deg, #1A1045 0%, #0F0A2E 100%)" }}><div className="section-divider-diamond" /></div>

      {/* Mapa Paraná */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#1A1045" }}>
        <span className="pet-decoration top-10 right-[15%] animate-float-slow">🐾</span>
        <span className="pet-decoration bottom-10 left-[8%] animate-float-med" style={{ animationDelay: "1s" }}>🐰</span>
        <span className="pet-decoration top-1/3 left-[15%] animate-float-fast" style={{ animationDelay: "0.5s" }}>🐕</span>
        <span className="pet-decoration bottom-1/4 right-[25%] animate-float-slow" style={{ animationDelay: "2s" }}>🐱</span>
        <span className="pet-decoration top-[50%] right-[10%] animate-float-med" style={{ animationDelay: "1.2s" }}>🦴</span>
        <span className="pet-decoration bottom-[40%] left-[30%] animate-float-fast" style={{ animationDelay: "0.3s" }}>🐶</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-4">
              Cobertura
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Onde estamos no Paraná
            </h2>
            <p className="text-lg text-purple-200/50 max-w-xl mx-auto">
              Clique nos marcadores para ver as cidades atendidas. Estamos expandindo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-purple-500/20"
          >
            <ParanaMap />
          </motion.div>

          <div className="mt-6 text-center">
            <p className="text-sm text-purple-300/40">🟣 Cidades com cobertura • Em expansão para mais municípios</p>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ background: "#1A1045" }}><div className="section-divider-diamond" /></div>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2D1B69 0%, #1A1045 50%, #0F0A2E 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 border border-purple-500/10 rounded-full" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 border border-purple-500/10 rounded-full" />
          <span className="pet-decoration top-20 left-[10%] animate-float-slow" style={{ opacity: 0.06 }}>🐾</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.06, animationDelay: "1s" }}>🐱</span>
          <span className="pet-decoration top-1/2 left-[10%] animate-float-fast" style={{ opacity: 0.06, animationDelay: "0.3s" }}>🐕</span>
          <span className="pet-decoration bottom-1/3 right-[30%] animate-float-slow" style={{ opacity: 0.06, animationDelay: "2s" }}>🦴</span>
          <span className="pet-decoration top-[30%] right-[15%] animate-float-med" style={{ opacity: 0.06, animationDelay: "0.8s" }}>🐰</span>
          <span className="pet-decoration bottom-[10%] left-[30%] animate-float-fast" style={{ opacity: 0.06, animationDelay: "1.5s" }}>🐶</span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30 text-purple-200 bg-white/5 mb-6">
              🎁 1ª consulta gratuita
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Seu pet merece cuidado de qualidade
            </h2>
            <p className="text-purple-200/50 text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Cadastre-se hoje e ganhe <strong className="text-white">1ª consulta veterinária gratuita</strong>. 
              Cuidado completo sem custo inicial para seu pet.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-purple-300/50 mb-8">
              <span className="inline-flex items-center gap-1.5">✓ CRMV registrado</span>
              <span className="inline-flex items-center gap-1.5">✓ Dados protegidos LGPD</span>
              <span className="inline-flex items-center gap-1.5">✓ Atendimento humanizado</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="primary">
                  Quero minha consulta grátis
                </Button>
              </Link>
              <Link href="/servicos">
                <Button
                  size="lg"
                  variant="outline"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
                  className="hover:bg-white/10"
                >
                  Ver todos os serviços
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
