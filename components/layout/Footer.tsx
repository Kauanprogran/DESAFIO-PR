import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Help Pet",
    links: [
      { href: "/sobre", label: "Sobre nós" },
      { href: "/como-funciona", label: "Como funciona" },
      { href: "/contato", label: "Contato" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { href: "/servicos", label: "Consultas" },
      { href: "/pet-sos", label: "Pet SOS" },
      { href: "/adocao", label: "Adoção" },
      { href: "/banco-de-racao", label: "Banco de Ração" },
    ],
  },
  {
    title: "Para Tutores",
    links: [
      { href: "/cartao-pet-social", label: "Cartão Pet Social" },
      { href: "/parceiros", label: "Rede de Parceiros" },
      { href: "/doacoes", label: "Doações" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Parceiros",
    links: [
      { href: "/parceiros/cadastro", label: "Seja um parceiro" },
      { href: "/parceiros", label: "Encontre parceiros" },
    ],
  },
];

const socialLinks = [
  { href: "https://instagram.com/helppet", label: "Instagram", icon: "📸" },
  { href: "https://facebook.com/helppet", label: "Facebook", icon: "👍" },
  { href: "https://wa.me/554184158693", label: "WhatsApp", icon: "💬" },
  { href: "mailto:contato@helppet.com.br", label: "E-mail", icon: "📧" },
];

function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-purple-200 mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-purple-100/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-purple-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Link href="/" aria-label="Ir para página inicial">
                <span className="flex items-center" style={{ background: 'rgba(15, 10, 46, 0.9)', padding: '4px 14px 4px 8px', borderRadius: '14px', height: '52px' }}>
                  <Image src="/logo.png" alt="" aria-hidden="true" width={108} height={135} className="h-full w-auto object-contain opacity-80" />
                </span>
              </Link>
              <span className="text-purple-400/30 text-sm">|</span>
              <span className="text-purple-200/50 text-sm">CRMV registrado • Protegido LGPD</span>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-purple-100/60 hover:text-white text-sm transition-colors"
                  aria-label={social.label}
                >
                  <span aria-hidden="true">{social.icon}</span>
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-purple-300/40">
              <span>🔒 Ambiente seguro</span>
              <span>📋 CRMV-PR ativo</span>
              <span>🤝 Parceiros verificados</span>
            </div>
            <p className="text-purple-100/40 text-xs text-center">
              &copy; {new Date().getFullYear()} Help Pet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
