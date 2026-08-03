import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BeforeAfter, CtaBand, SectionHeading } from "@/components/site-sections";
import { projetsConstruction, projetsParticuliers } from "@/lib/site-data";

export const Route = createFileRoute("/particuliers")({
  head: () => ({
    meta: [
      { title: "Rénovation & construction pour particuliers | WAG BTP" },
      {
        name: "description",
        content:
          "Salle de bain, cuisine, séjour, rénovation complète, construction, extension et terrasse : WAG BTP pilote vos travaux clé en main en Île-de-France et Guadeloupe.",
      },
      { property: "og:title", content: "Particuliers — Rénovation et construction | WAG BTP" },
      {
        property: "og:description",
        content:
          "Photos avant/après, prestations incluses et déroulé simplifié pour chaque type de projet. Devis gratuit sous 24 à 48h ouvrées.",
      },
      { property: "og:url", content: "/particuliers" },
    ],
    links: [{ rel: "canonical", href: "/particuliers" }],
  }),
  component: Particuliers,
});

function ProjetCard({
  projet,
}: {
  projet: {
    slug: string;
    titre: string;
    texte: string;
    inclus: string[];
    avant?: string | undefined;
    badgeApres?: boolean | undefined;
    apres: string;
  };
}) {
  return (
    <article
      id={projet.slug}
      className="overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)]"
    >
      <div className="p-3">
        <BeforeAfter
          avant={projet.avant}
          apres={projet.apres}
          titre={projet.titre}
          badgeApres={projet.badgeApres ?? true}
        />
      </div>
      <div className="px-6 pb-7 pt-3">
        <h3 className="text-2xl text-card-foreground">{projet.titre}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{projet.texte}</p>
        <p className="eyebrow mt-6">Ce qui est inclus</p>
        <ul className="mt-3 space-y-2">
          {projet.inclus.map((i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              {i}
            </li>
          ))}
        </ul>
        <Button asChild variant="default" size="lg" className="mt-7">
          <Link to="/contact" search={{ profil: "particulier", projet: projet.slug }}>
            Demander un devis
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}

function Particuliers() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <p className="eyebrow rule-gold">Particuliers</p>
          <h1 className="mt-5 max-w-3xl text-[2rem] leading-[1.12] sm:text-5xl">
            Votre logement transformé, sans mauvaise surprise.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Une visite, un devis détaillé, un planning tenu et un interlocuteur unique du premier
            coup de crayon à la remise des clés. Vous suivez l'avancement, photos à l'appui.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl">
              <Link to="/contact" search={{ profil: "particulier" }}>
                Devis gratuit
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#renovation">Voir les prestations</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="renovation" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Rénovation"
          titre="Pièce par pièce, ou du sol au plafond."
          texte="Chaque prestation est chiffrée poste par poste : dépose, réseaux, supports, finitions. Rien n'est laissé en option cachée."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projetsParticuliers.map((p) => (
            <ProjetCard key={p.slug} projet={p} />
          ))}
        </div>
      </section>

      <section id="construction" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Construction maison individuelle"
            titre="Agrandir, construire, prolonger dehors."
            texte="Du dossier d'urbanisme au raccord avec l'existant, nous prenons en charge l'ensemble des lots."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projetsConstruction.map((p) => (
              <ProjetCard key={p.slug} projet={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Déroulé simplifié"
          titre="Ce qui se passe après votre message."
        />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Échange", d: "Nous rappelons sous 24 à 48h ouvrées pour cadrer le besoin." },
            { t: "Visite technique", d: "Relevé sur place, contraintes et faisabilité." },
            { t: "Devis détaillé", d: "Chiffrage par poste, matériaux et délais annoncés." },
            { t: "Chantier & réception", d: "Planning suivi, points d'avancement, levée des réserves." },
          ].map((s, i) => (
            <li key={s.t} className="border-t-2 border-primary/25 pt-5">
              <span className="font-display text-sm font-bold tracking-widest text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="pb-20">
        <CtaBand
          titre="Un projet à la maison ?"
          texte="Dites-nous la pièce, la surface et vos délais. Nous revenons vers vous avec un devis clair, gratuit et sans engagement."
          ctaLabel="Demander mon devis"
          profil="particulier"
        />
      </div>
    </>
  );
}
