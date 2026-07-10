export default function FinalCTASection() {
  return (
    <section className="bg-navy text-offwhite py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
          Bâtissez l&apos;avenir du droit des affaires africain.
        </h2>
        <p className="text-offwhite/70 max-w-2xl mx-auto text-lg mb-10">
          Étudiant ou cabinet, prenez place dans le réseau qui façonne les juristes de demain.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/inscription" className="inline-block bg-navy text-offwhite border border-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-navy/90 transition-colors rounded-none">
            S&apos;inscrire à la CUDO 2026
          </a>
          <a href="/partenariats" className="inline-block bg-gold-matte text-navy border border-gold-matte px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-gold-matte/90 transition-colors rounded-none">
            Devenir Partenaire
          </a>
        </div>
      </div>
    </section>
  );
}