"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const ParanaMap = dynamic(() => import("@/components/map/ParanaMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl bg-purple-50 animate-pulse flex items-center justify-center">
      <span className="text-purple-300 text-4xl">🗺️</span>
    </div>
  ),
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
};

const servicos = [
  {
    icon: "🏥",
    title: "Consultas Veterinárias",
    desc: "Atendimento clínico geral no conforto da sua casa. Equipamentos completos para consulta, exames básicos e prescrição.",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: "💉",
    title: "Vacinação",
    desc: "Vacinas obrigatórias e opcionais com certificado digital. Caderneta de vacinação sempre atualizada no app.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: "🆘",
    title: "Pet SOS",
    desc: "Emergência veterinária 24h com geolocalização inteligente. Veterinário mais próximo em minutos.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: "✂️",
    title: "Castração",
    desc: "Procedimento seguro com equipe especializada e pós-operatório completo. Contribua com o controle populacional.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: "🧪",
    title: "Exames Laboratoriais",
    desc: "Coleta domiciliar sem estresse. Resultados digitais em até 48h com laudo detalhado.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: "🦷",
    title: "Odontologia",
    desc: "Limpeza, extração e tratamento bucal completo. Saúde bucal essencial para o bem-estar do seu pet.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: "🏠",
    title: "Banco de Ração",
    desc: "Distribuição de ração para tutores em situação de vulnerabilidade. Cadastre-se e solicite ajuda.",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    icon: "🐱",
    title: "Adoção Responsável",
    desc: "Encontre seu novo melhor amigo. Processo transparente com suporte total da equipe.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: "💊",
    title: "Farmácia Veterinária",
    desc: "Medicamentos com entrega domiciliar. Prescrição digital com validade em todo Brasil.",
    gradient: "from-indigo-500 to-purple-600",
  },
];

