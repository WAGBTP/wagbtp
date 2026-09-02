import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";

export function SectionHeading({
  eyebrow,
  titre,
  texte,
  onDark = false,
  align = "left",
}: {
  eyebrow: string;
  titre: string;
  texte?: string;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow rule-gold ${onDark ? "eyebrow-gold" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-5 text-[2rem] leading-[1.08] sm:text-[2.75rem] ${
          onDark ? "text-anthracite-foreground" : "text-foreground"
        }`}
      >
        {titre}
      </h2>
      {texte && (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed ${
            onDark ? "text-anthracite-foreground/60" : "text-muted-foreground"
          }`}
        >
          {texte}
        </p>
      )}
    </div>
  );
}

/** Bandeau de libellés + visuel avant / après, esprit fiche de chantier. */
export function BeforeAfter({
  avant,
  apres,
  titre,
}: {
  avant?: string | undefined;
  apres: string;
  titre: string;
}) {
  if (!avant) {
    return (
      <figure>
        <figcaption className="bg-primary px-3 py-2 text-center font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
          Réalisation
        </figcaption>
        <img
          src={apres}
          alt={`${titre} après travaux`}
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover"
        />
      </figure>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <p className="bg-anthracite/85 px-3 py-2 text-center font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-anthracite-foreground/70">
          Avant
        </p>
        <p className="bg-primary px-3 py-2 text-center font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
          Après
        </p>
      </div>
      <div className="grid grid-cols-2">
        {[
          { src: avant, label: "avant" },
          { src: apres, label: "après" },
        ].map((item) => (
          <img
            key={item.label}
            src={item.src}
            alt={`${titre} ${item.label} travaux`}
            width={900}
            height={900}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export function CtaBand({
  titre,
  texte,
  ctaLabel = "Parler de votre projet",
  profil,
}: {
  titre: string;
  texte: string;
  ctaLabel?: string;
  profil?: "particulier" | "entreprise";
}) {
  return (
    <section className="surface-deep blueprint relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-[2rem] leading-[1.08] text-anthracite-foreground sm:text-[2.75rem]">
            {titre}
          </h2>
          <p className="mt-5 text-anthracite-foreground/70">{texte}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact" search={profil ? { profil } : {}}>
                {ctaLabel}
              </Link>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href={company.phoneHref}>{company.phone}</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-anthracite-foreground/50">
            {company.delaiReponse} · Devis gratuit et sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
