"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

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
  transition: { staggerChildren: 0.12 },
};

const servicos = [
  {
    icon: "🏥",
    title: "Consultas Veterinárias",
    desc: "Atendimento clínico geral no conforto da sua casa. Nossos veterinários vão até você com equipamentos completos para consulta, exames básicos e prescrição.",
    badge: "A partir de R$ 49",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: "💉",
    title: "Vacinação",
    desc: "Vacinas obrigatórias e opcionais com certificado digital emitido na hora. Sua caderneta de vacinação sempre atualizada e disponível no app.",
    badge: "Campanha ativa",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: "🆘",
    title: "Pet SOS",
    desc: "Emergência veterinária 24h com geolocalização inteligente. Acione o veterinário mais próximo e receba ajuda em minutos, não em horas.",
    badge: "Urgente",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: "✂",
    title: "Castração",
    desc: "Procedimento cirúrgico seguro com equipe especializada e acompanhamento pós-operatório completo. Contribua para o controle populacional.",
    badge: "Gratuito",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: "🧪",
    title: "Exames Laboratoriais",
    desc: "Coleta domiciliar sem estresse para seu pet. Resultados digitais em até 48h com laudo detalhado e comparativo de histórico.",
    badge: "Novo",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: "🦷",
    title: "Odontologia",
    desc: "Limpeza, extração e tratamento bucal completos. Saúde bucal é essencial para o bem-estar geral do seu pet — previna doenças.",
    badge: "Sob consulta",
    gradient: "from-purple-600 to-pink-600",
  },
];

const depoimentos = [
  {
    nome: "Maria Silva",
    cidade: "São Paulo, SP",
    texto:
      "Consegui vacinar minha cachorra sem sair de casa. O veterinário foi super atencioso, explicou tudo sobre o calendário vacinal e ainda deu dicas de alimentação. Preço justo e atendimento nota 10!",
    nota: 5,
  },
  {
    nome: "João Oliveira",
    cidade: "Rio de Janeiro, RJ",
    texto:
      "Meu gato passou mal de madrugada e o Pet SOS salvou a vida dele. Em menos de 20 minutos o veterinário chegou aqui em casa, fez os primeiros socorros e encaminhou para acompanhamento. Nunca vou esquecer desse cuidado.",
    nota: 5,
  },
  {
    nome: "Ana Costa",
    cidade: "Belo Horizonte, MG",
    texto:
      "Adotei o Thor pela plataforma. Todo o processo foi transparente: conheci a história dele, agendei uma visita virtual e depois a adoção foi oficializada com suporte total da equipe. Amor à primeira vista!",
    nota: 5,
  },
  {
    nome: "Carlos Lima",
    cidade: "Curitiba, PR",
    texto:
      "O banco de ração chegou numa hora crítica. Estava desempregado e não tinha como comprar ração para meus três cães. A equipe foi humana, discreta e fez a entrega no mesmo dia. Gratidão eterna.",
    nota: 5,
  },
];

