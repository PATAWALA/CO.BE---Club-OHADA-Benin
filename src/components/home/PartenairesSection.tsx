import Link from "next/link";

const sponsors = [
  { nom: "Lex Africanus" },
  { nom: "Soglo & Partners" },
  { nom: "Ethique & Conformité" },
  { nom: "Juris OHADA Conseil" },
  { nom: "Akakpo & Associés" },
  { nom: "Votre cabinet ?" },
];

export default function PartenairesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4 inline-block border-l-4 border-red pl-6">
          Ils nous font confiance
        </h2>
        <p className="text-charcoal/60 mt-4 mb-12 max-w-2xl mx-auto">
          Cabinets d&apos;avocats, études notariales, directions juridiques : découvrez
          ceux qui soutiennent déjà le Club OHADA Bénin.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`border border-border p-6 h-28 flex items-center justify-center ${
                sponsor.nom === "Votre cabinet ?" ? "border-dashed bg-gray-light" : "bg-white"
              }`}
            >
              {sponsor.nom === "Votre cabinet ?" ? (
                <span className="text-xs text-charcoal/40 uppercase tracking-[0.2em] font-bold text-center">
                  {sponsor.nom}
                </span>
              ) : (
                <span className="text-sm font-bold text-royal text-center">{sponsor.nom}</span>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/devenir-partenaire"
          className="inline-block border-2 border-royal text-royal font-bold uppercase tracking-[0.12em] text-sm px-8 py-4 hover:bg-royal hover:text-white transition-colors"
        >
          Devenir Partenaire / Sponsor
        </Link>
      </div>
    </section>
  );
}