import logoAsset from "@/assets/logo_wagbtp.png";
import accueilHeroAsset from "@/assets/wag1.png";
import cantineMontmirailApresAsset from "@/assets/facade-cantine-montmirail-renovee.jpg";
import cantineMontmirailAvantAsset from "@/assets/cantine-montmirail-avant.png";
import gendarmerieAvantAsset from "@/assets/gendarmerie-avant.jpg";
import gendarmerieApresAsset from "@/assets/gendarmerie-apres.jpg";
import gendarmerieGrosOeuvreAsset from "@/assets/gendarmerie-gros-oeuvre.jpg";
import gendarmerieInterieurAsset from "@/assets/gendarmerie-interieur.jpg";
import gendarmerieEntreeAsset from "@/assets/gendarmerie-entree.png";
import gendarmerieVrdAsset from "@/assets/gendarmerie-vrd.jpg";
import wag2Asset from "@/assets/wag2.png";
import pavillonThiaisCuisineAsset from "@/assets/pavillon-thiais-cuisine-interieur.jpg";
import pavillonThiaisEscalierAsset from "@/assets/pavillon-thiais-escalier.jpg";
import pavillonThiaisFacadeAsset from "@/assets/pavillon-thiais-facade.jpg";
import haussmannienDaruAvantAsset from "@/assets/haussmannien-daru-avant.jpg";
import haussmannienDaruApresAsset from "@/assets/haussmannien-daru-apres.jpg";
import daruCouloirRenoveAsset from "@/assets/daru-couloir-renove.jpg";
import daruParquetCouloirAsset from "@/assets/daru-parquet-couloir.jpg";
import soignollesApresAsset from "@/assets/soignolles-apres.jpg";
import soignollesCharpenteAsset from "@/assets/soignolles-charpente.jpg";
import soignollesCouvertureAsset from "@/assets/soignolles-couverture.jpg";
import soignollesGrosOeuvreAsset from "@/assets/soignolles-gros-oeuvre.jpg";
import localProPiecePierreAsset from "@/assets/local-pro-piece-pierre.jpg";
import localProCouloirAsset from "@/assets/local-pro-couloir.jpg";
import localProReserveAsset from "@/assets/local-pro-reserve.jpg";
import localProFacadeCourAsset from "@/assets/local-pro-facade-cour.jpg";
import localProPlateauCarreleAsset from "@/assets/local-pro-plateau-carrele.jpg";
import localProSalleCarreleeAsset from "@/assets/local-pro-salle-carrelee.jpg";

export const img = {
  logo: logoAsset,
  hero: accueilHeroAsset,
  particuliersHero: wag2Asset,
  entreprisesHero: localProFacadeCourAsset,
  cantineMontmirailAvant: cantineMontmirailAvantAsset,
  cantineMontmirailApres: cantineMontmirailApresAsset,
  gendarmerieAvant: gendarmerieAvantAsset,
  gendarmerieApres: gendarmerieApresAsset,
};


export const pavillonThiais = {
  titre: "Pavillon Thiais",
  resume: "Rénovation d'un pavillon à Thiais, des espaces intérieurs jusqu'à la façade.",
  galerie: [
    {
      image: pavillonThiaisCuisineAsset,
      alt: "Cuisine rénovée avec îlot central dans le pavillon de Thiais",
      legende: "Cuisine et îlot central",
    },
    {
      image: pavillonThiaisEscalierAsset,
      alt: "Escalier courbe rénové dans le pavillon de Thiais",
      legende: "Escalier intérieur",
    },
    {
      image: pavillonThiaisFacadeAsset,
      alt: "Façade rénovée du pavillon de Thiais",
      legende: "Façade du pavillon",
    },
  ],
};

export const appartementHaussmannien = {
  titre: "Appartement haussmannien — rue Daru",
  resume:
    "Rénovation du séjour avec remise en état des décors, des murs et du parquet en point de Hongrie.",
  avant: haussmannienDaruAvantAsset,
  apres: haussmannienDaruApresAsset,
  galerie: [
    {
      image: daruParquetCouloirAsset,
      alt: "Couloir rénové avec parquet en point de Hongrie rue Daru",
      legende: "Parquet en point de Hongrie",
    },
    {
      image: daruCouloirRenoveAsset,
      alt: "Couloir haussmannien rénové avec moulures rue Daru",
      legende: "Moulures et finitions",
    },
  ],
};

