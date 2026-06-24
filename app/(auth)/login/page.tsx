import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login — Help Pet",
  description: "Acesse sua conta Help Pet.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "#0F0A2E" }}>
      <div className="card-dark rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Entrar</h1>
          <p className="text-purple-300/50 text-sm mt-1">
            Acesse sua conta Help Pet
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1.5">E-mail</label>
            <input type="email" placeholder="seu@email.com" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1.5">Senha</label>
            <input type="password" placeholder="Sua senha" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-purple-300/50 cursor-pointer">
              <input type="checkbox" className="rounded bg-white/5 border-purple-500/30 accent-purple-600" />
              Lembrar-me
            </label>
            <Link href="/recover" className="text-purple-400 hover:text-purple-300 font-medium">
              Esqueci a senha
            </Link>
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25">
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-purple-300/50 mt-6">
          Não tem conta?{" "}
          <Link href="/register" className="text-purple-400 hover:text-purple-300 font-medium">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
