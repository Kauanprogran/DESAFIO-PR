import Link from "next/link";

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

        <div className="mt-12 pt-8 border-t border-purple-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-bold">
              Help Pet
            </Link>
          </div>
          <p className="text-purple-100/50 text-sm text-center">
            &copy; {new Date().getFullYear()} Help Pet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