const stats = [
  { value: "50+", label: "cidades atendidas" },
  { value: "10K+", label: "pets cuidados" },
  { value: "200+", label: "veterinários parceiros" },
  { value: "98%", label: "satisfação dos tutores" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 text-6xl opacity-20"
          >
            🐾
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 right-20 text-5xl opacity-20"
          >
            🐕
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-60 left-1/3 text-4xl opacity-20"
          >
            🐱
          </motion.div>
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
                  🌟 Saúde animal acessível para todos os tutores
                </Badge>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Cuidado veterinário{" "}
                <span className="text-gradient bg-gradient-to-r from-purple-200 via-white to-purple-100">
                  perto de você
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-purple-100/70 max-w-xl mb-10 mx-auto lg:mx-0 leading-relaxed">
                Agende consultas, encontre veterinários próximos, adote um amigo peludo e tenha acesso
                a banco de ração — tudo em um só lugar. Cuidar de quem você ama nunca foi tão fácil.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/servicos">
                  <Button size="lg" variant="primary">
                    Ver serviços disponíveis
                  </Button>
                </Link>
                <Link href="/pet-sos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/60"
                  >
                    Emergência? Pet SOS 24h
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
                    <p className="text-3xl lg:text-4xl font-bold text-white">
                      {stat.value}
                    </p>
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
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <Badge variant="purple" size="sm" className="mb-4">
              Como funciona
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Cuidado em <span className="text-gradient bg-gradient-soft">3 passos</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Você escolhe o serviço, a gente cuida de todo o resto. Simples, rápido e humano.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { step: 1, icon: "📱", title: "Cadastre-se gratuitamente", desc: "Crie sua conta em menos de 2 minutos. Informe seus dados, cadastre seu pet e pronto — você já pode acessar todos os serviços." },
              { step: 2, icon: "🔍", title: "Escolha o que precisa", desc: "Navegue pelos serviços, agende consultas, solicite o Pet SOS em emergências ou candidate-se à adoção. Tudo com poucos cliques." },
              { step: 3, icon: "🏠", title: "Atendimento sem sair de casa", desc: "O veterinário vai até você. Emergências são atendidas em minutos. Adoções e doações são coordenadas com todo o suporte da nossa equipe." },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Card variant="highlight" className="p-8 text-center h-full">
                  <div className="relative inline-block mb-6">
                    <motion.span
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                      className="text-5xl block"
                    >
                      {item.icon}
                    </motion.span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <Badge variant="purple" size="sm" className="mb-4">
              Nossos serviços
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tudo para a saúde do seu pet
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Da prevenção à emergência, oferecemos serviços veterinários completos com preços acessíveis
              e atendimento humanizado — porque seu pet merece o melhor cuidado.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicos.map((servico, i) => (
              <motion.div
                key={servico.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href="/servicos">
                  <Card variant="default" className="p-6 h-full cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-4xl"
                      >
                        {servico.icon}
                      </motion.span>
                      <Badge variant="purple" size="sm">
                        {servico.badge}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {servico.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{servico.desc}</p>
                    <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${servico.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="text-center mt-10">
            <Link href="/servicos">
              <Button variant="primary" size="lg">
                Ver todos os serviços
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pet SOS Destaque */}
      <section className="py-24 bg-red-50/60 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />
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
                  🚨 Emergência 24 horas por dia
                </Badge>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Pet SOS — ajuda imediata <br />
                <span className="text-gradient bg-gradient-to-r from-red-600 to-orange-500">
                  quando seu pet mais precisa
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Emergências não avisam. Com o Pet SOS, você aciona o veterinário mais próximo
                com apenas um clique. Geolocalização inteligente, resposta ultrarrápida e
                atendimento humanizado para o seu pet.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                {[
                  { icon: "⏰", text: "Atendimento 24 horas, 7 dias por semana — inclusive feriados" },
                  { icon: "📍", text: "Veterinário mais próximo geolocalizado em até 30 minutos" },
                  { icon: "💬", text: "Integração total com WhatsApp para resposta e acompanhamento" },
                  { icon: "🏥", text: "Rede de clínicas parceiras para casos que exigem estrutura hospitalar" },
                ].map((item) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
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
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center text-[180px]"
                >
                  🚑
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-bg-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <Badge variant="purple" size="sm" className="mb-4">
              Depoimentos reais
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Quem ama, recomenda
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Histórias de tutores que transformaram a vida dos seus pets com a VetMóvel.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {depoimentos.map((dep, i) => (
              <motion.div
                key={dep.nome}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card variant="default" className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <motion.span
                        key={si}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + si * 0.1 }}
                        className={`text-lg ${si < dep.nota ? "text-amber-400" : "text-gray-200"}`}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed flex-1">
                    &ldquo;{dep.texto}&rdquo;
                  </p>
                  <div className="border-t border-purple-100 pt-3 mt-auto">
                    <p className="font-semibold text-gray-900">{dep.nome}</p>
                    <p className="text-sm text-gray-400">{dep.cidade}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="text-center p-8 rounded-2xl bg-bg-purple hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300"
              >
                <motion.p
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="text-4xl lg:text-5xl font-bold text-gradient bg-gradient-soft mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <Badge variant="purple" size="sm" className="mb-4">
              Cobertura nacional
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Onde estamos
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Expandindo o atendimento veterinário acessível para todo o Brasil. Estamos chegando
              cada vez mais perto de você.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="highlight" className="p-12 text-center">
              <div className="w-full bg-gradient-card rounded-xl flex items-center justify-center min-h-[280px] border-2 border-dashed border-purple-200">
                <div className="text-center px-8">
                  <motion.span
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-7xl mb-6 block"
                  >
                    🗺️
                  </motion.span>
                  <p className="text-2xl font-bold text-purple-900 mb-2">
                    Mapa interativo em breve
                  </p>
                  <p className="text-purple-600/70 max-w-md mx-auto">
                    Estamos desenvolvendo um mapa em tempo real para você encontrar
                    veterinários, pontos de coleta e parceiros perto da sua casa.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
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
              Cadastre-se gratuitamente e tenha acesso a consultas veterinárias, banco de ração,
              adoção responsável, Pet SOS 24h e muito mais. Cuidar de quem você ama nunca foi tão fácil.
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
