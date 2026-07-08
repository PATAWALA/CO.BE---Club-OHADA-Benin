import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-slate-border bg-offwhite/90 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo simulé */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-navy flex items-center justify-center text-offwhite font-bold text-sm tracking-widest">
            CO
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-navy font-bold tracking-[0.3em] text-lg">CO.BE</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50">
              Club OHADA Bénin
            </span>
          </div>
        </Link>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.15em] text-charcoal/70">
          <li>
            <Link href="/" className="hover:text-navy transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/rejoindre" className="hover:text-navy transition-colors">
              Rejoindre
            </Link>
          </li>
          <li>
            <Link href="/boutique" className="hover:text-navy transition-colors">
              Boutique
            </Link>
          </li>
          <li>
            <Link href="/evenements" className="hover:text-navy transition-colors">
              Événements
            </Link>
          </li>
          <li>
            <Link
              href="/cabinets"
              className="bg-gold-matte text-navy border border-gold-matte px-5 py-2.5 font-bold hover:bg-gold-matte/90 transition-colors"
            >
              Devenir Partenaire
            </Link>
          </li>
        </ul>

        {/* Burger menu mobile (simple) */}
        <button className="md:hidden text-navy text-2xl">&equiv;</button>
      </nav>
    </header>
  );
}