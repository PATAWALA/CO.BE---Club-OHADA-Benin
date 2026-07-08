export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay foncé pour lisibilité */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Contenu centré, sans barre latérale */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-offwhite">
          Rejoignez le plus grand réseau d’étudiants et de cabinets en
          Afrique de l’Ouest.
        </h1>
        <p className="mt-8 text-lg md:text-xl font-light text-offwhite/80 max-w-2xl mx-auto">
          Le Club OHADA Bénin connecte les talents juridiques aux cabinets
          d’excellence. Accédez à des ressources, des mentors et des
          opportunités professionnelles uniques.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="/rejoindre"
            className="inline-block bg-gold-matte text-navy border border-gold-matte px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-gold-matte/90 transition-colors duration-300 rounded-none"
          >
            Devenir membre
          </a>
          <a
            href="/boutique"
            className="inline-block border border-offwhite/30 text-offwhite/80 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:border-offwhite hover:text-offwhite transition-colors duration-300 rounded-none"
          >
            Explorer la boutique
          </a>
        </div>
      </div>
    </section>
  );
}