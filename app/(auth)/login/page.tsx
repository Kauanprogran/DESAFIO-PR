"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "#0F0A2E" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="card-dark rounded-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-5xl block mb-4"
          >
            🐾
          </motion.span>
          <h1 className="text-3xl font-bold text-white">Entrar</h1>
          <p className="text-purple-300/50 text-sm mt-1">
            Acesse sua conta Help Pet
          </p>
        </div>

        <form className="space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-purple-200 mb-1.5">E-mail</label>
            <input type="email" placeholder="seu@email.com" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-sm font-medium text-purple-200 mb-1.5">Senha</label>
            <input type="password" placeholder="Sua senha" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between text-sm"
          >
            <label className="flex items-center gap-2 text-purple-300/50 cursor-pointer">
              <input type="checkbox" className="rounded bg-white/5 border-purple-500/30 accent-purple-600" />
              Lembrar-me
            </label>
            <Link href="/recover" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Esqueci a senha
            </Link>
          </motion.div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25"
          >
            Entrar
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-purple-300/50 mt-6"
        >
          Não tem conta?{" "}
          <Link href="/register" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
            Cadastre-se
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
