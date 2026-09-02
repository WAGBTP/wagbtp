import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { LogoWagBtp } from "@/components/logo-wagbtp";
import { company } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="surface-deep blueprint border-t border-anthracite-foreground/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-10">
        <div>
          <LogoWagBtp onDark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-anthracite-foreground/60">
            Entreprise générale de bâtiment tous corps d'état depuis {company.depuis}, en
            Île-de-France et en Guadeloupe.
          </p>
        </div>


        <div>
          <h2 className="eyebrow eyebrow-gold rule-gold">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-anthracite-foreground/80">
            <li>
              <a href={company.phoneHref} className="inline-flex items-center gap-2 hover:text-gold">
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-gold">
                <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="text-anthracite-foreground/60">{company.president}</li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow eyebrow-gold rule-gold">Le site</h2>
          <ul className="mt-5 space-y-3 text-sm text-anthracite-foreground/80">
            <li>
              <Link to="/" className="hover:text-gold">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/particuliers" className="hover:text-gold">
                Particuliers
              </Link>
            </li>
            <li>
              <Link to="/entreprises" className="hover:text-gold">
                Entreprises
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales" className="hover:text-gold">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/confidentialite" className="hover:text-gold">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-anthracite-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-anthracite-foreground/50 sm:px-6">
          © {new Date().getFullYear()} WAG BTP — Tous corps d'état · Asnières-sur-Seine ·
          Île-de-France & Guadeloupe
        </div>
      </div>
    </footer>
  );
}
