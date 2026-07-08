export default function VisionSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
        <div className="md:col-span-2">
          <div className="border-l-2 border-gold-matte pl-6">
            <h2 className="text-3xl md:text-4xl font-light text-navy tracking-tight">
              Notre Vision
            </h2>
          </div>
        </div>
        <div className="md:col-span-3 space-y-10">
          <p className="text-lg leading-relaxed text-charcoal/80">
            Le Club OHADA Bénin se veut un laboratoire d’excellence juridique.
            Nous construisons un écosystème où le savoir circule, où les
            étudiants deviennent des professionnels aguerris et où les cabinets
            trouvent un vivier de talents immédiatement opérationnels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="border border-slate-border p-6">
              <div className="text-gold-matte text-2xl mb-4">01</div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Transmission
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Des ressources juridiques de qualité, accessibles à tous les
                membres.
              </p>
            </div>
            <div className="border border-slate-border p-6">
              <div className="text-gold-matte text-2xl mb-4">02</div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Communauté
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Un réseau actif qui connecte étudiants, universitaires et
                praticiens.
              </p>
            </div>
            <div className="border border-slate-border p-6">
              <div className="text-gold-matte text-2xl mb-4">03</div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Professionnalisation
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Des outils concrets pour réussir dans le monde juridique OHADA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}