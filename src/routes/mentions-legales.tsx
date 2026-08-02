import { createFileRoute } from "@tanstack/react-router";

import { company } from "@/lib/site-data";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | WAG BTP" },
      {
        name: "description",
        content:
          "Mentions légales du site WAG BTP : éditeur, hébergement, propriété intellectuelle et traitement des données personnelles.",
      },
      { property: "og:title", content: "Mentions légales | WAG BTP" },
      {
        property: "og:description",
        content: "Informations légales relatives au site vitrine de WAG BTP.",
      },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow rule-gold">Informations légales</p>
      <h1 className="mt-5 text-4xl leading-tight">Mentions légales</h1>

      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl text-foreground">Éditeur du site</h2>
          <p className="mt-3">
            {company.name} — entreprise générale de bâtiment tous corps d'état, en activité depuis{" "}
            {company.depuis}. Zones d'intervention : {company.zones}.
            <br />
            Téléphone : {company.phone} — E-mail : {company.email}
          </p>
          <p className="mt-3">
            Les informations d'immatriculation (SIRET, forme juridique, siège social, TVA
            intracommunautaire, assurances décennale et responsabilité civile professionnelle)
            doivent être complétées par l'entreprise avant la mise en ligne définitive.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Hébergement</h2>
          <p className="mt-3">
            Le site est hébergé par son prestataire d'hébergement web. Les coordonnées complètes de
            l'hébergeur sont disponibles sur simple demande à {company.email}.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Propriété intellectuelle</h2>
          <p className="mt-3">
            L'ensemble des contenus du site (textes, photographies de chantiers, logo, éléments
            graphiques) est protégé. Toute reproduction, même partielle, est interdite sans
            autorisation écrite préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Données personnelles</h2>
          <p className="mt-3">
            Les informations transmises via le formulaire de contact sont utilisées uniquement pour
            répondre à votre demande de devis. Elles ne sont ni vendues ni cédées à des tiers.
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données en écrivant à {company.email}.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Cookies</h2>
          <p className="mt-3">
            Ce site ne dépose aucun cookie publicitaire ni traceur de mesure d'audience tiers. Seuls
            les mécanismes techniques strictement nécessaires à l'affichage des pages sont utilisés.
          </p>
        </section>
      </div>
    </article>
  );
}
