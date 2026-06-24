"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/shared/TiltCard";

export default function RecoverPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "#0F0A2E" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <TiltCard>
          <div className="card-dark card-glow rounded-2xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <span className="text-5xl block mb-4">🔐</span>
              <h1 className="text-3xl font-bold text-white">Recuperar senha</h1>
              <p className="text-purple-300/50 text-sm mt-1">Receba um link para redefinir sua senha</p>
            </div>
            <form className="space-y-5">
              <div><label className="block text-sm font-medium text-purple-200 mb-1.5">E-mail</label>
                <input type="email" placeholder="seu@email.com" required className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-purple-500/20 text-white placeholder:text-purple-400/30 text-base outline-none focus:border-purple-400/40 transition-colors input-glow" /></div>
              <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-base hover:brightness-110 transition-all shadow-lg shadow-purple-600/25">
                Enviar link
              </motion.button>
            </form>
            <p className="text-center text-sm text-purple-300/50 mt-6">
              <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">Voltar ao login</Link>
            </p>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
}
