"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/pet-sos", label: "Pet SOS" },
  { href: "/adocao", label: "Adoção" },
  { href: "/doacoes", label: "Doações" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 gradient-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-white tracking-tight"
          >
            VetMóvel
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-purple-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-3 px-4 py-2 text-sm font-semibold text-purple-900 bg-white rounded-lg hover:bg-purple-50 transition-all duration-150"
            >
              Entrar
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform" />
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-opacity" />
            <span className="block w-6 h-0.5 bg-white transition-transform" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-4 py-4 bg-purple-900" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-3 text-purple-100 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-4 py-3 text-center font-semibold text-purple-900 bg-white rounded-lg hover:bg-purple-50 transition-all"
          >
            Entrar
          </Link>
        </nav>
      )}
    </header>
  );
}

export { Navbar };
