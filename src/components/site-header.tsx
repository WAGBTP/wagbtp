import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { company, img } from "@/lib/site-data";

const links = [
  { to: "/", label: "Accueil", exact: true },
  { to: "/particuliers", label: "Particuliers", exact: false },
  { to: "/entreprises", label: "Entreprises", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Empêche le scroll de la page derrière le menu plein écran mobile
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-16 sm:px-6 lg:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={img.logo}
            alt="Logo WAG-BTP, entreprise générale tous corps d'état"
            width={64}
            height={74}
            className="h-9 w-auto shrink-0 sm:h-10 lg:h-12"
          />
          <span className="sr-only">WAG BTP — accueil</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.exact }}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={company.phoneHref}
            className="ml-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-gold" aria-hidden="true" />
            {company.phone}
          </a>
          <Button asChild size="lg" className="ml-3">
            <Link to="/contact">Devis gratuit</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={company.phoneHref}
            aria-label={`Appeler WAG BTP au ${company.phone}`}
            className="inline-flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto border-t border-border bg-background px-4 pb-10 pt-2 md:hidden"
          aria-label="Navigation mobile"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.exact }}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center border-b border-border/60 font-display text-xl font-bold"
              activeProps={{ className: "text-primary" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button asChild size="xl">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Demander un devis gratuit
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={company.phoneHref}>{company.phone}</a>
            </Button>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {company.zones} · Réponse sous 24 à 48h ouvrées.
          </p>
        </nav>
      )}
    </header>
  );
}

/** Barre d'actions collante, visible uniquement sur mobile (approche mobile first). */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Button asChild variant="outline" size="xl" className="flex-1">
          <a href={company.phoneHref}>
            <Phone className="size-4" aria-hidden="true" />
            Appeler
          </a>
        </Button>
        <Button asChild size="xl" className="flex-1">
          <Link to="/contact">Devis gratuit</Link>
        </Button>
      </div>
    </div>
  );
}
