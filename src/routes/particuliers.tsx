import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BeforeAfter, CtaBand, SectionHeading } from "@/components/site-sections";
import {
  appartementHaussmannien,
  img,
  pavillonThiais,
  projetsConstruction,
  projetsParticuliers,
} from "@/lib/site-data";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    apres: string;
  };
}) {
  return (
    <article id={projet.slug} className="flex flex-col border border-border bg-card">
      <BeforeAfter avant={projet.avant} apres={projet.apres} titre={projet.titre} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl text-card-foreground">{projet.titre}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{projet.texte}</p>
        <p className="mt-7 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary">
          Ce qui est inclus
        </p>
        <ul className="mt-4 flex-1 space-y-2.5">
          {projet.inclus.map((i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
              {i}
            </li>
          ))}
        </ul>
        <Button asChild size="xl" className="mt-7 w-full">
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
      {/* HERO — texte / visuel avec pastille or */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <p className="eyebrow rule-gold">Particuliers</p>
            <h1 className="mt-6 text-[2.25rem] leading-[1.02] sm:text-[3.25rem]">
              Votre chez-vous,
              <br />
              <span className="text-primary">notre chantier.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Chaque prestation est chiffrée poste par poste : dépose, réseaux, supports, finitions.
              Rien n'est laissé en option cachée.
            </p>
            <Button asChild size="xl" className="mt-8">
              <Link to="/contact" search={{ profil: "particulier" }}>
                Demander un devis gratuit
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <figure className="relative">
            <img
              src={img.particuliersHero}
              alt="Pavillon avec piscine et terrasse réalisé par WAG BTP"
              width={1200}
              height={900}
              className="aspect-4/3 w-full bg-muted object-cover"
            />
            <figcaption className="absolute -bottom-4 left-0 bg-gold px-5 py-3 sm:-left-6">
              <span className="block font-display text-lg font-extrabold text-gold-foreground">
                Clé en main
              </span>
              <span className="block text-xs text-gold-foreground/75">
                De l'étude à la réception
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PRESTATIONS RENOVATION */}
      <section id="renovation" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionHeading eyebrow="Prestations" titre="Ce que nous réalisons." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projetsParticuliers.map((p) => (
            <ProjetCard key={p.slug} projet={p} />
          ))}
        </div>
      </section>

      {/* CONSTRUCTION */}
      <section id="construction" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Construction maison individuelle"
            titre="Agrandir, construire, prolonger dehors."
            texte="Du dossier d'urbanisme au raccord avec l'existant, nous prenons en charge l'ensemble des lots."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projetsConstruction.map((p) => (
              <ProjetCard key={p.slug} projet={p} />
            ))}
          </div>
        </div>
      </section>

      {/* REALISATIONS — PAVILLON THIAIS */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Réalisation · Thiais"
            titre={pavillonThiais.titre}
            texte={pavillonThiais.resume}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-[1.35fr_0.65fr_0.65fr]">
            {pavillonThiais.galerie.map((photo, index) => (
              <figure key={photo.image} className="group relative overflow-hidden bg-muted">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  width={index === 0 ? 1400 : 900}
                  height={1200}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                    index === 0 ? "aspect-4/3 sm:col-span-2 lg:col-span-1" : "aspect-4/3 lg:aspect-auto lg:h-full"
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-anthracite/85 px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-anthracite-foreground">
                  {photo.legende}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* AVANT / APRES — APPARTEMENT HAUSSMANNIEN */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 lg:px-10">
        <SectionHeading
          eyebrow="Avant / après · Paris"
          titre={appartementHaussmannien.titre}
          texte={appartementHaussmannien.resume}
        />
        <div className="overflow-hidden border border-border bg-card">
          <BeforeAfter
            avant={appartementHaussmannien.avant}
            apres={appartementHaussmannien.apres}
            titre={appartementHaussmannien.titre}
          />
        </div>
      </section>

      {/* DEROULE */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeading eyebrow="Déroulé simplifié" titre="Ce qui se passe après votre message." />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Échange", d: "Nous rappelons sous 24 à 48h ouvrées pour cadrer le besoin." },
            { t: "Visite technique", d: "Relevé sur place, contraintes et faisabilité." },
            { t: "Devis détaillé", d: "Chiffrage par poste, matériaux et délais annoncés." },
            { t: "Chantier & réception", d: "Planning suivi, points d'avancement, levée des réserves." },
          ].map((s, i) => (
            <li key={s.t} className="border-t border-border pt-6">
              <span className="font-display text-sm font-bold tracking-[0.18em] text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
          </ol>
        </div>
      </section>

      <CtaBand
        titre="Un projet à la maison ?"
        texte="Dites-nous la pièce, la surface et vos délais. Nous revenons vers vous avec un devis clair, gratuit et sans engagement."
        ctaLabel="Demander mon devis"
        profil="particulier"
      />
    </>
  );
}