export const constructionSoignolles = {
  titre: "Construction à Soignolles",
  resume:
    "Construction de logements, du gros œuvre à la livraison : maçonnerie, charpente, couverture, menuiseries et façades.",
  galerie: [
    {
      image: soignollesGrosOeuvreAsset,
      alt: "Maçonnerie et pose de la charpente du chantier de Soignolles",
      legende: "Gros œuvre et charpente",
    },
    {
      image: soignollesCharpenteAsset,
      alt: "Charpente en cours de pose sur le chantier de Soignolles",
      legende: "Pose de la charpente",
    },
    {
      image: soignollesCouvertureAsset,
      alt: "Couverture et menuiseries en cours sur le chantier de Soignolles",
      legende: "Couverture et menuiseries",
    },
    {
      image: soignollesApresAsset,
      alt: "Logements de Soignolles après réalisation des façades",
      legende: "Façades après travaux",
    },
  ],
};

export const renovationLocalProfessionnel = {
  titre: "Rénovation d'un local professionnel",
  resume:
    "Remise en état complète des espaces intérieurs : supports, peintures, sols carrelés, éclairage et accès sur cour.",
  galerie: [
    {
      image: localProPiecePierreAsset,
      alt: "Pièce rénovée avec mur en pierre apparent dans un local professionnel",
      legende: "Pierre apparente et finitions",
    },
    {
      image: localProCouloirAsset,
      alt: "Circulation rénovée et éclairée dans un local professionnel",
      legende: "Circulations intérieures",
    },
    {
      image: localProPlateauCarreleAsset,
      alt: "Plateau professionnel rénové avec sol carrelé et éclairage",
      legende: "Plateau principal",
    },
    {
      image: localProSalleCarreleeAsset,
      alt: "Salle annexe rénovée dans un local professionnel",
      legende: "Salle annexe",
    },
    {
      image: localProReserveAsset,
      alt: "Réserve carrelée remise en état dans un local professionnel",
      legende: "Réserve",
    },
  ],
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
    image: gendarmerieApresAsset,
    alt: "Gendarmerie nationale de Survilliers livrée après travaux",
    cible: "Entreprises",
    projet: "Gendarmerie de Survilliers (95)",
    resultat: "Construction et aménagement complets : gros œuvre, cellules sécurisées, façades et VRD.",
  },
  {
    image: cantineMontmirailApresAsset,
    alt: "Façade rénovée de la cantine de Montmirail",
    cible: "Entreprises",
    projet: "Cantine de Montmirail",
    resultat: "Reprise complète de la façade : supports, ouvertures et nouvelle finition.",
  },
  {
    image: pavillonThiaisFacadeAsset,
    alt: "Façade rénovée du pavillon de Thiais",
    cible: "Particuliers",
    projet: "Pavillon à Thiais",
    resultat: "Rénovation intérieure et façade, de la cuisine à l'escalier.",
  },
];

export const projetsParticuliers = [
  {
    slug: "salle-de-bain",
    titre: "Salle de bain",
    texte:
      "Dépose complète, reprise de la plomberie et de l'électricité, étanchéité, carrelage et pose des équipements.",
    inclus: ["Plomberie et évacuations", "Étanchéité et carrelage", "Électricité et ventilation", "Pose des sanitaires"],
  },
  {
    slug: "cuisine",
    titre: "Cuisine",
    texte:
      "De la conception à la réalisation : implantation, réseaux, revêtements, pose du mobilier et des plans de travail.",
    inclus: ["Plan d'implantation", "Réseaux eau / élec / gaz", "Revêtements sols et murs", "Pose mobilier et électroménager"],
  },
  {
    slug: "sejour",
    titre: "Séjour",
    texte:
      "Ouverture de mur porteur, isolation, plâtrerie, sols et peinture pour une pièce de vie plus lumineuse.",
    inclus: ["Étude structure si ouverture", "Isolation et plâtrerie", "Parquet ou carrelage", "Peinture et éclairage"],
  },
  {
    slug: "renovation-complete",
    titre: "Rénovation complète",
    texte:
      "Tous corps d'état coordonnés par un interlocuteur unique, du diagnostic à la réception de l'appartement ou de la maison.",
    inclus: ["Diagnostic et plans", "Tous corps d'état", "Planning et suivi hebdomadaire", "Réception et garanties"],
  },
];

