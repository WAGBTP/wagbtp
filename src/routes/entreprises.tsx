import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand, SectionHeading } from "@/components/site-sections";
import { engagementsPro, offresEntreprises } from "@/lib/site-data";

export const Route = createFileRoute("/entreprises")({
  head: () => ({
    meta: [
      { title: "Rénovation de parcs immobiliers, bureaux et locaux | WAG BTP" },
      {
        name: "description",
        content:
          "WAG BTP rénove parcs immobiliers, bureaux et locaux professionnels en Île-de-France : site occupé, pilotage multi-sites, reporting et interlocuteur unique.",
      },
      { property: "og:title", content: "Entreprises — Rénovation tous corps d'état | WAG BTP" },
      {
        property: "og:description",
        content:
          "Capacité d'exécution, coordination des corps de métier et reporting pour gestionnaires de parcs et responsables d'exploitation.",
      },
    ],
  }),
  component: Entreprises,
});

function Entreprises() {
  return (
    <>
      <section className="surface-deep blueprint border-b border-anthracite-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="eyebrow eyebrow-gold rule-gold">Entreprises & gestionnaires</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-anthracite-foreground sm:text-5xl">
            Des chantiers tenus, sur site occupé.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-anthracite-foreground/75">
            Un seul interlocuteur pour tous les lots et tous les sites, un planning consolidé et un
            reporting d'avancement à chaque étape. Vos usagers restent en place, votre activité
            continue.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact" search={{ profil: "entreprise" }}>
                Demande professionnelle
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href="#prestations">Voir les prestations</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="prestations" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Rénovation pour professionnels"
          titre="Trois terrains d'intervention."
          texte="Résidences et copropriétés, plateaux de bureaux, locaux d'activité et commerces : la même exigence d'organisation."
        />
        <div className="mt-12 space-y-12">
          {offresEntreprises.map((o, i) => (
            <article
              key={o.slug}
              id={o.slug}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <img
                src={o.image}
                alt={o.alt}
                width={1200}
                height={900}
                loading="lazy"
                className={`aspect-4/3 w-full rounded-md object-cover ${
                  i % 2 === 1 ? "lg:order-last" : ""
                }`}
              />
              <div>
                <p className="eyebrow rule-gold">{o.sousTitre}</p>
                <h3 className="mt-4 text-3xl leading-tight">{o.titre}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{o.texte}</p>
                <ul className="mt-6 space-y-2">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-7">
                  <Link to="/contact" search={{ profil: "entreprise", projet: o.slug }}>
                    Demande professionnelle
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Nos engagements"
            titre="Ce que vous obtenez en confiant un lot à WAG BTP."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementsPro.map((e) => (
              <div key={e.titre} className="rounded-md border border-border bg-card p-6">
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-primary">
                  {e.titre}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20">
        <CtaBand
          titre="Un parc, un plateau, un local à reprendre ?"
          texte="Envoyez-nous le périmètre et vos contraintes d'exploitation. Nous vous proposons une visite technique puis un chiffrage par lot."
          ctaLabel="Envoyer une demande professionnelle"
          profil="entreprise"
        />
      </div>
    </>
  );
}
