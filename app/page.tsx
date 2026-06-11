import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const servicos = [
  {
    icon: "🏥",
    title: "Consultas Veterinárias",
    desc: "Atendimento clínico geral no conforto da sua casa.",
    badge: "A partir de R$ 49",
  },
  {
    icon: "💉",
    title: "Vacinação",
    desc: "Vacinas obrigatórias e opcionais com certificado digital.",
    badge: "Campanha ativa",
  },
  {
    icon: "🆘",
    title: "Pet SOS",
    desc: "Emergência veterinária com geolocalização e resposta imediata.",
    badge: "Urgente",
  },
  {
    icon: "✂",
    title: "Castração",
    desc: "Procedimento seguro com equipe especializada e pós-operatório.",
    badge: "Gratuito",
  },
  {
    icon: "🧪",
    title: "Exames Laboratoriais",
    desc: "Coleta domiciliar com resultado em até 48h.",
    badge: "Novo",
  },
  {
    icon: "🦷",
    title: "Odontologia",
    desc: "Limpeza, extração e tratamento bucal para seu pet.",
    badge: "Sob consulta",
  },
];

const depoimentos = [
  {
    nome: "Maria Silva",
    cidade: "São Paulo, SP",
    texto:
      "Consegui vacinar minha cachorra sem sair de casa. Preço justo e atendimento excelente!",
    nota: 5,
  },
  {
    nome: "João Oliveira",
    cidade: "Rio de Janeiro, RJ",
    texto:
      "O Pet SOS salvou meu gato quando ele passou mal à noite. Veterinário chegou em 20 minutos.",
    nota: 5,
  },
  {
    nome: "Ana Costa",
    cidade: "Belo Horizonte, MG",
    texto:
      "Adotei meu melhor amigo pela plataforma. Processo transparente e cheio de amor.",
    nota: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="purple" size="sm" className="mb-6">
                🌟 Saúde animal acessível para todos
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Cuidado veterinário{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">
                  perto de você
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-purple-100/80 max-w-xl mb-8 mx-auto lg:mx-0">
                Agende consultas, encontre veterinários próximos, adote um
                amigo e tenha acesso a banco de ração — tudo em um só lugar.
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
                    className="!border-white !text-white hover:!bg-white/10"
                  >
                    Emergência? Pet SOS
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">50+</p>
                  <p className="text-sm text-purple-200">cidades atendidas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">10k+</p>
                  <p className="text-sm text-purple-200">pets cuidados</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">200+</p>
                  <p className="text-sm text-purple-200">veterinários</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-3xl" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="text-[200px]">🐾</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="purple" size="sm" className="mb-4">
              Como funciona
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Em 3 passos simples
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Você escolhe o serviço, a gente cuida do resto.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, icon: "📱", title: "Cadastre-se", desc: "Crie sua conta gratuita em menos de 2 minutos." },
              { step: 2, icon: "🔍", title: "Escolha o serviço", desc: "Navegue pelos serviços, agende ou solicite ajuda." },
              { step: 3, icon: "🏠", title: "Atendimento em casa", desc: "O veterinário vai até você ou o pet é resgatado." },
            ].map((item) => (
              <Card key={item.step} variant="highlight" className="p-8 text-center">
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="purple" size="sm" className="mb-4">
              Nossos serviços
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo para o bem-estar do seu pet
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Serviços veterinários completos com preços acessíveis.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => (
              <Link key={servico.title} href="/servicos">
                <Card className="p-6 h-full cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{servico.icon}</span>
                    <Badge variant="purple" size="sm">
                      {servico.badge}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {servico.title}
                  </h3>
                  <p className="text-sm text-gray-500">{servico.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/servicos">
              <Button variant="primary" size="lg">
                Ver todos os serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pet SOS Destaque */}
      <section className="py-20 bg-danger-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="danger" size="sm" className="mb-4 animate-pulse">
                🚨 Emergência 24h
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Pet SOS — Ajuda imediata para seu pet
              </h2>
              <p className="text-gray-600 mb-6">
                Emergências não avisam. Com o Pet SOS, você aciona o
                veterinário mais próximo com um clique. Geolocalização,
                resposta rápida, atendimento humanizado.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Atendimento 24 horas, 7 dias por semana",
                  "Veterinário mais próximo em até 30 minutos",
                  "Integração com WhatsApp para resposta imediata",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="text-danger">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/pet-sos">
                <Button variant="danger" size="lg">
                  🆘 Acionar Pet SOS
                </Button>
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <span className="text-[180px]">🚑</span>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-bg-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="purple" size="sm" className="mb-4">
              Depoimentos
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quem usa recomenda
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Veja o que os tutores estão falando do VetMóvel.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((dep) => (
              <Card key={dep.nome} variant="default" className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-warning">
                      {i < dep.nota ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{dep.texto}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{dep.nome}</p>
                  <p className="text-sm text-gray-400">{dep.cidade}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="purple" size="sm" className="mb-4">
              Cobertura
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onde estamos
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Expandindo o atendimento veterinário para todo o Brasil.
            </p>
          </div>
          <Card variant="highlight" className="p-12 text-center">
            <div className="w-full h-64 bg-purple-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-lg font-semibold text-gray-700">
                  Mapa interativo em breve
                </p>
                <p className="text-sm text-gray-400">
                  Consulte a cobertura na sua região
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Seu pet merece cuidado de qualidade
          </h2>
          <p className="text-purple-100/70 text-lg mb-8 max-w-xl mx-auto">
            Cadastre-se gratuitamente e tenha acesso a serviços
            veterinários, banco de ração, adoção e muito mais.
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
                className="!border-white !text-white hover:!bg-white/10"
              >
                Conhecer serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
