import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z
  .object({
    profil: z.enum(["particulier", "entreprise"]),
    prenom: z.string().trim().min(2, "Indiquez votre prénom.").max(60),
    nom: z.string().trim().min(2, "Indiquez votre nom.").max(80),
    societe: z.string().trim().max(120).optional(),
    email: z.string().trim().email("Adresse e-mail invalide.").max(160),
    telephone: z.string().trim().min(8, "Numéro trop court.").max(24, "Numéro trop long."),
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

const labelCls =
  "font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground";

function Contact() {
  const search = Route.useSearch();
  const [envoye, setEnvoye] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      profil: search.profil ?? "particulier",
      prenom: "",
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
  const envoyerDemande = useServerFn(submitDevisRequest);


  const onSubmit = async (values: FormValues) => {
    try {
      await envoyerDemande({
        data: {
          profil: values.profil,
          societe: values.societe || undefined,
          prenom: values.prenom,
          nom: values.nom,
          email: values.email,
          telephone: values.telephone,
          ville: values.ville,
          typeProjet: values.typeProjet,
          delai: values.delai || undefined,
          message: values.message,
        },
      });
      setEnvoye(true);
      toast.success("Demande envoyée. Un accusé de réception vient de vous être adressé.");
    } catch {
      toast.error(
        `Envoi impossible pour le moment. Écrivez-nous directement à ${company.email} ou appelez le ${company.phone}.`,
      );
    }
  };


  const infos = [
    { icon: MapPin, titre: "Zone d'intervention", valeur: "Île-de-France · Guadeloupe" },
    { icon: Phone, titre: "Téléphone", valeur: company.phone, href: company.phoneHref },
    { icon: Mail, titre: "E-mail", valeur: company.email, href: `mailto:${company.email}` },
    { icon: Clock, titre: "Délai de réponse", valeur: "Sous 24 à 48h ouvrées" },
  ];

  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-10">
        {/* Colonne informations */}
        <div>
          <p className="eyebrow rule-gold">Contact</p>
          <h1 className="mt-6 text-[2.25rem] leading-[1.02] sm:text-[3.25rem]">
            Parler de
            <br />
            votre projet.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Décrivez-nous votre chantier en quelques lignes. Nous revenons vers vous avec les bonnes
            questions, puis un devis clair.
          </p>

          <ul className="mt-10 space-y-5">
            {infos.map((info) => (
              <li key={info.titre} className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center bg-primary/10">
                  <info.icon className="size-4 text-primary" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold">{info.titre}</span>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="block break-words text-sm text-primary hover:underline"
                    >
                      {info.valeur}
                    </a>
                  ) : (
                    <span className="block text-sm text-muted-foreground">{info.valeur}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 border-l-2 border-gold bg-gold/10 p-5 text-sm leading-relaxed">
            <strong className="font-display font-bold">Engagement :</strong> «&nbsp;
            {company.delaiReponse}. Devis gratuit et sans engagement.&nbsp;»
          </p>
        </div>

        {/* Colonne formulaire */}
        <div className="border border-border bg-card p-6 sm:p-8 lg:p-10">
          {envoye ? (
            <div>
              <Check className="size-8 text-gold" aria-hidden="true" />
              <h2 className="mt-4 text-2xl">Demande enregistrée</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Votre messagerie s'est ouverte avec le récapitulatif du projet : il ne reste qu'à
                envoyer. Si rien ne s'est ouvert, écrivez-nous directement à{" "}
                <a className="font-medium text-primary underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>{" "}
                ou appelez le{" "}
                <a className="font-medium text-primary underline" href={company.phoneHref}>
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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="profil"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div
                          role="radiogroup"
                          aria-label="Vous êtes"
                          className="grid grid-cols-2 border border-border"
                        >
                          {(
                            [
                              ["particulier", "Particulier"],
                              ["entreprise", "Professionnel"],
                            ] as const
                          ).map(([value, label]) => (
                            <button
                              key={value}
                              type="button"
                              role="radio"
                              aria-checked={field.value === value}
                              onClick={() => field.onChange(value)}
                              className={`min-h-12 cursor-pointer font-display text-sm font-bold transition-colors ${
                                field.value === value
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-card text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="prenom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelCls}>Prénom</FormLabel>
                        <FormControl>
                          <Input autoComplete="given-name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelCls}>Nom</FormLabel>
                        <FormControl>
                          <Input autoComplete="family-name" {...field} />
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
                        <FormItem className="sm:col-span-2">
                          <FormLabel className={labelCls}>Société</FormLabel>
                          <FormControl>
                            <Input autoComplete="organization" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelCls}>Téléphone</FormLabel>
                        <FormControl>
                          <Input type="tel" autoComplete="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelCls}>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" autoComplete="email" {...field} />
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
                        <FormLabel className={labelCls}>Ville ou code postal</FormLabel>
                        <FormControl>
                          <Input placeholder="92600 Asnières-sur-Seine" {...field} />
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
                        <FormLabel className={labelCls}>
                          {profil === "entreprise" ? "Nature de l'intervention" : "Type de projet"}
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
                      <FormItem className="sm:col-span-2">
                        <FormLabel className={labelCls}>Délai souhaité (optionnel)</FormLabel>
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
                      <FormLabel className={labelCls}>Votre projet</FormLabel>
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

                <Button
                  type="submit"
                  size="xl"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
                </Button>

              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
