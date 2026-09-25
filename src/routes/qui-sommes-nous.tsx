import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Wrench, Zap } from "lucide-react";

import {
  CtaBand,
  PhotoPlaceholder,
  RealisationsExemples,
  SectionHeading,
} from "@/components/site-sections";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous | WAG BTP, entreprise tous corps d'état" },
      {
        name: "description",
        content:
          "WAG BTP : une équipe cumulant plus de 25 ans d'expérience BTP, tous corps d'état, en France et en Guadeloupe. Des délais tenus et une intervention rapide.",
      },
      { property: "og:title", content: "Qui sommes-nous — WAG BTP" },
      {
        property: "og:description",
        content:
          "+ de 25 ans d'expérience BTP cumulés dans l'équipe, tous corps d'état, en France et en Guadeloupe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/qui-sommes-nous" },
    ],
    links: [{ rel: "canonical", href: "/qui-sommes-nous" }],
  }),
  component: QuiSommesNous,
});

const atouts = [
  { icon: Wrench, titre: "Métiers", valeur: "Tous corps d'état" },
  { icon: MapPin, titre: "Zones d'intervention", valeur: "France · Guadeloupe" },
  { icon: Clock, titre: "Point fort", valeur: "Des délais tenus" },
  { icon: Zap, titre: "Point fort", valeur: "Intervention rapide" },
];

function QuiSommesNous() {
  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <p className="eyebrow rule-gold">Qui sommes-nous</p>
            <h1 className="mt-6 text-[2.25rem] leading-[1.05] sm:text-[3.25rem]">
              + de 25 ans
              <br />
              <span className="text-primary">d'expérience BTP</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              + de 25 ans d'expérience BTP cumulés dans l'équipe.
            </p>
          </div>
          <PhotoPlaceholder label="Photo de l'équipe WAG BTP" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionHeading eyebrow="L'entreprise" titre="Notre équipe" />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <PhotoPlaceholder key={n} label={`Membre de l'équipe ${n}`} className="aspect-3/4" />
          ))}
        </div>

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map((a) => (
            <li key={a.valeur} className="bg-card p-6">
              <a.icon className="size-6 text-primary" aria-hidden="true" />
              <p className="mt-4 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {a.titre}
              </p>
              <p className="mt-2 text-lg text-card-foreground">{a.valeur}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-border">
        <RealisationsExemples />
      </div>

      <CtaBand
        titre="Parler de votre projet."
        texte="Décrivez-nous votre chantier en quelques lignes : nous revenons vers vous avec les bonnes questions, puis un devis clair."
      />
    </>
  );
}
