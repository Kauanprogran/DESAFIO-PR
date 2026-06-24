import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadastro — Help Pet",
  description: "Crie sua conta Help Pet gratuita.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "#0F0A2E" }}>
      <div className="card-dark rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Criar Conta</h1>
          <p className="text-purple-300/50 text-sm mt-1">
            Cadastre-se gratuitamente
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1.5">Nome completo</label>
            <input type="text" placeholder="Seu nome" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1.5">E-mail</label>
            <input type="email" placeholder="seu@email.com" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1.5">Senha</label>
            <input type="password" placeholder="Mínimo 8 caracteres" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1.5">Confirmar senha</label>
            <input type="password" placeholder="Repita a senha" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25">
            Criar conta
          </button>
        </form>

        <p className="text-center text-sm text-purple-300/50 mt-6">
          Já tem conta?{" "}
          <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
