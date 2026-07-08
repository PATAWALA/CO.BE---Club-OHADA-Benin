// ---- TYPES ----
type Product = {
  id: string;
  title: string;
  type: "Modèle de contrat" | "Guide pratique" | "Checklist" | "Analyse juridique";
  price: number; // en FCFA
  format: "PDF" | "DOCX" | "Vidéo";
};

type CabinetShop = {
  id: string;
  name: string;
  logo: string;        // URL d'image en ligne
  description: string;
  featured: boolean;
  products: Product[];
};

// ---- DONNÉES MOCK (remplacer par un fetch Supabase) ----
const cabinets: CabinetShop[] = [
  {
    id: "1",
    name: "Lex Africanus",
    logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    description: "Expertise en droit OHADA des sociétés et fusions-acquisitions transfrontalières.",
    featured: true,
    products: [
      { id: "p1", title: "Modèle de statuts SARL OHADA", type: "Modèle de contrat", price: 25000, format: "DOCX" },
      { id: "p2", title: "Guide de la fusion transfrontalière", type: "Guide pratique", price: 15000, format: "PDF" },
      { id: "p3", title: "Checklist due diligence OHADA", type: "Checklist", price: 18000, format: "PDF" },
    ],
  },
  {
    id: "2",
    name: "Cabinet Soglo & Partners",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    description: "Droit bancaire et financements structurés dans l'espace UEMOA.",
    featured: false,
    products: [
      { id: "p4", title: "Contrat de prêt syndiqué UEMOA", type: "Modèle de contrat", price: 35000, format: "DOCX" },
      { id: "p5", title: "Analyse du nouveau règlement bancaire", type: "Analyse juridique", price: 22000, format: "PDF" },
    ],
  },
  {
    id: "3",
    name: "Ethique & Conformité Associés",
    logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    description: "Audit de conformité, anti-blanchiment et protection des données personnelles.",
    featured: true,
    products: [
      { id: "p6", title: "Politique de conformité LCB/FT", type: "Modèle de contrat", price: 40000, format: "DOCX" },
      { id: "p7", title: "Guide pratique RGPD & OHADA", type: "Guide pratique", price: 12000, format: "PDF" },
      { id: "p8", title: "Checklist audit de conformité 2026", type: "Checklist", price: 20000, format: "PDF" },
      { id: "p9", title: "Modèle de registre des traitements", type: "Modèle de contrat", price: 15000, format: "DOCX" },
    ],
  },
  {
    id: "4",
    name: "Juris OHADA Conseil",
    logo: "https://images.unsplash.com/photo-1568992687947-fa2c3b0a3f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    description: "Contentieux commercial et arbitrage CACI/CAMES.",
    featured: false,
    products: [
      { id: "p10", title: "Mémoire en réclamation type", type: "Modèle de contrat", price: 30000, format: "DOCX" },
    ],
  },
  {
    id: "5",
    name: "Cabinet Akakpo & Associés",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    description: "Droit social et négociation de conventions collectives.",
    featured: false,
    products: [
      { id: "p11", title: "Modèle de contrat de travail cadre", type: "Modèle de contrat", price: 10000, format: "DOCX" },
      { id: "p12", title: "Guide des licenciements économiques", type: "Guide pratique", price: 8000, format: "PDF" },
    ],
  },
];

// ---- COMPOSANT POUR UNE BOUTIQUE DE CABINET ----
function CabinetCard({ cabinet }: { cabinet: CabinetShop }) {
  return (
    <article
      className={`
        group border border-slate-border bg-white/80 backdrop-blur-sm
        flex flex-col transition-shadow duration-500
        ${cabinet.featured ? "md:col-span-2" : "md:col-span-1"}
        hover:shadow-[15px_15px_0px_rgba(10,25,47,0.05)]
        rounded-none
      `}
    >
      {/* En-tête du cabinet */}
      <div className="p-8 pb-6 border-b border-slate-border">
        <div className="flex items-start gap-6">
          {/* Logo en ligne (image carrée) */}
          <div className="w-14 h-14 shrink-0 border border-slate-border overflow-hidden">
            <img
              src={cabinet.logo}
              alt={cabinet.name}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-navy leading-tight">
              {cabinet.name}
            </h3>
            <p className="text-sm text-charcoal/70 mt-2 leading-relaxed max-w-prose">
              {cabinet.description}
            </p>
          </div>
        </div>
      </div>

      {/* Liste des produits */}
      <div className="p-8 pt-6 flex-1 flex flex-col">
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-matte mb-6">
          Savoir-faire disponible
        </h4>
        <ul className="space-y-0 flex-1">
          {cabinet.products.map((product, idx) => (
            <li
              key={product.id}
              className={`
                flex flex-col sm:flex-row sm:items-center justify-between py-4
                gap-2
                ${idx !== cabinet.products.length - 1 ? "border-b border-slate-border/70" : ""}
              `}
            >
              <div>
                <p className="text-sm font-medium text-navy/90 leading-snug">{product.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] uppercase tracking-widest text-charcoal/50 bg-slate-100 px-2 py-0.5 rounded-none">
                    {product.type}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-charcoal/40">
                    {product.format}
                  </span>
                </div>
              </div>
              <span className="text-sm font-semibold text-gold-matte whitespace-nowrap">
                {product.price.toLocaleString("fr-FR")} FCFA
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="mt-8 w-full bg-navy text-offwhite border border-navy py-3 px-6 text-xs font-bold uppercase tracking-[0.15em] hover:bg-navy/90 transition-colors duration-300 rounded-none">
          Contacter le cabinet
        </button>
      </div>
    </article>
  );
}

// ---- PAGE BOUTIQUE ----
export default function BoutiquePage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="border-l-2 border-gold-matte pl-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-navy leading-[1.1]">
            Boutiques<br />de savoir.
          </h1>
          <p className="mt-6 text-lg text-charcoal/70 max-w-2xl font-light">
            Les cabinets partenaires du Club OHADA Bénin vous ouvrent l’accès à leur expertise juridique : modèles de contrats, guides et analyses directement opérationnels.
          </p>
          <div className="mt-8 flex gap-6 text-xs uppercase tracking-[0.2em] text-charcoal/50">
            <span className="border-b border-gold-matte pb-1">OHADA</span>
            <span>•</span>
            <span>UEMOA</span>
            <span>•</span>
            <span>CAMES</span>
          </div>
        </div>
      </section>

      {/* GRILLE ASYMÉTRIQUE */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cabinets.map((cabinet) => (
            <CabinetCard key={cabinet.id} cabinet={cabinet} />
          ))}
        </div>

        {/* SÉPARATEUR */}
        <div className="mt-24 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-border"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40">Devenez partenaire</span>
          <div className="h-px flex-1 bg-slate-border"></div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="/cabinets"
            className="inline-block bg-navy text-offwhite border border-navy px-12 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-navy/90 transition-colors duration-300 rounded-none"
          >
            Proposer votre cabinet
          </a>
        </div>
      </section>
    </div>
  );
}