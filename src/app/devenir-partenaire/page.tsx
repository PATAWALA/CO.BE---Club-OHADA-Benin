const sponsors = [
  { id: "1", nom: "Lex Africanus", logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", actif: true },
  { id: "2", nom: "Cabinet Soglo & Partners", logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", actif: true },
  { id: "3", nom: "Ethique & Conformité Associés", logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", actif: true },
  { id: "4", nom: "Juris OHADA Conseil", logo: "https://images.unsplash.com/photo-1568992687947-fa2c3b0a3f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", actif: true },
  { id: "5", nom: "Cabinet Akakpo & Associés", logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", actif: true },
  { id: "6", nom: "Devenez Sponsor Officiel", logo: "", actif: false },
  { id: "7", nom: "Devenez Sponsor Officiel", logo: "", actif: false },
  { id: "8", nom: "Devenez Sponsor Officiel", logo: "", actif: false },
];

export default function PartenariatsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36">
        <div className="border-l-4 border-red-600 pl-6 md:pl-8">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1">
            Partenariat Stratégique CUDO 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-900 mt-4 leading-tight">
            Soutenez l&apos;Excellence,<br />
            Monétisez votre Expertise.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed">
            Le Bénin est le <strong className="text-blue-900">triple champion en titre (2023, 2024, 2025)</strong> du
            Concours International Génies en Herbe OHADA. Associez votre cabinet à cette dynamique d&apos;élite, 
            générez de nouvelles opportunités d&apos;affaires et vendez vos outils juridiques directement sur notre plateforme.
          </p>
        </div>
      </section>

      {/* Les Avantages du Partenariat */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">Pourquoi devenir partenaire officiel ?</h2>
          <p className="text-slate-500 mt-2">Une collaboration commerciale et stratégique conçue pour la croissance de votre cabinet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Avantage 1 : LA BOUTIQUE PRIVÉE & MONÉTISATION DU SAVOIR */}
          <div className="bg-slate-50 border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-900 text-white flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-red-600 transition-colors">
              01
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Boutique Privée & Savoir-Faire</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Publiez et vendez vos modèles de contrats, notes d&apos;analyse, ebooks, PDF et guides pratiques directement depuis votre compte recruteur dédié. Valorisez l&apos;expertise technique de vos collaborateurs auprès de milliers de professionnels et d&apos;entreprises : la plateforme s&apos;occupe de tout le processus de transaction.
            </p>
          </div>

          {/* Avantage 2 : CVTHÈQUE & RECRUTEMENT D'ÉLITE */}
          <div className="bg-slate-50 border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-900 text-white flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-red-600 transition-colors">
              02
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Espace Recruteur & CVthèque</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Accédez en exclusivité à la base de données qualifiée des lauréats et des meilleurs profils de la compétition. Identifiez, filtrez et recrutez des stagiaires et collaborateurs hautement opérationnels, déjà formés au droit des affaires et prêts à intégrer vos équipes juridiques.
            </p>
          </div>

          {/* Avantage 3 : VISIBILITÉ INSTITUTIONNELLE */}
          <div className="bg-slate-50 border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-900 text-white flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-red-600 transition-colors">
              03
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Rayonnement Institutionnel</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Maximisez la notoriété de votre marque auprès des institutions de tutelle (Ministères), des directions juridiques de grandes entreprises et des acteurs majeurs du droit des affaires lors des cérémonies officielles et sur l&apos;ensemble de nos supports physiques et numériques.
            </p>
          </div>
        </div>
      </section>

      {/* Téléchargement dossier de sponsoring */}
      <section className="max-w-7xl mx-auto px-6 py-8 text-center">
        <div className="bg-blue-50 border border-blue-100 p-8 max-w-3xl mx-auto">
          <p className="text-blue-900 font-medium mb-4">
            Consultez les différents paliers de sponsoring et les modalités d&apos;activation de votre boutique en ligne.
          </p>
          <a
            href="/documents/dossier-sponsoring-cob-2026.pdf"
            className="inline-flex items-center bg-blue-900 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-blue-800 shadow-md hover:shadow-lg transition-all"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger le Dossier Officiel (PDF)
          </a>
        </div>
      </section>

      {/* Grille des sponsors */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 border-l-4 border-red-600 pl-4">
          Les Cabinets Partenaires Officiels
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`border p-6 flex items-center justify-center h-40 transition-all duration-200 ${
                sponsor.actif
                  ? "bg-white border-slate-200 shadow-sm hover:shadow-md"
                  : "bg-slate-50 border-dashed border-slate-300 opacity-60 hover:opacity-100"
              }`}
            >
              {sponsor.actif ? (
                <div className="text-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.nom}
                    className="max-w-full max-h-24 object-contain mx-auto mb-2 filter grayscale hover:grayscale-0 transition-all"
                  />
                  <span className="text-xs font-semibold text-slate-700 block">{sponsor.nom}</span>
                </div>
              ) : (
                <a href="mailto:partenariats@club-ohada.bj" className="text-center text-slate-400 group block">
                  <div className="text-2xl font-light mb-1 text-red-600 group-hover:scale-110 transition-transform">+</div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{sponsor.nom}</p>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Finale CTA */}
      <section className="bg-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full bg-red-600 transform skew-x-12 opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Activez votre Boutique Privée et recrutez les meilleurs.
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 text-sm md:text-base font-light">
            Ouvrez votre espace cabinet sur-mesure pour diffuser vos analyses et sécuriser l&apos;accès à la CVthèque d&apos;élite. Nos équipes prennent contact sous 24h.
          </p>
          <a
            href="mailto:partenariats@club-ohada.bj"
            className="inline-block bg-red-600 text-white border border-red-600 px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg"
          >
            Nous Contacter / Postuler
          </a>
        </div>
      </section>

    </div>
  );
}