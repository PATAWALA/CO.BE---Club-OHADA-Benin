export default function PartnersSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Colonne gauche : texte */}
        <div>
          <div className="border-l-2 border-gold-matte pl-6">
            <h2 className="text-3xl md:text-4xl font-light text-navy tracking-tight">
              Cabinets Partenaires
            </h2>
            <p className="mt-4 text-charcoal/60 text-sm uppercase tracking-[0.2em]">
              Monétisez votre savoir · Touchez les juristes de demain
            </p>
          </div>
          <div className="mt-10 space-y-6">
            <p className="text-lg leading-relaxed text-charcoal/80">
              Les cabinets d’avocats et les experts juridiques trouvent dans la
              boutique CO.BE un canal de distribution premium pour leurs modèles
              de contrats, guides et analyses. Profitez d’une visibilité ciblée
              auprès d’un réseau étudiant qualifié et de professionnels en
              activité dans l’espace OHADA.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gold-matte mt-1 text-xl">▹</span>
                <span className="text-charcoal/80">
                  Créez votre boutique en ligne et fixez vos prix en toute liberté.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold-matte mt-1 text-xl">▹</span>
                <span className="text-charcoal/80">
                  Rayonnez au Bénin et dans toute la zone UEMOA grâce à notre plateforme.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold-matte mt-1 text-xl">▹</span>
                <span className="text-charcoal/80">
                  Participez à nos événements en tant que mentors ou conférenciers invités.
                </span>
              </li>
            </ul>
            <a
              href="/cabinets"
              className="inline-block mt-8 bg-navy text-offwhite border border-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-navy/90 transition-colors duration-300 rounded-none"
            >
              Devenir partenaire
            </a>
          </div>
        </div>

        {/* Colonne droite : image en ligne */}
        <div className="relative w-full h-64 md:h-full min-h-[300px] border border-slate-border overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Partenariat cabinets juridiques"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}