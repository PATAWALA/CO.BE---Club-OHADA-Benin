import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center bg-black overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpeg"
          alt="Club OHADA Bénin"
          className="w-full h-full object-cover opacity-35"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-8 md:pt-10 pb-16">
        <div className="max-w-3xl">
          
          {/* Badge logo */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-8 md:mb-10">
            <div className="w-10 h-10 bg-white flex items-center justify-center text-royal font-bold text-lg tracking-widest shrink-0">
              COB
            </div>
            <span className="text-white/90 text-xs md:text-sm uppercase tracking-[0.25em] font-medium">
              Club OHADA Bénin
            </span>
          </div>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            L&apos;élite du droit
            <br />
            <span className="text-red">des affaires au Bénin.</span>
          </h1>

          {/* Sous-titre */}
          <p className="mt-6 md:mt-8 text-base md:text-lg text-white/75 max-w-xl leading-relaxed font-light">
            Rejoignez le plus grand réseau d&apos;étudiants et de cabinets en Afrique
            de l&apos;Ouest. Participez à la CUDO 2026 et représentez votre université.
          </p>

          {/* Boutons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center gap-2 bg-royal text-white px-6 py-4 md:px-8 md:py-4 text-sm font-bold uppercase tracking-[0.1em] hover:bg-royal/90 transition-all duration-300 group"
            >
              S&apos;inscrire à la CUDO 2026
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/devenir-partenaire"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 md:px-8 md:py-4 text-sm font-bold uppercase tracking-[0.1em] hover:bg-white/90 transition-all duration-300 group"
            >
              Devenir Partenaire
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}