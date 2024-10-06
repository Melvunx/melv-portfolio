import { Calendar } from "../assets/class/Calendar";

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
      "Responsabilités",
    ],
    date: new Calendar("Date Stages Informatique", [2022, 7, 1], [2022, 8, 31]),
    tasks: [
      "Gestion des stocks de marchandises",
      "Gestion des présences des employés",
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
    date: new Calendar("Dates Stage Fariba", [2018, 5, 10], [2018, 6, 10]),
    tasks: [
      "Utilisation de machines pour emballer et sceller efficacement les produits agroalimentaires dans le respect des normes de sécurité et d'hygiène",
      "Application des étiquettes sur les emballages pour assurer le suivi des produits",
      "Coopération avec l'équipe de production",
    ],
  },
  {
    id: 3,
    job: "Ouvrier agricole",
    contract: "Emploi saisonnier",
    company: "Bice",
    sector: "Exploitation agricole",
    lieu: ["Martinique", "Sainte-Marie"],
    skills: [
      "Gestion d'équipe",
      "Organisation du travail",
      "Esprit d'équipe",
      "Rigueur",
    ],
    date: new Calendar("Dates Stage Bice", [2019, 6, 30], [2019, 8, 31]),
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
