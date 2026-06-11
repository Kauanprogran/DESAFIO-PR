export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-4">
            VetMóvel
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Saúde animal ao seu alcance
          </p>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 bg-gradient-cta text-white font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all duration-150"
          >
            Começar agora
          </a>
        </div>
      </section>
    </main>
  );
}
