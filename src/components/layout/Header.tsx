"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown desktop si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-blue-900 flex items-center justify-center text-white font-bold text-sm tracking-widest">
            COB
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-blue-900 font-bold tracking-[0.3em] text-lg">COB</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Club OHADA Bénin
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (inchangée) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8 text-xs uppercase tracking-[0.12em] text-slate-600 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-900 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/competition" className="hover:text-blue-900 transition-colors">
                CUDO 2026
              </Link>
            </li>
            <li>
              <Link href="/evenements" className="hover:text-blue-900 transition-colors">
                Événements
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            {/* REJOINDRE avec dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-red-600 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                REJOINDRE
                <svg
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 shadow-lg z-50 min-w-[300px]">
                  <p className="px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold border-b border-slate-200">
                    Choisir ma section
                  </p>
                  <Link
                    href="/inscription?section=centre-nord"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-900 border-b border-slate-200"
                  >
                    <span className="font-bold text-blue-900 block">Section Centre-Nord</span>
                    <span className="text-xs text-slate-500 mt-0.5">Université de Parakou</span>
                  </Link>
                  <Link
                    href="/inscription?section=sud"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-900 border-b border-slate-200"
                  >
                    <span className="font-bold text-blue-900 block">Section Sud</span>
                    <span className="text-xs text-slate-500 mt-0.5">Université d&apos;Abomey-Calavi (UAC)</span>
                  </Link>
                  <Link
                    href="/inscription?section=cotonou"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-900 border-b border-slate-200"
                  >
                    <span className="font-bold text-blue-900 block">Section Cotonou</span>
                    <span className="text-xs text-slate-500 mt-0.5">Campus de Cotonou</span>
                  </Link>
                  <Link
                    href="/inscription-universite"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3.5 text-sm bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <span className="font-bold text-red-600 block text-xs tracking-wider uppercase">
                      Nouvelle Université ?
                    </span>
                    <span className="text-xs text-blue-900 font-medium block mt-0.5">
                      Inscrire votre établissement (Bénin & International)
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* DEVENIR PARTENAIRE */}
            <Link
              href="/devenir-partenaire"
              className="border-2 border-blue-900 text-blue-900 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] hover:bg-blue-900 hover:text-white transition-colors"
            >
              DEVENIR PARTENAIRE
            </Link>
          </div>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900 text-3xl leading-none focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile menu – DESIGN PREMIUM */}
      <div
        className={`md:hidden fixed inset-0 top-[65px] bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-8 py-8">
          {/* Navigation principale */}
          <div className="space-y-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-800 hover:text-blue-900 transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/competition"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-800 hover:text-blue-900 transition-colors"
            >
              CUDO 2026
            </Link>
            <Link
              href="/evenements"
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-800 hover:text-blue-900 transition-colors"
            >
              Événements
            </Link>
          </div>

          {/* Séparateur */}
          <div className="my-8 border-t border-slate-200" />

          {/* Section REJOINDRE */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">
              Rejoindre une section
            </p>
            <div className="space-y-4">
              <Link
                href="/inscription?section=centre-nord"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-slate-700 hover:text-blue-900 transition-colors"
              >
                <span className="font-medium">Section Centre-Nord</span>
                <span className="text-xs text-slate-400">Parakou</span>
              </Link>
              <Link
                href="/inscription?section=sud"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-slate-700 hover:text-blue-900 transition-colors"
              >
                <span className="font-medium">Section Sud</span>
                <span className="text-xs text-slate-400">UAC</span>
              </Link>
              <Link
                href="/inscription?section=cotonou"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2 border-b border-slate-100 text-slate-700 hover:text-blue-900 transition-colors"
              >
                <span className="font-medium">Section Cotonou</span>
                <span className="text-xs text-slate-400">Campus Cotonou</span>
              </Link>
            </div>

            <Link
              href="/inscription-universite"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center text-sm text-blue-900 font-medium hover:text-red-600 transition-colors"
            >
              <span>Inscrire une nouvelle université</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Séparateur */}
          <div className="my-8 border-t border-slate-200" />

          {/* Bouton Partenaire */}
          <Link
            href="/devenir-partenaire"
            onClick={() => setIsOpen(false)}
            className="block w-full border-2 border-blue-900 text-blue-900 text-center py-4 font-bold text-sm uppercase tracking-[0.1em] hover:bg-blue-900 hover:text-white transition-colors"
          >
            Devenir Partenaire
          </Link>
        </div>
      </div>
    </header>
  );
}