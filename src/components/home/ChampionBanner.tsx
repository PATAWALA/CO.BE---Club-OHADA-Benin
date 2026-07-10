export default function ChampionBanner() {
  return (
    <section className="bg-blue-50 border-y border-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3 text-3xl">
          <span>🏆</span><span>🏆</span><span>🏆</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-black">
          Le Bénin, <span className="text-red font-extrabold">3 fois consécutivement </span> champion d&apos;Afrique en titre
        </h2>
        <p className="mt-2 text-red font-bold text-sm uppercase tracking-[0.2em]">2023 · 2024 · 2025</p>
      </div>
    </section>
  );
}