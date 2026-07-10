"use client";

import { useState } from "react";

export default function InscriptionUniversitePage() {
  const [activeTab, setActiveTab] = useState<"connexion" | "inscription">("connexion");
  const [soumis, setSoumis] = useState(false);

  const handleSubmitInscription = (e: React.FormEvent) => {
    e.preventDefault();
    setSoumis(true);
  };

  const handleSubmitConnexion = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion à connecter avec Supabase
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpeg"
            alt="Espace Universités"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-red text-sm uppercase tracking-[0.3em] font-bold">
            Universités & Établissements
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Espace Universités<br />du réseau COB
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Connectez-vous à votre espace section ou inscrivez votre établissement
            pour rejoindre le réseau du Club OHADA Bénin.
          </p>
        </div>
      </section>

      {/* Onglets Connexion / Inscription */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-border mb-10">
            <button
              onClick={() => { setActiveTab("connexion"); setSoumis(false); }}
              className={`flex-1 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-colors border-b-2 ${
                activeTab === "connexion"
                  ? "text-royal border-royal"
                  : "text-charcoal/40 border-transparent hover:text-charcoal/60"
              }`}
            >
              Se connecter
            </button>
            <button
              onClick={() => { setActiveTab("inscription"); setSoumis(false); }}
              className={`flex-1 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-colors border-b-2 ${
                activeTab === "inscription"
                  ? "text-red border-red"
                  : "text-charcoal/40 border-transparent hover:text-charcoal/60"
              }`}
            >
              S&apos;inscrire
            </button>
          </div>

          {/* ========== FORMULAIRE CONNEXION ========== */}
          {activeTab === "connexion" && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-royal flex items-center justify-center text-white font-bold text-xl tracking-widest mx-auto mb-4">
                  COB
                </div>
                <h2 className="text-2xl font-bold text-royal">Connexion à votre espace section</h2>
                <p className="text-charcoal/60 mt-2 text-sm">
                  Réservé aux responsables de section universitaire déjà enregistrés.
                </p>
              </div>

              <form onSubmit={handleSubmitConnexion} className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                    Email de la section *
                  </label>
                  <input
                    type="email"
                    required
                    className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                    placeholder="section@universite.edu"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                    Mot de passe *
                  </label>
                  <input
                    type="password"
                    required
                    className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-charcoal/60 cursor-pointer">
                    <input type="checkbox" className="accent-royal" />
                    Se souvenir de moi
                  </label>
                  <a href="#" className="text-royal hover:text-red transition-colors font-medium">
                    Mot de passe oublié ?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-royal text-white font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-royal/90 transition-colors"
                >
                  Accéder à mon espace section
                </button>
              </form>

              <p className="text-center text-sm text-charcoal/50 mt-8">
                Votre université n&apos;a pas encore d&apos;espace ?{" "}
                <button
                  onClick={() => setActiveTab("inscription")}
                  className="text-red font-bold hover:underline"
                >
                  Inscrivez votre établissement
                </button>
              </p>
            </div>
          )}

          {/* ========== FORMULAIRE INSCRIPTION ========== */}
          {activeTab === "inscription" && (
            <div>
              {soumis ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-6">✅</div>
                  <h2 className="text-3xl font-bold text-royal mb-4">Demande envoyée avec succès !</h2>
                  <p className="text-charcoal/70 text-lg mb-8">
                    Notre équipe examinera votre dossier et vous recontactera sous 48h
                    pour créer votre espace section et finaliser l&apos;intégration.
                  </p>
                  <button
                    onClick={() => { setActiveTab("connexion"); setSoumis(false); }}
                    className="inline-block bg-royal text-white font-bold uppercase tracking-[0.12em] text-sm px-8 py-4 hover:bg-royal/90 transition-colors"
                  >
                    Retour à la connexion
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-royal">Inscrire une nouvelle université</h2>
                    <p className="text-charcoal/60 mt-2 text-sm">
                      Rejoignez le réseau COB et offrez à vos étudiants l&apos;accès à la CUDO 2026.
                    </p>
                  </div>

                  {/* Avantages */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="border border-border p-4 text-center">
                      <div className="text-xl mb-2">🌍</div>
                      <h3 className="font-bold text-royal text-sm">Visibilité</h3>
                      <p className="text-xs text-charcoal/60 mt-1">Réseau international</p>
                    </div>
                    <div className="border border-border p-4 text-center">
                      <div className="text-xl mb-2">🎓</div>
                      <h3 className="font-bold text-royal text-sm">CUDO 2026</h3>
                      <p className="text-xs text-charcoal/60 mt-1">Compétition & mentorat</p>
                    </div>
                    <div className="border border-border p-4 text-center">
                      <div className="text-xl mb-2">🤝</div>
                      <h3 className="font-bold text-royal text-sm">Partenariats</h3>
                      <p className="text-xs text-charcoal/60 mt-1">Cabinets & institutions</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitInscription} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                          Nom de l&apos;université *
                        </label>
                        <input
                          type="text"
                          required
                          className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                          placeholder="Nom officiel"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                          Pays *
                        </label>
                        <select
                          required
                          className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                        >
                          <option value="">-- Sélectionner --</option>
                          <option value="benin">Bénin</option>
                          <option value="togo">Togo</option>
                          <option value="cote-ivoire">Côte d&apos;Ivoire</option>
                          <option value="senegal">Sénégal</option>
                          <option value="burkina">Burkina Faso</option>
                          <option value="mali">Mali</option>
                          <option value="niger">Niger</option>
                          <option value="guinee">Guinée</option>
                          <option value="cameroun">Cameroun</option>
                          <option value="france">France</option>
                          <option value="belgique">Belgique</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                          Ville *
                        </label>
                        <input
                          type="text"
                          required
                          className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                          placeholder="Ville du campus"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                          Site web
                        </label>
                        <input
                          type="url"
                          className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                          placeholder="https://www.universite.edu"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                          Nom du responsable *
                        </label>
                        <input
                          type="text"
                          required
                          className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                          placeholder="Doyen, Responsable..."
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                          Fonction
                        </label>
                        <input
                          type="text"
                          className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                          placeholder="Doyen de la Faculté de Droit"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                          placeholder="contact@universite.edu"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                          Téléphone
                        </label>
                        <input
                          type="text"
                          className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                          placeholder="+229 ..."
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                        Nombre d&apos;étudiants en droit *
                      </label>
                      <select
                        required
                        className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                      >
                        <option value="">-- Sélectionner --</option>
                        <option>Moins de 100</option>
                        <option>100 - 500</option>
                        <option>500 - 1 000</option>
                        <option>1 000 - 5 000</option>
                        <option>Plus de 5 000</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold">
                        Message de motivation
                      </label>
                      <textarea
                        rows={4}
                        className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-royal transition-colors"
                        placeholder="Pourquoi souhaitez-vous rejoindre le réseau COB ?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red text-white font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-red/90 transition-colors"
                    >
                      Inscrire mon université au réseau COB
                    </button>
                  </form>

                  <p className="text-center text-sm text-charcoal/50 mt-8">
                    Votre université a déjà un espace ?{" "}
                    <button
                      onClick={() => setActiveTab("connexion")}
                      className="text-royal font-bold hover:underline"
                    >
                      Connectez-vous
                    </button>
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}