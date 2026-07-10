export default function PresidenteSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo à gauche */}
        <div className="border border-border p-2">
          <img
            src="/images/presidente.jpeg"
            alt="Mme ZOSSOUNGBO Cléopâtre, Présidente Nationale du Club OHADA Bénin"
            className="w-full h-auto object-cover"
          />
          <p className="mt-3 text-xs text-center text-charcoal/50 uppercase tracking-[0.2em] font-bold">
            Mme ZOSSOUNGBO Cléopâtre<br />Présidente Nationale
          </p>
        </div>

        {/* Texte à droite */}
        <div>
          <div className="border-l-4 border-red pl-6">
            <h2 className="text-3xl md:text-4xl font-bold text-royal tracking-tight">
              Le Mot de la Présidente
            </h2>
          </div>
          <div className="mt-8 space-y-5 text-charcoal/80 leading-relaxed">
            <p className="font-semibold text-royal">Chers étudiants, chers partenaires,</p>
            <p>
              Le Club OHADA Bénin est bien plus qu&apos;une association : c&apos;est un
              mouvement qui façonne l&apos;élite juridique de demain. Notre pays,
              trois fois champion d&apos;Afrique consécutif en droit OHADA, possède
              un vivier de talents exceptionnels.
            </p>
            <p>
              En 2026, nous portons une ambition plus grande encore : préparer
              nos étudiants aux compétitions africaines et européennes, renforcer
              nos partenariats avec les cabinets les plus prestigieux, et offrir
              à chaque membre un parcours d&apos;excellence.
            </p>
            <p>
              Cette plateforme est notre outil stratégique. Étudiants, inscrivez-vous
              dans votre section. Cabinets, rejoignez-nous comme partenaires et
              accédez à un vivier de talents formés selon les plus hauts standards.
            </p>
            <p className="font-bold text-royal text-lg">
              Rejoignez-nous. Ensemble, bâtissons l&apos;excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}