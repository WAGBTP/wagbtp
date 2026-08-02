import { createFileRoute } from "@tanstack/react-router";

import { company } from "@/lib/site-data";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | WAG BTP" },
      {
        name: "description",
        content:
          "Politique de confidentialité de WAG BTP : données collectées via le formulaire de devis, finalités, durée de conservation et exercice de vos droits RGPD.",
      },
      { property: "og:title", content: "Politique de confidentialité | WAG BTP" },
      {
        property: "og:description",
        content:
          "Comment WAG BTP collecte, utilise et conserve les données transmises par les visiteurs du site.",
      },
    ],
  }),
  component: Confidentialite,
});

function Confidentialite() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow rule-gold">RGPD</p>
      <h1 className="mt-5 text-4xl leading-tight">Politique de confidentialité</h1>

      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl text-foreground">Responsable du traitement</h2>
          <p className="mt-3">
            {company.name}, {company.address}. Contact : {company.email} — {company.phone}.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Données collectées</h2>
          <p className="mt-3">
            Via le formulaire de contact : profil (particulier ou entreprise), nom, société le cas
            échéant, e-mail, téléphone, ville ou code postal du chantier, nature du projet, délai
            souhaité et description libre du besoin.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Finalité et base légale</h2>
          <p className="mt-3">
            Ces données servent exclusivement à étudier votre demande, vous recontacter et établir
            un devis. La base légale est votre consentement, recueilli par la case à cocher du
            formulaire, ainsi que l'intérêt légitime lié à la relation précontractuelle.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Destinataires et sous-traitants</h2>
          <p className="mt-3">
            Les demandes sont traitées en interne par l'équipe WAG BTP. Aucune donnée n'est vendue,
            louée ou transmise à des fins publicitaires. Seuls les prestataires techniques
            strictement nécessaires (messagerie, hébergement) peuvent y accéder.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Durée de conservation</h2>
          <p className="mt-3">
            Les demandes sans suite sont conservées 12 mois maximum. Les données liées à un chantier
            réalisé sont conservées pendant la durée légale applicable aux garanties et obligations
            comptables.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Vos droits</h2>
          <p className="mt-3">
            Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et
            d'opposition. Pour l'exercer, écrivez à {company.email} : une réponse vous sera apportée
            dans un délai d'un mois. Vous pouvez également saisir la CNIL.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-foreground">Cookies et mesure d'audience</h2>
          <p className="mt-3">
            Le site ne dépose ni cookie publicitaire ni traceur tiers. Aucun profilage n'est réalisé
            sur les visiteurs.
          </p>
        </section>
      </div>
    </article>
  );
}
