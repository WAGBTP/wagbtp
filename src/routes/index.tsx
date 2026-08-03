import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, HardHat, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand, SectionHeading } from "@/components/site-sections";
import { chiffres, company, img, methode, realisationsPhares, valeurs } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WAG BTP — Entreprise générale tous corps d'état en Île-de-France" },
      {
        name: "description",
        content:
          "WAG BTP, entreprise générale de bâtiment tous corps d'état depuis 2013 : rénovation et construction pour particuliers et entreprises en Île-de-France et Guadeloupe. Devis gratuit.",
      },
      { property: "og:title", content: "WAG BTP — Votre vision, notre expertise chantier" },
      {
        property: "og:description",
        content:
          "Rénovation et construction tous corps d'état, clé en main. Un interlocuteur unique, un chantier suivi. Île-de-France et Guadeloupe.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Accueil,
});

function Accueil() {
  return (
    <>
      {/* HERO */}
      <section className="surface-deep relative isolate overflow-hidden">
        <img
          src={img.hero}
          alt="Artisans WAG BTP sur un chantier de rénovation d'appartement en Île-de-France"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-r from-anthracite via-anthracite/85 to-anthracite/40" />
        <div className="blueprint relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
          <p className="eyebrow eyebrow-gold rule-gold">Tous corps d'état · depuis {company.depuis}</p>
          <h1 className="mt-6 max-w-3xl text-[2rem] leading-[1.1] text-anthracite-foreground sm:text-5xl lg:text-6xl">
            Votre vision,
            <br />
            notre expertise chantier.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-anthracite-foreground/80">
            WAG BTP matérialise votre habitat idéal, clé en main. Rénovation, construction,
            extension, terrasse — de l'étude à la réception.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/particuliers">
                Je suis un particulier
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <Link to="/entreprises">
                Je suis une entreprise
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <p className="mt-8 max-w-xl border-l-2 border-gold pl-4 text-sm leading-relaxed text-anthracite-foreground/65">
            {company.promesse}
          </p>
        </div>

        {/* Barre de valeurs */}
        <div className="relative border-t border-anthracite-foreground/10">
          <ul className="mx-auto grid max-w-6xl gap-px px-4 sm:px-6 md:grid-cols-4">
            {valeurs.map((v) => (
              <li key={v.titre} className="py-6 md:pr-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                  {v.titre}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-anthracite-foreground/65">
                  {v.texte}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DOUBLE ENTREE */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Deux entrées, deux discours"
          titre="Dites-nous qui vous êtes, nous adaptons le chantier."
          texte="Particuliers et professionnels n'ont pas les mêmes attentes. Chaque parcours a sa page, ses réalisations et son formulaire."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              to: "/particuliers" as const,
              icon: HardHat,
              titre: "Particuliers",
              texte:
                "Salle de bain, cuisine, séjour, rénovation complète, construction, extension, terrasse. Budget maîtrisé et chantier documenté.",
              lien: "Voir les prestations particuliers",
            },
            {
              to: "/entreprises" as const,
              icon: Building2,
              titre: "Entreprises",
              texte:
                "Parcs immobiliers, bureaux, locaux professionnels. Capacité d'exécution, pilotage multi-sites, reporting et interlocuteur unique.",
              lien: "Voir les prestations entreprises",
            },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group flex flex-col rounded-md border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-colors hover:border-primary"
            >
              <card.icon className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-2xl text-card-foreground">{card.titre}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{card.texte}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-primary">
                {card.lien}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
          {chiffres.map((c) => (
            <div key={c.libelle}>
              <p className="font-display text-4xl font-extrabold text-primary">{c.valeur}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.libelle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REALISATIONS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Réalisations"
          titre="Trois chantiers, trois preuves."
          texte="Logements collectifs, bâtiments publics, maisons individuelles : la même méthode, quelle que soit l'échelle."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {realisationsPhares.map((r) => (
            <article key={r.projet} className="overflow-hidden rounded-md border border-border bg-card">
              <img
                src={r.image}
                alt={r.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-6">
                <p className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-gold">
                  {r.cible}
                </p>
                <h3 className="mt-2 text-lg leading-snug text-card-foreground">{r.projet}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.resultat}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* METHODE */}
      <section className="surface-deep blueprint">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Méthode"
            titre="Cinq étapes, aucune zone d'ombre."
            texte="De la première visite à la remise des clés, vous savez toujours où en est le chantier."
            onDark
          />
          <ol className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-5">
            {methode.map((e) => (
              <li key={e.etape} className="border-t-2 border-gold/50 pt-5 lg:pr-6">
                <span className="font-display text-sm font-bold tracking-widest text-gold">
                  {e.etape}
                </span>
                <h3 className="mt-2 text-lg text-anthracite-foreground">{e.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-anthracite-foreground/65">
                  {e.texte}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-12 inline-flex items-start gap-3 text-sm text-anthracite-foreground/65">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
            Entreprise assurée, garanties légales appliquées, un conducteur de travaux référent sur
            toute la durée du chantier.
          </p>
        </div>
      </section>

      <div className="py-14 sm:py-20">
        <CtaBand
          titre="Parler de votre projet"
          texte="Décrivez-nous votre chantier en quelques lignes : nous revenons vers vous avec les bonnes questions, puis un devis clair."
        />
      </div>
    </>
  );
}
