const phases = [
  {
    date: "15 Mars – 30 Avril 2026",
    titre: "Inscriptions",
    description: "Ouverture des inscriptions dans les 3 sections : Centre-Nord (Parakou), Sud (UAC), Cotonou. Les étudiants choisissent leur section de rattachement.",
    statut: "en-cours",
  },
  {
    date: "02 Mai 2026",
    titre: "Phase écrite éliminatoire",
    description: "Épreuve écrite simultanée dans les 3 campus. Les candidats composent sur les Actes uniformes de l'OHADA.",
    statut: "a-venir",
  },
  {
    date: "15 Mai 2026",
    titre: "Quarts de finale",
    description: "Les meilleurs candidats de chaque section s'affrontent en plaidoirie devant un jury de professionnels.",
    statut: "a-venir",
  },
  {
    date: "15 Juin 2026",
    titre: "Demi-finales",
    description: "Les 12 meilleurs plaideurs s'affrontent pour décrocher leur place en finale nationale.",
    statut: "a-venir",
  },
  {
    date: "12 Juillet 2026",
    titre: "Finale Nationale",
    description: "Les 3 lauréats sont sélectionnés pour représenter le Bénin à la compétition internationale au Togo.",
    statut: "a-venir",
  },
];

const matieres = [
  "Acte uniforme portant droit commercial général",
  "Acte uniforme portant droit des sociétés commerciales et GIE",
  "Acte uniforme portant organisation des sûretés",
  "Acte uniforme portant procédures simplifiées de recouvrement et voies d'exécution",
  "Acte uniforme portant droit de l'arbitrage",
  "Acte uniforme portant organisation des procédures collectives d'apurement du passif",
];

export default function CompetitionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-navy py-24 md:py-36"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="border-l-2 border-gold-matte pl-8">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-offwhite leading-[1.1]">
              Compétition<br />CUDO 2026
            </h1>
            <p className="mt-6 text-lg text-offwhite/70 max-w-2xl font-light">
              La Compétition Universitaire de Droit OHADA est le rendez-vous annuel
              de l&apos;excellence juridique. Préparez-vous à défendre les couleurs
              du Bénin.
            </p>
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-3xl font-light text-navy mb-12 border-l-2 border-gold-matte pl-6">
          Calendrier de la compétition
        </h2>
        <div className="space-y-0">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-slate-border ${
                index === phases.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-charcoal/50">{phase.date}</span>
                {phase.statut === "en-cours" && (
                  <span className="ml-2 inline-block bg-gold-matte text-navy text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-none font-bold">
                    En cours
                  </span>
                )}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-navy">{phase.titre}</h3>
                <p className="mt-2 text-charcoal/70">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guide du candidat */}
      <section className="max-w-7xl mx-auto px-8 py-12 pb-24">
        <h2 className="text-3xl font-light text-navy mb-12 border-l-2 border-gold-matte pl-6">
          Guide du Candidat
        </h2>
        <p className="text-lg text-charcoal/70 mb-8 max-w-3xl">
          Les épreuves portent sur les Actes uniformes du droit OHADA.
          Voici les matières évaluées :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matieres.map((matiere, index) => (
            <div key={index} className="flex items-start gap-4 border border-slate-border p-6">
              <span className="text-gold-matte text-xl mt-1">▹</span>
              <span className="text-charcoal/80">{matiere}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="/inscription"
            className="inline-block bg-navy text-offwhite border border-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-navy/90 transition-colors rounded-none"
          >
            S&apos;inscrire maintenant
          </a>
        </div>
      </section>
    </div>
  );
}