export const projetsConstruction = [
  {
    slug: "construction-neuve",
    titre: "Construction neuve",
    texte: "Maison individuelle du terrassement à la remise des clés, avec suivi administratif.",
    inclus: ["Fondations et gros œuvre", "Charpente et couverture", "Second œuvre complet", "Raccordements et finitions"],
  },
  {
    slug: "extension",
    titre: "Extension",
    texte: "Agrandissement maçonné ou ossature, raccordé proprement à l'existant.",
    inclus: ["Dossier d'urbanisme", "Gros œuvre et toiture", "Isolation et menuiseries", "Raccord à l'existant"],
  },
  {
    slug: "terrasse",
    titre: "Terrasse",
    texte: "Terrasse bois, composite ou carrelée sur plots, avec évacuation des eaux.",
    inclus: ["Préparation du support", "Structure et plots", "Pose du platelage", "Garde-corps et finitions"],
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
  },
  {
    slug: "bureaux",
    titre: "Bureaux",
    sousTitre: "Plateaux tertiaires, sièges, espaces d'accueil",
    texte:
      "Aménagement et rénovation de plateaux : cloisonnement, faux plafonds, sols souples, électricité et CVC. Travaux possibles en horaires décalés pour ne pas interrompre l'activité.",
    points: ["Travaux en horaires décalés", "Coordination des corps d'état", "Livraison par zones"],
  },
  {
    slug: "locaux-professionnels",
    titre: "Locaux professionnels & commerces",
    sousTitre: "Boutiques, cabinets, locaux d'activité",
    texte:
      "Création et remise en état de locaux commerciaux : vitrines, agencement, mise aux normes accessibilité et sécurité, finitions soignées avant ouverture.",
    points: ["Mise aux normes ERP", "Délais courts avant ouverture", "Un seul interlocuteur"],
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

export const gendarmerieSurvilliers = {
  titre: "Gendarmerie de Survilliers",
  lieu: "Survilliers (95)",
  resume:
    "Construction et aménagement complet d'une brigade de gendarmerie : gros œuvre, second œuvre, cellules sécurisées, façades et VRD, livrés en site sensible avec un seul interlocuteur.",
  chiffres: [
    { valeur: "Tous", libelle: "Corps d'état coordonnés" },
    { valeur: "Neuf", libelle: "Construction et aménagement" },
    { valeur: "ERP", libelle: "Normes sécurité et accessibilité" },
    { valeur: "VRD", libelle: "Voiries, clôtures et espaces verts" },
  ],
  lots: [
    "Gros œuvre : fondations, murs en blocs, dalles et acrotères",
    "Charpente, étanchéité de toiture et zinguerie",
    "Menuiseries extérieures, serrurerie et clôtures barreaudées",
    "Cellules de garde à vue : portes blindées, oculus, verrouillage",
    "Second œuvre : cloisons, faux plafonds, sols, peintures",
    "Électricité, éclairage de sécurité, CVC et plomberie",
    "Façades enduites et signalétique Gendarmerie Nationale",
    "VRD : enrobés, bordures, marquage, plantations",
  ],
  galerie: [
    {
      image: gendarmerieGrosOeuvreAsset,
      alt: "Gros œuvre de la gendarmerie de Survilliers en cours d'élévation",
      legende: "Élévation du gros œuvre et réservations des ouvertures.",
    },
    {
      image: gendarmerieInterieurAsset,
      alt: "Couloir des cellules de garde à vue avec portes blindées",
      legende: "Cellules de garde à vue : portes blindées et verrouillage.",
    },
    {
      image: gendarmerieEntreeAsset,
      alt: "Entrée de la gendarmerie nationale de Survilliers terminée",
      legende: "Façade d'accueil, serrurerie et signalétique posées.",
    },
    {
      image: gendarmerieVrdAsset,
      alt: "Voiries et abords de la gendarmerie de Survilliers livrés",
      legende: "Abords livrés : enrobés, bordures, marquage et espaces verts.",
    },
  ],
};
