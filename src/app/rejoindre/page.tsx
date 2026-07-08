export default function Rejoindre() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-12 md:pt-36 md:pb-16">
        <div className="border-l-2 border-gold-matte pl-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-navy leading-[1.1]">
            Rejoignez le<br />réseau étudiant
          </h1>
          <p className="mt-6 text-lg text-charcoal/70 max-w-2xl font-light">
            Inscrivez-vous au Club OHADA Bénin et accédez à des ressources exclusives,
            des événements et un mentorat de haut niveau. Votre carrière juridique commence ici.
          </p>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="max-w-7xl mx-auto px-8 pb-24 md:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-light text-navy mb-4">Devenir membre</h2>
            <p className="text-sm text-charcoal/60">
              Étudiants en droit à l’UAC, UCAO ou autres universités partenaires.
            </p>
          </div>
          <div className="md:col-span-3">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                    Université
                  </label>
                  <select className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors">
                    <option>UAC/FADESP</option>
                    <option>UCAO</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                    Niveau d&apos;études
                  </label>
                  <select className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors">
                    <option>Licence 1</option>
                    <option>Licence 2</option>
                    <option>Licence 3</option>
                    <option>Master 1</option>
                    <option>Master 2</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">
                  Motivation
                </label>
                <textarea
                  rows={4}
                  className="border border-slate-border px-4 py-3 bg-white text-charcoal text-sm rounded-none focus:outline-none focus:border-navy transition-colors"
                  placeholder="Pourquoi souhaitez-vous rejoindre le Club OHADA Bénin ?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-navy text-offwhite border border-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-navy/90 transition-colors duration-300 rounded-none"
              >
                Envoyer ma candidature
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}