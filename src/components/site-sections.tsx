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
        className={`mt-4 text-3xl leading-tight sm:text-4xl ${
          onDark ? "text-anthracite-foreground" : "text-foreground"
        }`}
      >
        {titre}
      </h2>
      {texte && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            onDark ? "text-anthracite-foreground/70" : "text-muted-foreground"
          }`}
        >
          {texte}
        </p>
      )}
    </div>
  );
}

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
      <img
        src={apres}
        alt={`${titre} après travaux`}
        width={1200}
        height={900}
        loading="lazy"
        className="aspect-4/3 w-full rounded-md object-cover"
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {[
        { src: avant, label: "Avant", gold: false },
        { src: apres, label: "Après", gold: true },
      ].map((item) => (
        <figure key={item.label} className="relative overflow-hidden rounded-md">
          <img
            src={item.src}
            alt={`${titre} ${item.label.toLowerCase()} travaux`}
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
          <figcaption
            className={`absolute left-2 top-2 rounded px-2 py-1 font-display text-[0.65rem] font-bold uppercase tracking-widest ${
              item.gold ? "bg-gold text-gold-foreground" : "bg-primary text-primary-foreground"
            }`}
          >
            {item.label}
          </figcaption>
        </figure>
      ))}
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
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="surface-deep blueprint relative overflow-hidden rounded-md px-6 py-12 sm:px-12 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight text-anthracite-foreground sm:text-4xl">{titre}</h2>
          <p className="mt-4 text-anthracite-foreground/75">{texte}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact" search={{ profil }}>
                {ctaLabel}
              </Link>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href={company.phoneHref}>{company.phone}</a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-anthracite-foreground/55">
            {company.delaiReponse} · Devis gratuit et sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
