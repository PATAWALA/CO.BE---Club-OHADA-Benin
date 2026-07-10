"use client";

import { useSearchParams } from "next/navigation";

export default function InscriptionPage() {
  const searchParams = useSearchParams();
  const sectionPreselectionnee = searchParams.get("section") || "";

  return (
    <div className="min-h-screen">
      <section className="bg-royal text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Inscription CUDO 2026</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            {sectionPreselectionnee
              ? `Vous vous inscrivez dans la section ${sectionPreselectionnee === "centre-nord" ? "Centre-Nord (Parakou)" : sectionPreselectionnee === "sud" ? "Sud (UAC)" : "Cotonou"}.`
              : "Choisissez votre section universitaire et rejoignez la compétition."}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <form className="max-w-2xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">Nom complet *</label>
              <input type="text" required className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors" placeholder="Votre nom" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">Email *</label>
              <input type="email" required className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors" placeholder="vous@exemple.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">Téléphone *</label>
              <input type="text" required className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors" placeholder="+229 ..." />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">Niveau d&apos;études</label>
              <select className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors">
                <option>Licence 1</option><option>Licence 2</option><option>Licence 3</option>
                <option>Master 1</option><option>Master 2</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">Section de rattachement *</label>
            <select required defaultValue={sectionPreselectionnee} className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors">
              <option value="">-- Choisissez votre section --</option>
              <option value="centre-nord">Section Centre-Nord – Université de Parakou</option>
              <option value="sud">Section Sud – Université d&apos;Abomey-Calavi (UAC)</option>
              <option value="cotonou">Section Cotonou</option>
            </select>
            <p className="mt-2 text-xs text-charcoal/50">Votre fiche sera automatiquement transmise à la base de données de votre section.</p>
          </div>

          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">Motivation</label>
            <textarea rows={4} className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors" placeholder="Pourquoi souhaitez-vous participer à la CUDO 2026 ?"></textarea>
          </div>

          <button type="submit" className="w-full bg-red text-white font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-red/90 transition-colors">
            Valider mon inscription à la CUDO 2026
          </button>
        </form>
      </section>
    </div>
  );
}