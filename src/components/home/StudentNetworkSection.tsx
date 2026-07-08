export default function StudentNetworkSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Colonne gauche : photo de la présidente */}
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-sm border border-slate-border p-2">
            <img
              src="/images/presidente.jpg"
              alt="Mme ZOSSOUNGBO Cléopâtre, Présidente du Club OHADA Bénin"
              className="w-full h-96 object-cover grayscale"
            />
            <p className="mt-2 text-xs text-center text-charcoal/50 uppercase tracking-[0.2em]">
              Mme ZOSSOUNGBO Cléopâtre<br />Présidente
            </p>
          </div>
        </div>

        {/* Colonne droite : texte */}
        <div>
          <div className="border-l-2 border-gold-matte pl-6">
            <h2 className="text-3xl md:text-4xl font-light text-navy tracking-tight">
              Réseau Étudiant
            </h2>
            <p className="mt-4 text-charcoal/60 text-sm uppercase tracking-[0.2em]">
              UAC/FADESP · UCAO · Universités partenaires
            </p>
          </div>
          <div className="mt-10 space-y-6">
            <p className="text-lg leading-relaxed text-charcoal/80">
              Le Club OHADA Bénin vous offre bien plus qu’un simple réseau :
              c’est un accélérateur de carrière pensé pour les étudiants en
              droit. Profitez d’un accompagnement personnalisé, de formations
              exclusives et d’un accès direct aux cabinets les plus prestigieux.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gold-matte mt-1 text-xl">▹</span>
                <span className="text-charcoal/80">
                  Modèles de contrats, guides et checklists à jour.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold-matte mt-1 text-xl">▹</span>
                <span className="text-charcoal/80">
                  Concours de plaidoirie, conférences et simulations.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold-matte mt-1 text-xl">▹</span>
                <span className="text-charcoal/80">
                  Mentorat individuel avec des avocats et juristes renommés.
                </span>
              </li>
            </ul>
            <a
              href="/rejoindre"
              className="inline-block mt-8 bg-navy text-offwhite border border-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-navy/90 transition-colors duration-300 rounded-none"
            >
              S’inscrire maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}