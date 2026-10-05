import { createFileRoute } from "@tanstack/react-router";
import { Award, Handshake, Leaf } from "lucide-react";

import willy from "@/assets/equipe-willy-merciris.svg";
import patrice from "@/assets/equipe-patrice-joab.svg";
import danzel from "@/assets/equipe-danzel-merciris.svg";
import helene from "@/assets/equipe-helene-bouchaut.svg";
import { CtaBand, RealisationsExemples, SectionHeading } from "@/components/site-sections";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous | WAG BTP, entreprise tous corps d'état" },
      {
        name: "description",
        content:
          "WAG BTP, entreprise générale de bâtiment tous corps d'état fondée en 2013, en France métropolitaine et en Guadeloupe. Notre histoire, notre organisation, notre équipe.",
      },
      { property: "og:title", content: "Qui sommes-nous — WAG BTP" },
      {
        property: "og:description",
        content:
          "Une entreprise générale de bâtiment tous corps d'état, structurée et engagée, qui accompagne les maîtres d'ouvrage publics et privés depuis 2013.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/qui-sommes-nous" },
    ],
    links: [{ rel: "canonical", href: "/qui-sommes-nous" }],
  }),
  component: QuiSommesNous,
});

const chiffres = [
  { valeur: "2013", libelle: "Année de création" },
  { valeur: "25+ ans", libelle: "d'expertise BTP" },
  { valeur: "France & Guadeloupe", libelle: "Une présence en métropole et aux Antilles" },
  { valeur: "TCE", libelle: "Tous corps d'état, du gros œuvre à la livraison" },
];

const metiers = [
  "Ingénieurs travaux",
  "Conducteurs de travaux",
  "Chefs de chantier",
  "Ferrailleurs",
  "Maçons",
  "Coffreurs / bancheurs",
  "Menuisiers",
  "Plombiers",
  "Peintres",
  "Techniciens",
  "Équipes logistiques",
];

const phases = [
  "Analyse et conception",
  "Études techniques",
  "Direction et pilotage des travaux",
  "Réalisation du gros œuvre",
  "Coordination jusqu'à la réception finale",
];

const equipe = [
  {
    nom: "Willy MERCIRIS",
    role: "Président",
    photo: willy,
    texte:
      "Fondateur de WAG-BTP en 2013, il définit la stratégie de l'entreprise et reste l'interlocuteur privilégié des maîtres d'ouvrage.",
  },
  {
    nom: "Patrice JOAB",
    role: "Directeur technique",
    photo: patrice,
    texte:
      "Ingénieur travaux fort de plus de 25 ans d'expérience, il pilote les études techniques et garantit la qualité d'exécution des ouvrages.",
  },
  {
    nom: "Danzel MERCIRIS",
    role: "Conducteur de travaux",
    photo: danzel,
    texte:
      "Sur le terrain au quotidien, il organise les chantiers, coordonne les équipes et veille au respect des délais et de la sécurité.",
  },
  {
    nom: "Hélène BOUCHAUT",
    role: "Assistante de direction",
    photo: helene,
    texte:
      "Elle assure la gestion administrative, RH et financière, ainsi que la préparation des devis et des réponses aux appels d'offres.",
  },
];

const valeurs = [
  {
    icon: Leaf,
    titre: "Éco-construction",
    texte:
      "Engagés dans la transition écologique, nous privilégions les matériaux responsables et une gestion optimisée des déchets de chantier.",
  },
  {
    icon: Award,
    titre: "Rigueur & qualité",
    texte:
      "Chaque chantier est planifié, piloté et contrôlé avec une organisation stricte et une transparence totale vis-à-vis du maître d'ouvrage.",
  },
  {
    icon: Handshake,
    titre: "Respect & engagement",
    texte:
      "Respect de nos clients, de nos équipes et des délais : nous tenons nos engagements, de la signature du marché jusqu'à la réception de l'ouvrage.",
  },
];

