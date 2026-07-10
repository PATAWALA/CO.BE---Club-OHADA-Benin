import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-black overflow-hidden">
      {/* Image de fond locale */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpeg"
          alt="Club OHADA Bénin"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay noir */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Logo COB */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white flex items-center justify-center text-royal font-bold text-2xl tracking-widest">
              COB
            </div>
            <span className="text-white/80 text-sm uppercase tracking-[0.3em] font-medium">
              Club OHADA Bénin
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            L&apos;élite du droit<br />
            des affaires au Bénin.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            Rejoignez le plus grand réseau d&apos;étudiants et de cabinets en Afrique
            de l&apos;Ouest. Participez à la CUDO 2026 et représentez votre université.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/inscription"
              className="bg-royal text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] hover:bg-royal/90 transition-colors"
            >
              S&apos;inscrire à la CUDO 2026
            </Link>
            <Link
              href="/devenir-partenaire"
              className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] hover:bg-white/90 transition-colors"
            >
              Devenir Partenaire / Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}