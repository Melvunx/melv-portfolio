const experiences = [
  {
    id: 1,
    job: "Technicien informatique",
    contract: "Stage",
    company: "Bice",
    sector: "Exploitation agricole",
    lieu: ["Martinique", "Sainte-Marie"],
    skills: [
      "Gestion de bases de données",
      "Gestion d'équipe",
      "infrastructure informatique",
      "Responsabilités"
    ],
    duration: {
      start: new Date([2022, 7, 1]),
      end: new Date([2022, 8, 31]),
    },
    tasks: [
      "Gestion des stocks de marchandises",
      "Gestion des présences des employées",
      "Vérifier les marchandises envoyées à la vente",
    ],
  },
  {
    id: 2,
    job: "Opérateur de ligne de conditionnement",
    contract: "Stage",
    company: "Fariba",
    sector: "Agroalimentation",
    lieu: ["Martinique", "Sainte-Marie"],
    skills: [
      "Gestion d'équipe",
      "Organisation du travail",
      "Esprit d'équipe",
      "Travailler sous pression",
    ],
    duration: {
      start: new Date([2018, 5, 10]),
      end: new Date([2018, 6, 10]),
    },
    tasks: [
      "Utilisation de machines pour emballer et sceller efficacement les produits agroalimentaires dans le respect des normes de sécurité et d'hygiène",
      "Application des étiquettes sur les emballages pour assurer le suivi des produits",
      "Coopération avec l'équipe de production",
    ],
  },
  {
    id: 3,
    job: "Ouvrier agricole",
    contract: "Emploie saisonnier",
    company: "Bice",
    sector: "Exploitation agricole",
    lieu: ["Martinique", "Sainte-Marie"],
    skills: [
      "Gestion d'équipe",
      "Organisation du travail",
      "Esprit d'équipe",
      "Rigueur",
    ],
    duration: {
      start: new Date([2019, 6, 30]),
      end: new Date([2019, 8, 31]),
    },
    tasks: [
      "Entretien des cultures de bananes",
      "Entretenir les équipements agricoles",
      "Participation active à l'expansion de l'exploitation par la plantation de nouveaux plants",
      "Assemblage des cartons d'emballage, optimisant les processus de préparation des produits",
      "Assister les ouvriers agricoles expérimentés",
      "Pesée et vérification des produits avant livraison",
      "Gestion de l'étiquetage et de l'emballage pour l'expédition",
    ],
  },
];

export default experiences;
