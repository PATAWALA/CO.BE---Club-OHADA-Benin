// Données mock (à remplacer par Supabase plus tard)
const events = [
  {
    id: "1",
    title: "Conférence : Actualité du droit OHADA des sociétés",
    date: "15 Mars 2026",
    lieu: "UAC, Salle de Conférences",
    type: "Conférence",
  },
  {
    id: "2",
    title: "Atelier pratique : Rédaction de contrats commerciaux",
    date: "22 Avril 2026",
    lieu: "UCAO, Cotonou",
    type: "Atelier",
  },
  {
    id: "3",
    title: "Concours de plaidoirie inter-universitaire",
    date: "10 Mai 2026",
    lieu: "Palais de Justice, Cotonou",
    type: "Concours",
  },
  {
    id: "4",
    title: "Webinaire : Financements structurés en zone UEMOA",
    date: "5 Juin 2026",
    lieu: "En ligne",
    type: "Webinaire",
  },
];

export default function Evenements() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-12 md:pt-36 md:pb-16">
        <div className="border-l-2 border-gold-matte pl-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-navy leading-[1.1]">
            Événements
          </h1>
          <p className="mt-6 text-lg text-charcoal/70 max-w-2xl font-light">
            Conférences, ateliers, concours et webinaires pour enrichir votre parcours
            et élargir votre réseau.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24 md:pb-36">
        <div className="space-y-0">
          {events.map((event, index) => (
            <article
              key={event.id}
              className={`grid grid-cols-1 md:grid-cols-5 gap-8 py-8 border-t border-slate-border ${
                index === events.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-navy leading-tight">
                  {event.title}
                </h2>
              </div>
              <div className="md:col-span-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-charcoal/70">
                    <span className="font-semibold text-navy">Date :</span> {event.date}
                  </p>
                  <p className="text-sm text-charcoal/70">
                    <span className="font-semibold text-navy">Lieu :</span> {event.lieu}
                  </p>
                  <span className="inline-block mt-1 text-[10px] uppercase tracking-[0.2em] bg-slate-100 text-charcoal/50 px-2 py-0.5 rounded-none">
                    {event.type}
                  </span>
                </div>
                <button className="border border-navy text-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-navy hover:text-offwhite transition-colors duration-300 rounded-none">
                  S&apos;inscrire
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}