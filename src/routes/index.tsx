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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Accueil,
});

function Accueil() {
  return (
    <>
      {/* HERO — split indigo / photo */}
      <section className="grid lg:grid-cols-2">
        <div className="blueprint relative flex flex-col justify-center bg-primary px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[38rem] lg:py-24 lg:pl-10 lg:pr-14 xl:pl-16">
          <p className="eyebrow eyebrow-gold rule-gold">
            Tous corps d'état · depuis {company.depuis}
          </p>
          <h1 className="mt-6 text-[2.25rem] leading-[1.02] text-primary-foreground sm:text-[3.25rem] lg:text-[3.5rem]">
            Votre vision,
            <br />
            <span className="text-gold">notre expertise</span>
            <br />
            chantier.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-primary-foreground/85">
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

          <p className="mt-10 max-w-lg border-l-2 border-gold pl-4 text-sm leading-relaxed text-primary-foreground/65">
            {company.promesse}
          </p>
        </div>

        <img
          src={img.hero}
          alt="Artisan WAG BTP rénovant un parquet ancien dans un appartement"
          width={1600}
          height={1104}
          className="h-72 w-full bg-muted object-cover sm:h-96 lg:h-full"
        />
      </section>

      {/* DOUBLE ENTREE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionHeading
          eyebrow="Deux entrées, deux discours"
          titre="Dites-nous qui vous êtes, nous adaptons le chantier."
          texte="Particuliers et professionnels n'ont pas les mêmes attentes. Chaque parcours a sa page, ses réalisations et son formulaire."
        />
        <div className="mt-12 grid gap-0 border border-border md:grid-cols-2">
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
          ].map((card, i) => (
            <Link
              key={card.to}
              to={card.to}
              className={`group flex flex-col bg-card p-8 transition-colors hover:bg-secondary sm:p-10 ${
                i === 1 ? "border-t border-border md:border-l md:border-t-0" : ""
              }`}
            >
              <card.icon className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-6 text-2xl text-card-foreground">{card.titre}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{card.texte}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary">
                {card.lien}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
          {chiffres.map((c) => (
            <div key={c.libelle}>
              <p className="font-display text-[2.5rem] font-extrabold leading-none text-primary">
                {c.valeur}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.libelle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REALISATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionHeading
          eyebrow="Réalisations"
          titre="Trois chantiers, trois preuves."
          texte="Logements collectifs, bâtiments publics, maisons individuelles : la même méthode, quelle que soit l'échelle."
        />
        <div className="mt-12 grid gap-0 border border-border md:grid-cols-3">
          {realisationsPhares.map((r, i) => (
            <article
              key={r.projet}
              className={`bg-card ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
            >
              <img
                src={r.image}
                alt={r.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-7">
                <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold">
                  {r.cible}
                </p>
                <h3 className="mt-3 text-lg leading-snug text-card-foreground">{r.projet}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.resultat}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* METHODE — frise horizontale sur anthracite */}
      <section className="surface-deep blueprint">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow=""
            titre="Cinq étapes, aucune zone d'ombre."
            texte="De la première visite à la remise des clés, vous savez toujours où en est le chantier."
            onDark
          />
          <div className="relative mt-14 border-t border-anthracite-foreground/15">
            <span
              className="absolute -top-px left-0 h-0.5 w-full bg-gold sm:w-1/5"
              aria-hidden="true"
            />
            <ol className="grid gap-10 pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {methode.map((e, i) => (
                <li key={e.etape} className="lg:pr-8">
                  <span
                    className={`font-display text-sm font-bold tracking-[0.18em] ${
                      i === 0 ? "text-gold" : "text-anthracite-foreground/40"
                    }`}
                  >
                    {e.etape}
                  </span>
                  <h3
                    className={`mt-3 text-lg ${
                      i === 0 ? "text-anthracite-foreground" : "text-anthracite-foreground/85"
                    }`}
                  >
                    {e.titre}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      i === 0
                        ? "text-anthracite-foreground/80"
                        : "text-anthracite-foreground/50"
                    }`}
                  >
                    {e.texte}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-14 inline-flex items-start gap-3 text-sm text-anthracite-foreground/60">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
            Entreprise assurée, garanties légales appliquées, un conducteur de travaux référent sur
            toute la durée du chantier.
          </p>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 sm:py-20 lg:grid-cols-4 lg:px-10">
          {valeurs.map((v) => (
            <div key={v.titre}>
              <h2 className="eyebrow rule-gold">{v.titre}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        titre="Parler de votre projet."
        texte="Décrivez-nous votre chantier en quelques lignes : nous revenons vers vous avec les bonnes questions, puis un devis clair."
      />
    </>
  );
}
