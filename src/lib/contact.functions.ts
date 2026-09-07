import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const payloadSchema = z.object({
  profil: z.enum(["particulier", "entreprise"]),
  societe: z.string().max(120).optional(),
  prenom: z.string().min(1).max(80),
  nom: z.string().min(1).max(80),
  email: z.string().email().max(160),
  telephone: z.string().min(6).max(30),
  ville: z.string().min(1).max(120),
  typeProjet: z.string().min(1).max(160),
  delai: z.string().max(120).optional(),
  message: z.string().min(10).max(4000),
});

export type ContactPayload = z.infer<typeof payloadSchema>;

// Simple in-memory rate limit: 5 submissions per email per hour.
const recent = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function tooMany(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

export const submitDevisRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => payloadSchema.parse(data))
  .handler(async ({ data }) => {
    const email = data.email.trim().toLowerCase();
    if (tooMany(email)) {
      throw new Error("Trop de demandes envoyées. Merci de réessayer plus tard.");
    }

    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    const submissionId = `${email}-${Date.now()}`;
    const templateData = { ...data, email };

    // Notification interne — l'échec doit remonter à l'utilisateur.
    await sendTemplateEmail("devis-notification", email, {
      templateData,
      idempotencyKey: `devis-notification-${submissionId}`,
      replyTo: email,
    });

    // Accusé de réception au demandeur.
    try {
      await sendTemplateEmail("devis-confirmation", email, {
        templateData,
        idempotencyKey: `devis-confirmation-${submissionId}`,
      });
    } catch (error) {
      console.error("Accusé de réception non envoyé", error);
    }

    return { ok: true as const };
  });
