import type { Metadata } from "next";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Cadastro — Help Pet",
  description: "Crie sua conta gratuita no Help Pet.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-bg-soft">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Criar conta</h1>
          <p className="text-gray-500 text-sm mt-1">
            Cadastre-se gratuitamente
          </p>
        </div>

        <form className="space-y-5">
          <Input label="Nome completo" placeholder="Seu nome" required />
          <Input label="E-mail" type="email" placeholder="seu@email.com" required />
          <Input label="Telefone" type="tel" placeholder="(11) 99999-9999" />
          <Input label="Senha" type="password" placeholder="Minimo 8 caracteres" required />
          <Input label="Confirmar senha" type="password" placeholder="Repita a senha" required />

          <Button type="submit" fullWidth size="lg">
            Criar conta
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Já tem conta?{" "}
          <Link
            href="/login"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Entrar
          </Link>
        </p>
      </Card>
    </div>
  );
}
