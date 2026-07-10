import Link from "next/link";

const actualites = [
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titre: "Lancement officiel de la CUDO 2026",
    date: "15 Mars 2026",
    desc: "Cérémonie de lancement à l'Université d'Abomey-Calavi en présence des autorités rectorales et des partenaires.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titre: "Conférence scientifique OHADA",
    date: "22 Mars 2026",
    desc: "Actualité du droit des sociétés commerciales dans l'espace OHADA. Intervenants : professeurs et praticiens.",
  },
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titre: "5 cabinets rejoignent le COB",
    date: "Février 2026",
    desc: "Lex Africanus, Soglo & Partners et trois autres cabinets deviennent partenaires officiels du Club OHADA Bénin.",
  },
  {
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titre: "Atelier de rédaction juridique",
    date: "5 Avril 2026",
    desc: "Formation pratique à la rédaction de contrats commerciaux. Réservé aux membres inscrits à la CUDO.",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titre: "Le Bénin brille à l'international",
    date: "2025",
    desc: "Retour sur le troisième sacre consécutif du Bénin au Concours International de Droit OHADA.",
  },
  {
    image: "https://images.unsplash.com/photo-1568992687947-fa2c3b0a3f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    titre: "Programme de mentorat 2026",
    date: "Avril – Octobre 2026",
    desc: "Les étudiants inscrits bénéficient d'un mentorat personnalisé avec des avocats et juristes de renom.",
  },
];

export default function ActualitesCarousel() {
  return (
    <section className="bg-gray-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4 border-l-4 border-red pl-6">
              Actualités & Événements
            </h2>
            <p className="text-charcoal/60 max-w-2xl">
              Restez informé de la vie du club, des compétitions et des opportunités.
            </p>
          </div>
          <Link
            href="/evenements"
            className="text-royal font-bold text-sm uppercase tracking-[0.12em] hover:text-red transition-colors shrink-0"
          >
            Voir tous les événements →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((item, index) => (
            <article key={index} className="bg-white border border-border overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.titre}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 bg-red text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {item.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-royal leading-tight group-hover:text-red transition-colors">
                  {item.titre}
                </h3>
                <p className="text-charcoal/60 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}