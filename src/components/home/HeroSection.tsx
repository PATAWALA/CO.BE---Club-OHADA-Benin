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
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/85" />

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-8 md:pt-10 pb-16">
        <div className="max-w-3xl mx-auto md:mx-0">
          
          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight text-center md:text-left">
            Le réseau N°1
            <br />
            <span className="text-red">du droit des affaires</span>
            <br />
            <span className="text-white">en Afrique de l&apos;Ouest.</span>
          </h1>

          {/* Sous-titre */}
          <p className="mt-6 md:mt-8 text-sm md:text-lg text-white/75 max-w-xl leading-relaxed font-light text-center md:text-left mx-auto md:mx-0">
            Rejoignez le Club OHADA Bénin. Participez à la CUDO 2026 et représentez
            votre université sur la scène internationale.
          </p>

          {/* Boutons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4">
            <Link
              href="/inscription"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-royal text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] border-2 border-royal hover:bg-white hover:text-royal transition-all duration-300 group shadow-lg shadow-royal/20"
            >
              <span>S&apos;inscrire à la CUDO 2026</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/devenir-partenaire"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] border-2 border-white/30 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            >
              <span>Devenir Partenaire</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}