const stats = [
  { value: "50+", label: "cidades no Paraná" },
  { value: "10K+", label: "pets cuidados" },
  { value: "200+", label: "veterinários" },
  { value: "98%", label: "satisfação" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
          <span className="pet-decoration top-20 left-[8%] animate-float-slow">🐾</span>
          <span className="pet-decoration top-32 right-[12%] animate-float-med" style={{ animationDelay: "1s" }}>🐕</span>
          <span className="pet-decoration bottom-48 left-[15%] animate-float-fast" style={{ animationDelay: "2s" }}>🐱</span>
          <span className="pet-decoration bottom-32 right-[8%] animate-float-slow" style={{ animationDelay: "0.5s" }}>🦴</span>
          <span className="pet-decoration top-1/2 left-[5%] animate-float-med" style={{ animationDelay: "1.5s" }}>🐰</span>
          <span className="pet-decoration top-2/3 right-[5%] animate-float-fast" style={{ animationDelay: "0.8s" }}>🐶</span>
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
                <Badge variant="purple" size="sm" className="mb-6 glass inline-flex">
                  🐾 Saúde animal acessível em todo Paraná
                </Badge>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Cuidado veterinário{" "}
                <span className="text-gradient bg-gradient-to-r from-purple-200 via-white to-purple-100">
                  onde seu pet está
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-purple-100/70 max-w-xl mb-10 mx-auto lg:mx-0 leading-relaxed">
                Agende consultas, veterinários parceiros, emergência 24h, banco de ração
                e adoção responsável. Tudo perto de você, no estado do Paraná.
              </p>

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
                    className="!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/60"
                  >
                    🆘 Pet SOS 24h
                  </Button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
              >
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-purple-200/70">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-[420px] h-[420px]">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-purple-400/15 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-purple-300/10 rounded-full"
                />
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.span
                    animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[220px] leading-none"
                  >
                    🐾
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-bg-soft relative overflow-hidden">
        <span className="pet-decoration top-10 right-[10%] animate-float-slow">🐾</span>
        <span className="pet-decoration bottom-10 left-[5%] animate-float-med" style={{ animationDelay: "1s" }}>🐕</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <Badge variant="purple" size="sm" className="mb-4">Como funciona</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Cuidado em <span className="text-gradient bg-gradient-soft">3 passos</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Você escolhe o serviço, a gente cuida do resto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, icon: "📱", title: "Cadastre-se", desc: "Crie sua conta gratuita em menos de 2 minutos. Cadastre seu pet e acesse todos os serviços." },
              { step: 2, icon: "🔍", title: "Escolha o serviço", desc: "Navegue pelos serviços, agende consultas ou solicite Pet SOS em emergências." },
              { step: 3, icon: "🏠", title: "Atendimento em casa", desc: "O veterinário vai até você. Emergências em minutos. Adoções e doações com suporte total." },
            ].map((item) => (
              <motion.div key={item.step} {...fadeUp(item.step * 0.15)}>
                <div className="glass-card rounded-2xl p-8 text-center h-full">
                  <span className="text-5xl block mb-6">{item.icon}</span>
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-white relative overflow-hidden">
        <span className="pet-decoration top-20 left-[12%] animate-float-slow">🐱</span>
        <span className="pet-decoration bottom-20 right-[8%] animate-float-fast" style={{ animationDelay: "1s" }}>🦴</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <Badge variant="purple" size="sm" className="mb-4">Nossos serviços</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tudo para o seu pet
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
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
                      <span className="text-4xl">{servico.icon}</span>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {servico.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{servico.desc}</p>
                    <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${servico.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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

      {/* Pet SOS */}
      <section className="py-24 bg-red-50/60 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />
          <span className="pet-decoration top-10 left-[10%] animate-float-slow">🐾</span>
          <span className="pet-decoration bottom-10 right-[10%] animate-float-med" style={{ animationDelay: "1.5s" }}>🐶</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <Badge variant="danger" size="sm" className="mb-4">
                  🚨 Emergência 24h
                </Badge>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Pet SOS — ajuda imediata{" "}
                <span className="text-gradient bg-gradient-to-r from-red-600 to-orange-500">
                  quando seu pet precisa
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Emergências não avisam. Com o Pet SOS, acione o veterinário mais próximo
                com um clique. Resposta rápida, geolocalização inteligente, atendimento humanizado.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: "⏰", text: "Atendimento 24h, todos os dias, inclusive feriados" },
                  { icon: "📍", text: "Veterinário mais próximo geolocalizado em até 30 min" },
                  { icon: "💬", text: "Integração com WhatsApp para resposta imediata" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/pet-sos">
                <Button variant="danger" size="lg">
                  🆘 Acionar Pet SOS agora
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-red-400/15 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-dashed border-red-300/20 rounded-full"
                />
                <span className="absolute inset-0 flex items-center justify-center text-[180px]">
                  🚑
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa Paraná */}
      <section className="py-24 bg-bg-soft relative overflow-hidden">
        <span className="pet-decoration top-10 right-[15%] animate-float-slow">🐾</span>
        <span className="pet-decoration bottom-10 left-[8%] animate-float-med" style={{ animationDelay: "1s" }}>🐰</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <Badge variant="purple" size="sm" className="mb-4">Cobertura no Paraná</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Onde estamos
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Expandindo o atendimento veterinário acessível por todo o estado do Paraná.
              Clique nos marcadores para ver as cidades atendidas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ParanaMap />
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              🟣 Cidades com cobertura • Em expansão para mais municípios
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center p-8 rounded-2xl bg-bg-purple hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300"
              >
                <p className="text-4xl lg:text-5xl font-bold text-gradient bg-gradient-soft mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 border border-purple-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-96 h-96 border border-purple-500/10 rounded-full"
          />
          <span className="pet-decoration top-20 left-[10%] animate-float-slow" style={{ opacity: 0.08 }}>🐾</span>
          <span className="pet-decoration bottom-20 right-[10%] animate-float-med" style={{ opacity: 0.08, animationDelay: "1s" }}>🐱</span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp()}>
            <Badge variant="neutral" size="sm" className="mb-6 !bg-white/10 !text-purple-200">
              💜 Comece agora
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Seu pet merece cuidado de qualidade
            </h2>
            <p className="text-purple-100/60 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Cadastre-se gratuitamente e tenha acesso a consultas, banco de ração,
              adoção responsável e Pet SOS 24h em todo o Paraná.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="primary">
                  Criar conta gratuita
                </Button>
              </Link>
              <Link href="/servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/60"
                >
                  Conhecer serviços
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
