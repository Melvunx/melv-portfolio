import { Calendar } from "../assets/class/Calendar";

const formations = [
  {
    id: 1,
    name: "Baccalauréat Général",
    level: "Bac",
    school: ["Lycée Nord Antlantique"],
    description: "Bac général avec mention assez bien.",
    domain: "Général",
    localisations: ["Martinique", "Sainte-Marie"],
    date: new Calendar("Dates Lycée", [2018, 9, 2], [2021, 6, 18]),
  },
  {
    id: 2,
    name: "Classe Préparatoire au grandes écoles",
    level: "Bac +2",
    school: ["Lycée Bellevue"],
    description: "Première année en MPSI, seconde année en MP.",
    domain: "Scientifique",
    localisations: ["Martinique", "Fort-de-France"],
    date: new Calendar("Dates Prépa", [2021, 9, 2], [2023, 4, 5]),
  },
  {
    id: 3,
    name: "L3 New",
    level: "Bac +3",
    school: ["Efrei", "Asia Pacific University"],
    description:
      "Premier semestre à l'Efrei et second semestre à l'Asia Pacific University",
    domain: "Informatique",
    localisations: ["Paris", "Kuala Lumpur"],
    date: new Calendar("Dates Efrei L3", [2023, 9, 2], [2024, 7, 5]),
  },
  {
    id: 4,
    name: "Développeur Concepteur D'application",
    level: "Bac +3/4",
    school: ["OpenClassroom"],
    description: "Formation développeur d'application JavaScript React",
    domain: "Informatique - Développement Web",
    localisations: ["Paris"],
    date: new Calendar("Dates OpenClassroom", [2024, 9, 5], [2025, 9, 2]),
  },
];

export default formations;
