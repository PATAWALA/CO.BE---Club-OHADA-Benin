"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const sectionsDisponibles = [
  {
    value: "centre-nord",
    nom: "Section Centre-Nord",
    lieu: "Université de Parakou",
  },
  {
    value: "sud",
    nom: "Section Sud",
    lieu: "Université d'Abomey-Calavi (UAC)",
  },
  {
    value: "cotonou",
    nom: "Section Cotonou",
    lieu: "Campus de Cotonou",
  },
];

function InscriptionForm() {
  const searchParams = useSearchParams();
  const sectionFromUrl = searchParams.get("section") || "";

  // Étape 1 : choix de la section, sauf si déjà dans l'URL
  const [step, setStep] = useState<1 | 2>(sectionFromUrl ? 2 : 1);
  const [selectedSection, setSelectedSection] = useState(sectionFromUrl);

  const handleChoisirSection = (value: string) => {
    setSelectedSection(value);
    setStep(2);
  };

  const sectionChoisie = sectionsDisponibles.find(
    (s) => s.value === selectedSection
  );

  return (
    <div className="min-h-screen">
      {/* Étape 1 : Choix de la section */}
      {step === 1 && (
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-royal mb-4">
              Rejoignez la CUDO 2026
            </h1>
            <p className="text-charcoal/70 mb-10">
              Avant de vous inscrire, sélectionnez votre section universitaire
              de rattachement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sectionsDisponibles.map((section) => (
                <button
                  key={section.value}
                  onClick={() => handleChoisirSection(section.value)}
                  className="border border-border p-6 text-left hover:border-royal hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-royal text-lg group-hover:text-red transition-colors">
                    {section.nom}
                  </h3>
                  <p className="text-sm text-charcoal/50 mt-1">{section.lieu}</p>
                  <span className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.1em] text-red group-hover:translate-x-1 transition-transform">
                    Choisir cette section →
                  </span>
                </button>
              ))}
            </div>

            <p className="mt-10 text-sm text-charcoal/50">
              Votre université n&apos;apparaît pas ?{" "}
              <Link
                href="/inscription-universite"
                className="text-royal font-bold underline hover:text-red transition-colors"
              >
                Inscrivez votre établissement
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Étape 2 : Formulaire d'inscription */}
      {step === 2 && (
        <>
          <section className="bg-black text-white py-16 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/images/hero-bg.jpeg"
                alt="Inscription CUDO 2026"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <span className="text-red text-sm uppercase tracking-[0.3em] font-bold">
                CUDO 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Inscription — {sectionChoisie?.nom}
              </h1>
              <p className="mt-4 text-lg text-white/70 max-w-2xl">
                Vous vous inscrivez dans la section{" "}
                <strong>{sectionChoisie?.nom}</strong> ({sectionChoisie?.lieu}).
              </p>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <form className="max-w-2xl mx-auto space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                    Téléphone *
                  </label>
                  <input
                    type="text"
                    required
                    className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                    placeholder="+229 ..."
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                    Niveau d&apos;études
                  </label>
                  <select className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors">
                    <option>Licence 1</option>
                    <option>Licence 2</option>
                    <option>Licence 3</option>
                    <option>Master 1</option>
                    <option>Master 2</option>
                  </select>
                </div>
              </div>

              {/* Section verrouillée */}
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                  Section de rattachement
                </label>
                <div className="border border-border bg-gray-light px-4 py-3 text-sm text-charcoal/80 font-medium">
                  {sectionChoisie?.nom} — {sectionChoisie?.lieu}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mt-1 text-xs text-royal hover:text-red transition-colors self-start"
                >
                  Changer de section
                </button>
              </div>

              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                  Motivation
                </label>
                <textarea
                  rows={4}
                  className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                  placeholder="Pourquoi souhaitez-vous participer à la CUDO 2026 ?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red text-white font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-red/90 transition-colors"
              >
                Valider mon inscription à la CUDO 2026
              </button>
            </form>
          </section>
        </>
      )}
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-charcoal/50">
          Chargement...
        </div>
      }
    >
      <InscriptionForm />
    </Suspense>
  );
}