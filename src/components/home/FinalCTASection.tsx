export default function FinalCTASection() {
  return (
    <section className="bg-navy text-offwhite py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
          Bâtissez l’avenir du droit des affaires africain.
        </h2>
        <p className="text-offwhite/70 max-w-2xl mx-auto text-lg mb-10">
          Que vous soyez étudiant ou cabinet, prenez place dans le réseau qui
          façonne les juristes de demain. Rejoignez le Club OHADA Bénin et
          faites partie de l’excellence juridique en Afrique de l’Ouest.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/rejoindre"
            className="inline-block bg-gold-matte text-navy border border-gold-matte px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-gold-matte/90 transition-colors duration-300 rounded-none"
          >
            Devenir membre
          </a>
          <a
            href="/cabinets"
            className="inline-block border border-offwhite/30 text-offwhite px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:border-offwhite hover:text-offwhite transition-colors duration-300 rounded-none"
          >
            Espace cabinets
          </a>
        </div>
      </div>
    </section>
  );
}