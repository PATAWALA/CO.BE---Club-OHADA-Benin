import Link from "next/link";

export default function PresidenteSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Texte à gauche */}
        <div>
          <div className="border-l-4 border-red pl-6">
            <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">
              Le Mot de la Présidente
            </h2>
          </div>
          <div className="mt-6 space-y-4 text-charcoal/80 leading-relaxed text-sm md:text-base">
            <p>
              Le Club OHADA Bénin est un mouvement qui façonne l&apos;élite juridique 
              de demain. Trois fois champion d&apos;Afrique, notre pays possède un 
              vivier de talents exceptionnels.
            </p>
            <p>
              En 2026, nous visons plus haut : compétitions internationales, 
              partenariats avec les plus grands cabinets, et insertion professionnelle 
              de nos lauréats.
            </p>
            <p className="font-bold text-royal">
              Rejoignez-nous. Ensemble, bâtissons l&apos;excellence.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 bg-red text-white px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] hover:bg-red/90 transition-colors"
            >
              Rejoindre le COB
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Photo à droite */}
        <div className="border border-border p-2 order-first md:order-last">
          <img
            src="/images/presidente.jpeg"
            alt="Mme ZOSSOUNGBO Cléopâtre, Présidente Nationale du Club OHADA Bénin"
            className="w-full h-auto object-cover"
          />
          <p className="mt-3 text-xs text-center text-charcoal/50 uppercase tracking-[0.2em] font-bold">
            Mme ZOSSOUNGBO Cléopâtre<br />Présidente Nationale
          </p>
        </div>

      </div>
    </section>
  );
}