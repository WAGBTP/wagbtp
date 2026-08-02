import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/site-data";

type Profil = "particulier" | "entreprise";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => {
    const profil = search["profil"];
    const projet = search["projet"];
    return {
      ...(profil === "particulier" || profil === "entreprise"
        ? { profil: profil as Profil }
        : {}),
      ...(typeof projet === "string" && projet ? { projet } : {}),
    };
  },
  head: () => ({
    meta: [
      { title: "Contact & devis gratuit | WAG BTP" },
      {
        name: "description",
        content:
          "Décrivez votre projet de rénovation ou de construction : WAG BTP vous répond sous 24 à 48h ouvrées. Téléphone, e-mail et formulaire de devis gratuit.",
      },
      { property: "og:title", content: "Contact — Devis gratuit | WAG BTP" },
      {
        property: "og:description",
        content:
          "Particulier ou entreprise : un formulaire adapté à votre profil et une réponse sous 24 à 48h ouvrées.",
      },
    ],
  }),
  component: Contact,
});

const schema = z
  .object({
    profil: z.enum(["particulier", "entreprise"]),
    nom: z.string().trim().min(2, "Indiquez votre nom.").max(80),
    societe: z.string().trim().max(120).optional(),
    email: z.string().trim().email("Adresse e-mail invalide.").max(160),
    telephone: z
      .string()
      .trim()
      .min(8, "Numéro trop court.")
      .max(24, "Numéro trop long."),
    ville: z.string().trim().min(2, "Indiquez la ville ou le code postal.").max(80),
    typeProjet: z.string().trim().min(2, "Précisez le type de projet.").max(120),
    delai: z.string().trim().max(80).optional(),
    message: z
      .string()
      .trim()
      .min(20, "Décrivez le projet en 20 caractères minimum.")
      .max(2000),
    consentement: z.literal(true, {
      errorMap: () => ({ message: "Merci d'accepter l'utilisation de vos données." }),
    }),
  })
  .refine((v) => v.profil !== "entreprise" || (v.societe && v.societe.length >= 2), {
    message: "Indiquez le nom de la société.",
    path: ["societe"],
  });

type FormValues = z.input<typeof schema>;

function Contact() {
  const search = Route.useSearch();
  const [envoye, setEnvoye] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      profil: search.profil ?? "particulier",
      nom: "",
      societe: "",
      email: "",
      telephone: "",
      ville: "",
      typeProjet: search.projet ? search.projet.replace(/-/g, " ") : "",
      delai: "",
      message: "",
      consentement: false as unknown as true,
    },
  });

  const profil = form.watch("profil");

  const onSubmit = (values: FormValues) => {
    const corps = [
      `Profil : ${values.profil}`,
      values.societe ? `Société : ${values.societe}` : null,
      `Nom : ${values.nom}`,
      `E-mail : ${values.email}`,
      `Téléphone : ${values.telephone}`,
      `Ville / code postal : ${values.ville}`,
      `Type de projet : ${values.typeProjet}`,
      values.delai ? `Délai souhaité : ${values.delai}` : null,
      "",
      values.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Demande ${values.profil} — ${values.typeProjet}`,
    )}&body=${encodeURIComponent(corps)}`;

    setEnvoye(true);
    toast.success("Votre demande est prête à être envoyée depuis votre messagerie.");
  };

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <p className="eyebrow rule-gold">Contact</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
            Parlons de votre chantier.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Devis gratuit et sans engagement. Nous revenons vers vous sous 24 à 48h ouvrées avec les
            bonnes questions.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div>
          {envoye ? (
            <div className="rounded-md border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <Check className="size-8 text-gold" aria-hidden="true" />
              <h2 className="mt-4 text-2xl">Demande enregistrée</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Votre messagerie s'est ouverte avec le récapitulatif du projet : il ne reste qu'à
                envoyer. Si rien ne s'est ouvert, écrivez-nous directement à{" "}
                <a className="font-medium text-primary underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>{" "}
                ou appelez le{" "}
                <a
                  className="font-medium text-primary underline"
                  href={`tel:${company.phoneHref}`}
                >
                  {company.phone}
                </a>
                .
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setEnvoye(false);
                  form.reset();
                }}
              >
                Envoyer une autre demande
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                <FormField
                  control={form.control}
                  name="profil"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vous êtes</FormLabel>
                      <FormControl>
                        <RadioGroup
                          value={field.value}
                          onValueChange={field.onChange}
                          className="grid gap-3 sm:grid-cols-2"
                        >
                          {(
                            [
                              ["particulier", "Un particulier"],
                              ["entreprise", "Une entreprise / un gestionnaire"],
                            ] as const
                          ).map(([value, label]) => (
                            <FormLabel
                              key={value}
                              className="flex cursor-pointer items-center gap-3 rounded-md border border-input bg-card p-4 font-normal has-[button[data-state=checked]]:border-primary has-[button[data-state=checked]]:bg-primary/5"
                            >
                              <RadioGroupItem value={value} />
                              {label}
                            </FormLabel>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom et prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Marie Dupont" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {profil === "entreprise" && (
                    <FormField
                      control={form.control}
                      name="societe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Société</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nom de la structure"
                              autoComplete="organization"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="vous@exemple.fr"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="06 12 34 56 78"
                            autoComplete="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ville"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ville ou code postal du chantier</FormLabel>
                        <FormControl>
                          <Input placeholder="93200 Saint-Denis" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="typeProjet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {profil === "entreprise"
                            ? "Nature de l'intervention"
                            : "Type de projet"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              profil === "entreprise"
                                ? "Rénovation de plateau de bureaux"
                                : "Rénovation salle de bain"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="delai"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Délai souhaité (optionnel)</FormLabel>
                        <FormControl>
                          <Input placeholder="Dès que possible / 3 mois" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre projet</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder={
                            profil === "entreprise"
                              ? "Périmètre, nombre de sites, contraintes d'exploitation, échéances…"
                              : "Surface, pièces concernées, état actuel, budget envisagé…"
                          }
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Plus le descriptif est précis, plus le devis sera juste.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consentement"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value === true}
                            onCheckedChange={(v) => field.onChange(v === true)}
                          />
                        </FormControl>
                        <FormLabel className="font-normal leading-relaxed text-muted-foreground">
                          J'accepte que mes informations soient utilisées pour être recontacté au
                          sujet de ma demande. Aucune donnée n'est cédée à un tiers.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="xl">
                  Envoyer ma demande
                </Button>
              </form>
            </Form>
          )}
        </div>

        <aside className="space-y-8 lg:border-l lg:border-border lg:pl-10">
          <div>
            <p className="eyebrow rule-gold">Coordonnées</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <a className="hover:text-primary" href={`tel:${company.phoneHref}`}>
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <a className="break-all hover:text-primary" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{company.zones}</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Réponse sous 24 à 48h ouvrées</span>
              </li>
            </ul>
          </div>
          <div className="rounded-md border border-border bg-secondary p-6">
            <h2 className="font-display text-base font-bold uppercase tracking-wide">
              Urgence chantier ?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Pour une fuite, un sinistre ou une mise en sécurité, appelez-nous directement : le
              téléphone reste le canal le plus rapide.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
