import logoAsset from "@/assets/logo_wagbtp.png.asset.json";
import heroAsset from "@/assets/hero-chantier.jpg.asset.json";
import logementsAsset from "@/assets/real-logements.jpg.asset.json";
import publicAsset from "@/assets/real-public.jpg.asset.json";
import maisonAsset from "@/assets/real-maison.jpg.asset.json";
import cuisineAvantAsset from "@/assets/cuisine_avant.jpg.asset.json";
import cuisineApresAsset from "@/assets/cuisine_apres.jpg.asset.json";
import sdbAvantAsset from "@/assets/sdb-avant.jpg.asset.json";
import sdbApresAsset from "@/assets/sdb-apres.jpg.asset.json";
import sejourAsset from "@/assets/sejour.jpg.asset.json";
import extensionAsset from "@/assets/extension.jpg.asset.json";
import bureauxAsset from "@/assets/bureaux.jpg.asset.json";
import coproAsset from "@/assets/copropriete.jpg.asset.json";
import localProAsset from "@/assets/local-pro.jpg.asset.json";

export const img = {
  logo: logoAsset.url,
  hero: heroAsset.url,
  logements: logementsAsset.url,
  public: publicAsset.url,
  maison: maisonAsset.url,
  cuisineAvant: cuisineAvantAsset.url,
  cuisineApres: cuisineApresAsset.url,
  sdbAvant: sdbAvantAsset.url,
  sdbApres: sdbApresAsset.url,
  sejour: sejourAsset.url,
  extension: extensionAsset.url,
  bureaux: bureauxAsset.url,
  copropriete: coproAsset.url,
  localPro: localProAsset.url,
};

export const company = {
  name: "WAG BTP",
  tagline: "Votre vision, notre expertise chantier",
  promesse:
    "WAG BTP pilote vos travaux tous corps d'état, de la rénovation à la construction, avec un interlocuteur unique et un suivi de chantier visible.",
  phone: "06 82 75 80 37",
  phoneHref: "tel:+33682758037",
  email: "wagbtp@gmail.com",
  president: "Willy Merciris, Président",
  address: "Tours d'Asnières Hall A, 4 Avenue Laurent Cély, 92600 Asnières-sur-Seine",
  zones: "Île-de-France (92, 75, 93, 94, 78, 91, 95, 77) et Guadeloupe",
  delaiReponse: "Réponse sous 24 à 48h ouvrées",
  depuis: "2013",
};

export const valeurs = [
  {
    titre: "Co-construction",
    texte: "Des solutions sur-mesure élaborées avec le maître d'ouvrage, à chaque étape.",
  },
  {
    titre: "Éco-construction",
    texte: "Matériaux responsables et gestion rigoureuse des déchets de chantier.",
  },
  {
    titre: "Innovation",
    texte: "Outils numériques, BIM et suivi digital de chantier partagé avec le client.",
  },
  {
    titre: "Rigueur & qualité",
    texte: "Organisation stricte, planning tenu, transparence totale sur l'avancement.",
  },
];

export const chiffres = [
  { valeur: "2013", libelle: "Entreprise fondée par Willy Merciris" },
  { valeur: "25 ans+", libelle: "D'expérience BTP cumulée dans l'équipe" },
  { valeur: "2", libelle: "Territoires : Île-de-France et Guadeloupe" },
  { valeur: "Tous", libelle: "Corps d'état pilotés en interne" },
];

export const methode = [
  { etape: "01", titre: "Visite", texte: "Rendez-vous sur site, relevé et écoute de votre besoin." },
  { etape: "02", titre: "Devis", texte: "Chiffrage détaillé, poste par poste, sans zone d'ombre." },
  { etape: "03", titre: "Planning", texte: "Calendrier des corps d'état et date de réception fixée." },
  { etape: "04", titre: "Chantier suivi", texte: "Un interlocuteur unique, des points d'avancement documentés." },
  { etape: "05", titre: "Réception", texte: "Levée des réserves, remise des clés et garanties." },
];

export const realisationsPhares = [
  {
    image: img.logements,
    alt: "Résidence de logements collectifs rénovée en Île-de-France",
    cible: "Entreprises",
    projet: "Résidence de 48 logements, Hauts-de-Seine",
    resultat: "Reprise des parties communes et ravalement en site occupé, en 4 mois.",
  },
  {
    image: img.public,
    alt: "Couloir d'établissement scolaire entièrement rénové",
    cible: "Entreprises",
    projet: "Groupe scolaire, Val-de-Marne",
    resultat: "Sols, peintures, menuiseries et électricité repris pendant les vacances scolaires.",
  },
  {
    image: img.maison,
    alt: "Maison individuelle avec extension et terrasse en bois",
    cible: "Particuliers",
    projet: "Maison individuelle, Asnières-sur-Seine",
    resultat: "Extension, terrasse bois et rénovation complète, livrées clé en main.",
  },
];

