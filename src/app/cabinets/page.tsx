export default function Cabinets() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-12 md:pt-36 md:pb-16">
        <div className="border-l-2 border-gold-matte pl-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-navy leading-[1.1]">
            Devenir partenaire
          </h1>
          <p className="mt-6 text-lg text-charcoal/70 max-w-2xl font-light">
            Rejoignez le cercle des cabinets d’élite qui partagent leur savoir
            et attirent les meilleurs talents juridiques de la région.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24 md:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-light text-navy mb-8">Opportunités</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-gold-matte pl-6">
                <h3 className="text-lg font-semibold text-navy">Boutique privée</h3>
                <p className="text-sm text-charcoal/70 mt-2">
                  Publiez et vendez vos modèles de contrats, notes d’analyse et
                  guides pratiques. La plateforme s’occupe de tout.
                </p>
              </div>
              <div className="border-l-2 border-gold-matte pl-6">
                <h3 className="text-lg font-semibold text-navy">Visibilité ciblée</h3>
                <p className="text-sm text-charcoal/70 mt-2">
                  Profil dédié, mise en avant sur la boutique et dans nos
                  événements. Touchez directement les étudiants et jeunes
                  diplômés.
                </p>
              </div>
              <div className="border-l-2 border-gold-matte pl-6">
                <h3 className="text-lg font-semibold text-navy">Mentorat d’excellence</h3>
                <p className="text-sm text-charcoal/70 mt-2">
                  Rencontrez les futurs collaborateurs de votre cabinet à travers
                  nos programmes de mentorat et nos concours.
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de demande de partenariat */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-light text-navy mb-8">Déposez votre candidature</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                    Nom du cabinet
                  </label>
                  <input
                    type="text"
                    className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors"
                    placeholder="Nom officiel"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors"
                    placeholder="contact@cabinet.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="text"
                    className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors"
                    placeholder="+229 ..."
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                    Domaine d’expertise
                  </label>
                  <select className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors">
                    <option>Droit des sociétés</option>
                    <option>Droit bancaire</option>
                    <option>Contentieux</option>
                    <option>Fiscalité</option>
                    <option>Propriété intellectuelle</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                  Message de motivation
                </label>
                <textarea
                  rows={5}
                  className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors"
                  placeholder="Pourquoi souhaitez-vous rejoindre le Club OHADA Bénin ?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-navy text-offwhite border border-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-navy/90 transition-colors duration-300 rounded-none"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}