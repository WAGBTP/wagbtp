import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { company, img } from "@/lib/site-data";

const links = [
  { to: "/particuliers", label: "Particuliers" },
  { to: "/entreprises", label: "Entreprises" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={img.logo}
            alt="Logo WAG-BTP, tous corps d'état"
            width={64}
            height={74}
            className="h-10 w-auto lg:h-12"
          />
          <span className="sr-only">WAG BTP — accueil</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden" aria-label="Navigation mobile">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 font-display text-lg font-bold"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Button asChild size="xl">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Demander un devis gratuit
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={company.phoneHref}>{company.phone}</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