export const projetsParticuliers = [
  {
    slug: "salle-de-bain",
    titre: "Salle de bain",
    texte:
      "Dépose complète, reprise de la plomberie et de l'électricité, étanchéité, carrelage et pose des équipements.",
    inclus: ["Plomberie et évacuations", "Étanchéité et carrelage", "Électricité et ventilation", "Pose des sanitaires"],
    avant: img.sdbAvant,
    apres: img.sdbApres,
  },
  {
    slug: "cuisine",
    titre: "Cuisine",
    texte:
      "De la conception à la réalisation : implantation, réseaux, revêtements, pose du mobilier et des plans de travail.",
    inclus: ["Plan d'implantation", "Réseaux eau / élec / gaz", "Revêtements sols et murs", "Pose mobilier et électroménager"],
    avant: img.cuisineAvant,
    apres: img.cuisineApres,
  },
  {
    slug: "sejour",
    titre: "Séjour",
    texte:
      "Ouverture de mur porteur, isolation, plâtrerie, sols et peinture pour une pièce de vie plus lumineuse.",
    inclus: ["Étude structure si ouverture", "Isolation et plâtrerie", "Parquet ou carrelage", "Peinture et éclairage"],
    apres: img.sejour,
  },
  {
    slug: "renovation-complete",
    titre: "Rénovation complète",
    texte:
      "Tous corps d'état coordonnés par un interlocuteur unique, du diagnostic à la réception de l'appartement ou de la maison.",
    inclus: ["Diagnostic et plans", "Tous corps d'état", "Planning et suivi hebdomadaire", "Réception et garanties"],
    apres: img.logements,
  },
];

export const projetsConstruction = [
  {
    slug: "construction-neuve",
    titre: "Construction neuve",
    texte: "Maison individuelle du terrassement à la remise des clés, avec suivi administratif.",
    inclus: ["Fondations et gros œuvre", "Charpente et couverture", "Second œuvre complet", "Raccordements et finitions"],
    apres: img.maison,
  },
  {
    slug: "extension",
    titre: "Extension",
    texte: "Agrandissement maçonné ou ossature, raccordé proprement à l'existant.",
    inclus: ["Dossier d'urbanisme", "Gros œuvre et toiture", "Isolation et menuiseries", "Raccord à l'existant"],
    apres: img.extension,
  },
  {
    slug: "terrasse",
    titre: "Terrasse",
    texte: "Terrasse bois, composite ou carrelée sur plots, avec évacuation des eaux.",
    inclus: ["Préparation du support", "Structure et plots", "Pose du platelage", "Garde-corps et finitions"],
    apres: img.extension,
  },
];

export const offresEntreprises = [
  {
    slug: "parc-immobilier",
    titre: "Parcs immobiliers",
    sousTitre: "Résidences, copropriétés, bailleurs",
    texte:
      "Rénovation des parties communes, ravalement, remise en état de logements entre deux locataires. Interventions en site occupé, avec information des résidents et respect des horaires.",
    points: ["Planning par cage d'escalier", "Site occupé et voisinage géré", "Reporting photo hebdomadaire"],
    image: img.copropriete,
    alt: "Chantier de ravalement sur une copropriété en site occupé",
  },
  {
    slug: "bureaux",
    titre: "Bureaux",
    sousTitre: "Plateaux tertiaires, sièges, espaces d'accueil",
    texte:
      "Aménagement et rénovation de plateaux : cloisonnement, faux plafonds, sols souples, électricité et CVC. Travaux possibles en horaires décalés pour ne pas interrompre l'activité.",
    points: ["Travaux en horaires décalés", "Coordination des corps d'état", "Livraison par zones"],
    image: img.bureaux,
    alt: "Plateau de bureaux rénové avec faux plafond et cloisons vitrées",
  },
  {
    slug: "locaux-professionnels",
    titre: "Locaux professionnels & commerces",
    sousTitre: "Boutiques, cabinets, locaux d'activité",
    texte:
      "Création et remise en état de locaux commerciaux : vitrines, agencement, mise aux normes accessibilité et sécurité, finitions soignées avant ouverture.",
    points: ["Mise aux normes ERP", "Délais courts avant ouverture", "Un seul interlocuteur"],
    image: img.localPro,
    alt: "Local commercial en cours d'aménagement avec vitrine",
  },
];

export const engagementsPro = [
  {
    titre: "Interlocuteur unique",
    texte: "Un conducteur de travaux référent pour l'ensemble des lots et des sites.",
  },
  {
    titre: "Pilotage multi-sites",
    texte: "Plusieurs adresses menées en parallèle avec un planning consolidé.",
  },
  {
    titre: "Reporting",
    texte: "Compte-rendu d'avancement, photos et levée des réserves tracées.",
  },
  {
    titre: "Site occupé",
    texte: "Protections, propreté quotidienne et sécurité des usagers pendant les travaux.",
  },
];
