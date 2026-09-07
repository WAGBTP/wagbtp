import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from "@react-email/components";

import { company } from "@/lib/site-data";

import type { TemplateEntry } from "./registry";

interface DevisNotificationProps {
  profil?: string;
  societe?: string;
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  ville?: string;
  typeProjet?: string;
  delai?: string;
  message?: string;
}

function ligne(label: string, valeur?: string) {
  if (!valeur) return null;
  return (
    <Text style={{ margin: "0 0 6px", fontSize: "15px", lineHeight: 1.5, color: "#1C1C22" }}>
      <strong>{label} :</strong> {valeur}
    </Text>
  );
}

function DevisNotification({
  profil = "",
  societe = "",
  prenom = "",
  nom = "",
  email = "",
  telephone = "",
  ville = "",
  typeProjet = "",
  delai = "",
  message = "",
}: DevisNotificationProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>{`Nouvelle demande ${profil} — ${typeProjet}`}</Preview>
      <Body style={{ backgroundColor: "#FAFAF8", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "32px 24px" }}>
          <Heading style={{ margin: 0, fontSize: "22px", color: "#1C1C22" }}>
            Nouvelle demande de devis
          </Heading>
          <Hr style={{ borderColor: "#E5E4DE", margin: "20px 0" }} />
          {ligne("Profil", profil)}
          {ligne("Société", societe)}
          {ligne("Nom", `${prenom} ${nom}`.trim())}
          {ligne("E-mail", email)}
          {ligne("Téléphone", telephone)}
          {ligne("Ville / code postal", ville)}
          {ligne("Type de projet", typeProjet)}
          {ligne("Délai souhaité", delai)}
          <Hr style={{ borderColor: "#E5E4DE", margin: "20px 0" }} />
          <Text
            style={{ fontSize: "15px", lineHeight: 1.6, color: "#42424A", whiteSpace: "pre-line" }}
          >
            {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: DevisNotification,
  subject: (data: Record<string, unknown>) =>
    `Nouvelle demande ${String(data["profil"] ?? "")} — ${String(data["typeProjet"] ?? "devis")}`,
  displayName: "Notification interne — demande de devis",
  to: company.email,
  previewData: {
    profil: "particulier",
    prenom: "Camille",
    nom: "Durand",
    email: "camille.durand@example.com",
    telephone: "06 12 34 56 78",
    ville: "75017 Paris",
    typeProjet: "Rénovation complète d'appartement",
    delai: "Sous 3 mois",
    message: "Appartement de 75 m², cuisine et salle de bain à refaire.",
  },
} satisfies TemplateEntry;
