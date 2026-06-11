import type { Metadata } from "next";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Login — VetMóvel",
  description: "Acesse sua conta VetMóvel.",
};

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-bg-soft">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Entrar</h1>
          <p className="text-gray-500 text-sm mt-1">
            Acesse sua conta VetMóvel
          </p>
        </div>

        <form className="space-y-5">
          <Input
            label="E-mail"
            type="email"
            placeholder="seu@email.com"
            required
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Sua senha"
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              Lembrar-me
            </label>
            <Link
              href="/recover"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Esqueci a senha
            </Link>
          </div>

          <Button type="submit" fullWidth size="lg">
            Entrar
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Não tem conta?{" "}
          <Link
            href="/register"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Cadastre-se
          </Link>
        </p>
      </Card>
    </div>
  );
}
