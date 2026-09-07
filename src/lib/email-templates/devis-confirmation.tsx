import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import type { TemplateEntry } from "./registry";

interface DevisConfirmationProps {
  prenom?: string;
  typeProjet?: string;
  ville?: string;
  message?: string;
}

function DevisConfirmation({
  prenom = "",
  typeProjet = "votre projet",
  ville = "",
  message = "",
}: DevisConfirmationProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Nous avons bien reçu votre demande de devis — WAG BTP</Preview>
      <Body style={{ backgroundColor: "#FAFAF8", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "32px 24px" }}>
          <Text
            style={{
              margin: 0,
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#3B2BF4",
              fontWeight: 700,
            }}
          >
            WAG BTP
          </Text>
          <Heading
            style={{ margin: "16px 0 0", fontSize: "26px", lineHeight: 1.15, color: "#1C1C22" }}
          >
            Votre demande est bien arrivée.
          </Heading>
          <Text style={{ fontSize: "16px", lineHeight: 1.6, color: "#1C1C22" }}>
            {prenom ? `Bonjour ${prenom},` : "Bonjour,"}
          </Text>
          <Text style={{ fontSize: "16px", lineHeight: 1.6, color: "#1C1C22" }}>
            Merci pour votre demande concernant <strong>{typeProjet}</strong>
            {ville ? ` à ${ville}` : ""}. Nous l'avons bien reçue et nous revenons vers vous sous 24
            à 48 heures ouvrées avec les premières questions puis un devis clair et détaillé.
          </Text>
          <Hr style={{ borderColor: "#E5E4DE", margin: "24px 0" }} />
          {message ? (
            <Section>
              <Text
                style={{
                  margin: 0,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#6B6B73",
                  fontWeight: 700,
                }}
              >
                Récapitulatif de votre message
              </Text>
              <Text
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#42424A",
                  whiteSpace: "pre-line",
                }}
              >
                {message}
              </Text>
              <Hr style={{ borderColor: "#E5E4DE", margin: "24px 0" }} />
            </Section>
          ) : null}
          <Text style={{ fontSize: "14px", lineHeight: 1.6, color: "#6B6B73" }}>
            Une précision à ajouter ? Répondez simplement à cet e-mail.
          </Text>
          <Text style={{ fontSize: "13px", lineHeight: 1.6, color: "#6B6B73" }}>
            WAG BTP — Rénovation & construction · Île-de-France · Guadeloupe
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: DevisConfirmation,
  subject: "Nous avons bien reçu votre demande de devis — WAG BTP",
  displayName: "Accusé de réception — demande de devis",
  previewData: {
    prenom: "Camille",
    typeProjet: "Rénovation complète d'appartement",
    ville: "Paris 17e",
    message: "Bonjour, je souhaite rénover un appartement de 75 m² (cuisine, salle de bain).",
  },
} satisfies TemplateEntry;
