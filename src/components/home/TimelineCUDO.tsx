const etapes = [
  {
    date: "15 Mars – 30 Avril 2026",
    titre: "Inscriptions ouvertes",
    desc: "Les étudiants s'inscrivent en ligne dans l'une des 3 sections : Centre-Nord, Sud ou Cotonou. La plateforme transmet automatiquement les données aux responsables de section.",
    statut: "en-cours",
  },
  {
    date: "02 Mai 2026",
    titre: "Phase écrite éliminatoire",
    desc: "Épreuve écrite simultanée dans les 3 campus. Les candidats composent sur les Actes uniformes de l'OHADA. Sélection des meilleurs pour les quarts de finale.",
    statut: "a-venir",
  },
  {
    date: "09 Mai 2026",
    titre: "Phase écrite complémentaire",
    desc: "Session de rattrapage pour les candidats empêchés le 02 mai. Dernière chance de qualification pour les phases orales.",
    statut: "a-venir",
  },
  {
    date: "Juin 2026",
    titre: "Quarts & Demi-finales",
    desc: "Les candidats sélectionnés s'affrontent en plaidoirie devant un jury composé d'avocats, de magistrats et d'universitaires de renom.",
    statut: "a-venir",
  },
  {
    date: "Juillet 2026",
    titre: "Finale Nationale & Sélection",
    desc: "Les 3 lauréats sont désignés pour représenter le Bénin à la compétition internationale de droit OHADA au Togo. Début du programme d'insertion professionnelle.",
    statut: "a-venir",
  },
];

export default function TimelineCUDO() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4 inline-block border-l-4 border-red pl-6">
          Calendrier de la CUDO 2026
        </h2>
        <p className="text-charcoal/60 mt-4 max-w-2xl mx-auto">
          De l&apos;inscription à la finale, suivez les grandes étapes de la Compétition
          Universitaire de Droit OHADA 2026.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {etapes.map((etape, index) => (
          <div key={index} className="flex gap-6 pb-10 relative">
            {/* Point et ligne */}
            <div className="flex flex-col items-center">
              <div className={`w-5 h-5 shrink-0 border-2 ${etape.statut === "en-cours" ? "bg-red border-red" : "bg-white border-red"}`} />
              {index < etapes.length - 1 && <div className="w-0.5 h-full bg-border mt-1" />}
            </div>
            {/* Contenu */}
            <div className="pb-4">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs text-red font-bold uppercase tracking-widest">{etape.date}</span>
                {etape.statut === "en-cours" && (
                  <span className="bg-red text-white text-[10px] uppercase tracking-widest px-2 py-0.5 font-bold">En cours</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-royal">{etape.titre}</h3>
              <p className="text-charcoal/70 text-sm mt-1 leading-relaxed">{etape.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/inscription"
          className="inline-block bg-red text-white font-bold uppercase tracking-[0.12em] text-sm px-8 py-4 hover:bg-red/90 transition-colors"
        >
          S&apos;inscrire maintenant à la CUDO 2026
        </a>
      </div>
    </section>
  );
}