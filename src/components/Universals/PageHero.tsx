import Link from "next/link";

interface Crumb { label: string; href: string }
interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  teal?: boolean;
}

export default function PageHero({ eyebrow, title, subtitle, crumbs, teal }: PageHeroProps) {
  return (
    <section className={`pt-40 pb-20 px-6 ${teal ? "bg-[#29b6c8]" : "bg-[#1E3A4A]"}`}>
      <div className="max-w-7xl mx-auto">
        {crumbs && (
          <nav className="flex items-center gap-2 text-white/50 text-xs mb-6 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-2">
                <span>/</span>
                <Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link>
              </span>
            ))}
          </nav>
        )}
        <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.2em] mb-3">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight max-w-3xl">{title}</h1>
        <div className="w-12 h-1 bg-[#F5C518] mt-5" />
        {subtitle && <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
