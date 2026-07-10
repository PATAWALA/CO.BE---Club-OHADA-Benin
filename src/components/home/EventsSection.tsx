export default function EventsSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="text-3xl font-light text-navy mb-12 border-l-2 border-gold-matte pl-6">
        Actualités & Événements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-slate-border p-6">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="CUDO 2026" className="w-full h-48 object-cover grayscale mb-4" />
          <h3 className="text-lg font-semibold text-navy">CUDO 2026</h3>
          <p className="text-sm text-charcoal/70 mt-2">Inscriptions ouvertes. Phase écrite le 02 mai.</p>
        </div>
        <div className="border border-slate-border p-6">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Lancement" className="w-full h-48 object-cover grayscale mb-4" />
          <h3 className="text-lg font-semibold text-navy">Lancement officiel</h3>
          <p className="text-sm text-charcoal/70 mt-2">Cérémonie de lancement de la saison 2026 à l&apos;UAC.</p>
        </div>
        <div className="border border-slate-border p-6">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Partenariats" className="w-full h-48 object-cover grayscale mb-4" />
          <h3 className="text-lg font-semibold text-navy">Nouveaux partenariats</h3>
          <p className="text-sm text-charcoal/70 mt-2">5 cabinets nous font déjà confiance. Rejoignez-les.</p>
        </div>
      </div>
    </section>
  );
}