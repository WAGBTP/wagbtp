import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BeforeAfter, CtaBand, SectionHeading } from "@/components/site-sections";
import { engagementsPro, img, offresEntreprises } from "@/lib/site-data";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/entreprises" },
    ],
    links: [{ rel: "canonical", href: "/entreprises" }],
  }),
  component: Entreprises,
});

/** Palette des tuiles du damier : clair, indigo, anthracite. */
const tuiles = [
  {
    bg: "bg-secondary",
    eyebrow: "text-primary",
    titre: "text-foreground",
    texte: "text-muted-foreground",
    lien: "text-primary",
  },
  {
    bg: "bg-primary",
    eyebrow: "text-gold",
    titre: "text-primary-foreground",
    texte: "text-primary-foreground/75",
    lien: "text-gold",
  },
  {
    bg: "surface-deep",
    eyebrow: "text-gold",
    titre: "text-anthracite-foreground",
    texte: "text-anthracite-foreground/70",
    lien: "text-gold",
  },
] as const;

function Entreprises() {
  return (
    <>
      {/* HERO */}
      <section className="grid lg:grid-cols-2">
        <div className="surface-deep blueprint flex flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[32rem] lg:pl-10 lg:pr-14 xl:pl-16">
          <p className="eyebrow eyebrow-gold rule-gold">Entreprises & gestionnaires</p>
          <h1 className="mt-6 text-[2.25rem] leading-[1.02] text-anthracite-foreground sm:text-[3.25rem]">
            Des chantiers tenus,
            <br />
            <span className="text-gold">sur site occupé.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-anthracite-foreground/70">
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
        <img
          src={img.copropriete}
          alt="Cordistes WAG BTP intervenant en façade sur une copropriété"
          width={1200}
          height={900}
          className="h-72 w-full bg-muted object-cover sm:h-96 lg:h-full"
        />
      </section>

      {/* PRESTATIONS — damier image / texte */}
      <section id="prestations" className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-10">
        <SectionHeading
          eyebrow="Rénovation pour professionnels"
          titre="Trois terrains d'intervention."
        />
      </section>

      <div className="mx-auto mt-12 grid max-w-7xl px-4 sm:px-6 md:grid-cols-2 lg:px-10">
        {offresEntreprises.map((o, i) => {
          const t = tuiles[i % tuiles.length]!;
          const imageFirst = i % 2 === 0;
          return (
            <div key={o.slug} id={o.slug} className="contents">
              <img
                src={o.image}
                alt={o.alt}
                width={1200}
                height={900}
                loading="lazy"
                className={`aspect-4/3 w-full bg-muted object-cover ${
                  imageFirst ? "" : "md:order-last"
                }`}
              />
              <div className={`${t.bg} flex flex-col justify-center p-8 sm:p-12`}>
                <p
                  className={`rule-gold inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-[0.16em] ${t.eyebrow}`}
                >
                  {o.sousTitre}
                </p>
                <h3 className={`mt-5 text-[1.75rem] leading-tight sm:text-[2rem] ${t.titre}`}>
                  {o.titre}
                </h3>
                <p className={`mt-5 leading-relaxed ${t.texte}`}>{o.texte}</p>
                <Link
                  to="/contact"
                  search={{ profil: "entreprise", projet: o.slug }}
                  className={`group mt-7 inline-flex items-center gap-2 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] ${t.lien}`}
                >
                  Demande professionnelle
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* AVANT / APRÈS */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-10">
          <SectionHeading
            eyebrow="Avant / après"
            titre="Cantine de Montmirail."
            texte="Rénovation complète de la façade avec remise en état des supports, nouvelle finition et traitement soigné des ouvertures. Faites glisser le curseur pour comparer."
          />
          <div className="border border-border bg-card">
            <BeforeAfter
              avant={img.cantineMontmirailAvant}
              apres={img.cantineMontmirailApres}
              titre="Rénovation de la cantine de Montmirail"
            />
          </div>
        </div>
      </section>

      {/* GENDARMERIE DE SURVILLIERS */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.28fr_0.72fr] lg:gap-16 lg:px-10">
          <div className="border border-border bg-card">
            <BeforeAfter
              avant={img.gendarmerieAvant}
              apres={img.gendarmerieApres}
              titre={gendarmerieSurvilliers.titre}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={`Avant / après · ${gendarmerieSurvilliers.lieu}`}
              titre="Gendarmerie de Survilliers."
              texte={gendarmerieSurvilliers.resume}
            />
            <dl className="mt-8 grid grid-cols-2 gap-6">
              {gendarmerieSurvilliers.chiffres.map((c) => (
                <div key={c.libelle} className="border-t border-border pt-4">
                  <dt className="font-display text-2xl text-primary">{c.valeur}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.libelle}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10">
          <details className="group border border-border bg-secondary">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary sm:p-8">
              Plus de détails sur ce chantier
              <Plus className="size-5 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>

            <div className="grid gap-10 border-t border-border p-6 sm:p-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="eyebrow rule-gold">Lots réalisés</h3>
                <ul className="mt-6 space-y-3">
                  {gendarmerieSurvilliers.lots.map((l) => (
                    <li key={l} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 bg-gold" aria-hidden="true" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {gendarmerieSurvilliers.galerie.map((g) => (
                  <figure key={g.image}>
                    <img
                      src={g.image}
                      alt={g.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-4/3 w-full bg-muted object-cover"
                    />
                    <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {g.legende}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionHeading
          eyebrow="Nos engagements"
          titre="Ce que vous obtenez en confiant un lot à WAG BTP."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {engagementsPro.map((e) => (
            <div key={e.titre} className="border-t border-border pt-6">
              <h3 className="eyebrow">{e.titre}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        titre="Un parc, un plateau, un local à reprendre ?"
        texte="Envoyez-nous le périmètre et vos contraintes d'exploitation. Nous vous proposons une visite technique puis un chiffrage par lot."
        ctaLabel="Envoyer une demande professionnelle"
        profil="entreprise"
      />
    </>
  );
}