function QuiSommesNous() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <p className="eyebrow eyebrow-gold rule-gold">À propos de WAG-BTP</p>
          <h1 className="mt-6 text-[2.5rem] leading-[1.05] text-primary-foreground sm:text-[3.5rem]">
            Qui sommes-nous ?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            Une entreprise générale de bâtiment tous corps d'état, structurée et engagée, qui
            accompagne les maîtres d'ouvrage publics et privés depuis 2013.
          </p>
          <p className="mt-8 border-l-2 border-gold pl-4 font-display text-xl font-bold text-gold">
            « Votre vision, notre expertise chantier. »
          </p>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
        <div>
          <SectionHeading eyebrow="Notre histoire" titre="Construire durablement. Rénover avec maîtrise." />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Fondée en <strong className="text-foreground">2013</strong> par Willy{" "}
              <strong className="text-foreground">MERCIRIS</strong>, WAG-BTP est une entreprise
              générale de bâtiment tous corps d'état implantée en{" "}
              <strong className="text-foreground">France métropolitaine et en Guadeloupe.</strong>
            </p>
            <p>
              Depuis plus de 10 ans, nous accompagnons les maîtres d'ouvrage publics et privés dans
              la réalisation de leurs projets : logements, bâtiments publics, équipements
              techniques, projets tertiaires et réhabilitations lourdes.
            </p>
            <p>
              Forts d'une <strong className="text-foreground">expertise de plus de 25 ans dans le BTP</strong>,
              nous intervenons sur toutes les étapes d'un chantier : étude, ingénierie, conception,
              structure, direction de travaux et livraison finale.
            </p>
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-px self-start border border-border bg-border">
          {chiffres.map((c) => (
            <div key={c.valeur} className="bg-card p-6">
              <dt className="font-display text-2xl font-extrabold leading-tight text-primary">{c.valeur}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.libelle}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ORGANISATION */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="Notre organisation"
            titre="La force de compétences complémentaires"
            texte="Notre force réside dans la complémentarité de nos compétences internes. Cette organisation nous permet de maîtriser l'ensemble du processus constructif."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <ul className="flex flex-wrap content-start gap-2">
              {metiers.map((m) => (
                <li key={m} className="border border-border bg-card px-4 py-2 text-sm text-foreground">
                  {m}
                </li>
              ))}
            </ul>
            <ol className="space-y-4">
              {phases.map((p, i) => (
                <li key={p} className="flex items-baseline gap-4 border-t border-border pt-4">
                  <span className="font-display text-sm font-bold tracking-[0.18em] text-gold">
                    0{i + 1}
                  </span>
                  <span className="text-lg">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <SectionHeading
          eyebrow="Notre équipe"
          titre="Des femmes et des hommes au service de vos projets"
          texte="Une équipe de direction resserrée et disponible, qui suit chaque chantier de l'étude à la livraison."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipe.map((m) => (
            <li key={m.nom} className="border border-border bg-card p-6 text-center">
              <img
                src={m.photo}
                alt={m.role === "Président" ? `Portrait de ${m.nom}` : `Portrait — ${m.role}`}
                width={200}
                height={200}
                loading="lazy"
                className="mx-auto size-32"
              />
              {m.role === "Président" ? (
                <h3 className="mt-5 text-lg text-card-foreground">{m.nom}</h3>
              ) : null}
              <p className={`${m.role === "Président" ? "mt-1" : "mt-5"} font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary">
                {m.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.texte}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* VALEURS */}
      <section className="surface-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <SectionHeading eyebrow="Nos valeurs" titre="Ce qui guide chacun de nos chantiers" onDark />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {valeurs.map((v) => (
              <div key={v.titre} className="border-t border-anthracite-foreground/15 pt-6">
                <v.icon className="size-7 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-lg uppercase tracking-wide text-anthracite-foreground">
                  {v.titre}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-anthracite-foreground/70">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RealisationsExemples />

      <CtaBand
        titre="Garantir la qualité, la sécurité et la performance pour chaque ouvrage."
        texte="Un projet de construction ou de rénovation ? Parlons-en."
      />
    </>
  );
}
