import type { Metadata } from "next";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Recuperar senha — Help Pet",
  description: "Recupere sua senha do Help Pet.",
};

export default function RecoverPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-bg-soft">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Recuperar senha</h1>
          <p className="text-gray-500 text-sm mt-1">
            Receba um link para redefinir sua senha
          </p>
        </div>

        <form className="space-y-5">
          <Input label="E-mail" type="email" placeholder="seu@email.com" required />
          <Button type="submit" fullWidth size="lg">
            Enviar link
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          <Link
            href="/login"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Voltar ao login
          </Link>
        </p>
      </Card>
    </div>
  );
}
