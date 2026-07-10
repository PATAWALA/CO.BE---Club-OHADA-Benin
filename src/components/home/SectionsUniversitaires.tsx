import Link from "next/link";

const sections = [
  {
    nom: "Section Centre-Nord",
    lieu: "Université de Parakou",
    description: "Pôle d'excellence du Nord Bénin. Étudiants de Parakou, formez-vous et portez haut les couleurs de votre université à la CUDO 2026.",
    href: "/inscription?section=centre-nord",
    couleur: "bg-royal",
  },
  {
    nom: "Section Sud",
    lieu: "Université d'Abomey-Calavi (UAC)",
    description: "La plus grande faculté de droit du Bénin. Rejoignez l'élite et représentez l'UAC à la compétition nationale et internationale.",
    href: "/inscription?section=sud",
    couleur: "bg-red",
  },
  {
    nom: "Section Cotonou",
    lieu: "Campus de Cotonou",
    description: "Au cœur de la capitale économique. Intégrez un réseau dynamique de futurs juristes et préparez-vous aux carrières les plus ambitieuses.",
    href: "/inscription?section=cotonou",
    couleur: "bg-royal",
  },
];

export default function SectionsUniversitaires() {
  return (
    <section className="bg-gray-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4 border-l-4 border-red pl-6">
          Nos 3 Sections Universitaires
        </h2>
        <p className="text-charcoal/60 mb-12 max-w-2xl">
          La CUDO 2026 est organisée autour de trois pôles. Choisissez votre section
          de rattachement et inscrivez-vous dès maintenant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white border border-border flex flex-col">
              <div className={`${section.couleur} h-2`}></div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-royal mb-2">{section.nom}</h3>
                <p className="text-sm text-red font-bold uppercase tracking-widest mb-4">{section.lieu}</p>
                <p className="text-charcoal/70 text-sm leading-relaxed flex-1">{section.description}</p>
                <Link
                  href={section.href}
                  className="mt-6 inline-block bg-red text-white text-xs font-bold uppercase tracking-[0.15em] px-6 py-3 text-center hover:bg-red/90 transition-colors"
                >
                  S&apos;inscrire dans cette section
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}